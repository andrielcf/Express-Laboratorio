O que é o Express e suas principais funcionalidades 

Express é um framework para Node.js que facilita o desenvolvimento de aplicações web e APIs, ele fornece uma série de funcionalidades úteis que ajudam a estruturar o código e a gerenciar rotas, middlewares e a manipulação de requisições e respostas. 

 

Principais funcionalidades do Express: 

Gerenciamento de rotas: Criação e organização de rotas HTTP de forma simples. 

Middleware: Capacidade de adicionar funções que podem modificar a requisição e resposta. 

Gestão de erros: Ferramentas integradas para tratar erros. 

Integração com bancos de dados: Facilita a conexão e interação com bancos de dados, como MongoDB, MySQL, etc. 

 

Diferença entre Node.js e o uso de Express: 

NODE.js: 

Baixo nível: Para criar um servidor HTTP, o desenvolvedor precisa lidar diretamente com o módulo http, o que exige mais código e complexidade para gerenciar rotas e requisições. 

Sem abstrações: Não possui abstrações ou funcionalidades integradas para gerenciar rotas ou middlewares, desenvolvedor crie essas funcionalidades manualmente. 

 

EXPRESS: 

Alta abstração: O Express oferece abstração que simplifica a criação de servidores e rotas. 

Middleware: Permite a adição de middlewares de forma fácil. 

Roteamento: O roteamento é muito mais simples e intuitivo, permitindo que os desenvolvedores se concentrem na lógica da aplicação. 

 

Como criar rotas básicas com Express 

Para criar rotas básicas com Express: 

Utilize dentro do diretório que você que criar o laboratório:  

npm install express 

Criação de um servidor: 

 

Conceitos de middlewares no Express 

Middleware é uma função que tem acesso ao objeto de requisição (req), do objeto de resposta (res) que e a próxima função de middleware na parte de requisições, eles podem ser usados para realizar uma série de tarefas, como:  

Manipulação de dados de requisição. 

Autenticação. 

Log de requisições. 

Tratamento de erros. 

 

Express implementando Proxy: 

 

Utilize dentro do diretório que você que criar o laboratório:  

npm install express request 

 

Proxy em React: 

 

Dentro do diretório que você que criar o laboratório:  

Dentro de package.json: 

Adicione “proxy”: http://localhost:3000 ou qualquer outra porta de sua escolha.