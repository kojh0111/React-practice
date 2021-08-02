import { useState } from "react";
import Control from "./components/Control";
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
  const onChangeModeNav = id => {
    setMode("READ")
    setId(id)
  }
  const onChangeModeControl = _mode => {
    setMode(_mode);
  }
  if (mode === "WELCOME") {
    title = "Welcome"
    desc = "React"
  } else if (mode === "READ") {
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id === id) {
        title = data[i].title
        desc = data[i].desc
      }
    }
  } else if (mode === 'CREATE') { } else if (mode === 'UPDATE') { }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Header onChangeMode={onChangeModeHeader} />
      <Nav onChangeMode={onChangeModeNav} data={data} />
      <Read title={title} desc={desc} />
      <Control onChangeMode={onChangeModeControl} />
    </div>
  );
}

export default App;
