// App.jsx 
import React, { useState, useEffect } from "react";
import LayoutComponent from "./layout/LayoutComponent";
import Router from "./routes/Router";
import LoginContext from "./store/loginContext";
import { jwtDecode } from "jwt-decode"; 
import { ToastContainer } from "react-toastify";
import { CardsProvider } from "./store/searchContext";

function App() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      token = sessionStorage.getItem("token");
    }

    if (token) {
      try {
        const userInfoFromToken = jwtDecode(token);
        setLogin(userInfoFromToken);
      } catch (error) {
        console.error("Error when decoding Token: ", error);
        sessionStorage.removeItem("token");
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <CardsProvider>
    <LoginContext.Provider value={{ login, setLogin }}>
      <ToastContainer />
      <LayoutComponent>
        <Router />
      </LayoutComponent>
    </LoginContext.Provider>
    </CardsProvider>
  );
}

export default App;
