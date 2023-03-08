import { useSelector } from "react-redux";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector((state) => state.users.email);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const { isAdmin } = useSelector((state) => state.users.serviceUser);

  //no esta llenando el estado en esta ruta

  if (isLoggedIn) {
    if (isAdmin || userEmail === "simpleservice@gmail.com") {
      return children;
    }
  }
  return null;
};

export default AdminOnlyRoute;
