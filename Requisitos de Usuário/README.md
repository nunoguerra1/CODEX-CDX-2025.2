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

A seguir, algumas histórias de usuário que descrevem as funcionalidades do sistema Biblio sob a perspectiva de quem o utiliza.
As Histórias de Usuário são uma forma de descrever os requisitos do ponto de vista do usuário. Elas seguem o formato de descrição em 1ª pessoa: "Como um [tipo de usuário], eu quero [funcionalidade], para que [benefício]".

* **HU01**: Como um **estudante da UTFPR**, eu quero **me cadastrar na plataforma**, para que eu possa **ter acesso às funcionalidades de gerenciamento de livros**.
* **HU02**: Como um **estudante da UTFPR**, eu quero **pesquisar um livro**, para que eu possa **encontrar uma obra de meu interesse rapidamente**.
* **HU03**: Como um **estudante da UTFPR**, eu quero **saber se um livro está disponível na biblioteca**, para que eu possa **evitar ir até lá sem necessidade**.
* **HU04**: Como um **leitor assíduo**, eu quero **registrar a página em que parei**, para que eu possa **continuar a leitura de onde parei sem me perder**.
* **HU05**: Como um **leitor**, eu quero **dar uma nota para um livro que li**, para que eu possa **ajudar outros usuários a escolherem suas leituras**.
* **HU06**: Como um **administrador da biblioteca**, eu quero **adicionar um novo livro ao sistema**, para que **o acervo online esteja sempre atualizado**.


---

