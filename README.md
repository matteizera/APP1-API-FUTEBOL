# APP1-API-FUTEBOL

- Cadastro de times – informando nome, cidade e estado do time. Série que o time
atua no campeonato nacional (permitir séries A, B, C ou vazio para não atua no
campeonato). Um json array (titles) guardando a quantidade de títulos do time
{estadual, nacional e internacional}. A folha de pagamento do time. Apenas o campo
série do campeonato brasileiro pode ser vazio.
- Listagem de todos os times cadastrados (retornando todos os dados)
- Pesquisa de time por nome (retornando todos os dados dos times com aqueles
caracteres fornecidos)
- Edição de um time – permitindo atualizar qualquer um dos campos
- Remoção de um time – permitindo deletar um time fornecido a partir do ID.

## Endpoints Criados

| Endpoint                 | Método | Ação                                        |
|:-------------------------|:------:|:--------------------------------------------|
| `/teams`                 | GET    | Listar todos os times                       |
| `/teams?search=[search]` | GET    | Listar times que atendem a busca `[search]` |
| `/teams/:id`             | GET    | Retornar um único time com ID `:id`         |
| `/teams`                 | POST   | Salvar um novo time                         |
| `/teams/:id`             | PUT    | Atualizar dados de time com ID `:id`        |
| `/teams/:id`             | DELETE | Excluir o time com ID `:id`                 |
