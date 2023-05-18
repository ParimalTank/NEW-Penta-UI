import "../src/assets/scss/App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Experiences } from "./pages/Experiences";
import { Footer } from "./components/Footer";
import { Testimonials } from "./pages/Testimonials";

function App() {
  return (
    <div className="App">
        <Home />
        <Products />
        <Experiences />
        <Testimonials />
        <Footer/>
    </div>
  );
}

export default App;
