import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const {user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topIcon topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-linkedin-in"></i>
        <i className="topIcon fab fa-github"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/allPosts">
              All Post
            </Link>
          </li>
          {/* <li className="topListItem">
            <Link className="link" to="/myBlog">
              My Blog
            </Link>
          </li> */}
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <i className="topIcon fas fa-search"></i>
        {user ? (
          <Link to= "/settings">
            <img
              className="topSearchIcon topImg"
              src={PF+user.profilePic}
              alt=""
              />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <li className="topListItem" onClick={handleLogout} >{user && "LOGOUT"}</li>
      </div>
    </div>
  );
}
