import Header from "./components/Header";
import Nav from "./components/Nav";
import Read from "./components/Read";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Header />
      <Nav data={[
        { id: 1, title: 'HTML', desc: 'HTML is ...' },
        { id: 2, title: 'CSS', desc: 'CSS is ...' }
      ]} />
      <Read title="Welcome" dsc="React" />
    </div>
  );
}

export default App;
