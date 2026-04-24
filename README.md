# Sistema de Gerenciamento de Entregas (JavaScript + Supabase)

## Descrição

Este projeto implementa um conjunto de funções em JavaScript para gerenciar entregas utilizando a API REST do Supabase. Ele permite criar, consultar, atualizar e excluir registros de entregas, além de realizar a associação entre motoristas e veículos armazenados no banco de dados.

## Tecnologias Utilizadas

* JavaScript (ES6+)
* Supabase (PostgreSQL + REST API)
* Fetch API

## Estrutura do Código

O código está organizado em funções responsáveis por operações específicas:

* `createEntrega`: cria uma nova entrega
* `readEntregas`: consulta entregas (com ou sem filtro por status)
* `updateStatus`: atualiza o status de uma entrega
* `deleteEntrega`: remove uma entrega

## Configuração

Antes de executar o código, configure as variáveis de conexão com o Supabase:

```javascript
const SUPABASE_URL = 'https://SEU_PROJETO.supabase.co';
const SUPABASE_KEY = 'SUA_CHAVE_PUBLICA';
```

Endpoints utilizados:

```javascript
const MOTORISTAS = `${SUPABASE_URL}/rest/v1/motoristas`;
const VEICULOS = `${SUPABASE_URL}/rest/v1/veiculos`;
const ENTREGAS = `${SUPABASE_URL}/rest/v1/entregas`;
```

Headers padrão:

```javascript
const HEADERS = {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};
```

## Funcionalidades

### Criar Entrega

Cria uma nova entrega buscando previamente o ID do motorista e do veículo.

```javascript
createEntrega(motorista, veiculo, status, destino);
```

Parâmetros:

* `motorista`: nome do motorista
* `veiculo`: modelo do veículo
* `status`: status da entrega
* `destino`: endereço de destino

### Listar Entregas

Lista todas as entregas ou filtra por status.

```javascript
readEntregas(); // lista todas
readEntregas('Pendente'); // filtra por status
```

### Atualizar Status

Atualiza o status de uma entrega existente.

```javascript
updateStatus(idEntrega, status);
```

Parâmetros:

* `idEntrega`: ID da entrega
* `status`: novo status

### Deletar Entrega

Remove uma entrega com base no ID.

```javascript
deleteEntrega(idEntrega);
```

Parâmetros:

* `idEntrega`: ID da entrega

## Requisitos do Banco de Dados

O banco deve conter as seguintes tabelas:

* `motoristas` (id, nome)
* `veiculos` (id, modelo)
* `entregas` (id, motorista_id, veiculo_id, status, destino)

As tabelas devem possuir relacionamentos via chave estrangeira:

* `entregas.motorista_id` → `motoristas.id`
* `entregas.veiculo_id` → `veiculos.id`

## Observações

* Certifique-se de que o Row Level Security (RLS) está configurado corretamente no Supabase para permitir operações de leitura e escrita.
* A chave utilizada no projeto é pública (anon key). Não utilize chaves sensíveis no frontend.
* O código utiliza `fetch`, portanto deve ser executado em ambiente que suporte essa API (navegadores modernos ou Node.js com suporte adequado).

## Licença

Este projeto é livre para uso e modificação.
