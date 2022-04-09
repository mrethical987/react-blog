import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(()=> {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  },[]);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/564x/db/1e/29/db1e29c7ba309d373c313ff6f2810a7d.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          voluptas, laudantium praesentium modi amet optio suscipit eligendi
          officia itaque veritatis dignissimos necessitatibus ad earum
          laboriosam voluptates! Odit culpa nihil omnis.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c =>(
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}  
        </ul>
      </div>
    <span className="sidebarTitle">Follow us</span>
      <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
          <i className="sidebarIcon fab fa-linkedin-in"></i>
          <i className="sidebarIcon fab fa-github"></i>
      </div>
    </div>
  );
}
