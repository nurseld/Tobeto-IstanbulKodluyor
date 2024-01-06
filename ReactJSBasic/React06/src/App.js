import { Link, Route, Routes } from "react-router-dom";
import UsingAxios from "./components/UsingAxios";
import UsingFetch from "./components/UsingFetch";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (

    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">React Router</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      <div className="container">

        {/* <UsingFetch /> */}

        {/* <UsingAxios /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>

      </div>
    </>

  );
}

export default App;
