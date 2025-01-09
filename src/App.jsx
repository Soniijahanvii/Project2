import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./component/login";
import Home from "./component/Home";
import Signup from "./component/Signup";
import SideScroll from "./component/SideScroll";
import Midpage from "./component/Midpage";
import Progress from "./component/Progress";
import Lastpage from "./component/Lastpage";
import Footer from "./component/Footer";
import NotFound from "./component/Nofound";
import Pricing from "./component/Pricing";
import Blog from "./component/Blog";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
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

          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
