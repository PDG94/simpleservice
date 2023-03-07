import { useSelector } from "react-redux";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector((state) => state.users.email);
  //no esta llenando el estado en esta ruta
  if (userEmail === "simpleservice@gmail.com") {
    return children;
  }
  return null;
};

// export const AdminOnlyLink = ({ children }) => {
//   const userEmail = useSelector((state)=>state.email);
//   console.log(userEmail);

//   if (userEmail === "simpleservice@gmail.com") {
//     return children;
//   }
//   return null;
// };

export default AdminOnlyRoute;
