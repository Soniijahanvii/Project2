import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./pages/login";
import Home from "./component/Home";
import Signup from "./component/Signup";
import SideScroll from "./component/SideScroll";
import Midpage from "./component/Midpage";
import Progress from "./component/Progress";
import Lastpage from "./component/Lastpage";
import Footer from "./component/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <SideScroll />
              <Midpage />
              <Progress />
              <Lastpage />
              <Footer />
            </>
          }
        />

        {/* Route for Login without Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
