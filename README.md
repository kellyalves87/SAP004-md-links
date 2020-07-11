# Markdown Links

Markdown é um sistema de formatação aberto que torna a escrita e a leitura mais simples.

# Sobre o projeto

A proposta do projeto é construir uma ferramenta de linha de comando (CLI) e criar uma biblioteca em Javascript que seja executado com Node.js.

# Instalação

`npm install -g https://github.com/kellyalves87/SAP004-md-links`

# CLI (Interface de Linha de Comando)

O executável da aplicação deve ser da seguinte maneira, através do terminal:

`md-links <pasta ou arquivo desejado>`

Com este comando, já é possível listar seus arquivos Markdown como no exemplo abaixo:

**~/repo/SAP004-md-links$ md-links LINKS.md**

- /home/kelly/repo/SAP004-md-links/LINKS.md http://www.adultswim.com/streams **_Adult Swin_**

- /home/kelly/repo/SAP004-md-links/LINKS.md https://www.netflix.com/br/n/3SPHBNZT-1 **_Netflix_**


É possível verificar também a validação do módulo passando a opção `--validate`. Esta opção faz uma requisição HTTP para verificar se o link funciona ou não. Exemplo:


**~/repo/SAP004-md-links$ md-links LINKS.md --validate**

- /home/kelly/repo/SAP004-md-links/LINKS.md https://www.netflix.com/br/n/3SPHBNZT-1 **OK** **200** **_Netflix_**
- /home/kelly/repo/SAP004-md-links/LINKS.md http://www.adultswim.com/streams **OK** **200** **_Adult Swin_**
- /home/kelly/repo/SAP004-md-links/LINKS.md https://rickandmortyyyyyapi.com/api/episode/1 **ENOTFOUND** **Fail** **_Episódio-12_**
- /home/kelly/repo/SAP004-md-links/LINKS.md https://rickkkkkandmortyapi.com/api/episode/1 **ENOTFOUND** **Fail** **_Episódio-13_**


Temos como verificar também a estatística do módulo usando a opção `--stats`. Esta opção retorna um texto com estatísticas básicas sobre os links como no exemplo abaixo:

**~/repo/SAP004-md-links$ md-links LINKS.md --stats**

- **Unique**: 4 **All**: 4

E por último, se juntarmos as duas opções `--validate` e `--stats`, podemos obter estatísticas que necessitem dos resultados da validação. Exemplo:

**~/repo/SAP004-md-links$ md-links LINKS.md --validate --stats**

- **Unique**: 4 **All**: 4 **Broken**: 2

# Tecnologias e Libs utilizadas neste projeto

- **Node.js**
- **Chalk**
- **Axios**
- **Vanilla Javascript**

# Autor

[**Kelly Alves**](https://github.com/kellyalves87)