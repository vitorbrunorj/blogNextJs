export default function Contato(): JSX.Element {
  return (
    <>
      <main>
        <h1>Contato</h1>
        <p>
          Por favor, preencha o formulário abaixo para entrar em contato
          conosco:
        </p>
        <form className="container mx-auto p-20  bg-red-400 text-align-content-center ">
          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Mensagem:
            <textarea name="message"></textarea>
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </main>
    </>
  )
}
