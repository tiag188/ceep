import ListDeNotas from "./components/ListaDeNotas";

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..."></textarea>
        <button>Criar Nota</button>
      </form>
      <ListDeNotas/>
    </section>
  );
}

export default App;
