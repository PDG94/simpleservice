import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const AdminOnlyRoute = ({ children }) => {

    const email = useSelector((state)=>state.email)

    if(email === "simpleservice@gmail.com"){
        return children
    }else{
        return null;
    }
}





export default AdminOnlyRoute;
