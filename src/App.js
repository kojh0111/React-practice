import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Read from "./components/Read";

function App() {
  const data = [
    { _id: 1, title: 'HTML', desc: 'HTML is ...' },
    { _id: 2, title: 'CSS', desc: 'CSS is ...' },
    { _id: 3, title: 'JS', desc: 'JS is ...' }
  ]
  const title = "Welcome"
  const desc = "React"

  const onChangeModeHeader = () => { }
  const onChangeModeNav = () => { }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Header onChangeMode={onChangeModeHeader} />
      <Nav onChangeMode={onChangeModeNav} data={data} />
      <Read title={title} desc={desc} />
    </div>
  );
}

export default App;
