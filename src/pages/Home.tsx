import { Link, Route, Routes } from "react-router-dom";
import { useAuth } from "../route/Auth";
function Home() {
 
  const auth = useAuth();
 

  return (
 
    <nav className="header-wrapper">
      <div className="header">
    
        <div className="header-nav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
          <Link  className="link" to="/register">
            Register
          </Link>

          <Link className={auth.user ? "link" : "link-none"}  to="/todo">
            Todo
          </Link>
          <Link className={auth.user ? "link" : "link-none"}  to="/error">
            Error
          </Link>
          <Link className={auth.user ? "link" : "link-none"}  to="/todoant">
            Todo[Ant]
          </Link>
        </div>
    
      </div>
    </nav>
 

  );
}

export default Home;
