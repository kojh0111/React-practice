import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Read from "./components/Read";

function App() {
  const [mode, setMode] = useState("Welcome")
  const [id, setId] = useState(null)
  const data = [
    { _id: 1, title: 'HTML', desc: 'HTML is ...' },
    { _id: 2, title: 'CSS', desc: 'CSS is ...' },
    { _id: 3, title: 'JS', desc: 'JS is ...' }
  ]
  let title = "Welcome"
  let desc = "React"


  const onChangeModeHeader = () => {
    setMode('WELCOME')
  }
  const onChangeModeNav = _id => {
    setMode("READ")
    setId(_id)
  }

  if (mode === "WELCOME") {
    title = "Welcome"
    desc = "React"
  } else if (mode === "READ") {
    title = "Read"
    desc = "Yeah~!!"
  }

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
