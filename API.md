# API de Cadastro e Login

## Cadastro de Usuário

- **URL:** `POST /cadastroUsuario`

### Parâmetros da Requisição:

- `nm_empresa`: Nome da empresa
- `nmr_cnpj`: CNPJ da empresa
- `ds_segmento`: Segmento da empresa
- `ds_senha`: Senha da empresa
- `ds_email`: E-mail da empresa
- `ds_telefone`: Número de telefone da empresa

### Exemplo de Requisição:

```json
{
  "nm_empresa": "Exemplo Empresa",
  "nmr_cnpj": "000000000000-00",
  "ds_segmento": "Segmento",
  "ds_senha": "senha123",
  "ds_email": "exemplo@email.com",
  "ds_telefone": "0000000000"
}

### Resposta de sucesso:
{
  "message": "Empresa cadastrada com sucesso!"
}
```

# Login

- **URL:**  `POST /login`

## Parâmetros da Requisição:
- `email`: E-mail da empresa
- `senha`: Senha da empresa

## Exemplo de Requisição:
```json
{
  "email": "exemplo@email.com",
  "senha": "senha123"
}

### Resposta de sucesso:
{
  "message": "Login bem-sucedido!",
  "user": {
    "ID_EMPRESA": 1,
    "NM_EMPRESA": "Exemplo Empresa",
    "DS_SEGMENTO": "Segmento"
  }
}
```

# Cadastro de Plástico

- **URL:** `POST /plasticos`

## Parâmetros da Requisição:
- `tipo_plastico`: Tipo de plástico
- `ds_descricao`: Descrição do produto
- `ds_quantidade`: Quantidade
- `ds_preco`: Preço
- `ds_reciclavel`: Reciclável

## Exemplo de Requisição:
```json
{
  "tipo_plastico": "PET",
  "ds_descricao": "Garrafa de refrigerante",
  "ds_quantidade": "100",
  "ds_preco": "2.50",
  "ds_reciclavel": "Sim"
}


### Resposta de sucesso:
{
  "message": "Plástico cadastrado com sucesso!"
}
```

# Lista de Plásticos

- **URL:** `GET /listaPlasticos`

## Resposta de Sucesso:
```json
[
  {
    "tipo_plastico": "PET",
    "ds_descricao": "Garrafa de refrigerante",
    "ds_preco": "2.50"
  },
  {
    "tipo_plastico": "PP",
    "ds_descricao": "Tampa de garrafa",
    "ds_preco": "1.20"
  }
]
```


# Pagamento
- **URL:** `POST /pagamento`

## Parâmetros da Requisição:
- `nmr_cartao`: Número do cartão
- `nm_cartao`: Nome no cartão
- `data_validade`: Data de validade
- `ds_cvv`: Código CVV
- `ds_total`: Total a pagar

## Exemplo de Requisição:
```json
{
  "nmr_cartao": "0000 0000 0000 0000",
  "nm_cartao": "Nome no Cartão",
  "data_validade": "12/24",
  "ds_cvv": "123",
  "ds_total": "25.00"
}

Resposta de sucesso: {
  "message": "Pagamento processado com sucesso"
}

Resposta de erro: {
"message": "Erro ao processar pagamento. Por favor, tente novamente mais tarde."
}