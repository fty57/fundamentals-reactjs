import "./App.css";
import { Component } from "react";
import { loadPosts } from "./utils/load-posts";
import { Posts } from "./components/Posts";

class App extends Component {
  // Que esse atributo, recebe esse método, assim permitindo ele ter o this dentro
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  };

  componentDidUpdate() {}

  componentWillUnmount() {}

  // Mudou o estado, o render vai ser chamado novamente
  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
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
