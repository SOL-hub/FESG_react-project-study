import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleNavbarButton = () => {
    setClick(!click);
  };

  const closeMobileMenuBar = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-wrap">
          <Link to="/" className="navbar-logo">
            로고네임
            <SmileOutlined />
          </Link>

          <div className="menu-icon" onClick={handleNavbarButton}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/고수매칭"
                className="nav-links"
                onClick={closeMobileMenuBar}
              >
                고수매칭
              </Link>
              <Link
                to="/고수찾기"
                className="nav-links"
                onClick={closeMobileMenuBar}
              >
                고수찾기
              </Link>
              <Link
                to="/마켓"
                className="nav-links"
                onClick={closeMobileMenuBar}
              >
                마켓
              </Link>
              <Link
                to="/커뮤니티"
                className="nav-links"
                onClick={closeMobileMenuBar}
              >
                커뮤니티
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle>로그인</Button>}
          {button && <Button buttonStyle>회원가입</Button>}
          {button && <Button buttonStyle>고수가입</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
