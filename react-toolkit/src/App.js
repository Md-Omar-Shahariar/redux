import logo from "./logo.svg";
import "./App.css";
import CounterView from "./features/counter/CounterView";

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterView></CounterView>
    </div>
  );
}

export default App;