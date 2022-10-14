import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moive-details" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
