import { createContext ,useState} from "react";
export const  AuthContext=createContext()
export default function AuthContextProvider({children}){
    const [Auth, setAuth] = useState(false)
    const[username,setusername]=useState(null)
    return<AuthContext.Provider value={{setAuth,Auth,setusername,username}}>
        {children}
    </AuthContext.Provider>
}