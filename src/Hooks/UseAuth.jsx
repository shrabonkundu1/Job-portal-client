import { useContext } from "react"
import AUthContext from "../Context/AuthContext"

const useAuth = () => {
    const context = useContext(AUthContext);
    return context;
} 


export default useAuth;