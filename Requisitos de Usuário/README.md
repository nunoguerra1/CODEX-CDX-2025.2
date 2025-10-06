# Requisitos de Usuário - Projeto Sistema Biblio

Os requisitos de usuário foram levantados por meio de um formulário aplicado a estudantes da UTFPR.  As seguintes funcionalidades são consideradas importantes pelo público-alvo:

* **Registro de Progresso:** A maioria dos usuários (cerca de 83,9% entre 16 e 25 anos) deseja registrar a página em que parou de ler um livro.
* **Disponibilidade na Biblioteca:** A verificação da disponibilidade do livro na biblioteca do UTFPR é uma funcionalidade com alto índice de aprovação.
* **Controle de Livros:** A maioria dos estudantes não utiliza ferramentas para controlar seus livros, mas indicou grande adoção para um sistema que possibilite o controle de livros já lidos e que se pretende ler.
* **Sistema de Avaliação:** Os usuários demonstraram interesse em avaliar os livros que leem, o que ajuda a melhorar as recomendações.
* **Recomendações Personalizadas:** Os usuários gostariam de ter recomendações de livros específicas, baseadas em suas leituras.


---


# Requisitos Funcionais

A seguir, apresentamos uma lista de Requisitos Funcionais (RF) do sistema Biblio, detalhando as funcionalidades que o software deve executar.

### Módulo de Usuários

* **RF01**: O sistema deve permitir que o usuário realize o cadastro, inserindo nome, e-mail e senha.
* **RF02**: O sistema deve permitir que o usuário faça login em sua conta.
* **RF03**: O sistema deve permitir que o usuário altere suas informações de perfil (nome, e-mail, senha).
* **RF04**: O sistema deve permitir que o usuário faça logout de sua conta.
* **RF05**: O sistema deve permitir que o administrador gerencie os usuários do sistema, podendo visualizar, alterar, excluir e adicionar.

### Módulo de Livros

* **RF06**: O sistema deve permitir que o usuário pesquise livros por título ou autor.
* **RF07**: O sistema deve exibir os resultados da pesquisa com capa, título, autor, editora e disponibilidade na biblioteca.
* **RF08**: O sistema deve permitir a visualização de uma prévia do livro (se disponível via Google Books API).
* **RF09**: O sistema deve permitir que o usuário atualize o progresso de leitura (ex: registrando a página em que parou).
* **RF10**: O sistema deve permitir que o usuário marque uma leitura como finalizada.
* **RF11**: O sistema deve permitir que o usuário dê uma nota para o livro em uma escala de 1 a 5 estrelas.
* **RF12**: O sistema deve permitir que o usuário remova um livro da sua lista de livros lidos.
* **RF13**: O sistema deve permitir que o administrador cadastre um novo livro, preenchendo todos os campos necessários.
* **RF14**: O sistema deve permitir que o administrador altere e exclua informações de um livro.

### Módulo de Estantes

* **RF15**: O sistema deve permitir que o usuário crie estantes personalizadas (listas) para organizar seus livros.
* **RF16**: O sistema deve permitir que o usuário adicione e remova livros de suas estantes.


---


# Requisitos Não Funcionais

A seguir, apresentamos a lista de Requisitos Não Funcionais (RNF) do sistema Biblio, que definem as qualidades e restrições do software.
Os RNF descrevem como o sistema deve se comportar (desempenho, usabilidade, segurança, etc.). Como o sistema deve se comportar, ou seja, resultados mensuráveis.

### Desempenho

* **RNF01**: O tempo de carregamento das páginas não deve exceder 3 segundos.
* **RNF02**: A pesquisa de livros deve retornar os resultados em menos de 2 segundos.

### Usabilidade e Interface

* **RNF03**: O sistema deve ser de fácil utilização, com uma interface minimalista e intuitiva.
* **RNF04**: O design da plataforma deve ser responsivo, funcionando em diferentes dispositivos (computador, tablet, celular).
* **RNF05**: As mensagens de erro e sucesso devem ser claras e informativas para o usuário.

### Segurança

* **RNF06**: As senhas dos usuários devem ser armazenadas de forma criptografada no banco de dados.
* **RNF07**: O sistema deve proteger os dados pessoais do usuário contra acesso não autorizado.
* **RNF08**: O sistema deve ter níveis de acesso para usuários comuns e administradores.

### Compatibilidade

* **RNF09**: O sistema deve ser compatível com os principais navegadores web (Chrome, Firefox, Edge, Safari).


---


# Histórias de Usuário

