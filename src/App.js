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
        <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// api key 9905381d1fa99a0a39cc1c5e55f2e942

//example api request https://api.themoviedb.org/3/movie/550?api_key=9905381d1fa99a0a39cc1c5e55f2e942
//                    https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
//api read access token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTA1MzgxZDFmYTk5YTBhMzljYzFjNWU1NWYyZTk0MiIsInN1YiI6IjYzNGUzNGNkOWU0NTg2MDA3OTA5Y2I1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vi3gz3MzYJc9bZr8RpSeFQDUpaIRJq3v7VXQc-bIJ4o
