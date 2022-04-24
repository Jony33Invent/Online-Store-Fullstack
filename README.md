# Project Report
## Book Store
Made by:
Jônatas Alves Lopes - N°: 11796552
Pedro Raymundi - N°: 


# Requirements
-   O sistema tem dois tipos de usuários: clientes e administradores
	-  Administradores podem gerenciar contas de outros administradores e de clientes e gerenciar o cadastro (CRUD) de livros. O sistema tem uma conta inicial de administrador com o username e senha "admin".
	- Clientes são os usuários que tem acesso ao sistema para comprar os livros.
-   O administrador possui os dados: name, id, phone, email.
-   Os dados do cliente são: name, id, address, phone, email
-   Os dados de um livro são: name, id, photo, author, description, price, quantity_in_stock, quantity_sold.
- A loja consiste em uma livraria virtual, com foco na venda de livros. 
- Vendendo livros: Os livros são selecionados, é escolhida uma quantidade, e eles são incluídos no carrinho. Livros são comprados usando um número de cartão de crédito (qualquer numero é aceito pelo sistema). A quantidade de um produto vendido é subtraída da quantidade no estoque (quantity_in_stock) e adicionada na quantidade vendida (quantity_sold). Carrinhos só são esvaziados com o pagamento ou pelos clientes. 

# Project Description
Describe how your project implements the functionality in the requirements. Diagrams can help a lot here.

# Comments About the Code
Any comment you may want to add to help understand your code. This is good programming practice.

# Test Plan
Text describing the tests that will be performed. If an automatic test tool/framework is used (ex: [Selenium](https://www.selenium.dev/), [JUnit](https://junit.org/junit5/), [Spock](http://spockframework.org/)), the code for the tests can be used.

# Test Results
Text describing the test results. If an automatic test tool/framework is used, its output can be used.

# Build Procedures
A step-by-step guide to run your code. You should start telling how to install whatever software you need, then how to download/build your program, and finally how to set up the environment to run it. Imagine that someone installing will just follow these commands (nothing more).

# Problems
List any major problems you had.
    
# Comments
Any comments you wish to add.