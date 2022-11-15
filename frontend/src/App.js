import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/partials/Footer/Footer";
import Navbar from "./components/partials/Navbar/Navbar";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/quiz/test/:id" element={<Quiz />}></Route>
          <Route path="/quiz/test/result/show/:id" element={<Result />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/logout" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