A Tabela a seguir contém:

* **As Histórias de Usuários do projeto Biblio** - Descrevem as funcionalidades do sistema Biblio sob a perspectiva de quem o utiliza. As Histórias de Usuário são uma forma de descrever os requisitos do ponto de vista do usuário. Elas seguem o formato de descrição em 1ª pessoa: "Como um [tipo de usuário], eu quero [funcionalidade], para que [benefício]".

* **Critérios de Aceitação** - São as condições que devem ser atendidas para que uma história de usuário seja considerada concluída. É uma forma de testar se a funcionalidade foi implementada corretamente.

* **Prioridade** - Indica a importância da história de usuário para o projeto. Classificamos a escala como Alta, Média e Baixa.

* **RF/RNF Relacionado** - Liga a história de usuário aos requisitos funcionais e não funcionais documentadas na pasta Requisitos do Usuário do repositório.

* **Story Points** - É uma estimativa de esforço para implementar a história de usuário. Não se baseia em horas, mas sim na complexidade da tarefa. Usamos a sequência de Fibonacci (1, 2, 3, 5, 8, 13...) para dar as estimativas.


| ID | História de Usuário | Critérios de aceitação | Prioridade | RF/RNF relacionado (link para visualizar) | Story Points |
| :--- | :--- | :--- | :--- | :--- | :--- |
| HU01 | Como um **estudante da UTFPR**, eu quero **me cadastrar na plataforma**, para que eu possa **ter acesso às funcionalidades de gerenciamento de livros**. | 1. O sistema deve validar o formato de e-mail.<br>2. A senha deve ter no mínimo 6 caracteres.<br>3. O sistema deve exibir uma mensagem de sucesso após o cadastro. | Alta | [RF01](RF.md#RF01), [RNF06](RNF.md#RNF06) | 8 |
| HU02 | Como um **estudante da UTFPR**, eu quero **pesquisar um livro**, para que eu possa **encontrar uma obra de meu interesse rapidamente**. | 1. A busca deve funcionar por título e autor.<br>2. A página de resultados deve exibir capa, título e autor dos livros.<br>3. O sistema deve retornar os resultados em menos de 2 segundos. | Alta | [RF06](RF.md#RF06), [RNF02](RNF.md#RNF02) | 13 |
| HU03 | Como um **estudante da UTFPR**, eu quero **saber se um livro está disponível na biblioteca**, para que eu possa **evitar ir até lá sem necessidade**. | 1. A página de pesquisa e de detalhes do livro deve exibir a informação de disponibilidade.<br>2. A informação deve ser clara (Ex: "Disponível" ou "Indisponível"). | Média | [RF07](RF.md#RF07) | 5 |
| HU04 | Como um **leitor assíduo**, eu quero **registrar a página em que parei**, para que eu possa **continuar a leitura de onde parei sem me perder**. | 1. A tela de progresso deve permitir a inserção da página atual.<br>2. O sistema deve calcular a porcentagem de progresso da leitura.<br>3. O progresso deve ser salvo e exibido na página inicial. | Média | [RF09](RF.md#RF09) | 8 |
| HU05 | Como um **leitor**, eu quero **dar uma nota para um livro que li**, para que eu possa **ajudar outros usuários a escolherem suas leituras**. | 1. O sistema deve apresentar a opção de avaliação em uma escala de 1 a 5 estrelas.<br>2. A nota deve ser salva e exibida na página do livro. | Baixa | [RF11](RF.md#RF11) | 3 |
| HU06 | Como um **administrador da biblioteca**, eu quero **adicionar um novo livro ao sistema**, para que **o acervo online esteja sempre atualizado**. | 1. O formulário deve ter campos para Título, Autor, Editora, Gênero, etc.<br>2. Todos os campos obrigatórios devem ser preenchidos para o cadastro ser concluído.<br>3. Após o cadastro, o livro deve aparecer nos resultados de pesquisa. | Alta | [RF13](RF.md#RF13), [RNF08](RNF.md#RNF08) | 5 |


---

# Inspeção dos Requisitos do nosso Projeto - Realizado pelo time ScrumMasters

Nesta seção, O grupo revisor ScrumMasters analisou os Requisitos Funcionais, Não Funcionais e Histórias de Usuários aplicando o checklist para identificação das classes de
problemas/inconsistências. Inspeção preenchida pelo time revisor pode ser visualizada no documento “Inspeção dos Requisitos_Defeitos Encontrados.doc”. Link abaixo:

* [Link: Clique aqui para visualizar o documento]( )

---

