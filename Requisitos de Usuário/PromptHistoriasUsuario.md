Prompt:
Estou especificando um aplicativo para gestão de biblioteca, com funcionalidades de pesquisa de livros, acompanhamento de progresso de leitura, e avaliação de livros. O app também permite que os administradores da biblioteca cadastrem e gerenciem os livros no acervo.

Os principais usuários são:


Leitor (pessoa que usa o app para buscar e ler livros),

Administrador da biblioteca (responsável pelo cadastro e gerenciamento dos livros),

Moderador (responsável por gerenciar interações inadequadas entre os leitores).

As principais funcionalidades incluem:


Pesquisa de livros por título, autor e disponibilidade;

Cadastro de livros no sistema;

Acompanhamento do progresso de leitura (exemplo: "onde parei a leitura");

Sistema de avaliações de livros (exemplo: nota de 1 a 5 estrelas);

Histórico de empréstimos e devoluções;

Denúncia de comportamentos inadequados entre os leitores.

Gere 4 histórias de usuário, com perfis de usuário distintos e ações variadas, seguindo o formato:


"Como [tipo de usuário], eu quero [funcionalidade], para que [benefício]."


Inclua critérios de aceitação detalhados para cada história.

Organize as histórias por perfil de usuário. 

Leitor

História de Usuário 1: Notificação de Disponibilidade de Livro

Como um Leitor, eu quero ser notificado quando um livro que está indisponível voltar para o acervo, para que eu não precise checar a disponibilidade manualmente.

Critérios de Aceitação:

    Critério 1: Na página de um livro indisponível, o usuário deve ter a opção de se inscrever para receber uma notificação de disponibilidade.

    Critério 2: O sistema deve enviar uma notificação por e-mail ou push ao usuário assim que o livro for devolvido e estiver novamente disponível para empréstimo.

    Critério 3: A notificação deve conter o título do livro e um link direto para a página do livro na plataforma.

Administrador da Biblioteca

História de Usuário 2: Gerenciamento de Multas por Atraso

Como um Administrador da Biblioteca, eu quero visualizar e gerenciar as multas de livros atrasados, para que a política de empréstimo seja cumprida de forma eficiente.

Critérios de Aceitação:

    Critério 1: O administrador deve ter acesso a um painel que liste todos os empréstimos com atraso.

    Critério 2: A lista de atrasos deve exibir o nome do leitor, o título do livro, a data de devolução prevista e a data de devolução real.

    Critério 3: O sistema deve calcular o valor da multa com base no tempo de atraso.

    Critério 4: O administrador deve ter a opção de marcar uma multa como "paga" ou "perdoada".

Moderador

História de Usuário 3: Aprovação de Resenhas de Livros

Como um Moderador, eu quero aprovar ou rejeitar resenhas de livros escritas pelos leitores, para garantir que o conteúdo seja relevante e apropriado para a comunidade.

Critérios de Aceitação:

    Critério 1: O moderador deve ter acesso a uma fila de resenhas pendentes de aprovação.

    Critério 2: Cada resenha deve mostrar o nome do leitor, o título do livro e o texto da resenha.

    Critério 3: O moderador deve ter as opções de "Aprovar" (publicar a resenha na página do livro) ou "Rejeitar" (remover a resenha do sistema e, opcionalmente, notificar o autor).

    Critério 4: Apenas resenhas aprovadas devem ser visíveis para outros usuários na página do livro.
