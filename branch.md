# Integração Contínua e Fluxo de Trabalho Git

## O que é Integração Contínua (CI)?
A Integração Contínua é uma prática de desenvolvimento onde os desenvolvedores integram o código em um repositório centralizado de forma frequente, geralmente várias vezes ao dia. O objetivo é detectar e resolver conflitos e erros de integração rapidamente.

## Qual é o papel das branches (ramificações) nesse processo?
As branches isolam o trabalho de um desenvolvedor, permitindo que novas funcionalidades ou correções de bugs sejam desenvolvidas sem afetar o código principal (branch 'main' ou 'master') do projeto. Isso garante que a integração só ocorra após a conclusão e validação do novo código, mantendo a branch principal sempre estável.

## Por que o Pull Request (PR) é importante?
O Pull Request é o mecanismo central do fluxo de trabalho Git que formaliza o pedido para integrar o código de uma branch secundária (por exemplo, 'Atividade 09') na branch principal. O PR é crucial porque:
1.  **Revisão de Código:** Permite que outros membros do time (ou a professora) revisem o código antes do merge.
2.  **Teste de CI:** É o ponto onde testes automatizados de CI são executados para garantir que o novo código não quebre o sistema.
3.  **Registro:** Mantém um registro claro de todas as alterações feitas e aprovadas no código principal.