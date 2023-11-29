import "./App.css";
import { Navbar } from "./components/Navbar.js";
import { HomePage } from "./pages/HomePage.js";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="body w-full">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
