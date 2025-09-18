# Histórias de Usuário

A Tabela a seguir contém:

* **As Histórias de Usuários do projeto Biblio** - Descrevem as funcionalidades do sistema Biblio sob a perspectiva de quem o utiliza. As Histórias de Usuário são uma forma de descrever os requisitos do ponto de vista do usuário. Elas seguem o formato de descrição em 1ª pessoa: "Como um [tipo de usuário], eu quero [funcionalidade], para que [benefício]".

* **Critérios de Aceitação** - São as condições que devem ser atendidas para que uma história de usuário seja considerada concluída. É uma forma de testar se a funcionalidade foi implementada corretamente.

* **Prioridade** - Indica a importância da história de usuário para o projeto. Classificamos a escala como Alta, Média e Baixa.

* **RF/RNF Relacionado** - Liga a história de usuário aos requisitos funcionais e não funcionais documentadas na pasta Requisitos do Usuário do repositório.

* **Story Points** - É uma estimativa de esforço para implementar a história de usuário. Não se baseia em horas, mas sim na complexidade da tarefa. Usamos a sequência de Fibonacci (1, 2, 3, 5, 8, 13...) para dar as estimativas.

---

| ID | História de Usuário | Critérios de aceitação | Prioridade | RF/RNF relacionado | Story Points |
| :--- | :--- | :--- | :--- | :--- | :--- |
| HU01 | Como um **estudante do IFPR**, eu quero **me cadastrar na plataforma**, para que eu possa **ter acesso às funcionalidades de gerenciamento de livros**. | 1. O sistema deve validar o formato de e-mail.<br>2. A senha deve ter no mínimo 6 caracteres.<br>3. O sistema deve exibir uma mensagem de sucesso após o cadastro. | Alta | RF01, RNF06 | 8 |
| HU02 | Como um **estudante do IFPR**, eu quero **pesquisar um livro**, para que eu possa **encontrar uma obra de meu interesse rapidamente**. | 1. A busca deve funcionar por título e autor.<br>2. A página de resultados deve exibir capa, título e autor dos livros.<br>3. O sistema deve retornar os resultados em menos de 2 segundos. | Alta | RF06, RNF02 | 13 |
| HU03 | Como um **estudante do IFPR**, eu quero **saber se um livro está disponível na biblioteca**, para que eu possa **evitar ir até lá sem necessidade**. | 1. A página de pesquisa e de detalhes do livro deve exibir a informação de disponibilidade.<br>2. A informação deve ser clara (Ex: "Disponível" ou "Indisponível"). | Média | RF07 | 5 |
| HU04 | Como um **leitor assíduo**, eu quero **registrar a página em que parei**, para que eu possa **continuar a leitura de onde parei sem me perder**. | 1. A tela de progresso deve permitir a inserção da página atual.<br>2. O sistema deve calcular a porcentagem de progresso da leitura.<br>3. O progresso deve ser salvo e exibido na página inicial. | Média | RF09 | 8 |
| HU05 | Como um **leitor**, eu quero **dar uma nota para um livro que li**, para que eu possa **ajudar outros usuários a escolherem suas leituras**. | 1. O sistema deve apresentar a opção de avaliação em uma escala de 1 a 5 estrelas.<br>2. A nota deve ser salva e exibida na página do livro. | Baixa | RF11 | 3 |
| HU06 | Como um **administrador da biblioteca**, eu quero **adicionar um novo livro ao sistema**, para que **o acervo online esteja sempre atualizado**. | 1. O formulário deve ter campos para Título, Autor, Editora, Gênero, etc.<br>2. Todos os campos obrigatórios devem ser preenchidos para o cadastro ser concluído.<br>3. Após o cadastro, o livro deve aparecer nos resultados de pesquisa. | Alta | RF13, RNF08 | 5 |

