import GoogleIcon from "../components/svg/GoogleIcon"
import Illustration from "../components/svg/Illustration"
import Logo from "../components/svg/Logo"

export default function Home() {
  return (
    <div>
      <aside>
        <Illustration/>
      </aside>
      <main>
        <div>
          <Logo/>
          <button>
            <GoogleIcon/>
            Crie sua sala com o Google
          </button>
          <div>ou entre uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da saça"
            />
            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}