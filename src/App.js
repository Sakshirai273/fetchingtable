import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import "./App.css"; // Import your CSS file for styling

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <hr className="divider" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}






























// import React from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Home from "./components/home";
// import About from "./components/about";
// import Dashboard from "./components/dashboard";

// export default function App() {
//   return (
//     <>
//       <Router>
//         <div>
//           <Routes>
//             <Route path="/"   element={<Home />}/>
//             <Route path="/about" element={<About />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>

//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//           </ul>

//           <hr />
//         </div>
//       </Router>
//     </>
//   );
//}
