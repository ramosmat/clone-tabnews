import { Html } from "next/document";
import { Head } from "next/head";

function Home() {
  return (
    <html>
      <head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>clone-tabnews</title>
      </head>
      <body>
        <h1>Oi meu amor!</h1>
        <p>
          Este é o primeiro desafio do curso.dev, com o objetivo de criar uma
          frase para uma pessoa e fazer a diferença no dia dela. E não podia ter
          outra pessoa ne?
        </p>
        <p>
          Quero te dizer que mal posso esperar para termos uma vida juntinhos no
          nosso cantinho, onde quer que este cantinho seja. 👀 🚐 ⛺ 🌍
        </p>
        <p>Te amo! 💖</p>
      </body>
    </html>
  );
}

export default Home;
