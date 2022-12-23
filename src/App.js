import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    // Que esse atributo, recebe esse método, assim permitindo ele ter o this dentro
    this.state = {
      name: "Francisco Álisson",
      counter: 0,
      posts: [
        {
          id: 1,
          title: "O título 1",
          body: "O corpo 1",
        },
        {
          id: 2,
          title: "O título 2",
          body: "O corpo 2",
        },
        {
          id: 3,
          title: "O título 3",
          body: "O corpo 3",
        },
      ],
    };
  }

  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    this.handleTimeOut();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;
    posts[0].title = "O título mudou";

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  };

  // Mudou o estado, o render vai ser chamado novamente
  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
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
