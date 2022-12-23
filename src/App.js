import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    // Que esse atributo, recebe esse método, assim permitindo ele ter o this dentro
    this.state = {
      name: "Francisco Álisson",
      counter: 0,
    };
  }

  handlePClick = () => {
    this.setState({ name: "Junior" });
  };

  handleAClick = (event) => {
    // A arrowfunction não tem this
    event.preventDefault(); // Prevenir o comportamento padrão daquela função
    const { counter } = this.state;
    const nextCounter = counter + 1;
    this.setState({ counter: nextCounter });
  };

  // Mudou o estado, o render vai ser chamado novamente
  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link
          </a>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
