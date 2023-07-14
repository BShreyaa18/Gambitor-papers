import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Papers from "./components/Papers"

function App() {
  return (
    <div className="App">
      <Header />
      <Papers />
      <Footer />
    </div>
  );
}

export default App;
