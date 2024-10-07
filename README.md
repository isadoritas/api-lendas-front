# Lendas Urbanas API e Site de Cadastro

## Sobre a Aplicação

Esta aplicação tem como objetivo criar e consumir uma **API de Lendas Urbanas**, permitindo que os usuários explorem e cadastrem diferentes histórias de lendas através de um site de cadastro.

### Funcionalidades

1. **API de Lendas Urbanas**: 
   - A API permite **listar**, **criar** e **remover** lendas urbanas.
   - Cada lenda possui detalhes como **nome**, **descrição**, **localidade** e **origem**.

2. **Site de Cadastro**:
   - O site consome a API para exibir uma lista de lendas cadastradas.
   - Os usuários podem criar novas lendas preenchendo um formulário simples.
   - Implementação de **CRUD** (Create, Read, Update, Delete) para gerenciamento de lendas urbanas diretamente pela interface.

### Tecnologias Utilizadas

- **Backend**: JavaScript criação da API.
- **Frontend**: HTML, CSS, JavaScript para o site de cadastro.
- **Banco de Dados**: Mongodb. Utilizado para armazenar as lendas urbanas com todas as suas informações.
  
### Como Usar

1. **Clone o repositório front**:
   ```bash
   git clone https://github.com/isadoritas/api-lendas-front
   cd api-lendas-front
   npm run dev

2. **Clone o repositório back**:
   ```bash
   git clone https://github.com/isadoritas/api-lendas
   cd api-lendas
   node --watch server
   entre na porta onde o sevidor está sendo rodado (localhost)

