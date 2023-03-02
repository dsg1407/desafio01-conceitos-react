import { PlusCircle, ClipboardText } from "phosphor-react"
import { Header } from "./components/Header"

import "./styles/global.css"

export function App() {
  return (
    <>
      <Header />
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
