import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReduce } from "./auth/authReducer";
import AppRouter from "./routers/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const HeroesApp = () => {
  //el useReduce reenderiza el componente como el useState
  const [user, dispatch] = useReducer(authReduce, {}, init);

  useEffect(() => {
    console.log('user: '+JSON.stringify( user))
    if ( !user ) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [ user ])
  

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {/* AuthContext.Provider: Provea información a todos sus hijos */}
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
