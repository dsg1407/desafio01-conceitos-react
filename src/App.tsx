import { PlusCircle, ClipboardText } from "phosphor-react"
import Logo from "./assets/todo-logo.svg"

import "./styles/global.css"

export function App() {
  return (
    <>
      <header className="header">
        <img src={Logo} alt="Logo do site" />
      </header>
      <main>
        <form>
          <input type="text" placeholder="Adicione uma nova tarefa" required />
          <button type="submit">
            Criar
            <PlusCircle />
          </button>
        </form>
        <section className="tasks-section">
          <section className="tasks-status-section">
            <div>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>0</span>
            </div>
          </section>
          <section className="tasks-list-section">
            <div>
              <ClipboardText />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}
