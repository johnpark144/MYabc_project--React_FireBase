import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; // npm i firebase (To install)
import { authService } from "./fBase";
import Auth from "./routes/Auth";
import EmptyPage from "./routes/_EmptyPage";
import Home from "./routes/Home";
import Memorize from "./routes/Memorize";
import Dictionary from "./routes/Dictionary";
import Video from "./routes/Video";
import GrammarlyApp from "./routes/GrammarlyApp";
import Day from "./routes/Day";
import Create from "./routes/Create";
import NavModal from "./components/NavBar_NavModal/NavModal";
import NavBar from "./components/NavBar_NavModal/NavBar";

function App() {
  const [navModal, setNavModal] = useState(false); // Navigaion Modal
  const [isLoggedIn, setIsLoggedIN] = useState(false); // whether Logged-in-mode or Unlogged-in-mode
  const [userObj, setUserObj] = useState(null); // Logged-in User's Info

  // About Log-in
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      // To check Any user logged in
      if (user) {
        setIsLoggedIN(true); // Logged-in-mode
        setUserObj({
          // Setting logged-in User's Info
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setIsLoggedIN(false); // Unlogged-in-mode
      }
    });
  }, []);

  // Common Button Class
  const btnClass =
    "bg-gradient-to-r from-indigo-300 to-indigo-400 transition shadow-md ease-in-out delay-70 bg-red-400 hover:-translate-y-2 duration-300'";

  return (
    <BrowserRouter>
      {navModal && <NavModal setNavModal={setNavModal} />}{" "}
      {/* NavModal function everywhere, Only When navModal is on */}
      {isLoggedIn && <NavBar setNavModal={setNavModal} userObj={userObj} />}
      {/* Navbar is always used, while logged in*/}
      <div id="container">
        <Routes>
          {isLoggedIn ? ( // Routes while logged in
            <>
              <Route exact path="/" element={<Home userObj={userObj} />} />
              <Route
                path="/memorize"
                element={<Memorize userObj={userObj} btnClass={btnClass} />}
              />
              <Route
                path="/memorize/create"
                element={<Create userObj={userObj} />}
              />
              <Route
                path="/memorize/:day"
                element={<Day userObj={userObj} btnClass={btnClass} />}
              />
              <Route
                path="/dictionary"
                element={<Dictionary userObj={userObj} btnClass={btnClass} />}
              />
              <Route
                path="/video"
                element={<Video userObj={userObj} btnClass={btnClass} />}
              />
              <Route
                path="/grammarlyapp"
                element={<GrammarlyApp userObj={userObj} />}
              />

              {/* 404, unmatched with any routes (always very bottom)*/}
              <Route path="*" element={<EmptyPage btnClass={btnClass} />} />
            </>
          ) : (
            // Auth page while unlogged in
            <>
              <Route path="/" element={<Auth />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
