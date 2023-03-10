import "./style.css";
import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { React } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  // Virtual and Real Manipulation
  /*   handleClick = () => {
    this.setState({ counter: this.state.counter + 1},
      () => {
        console.log(this.state.counter)
      })
    this.setState(
      (prevState, prevProps) => {
        console.log(prevState.counter)
        return { counter: prevState.counter + 1},
        () => {
          console.log(this.state.counter)
        }
      }
    )
  } */

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}

        <TextInput searchValue={searchValue} actionFn={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>N??o existem posts</p>}

      <div className="button-container">
        {!searchValue && (
          <Button
            disabled={noMorePosts}
            text="Load more posts"
            onClick={loadMorePosts}
          />
        )}
      </div>
    </section>
  );
};
// class Home2 extends Component {
//   // Que esse atributo, recebe esse m??todo, assim permitindo ele ter o this dentro
//   // Toda vez que o estado mudar, o que est?? na minha tela ser?? re-renderizado
//   // React Developer Tools
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 10,
//     searchValue: "",
//   };

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;
//     const postsAndPhotos = await loadPosts();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     });
//   };

//   loadMorePosts = () => {
//     const { page, postsPerPage, allPosts, posts } = this.state;
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextPage });
//   };

//   // Para mudar o estado da minha HOME, crio ent??o uma fun????o que altera esse valor
//   // Em seguida consigo passar ela para o componente respons??vel por chamar essa fun????o
//   // A qual, por meio do meu componente, consegue mudar o estado da minha HOME
//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value });
//   };
//   // Mudou o estado, o render vai ser chamado novamente
//   render() {
//     const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filteredPosts = !!searchValue
//       ? allPosts.filter((post) => {
//           return post.title.toLowerCase().includes(searchValue.toLowerCase());
//         })
//       : posts;

//     return (
//       <section className="container">
//         <div className="search-container">
//           {!!searchValue && <h1>Search value: {searchValue}</h1>}

//           <TextInput searchValue={searchValue} actionFn={this.handleChange} />
//         </div>

//         {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
//         {filteredPosts.length === 0 && <p>N??o existem posts</p>}

//         <div className="button-container">
//           {!searchValue && (
//             <Button
//               disabled={noMorePosts}
//               text="Load more posts"
//               onClick={this.loadMorePosts}
//             />
//           )}
//         </div>
//       </section>
//     );
//   }
// }

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

export default Home;
