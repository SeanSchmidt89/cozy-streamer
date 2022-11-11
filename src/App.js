import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Favorites from "./components/Favorites/Favorites";
import About from "./components/About/About";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import AuthContextProvider from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
