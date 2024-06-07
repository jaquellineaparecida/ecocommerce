const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const oracledb = require('oracledb');
const axios = require('axios');

const app = express();
const port = 3030;

app.use(cors({
  origin: '*'
}));
app.use(express.json());

async function connect() {
  return await oracledb.getConnection({
    user: 'rm99553',
    password: '020904',
    connectString: 'oracle.fiap.com.br/orcl'
  });
}

// Criando o ednpoint para cadastrar uma empresa
app.post('/cadastroUsuario', async (req, res) => {
    const { nm_empresa, nmr_cnpj, ds_segmento, ds_senha, ds_email, ds_telefone } = req.body;
    let connection;

    try {
        connection = await connect();
        const result = await connection.execute(
          `INSERT INTO TB_EMPRESA (ID_EMPRESA, NM_EMPRESA, NMR_CNPJ , DS_SEGMENTO, DS_SENHA, DS_EMAIL, DS_TELEFONE) 
           VALUES (SEQ_EMPRESA.NEXTVAL, :nm_empresa, :nmr_cnpj, :ds_segmento, :ds_senha, :ds_email, :ds_telefone)`,
          { nm_empresa, nmr_cnpj, ds_segmento, ds_senha, ds_email, ds_telefone },
          { autoCommit: true }
        );
    
        res.status(201).json({ message: 'Empresa cadastrada com sucesso!' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao cadastrar empresa' });
      } finally {
        if (connection) {
          try {
            await connection.close();
          } catch (err) {
            console.error(err);
          }
        }
      }
    });

// Criando o endpoint de login
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    let connection;
  
    try {
      connection = await connect();
      const result = await connection.execute(
        `SELECT ID_EMPRESA, NM_EMPRESA, DS_SEGMENTO
         FROM TB_EMPRESA 
         WHERE DS_EMAIL = :email AND DS_SENHA = :senha`,
        { email, senha }
      );
  
      if (result.rows.length > 0) {
        const user = result.rows[0];
        res.status(200).json({ message: 'Login bem-sucedido!', user });
      } else {
        res.status(401).json({ message: 'Email ou senha incorretos' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao realizar login' });
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  });

// Rota para cadastrar um novo produto (plástico)
app.post('/plasticos', async (req, res) => {
  const { tipo_plastico, ds_descricao, ds_quantidade, ds_preco, ds_reciclavel } = req.body;

  try {
    const connection = await connect();
    const result = await connection.execute(
      `INSERT INTO tb_plastico (id_plastico, tipo_plastico, ds_descricao, ds_quantidade, ds_preco, ds_reciclavel) 
       VALUES (SEQ_PLASTICO.NEXTVAL, :tipo_plastico, :ds_descricao, :ds_quantidade, :ds_preco, :ds_reciclavel )`,
      { tipo_plastico, ds_descricao, ds_quantidade, ds_preco, ds_reciclavel },
      { autoCommit: true }
    );

    res.status(201).json({ message: 'Plástico cadastrado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao cadastrar plástico' });
  }
});

// Listando todos os plasticos
app.get('/listaPlasticos', async (req, res) => {
  try {
    const connection = await connect();
    const result = await connection.execute(
      `SELECT tipo_plastico, ds_descricao, ds_preco FROM tb_plastico`
    );
    await connection.close();

    // Enviando os dados como JSON
    res.send(result.rows.map(row => ({
      tipo_plastico: row[0],
      ds_descricao: row[1],
      ds_preco: row[2]
    })));
  } catch (error) {
    console.error('Erro ao buscar os plásticos:', error);
    res.status(500).send('Erro ao buscar os plásticos');
  }
});

// Rota para processar o pagamento
app.post('/pagamento', async (req, res) => {
  try {
    const { nmr_cartao, nm_cartao, data_validade, ds_cvv, ds_total } = req.body;

    const connection = await connect();
    
    // Gere o próximo ID de pagamento usando a sequência
    const result = await connection.execute(
      `INSERT INTO tb_pagamento (id_pagamento, nmr_cartao, nm_cartao, data_validade, ds_cvv, ds_total) 
       VALUES (seq_pagamento_e.nextval, :nmr_cartao, :nm_cartao, :data_validade, :ds_cvv, :ds_total)`,
      {
        nmr_cartao,
        nm_cartao,
        data_validade,
        ds_cvv,
        ds_total,
      },
      { autoCommit: true }
    );

    await connection.close();

    res.status(200).send("Pagamento processado com sucesso!");
  } catch (error) {
    console.error("Erro ao processar pagamento:", error);
    res.status(500).send("Erro ao processar pagamento. Por favor, tente novamente mais tarde.");
  }
});


app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});