import "./App.css";
import SideBar from "./Navigation_page/navigation_bar/side_bar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Navigation_page/Pages/Dashboard/dashboard";


function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <Router>
        <SideBar
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`main-container ${inactive ? "inactive" : " "}`}>
          <Routes>

            <Route exact path={"/"} element={<Dashboard />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
