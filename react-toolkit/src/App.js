import logo from "./logo.svg";
import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostView from "./features/posts/PostView";

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      {/* <CounterView></CounterView> */}
      <PostView></PostView>
    </div>
  );
}

export default App;
