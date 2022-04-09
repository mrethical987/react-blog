import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AllPosts from "./pages/allPosts/AllPosts";
import MyBlog from "./pages/myBlog/MyBlog";
import { Context } from "./context/Context";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          {user ? <Home/> : <Login />}          
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register />}
        </Route>
        <Route path="/settings">          
          {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/allPosts">
          <AllPosts />
        </Route>
        <Route path="/myBlog">
          <MyBlog />
        </Route>
        <Route path="/contact">
          <Home />
        </Route>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
