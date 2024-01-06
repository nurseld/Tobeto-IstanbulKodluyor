import "./App.css";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import UsingAxios from "./components/UsingAxios";
import UsingFetch from "./components/UsingFetch";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";

function App() {
  return (

    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">React Router</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className={useMatch({ path: "", end: true }) ? "nav-link active" : "nav-link"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={useMatch({ path: "about", end: true }) ? "nav-link active" : "nav-link"}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className={useMatch({ path: "users", end: true }) ? "nav-link active" : "nav-link"}>Users</Link>
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
          <Route path="users" element={<Users />} />
          <Route path="user/:id" element={<User />} />
        </Routes>

      </div>
    </>

  );
}

export default App;
