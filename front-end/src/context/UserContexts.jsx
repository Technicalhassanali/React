import useUser from "../Hooks/useUser";
// step 01 Import the createContext function
import { createContext,useState,useContext } from "react";

// step 02 Export the contexts 
const ThemeContext = createContext();



export default function UserContexts({children}) {
  const [user, setUser] = useState(()=>{
    const token = localStorage.getItem('token');
    if(token){
      let encodedPayload = token.split(".")[1];
      let result =  encodedPayload ? JSON.parse(atob(encodedPayload)) : null;
        return result;
    }else{
      return null;
    }
  });
  const login = (token) => {
    if(token.length>18){
      let encodedPayload = token.split(".")[1];
      let result =  encodedPayload ? JSON.parse(atob(encodedPayload)) : null;
      setUser(result);
    }else{
      setUser(JSON.parse(token));
    }
    // setUser(token)
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };
  
  return (
    <>
      <ThemeContext.Provider value={{ user, login, logout }}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}


export function useUserContext() {
  return useContext(ThemeContext);
}




