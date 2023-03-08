import { useSelector } from "react-redux";

const UserOnlyRoute = ({ children }) => {
  const userEmail = useSelector((state) => state.users.email);
  //no esta llenando el estado en esta ruta
  if (userEmail !== "simpleservice@gmail.com") {
    return children;
  }
  return null;
};

export default UserOnlyRoute;
