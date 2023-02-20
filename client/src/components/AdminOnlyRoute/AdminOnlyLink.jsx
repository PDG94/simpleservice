 import { useSelector } from "react-redux";
 
 const AdminOnlyLink = ({ children }) => {
    const email = useSelector((state)=>state.email)
    if(email === "simpleservice@gmail.com"){
        return children;
    }
    return null;
}

export default AdminOnlyLink;