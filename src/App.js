import "../src/assets/scss/App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
        <Home />
        <Products />
    </div>
  );
}

export default App;
