// App.jsx
import LayoutComponent from "./layout/LayoutComponent";
import Router from "./routes/Router";
import  LoginContext from "./store/loginContext";
import { useState } from "react";

function App() {
  const [login, setLogin ] = useState(null);
  return (
    <LoginContext.Provider value={{login, setLogin}}>
      <LayoutComponent>
        <Router />
      </LayoutComponent>
    </LoginContext.Provider>
  );
}

export default App;
