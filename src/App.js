import { Outlet,Navigate,useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect,useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () =>{
    setIsLoggedIn(true);
  }

  const logout = () =>{
    setIsLoggedIn(false);
  };

    // Add programmatic navigation for login and logout
  useEffect(() =>{
    if (isLoggedIn) {
        // navigates to Home route if user is logged in
      navigate("/");
    } else {
        // navigates to Login route if user is logged out
      navigate("/login");
    };
  }, [isLoggedIn]);

  return (
    <div className="app">
      {isLoggedIn ? <NavBar logout={logout}  /> : <Navigate to="/login" />}
      <Outlet context={login}/>
    </div>
  );
}

export default App;
