import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflixLogo from "./images/kisspng-netflix-streaming-media-television-show-logo-netflix-logo-5b35b03bb4e9d0.753613021530245179741.png";
import { useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();
  const [bglight, setBgLight] = useState(false);
  let bgColorHandler = () => {
    if (window.scrollY > 100) {
      setBgLight(true);
    } else setBgLight(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", bgColorHandler);
    return () => window.removeEventListener("scroll", bgColorHandler);
  }, []);

  return (
    <nav className={`navbar ${bglight && "bg-black"}`}>
      <img
        src={netflixLogo}
        alt="Netlfix logo"
        width="160px"
        onClick={() => history.push("/")}
      />
      {/* <h1 className="title">NETFLIX</h1> */}
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="DP"
          width="50px"
          onClick={() => history.push("/profile")}
        />
        {/* <button className="btn btn-light m-2">SignIn</button> */}
      </div>
    </nav>
  );
}

export default Nav;
