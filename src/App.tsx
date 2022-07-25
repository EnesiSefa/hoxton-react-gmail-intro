import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main"

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
     <Navigation/>
     <Main/>
      
    </div>
  );
}

export default App;
