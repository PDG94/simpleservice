import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { adminCheck } from "../../redux/actions/usersActions";

const AdminOnlyRoute = ({ children }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.users.email);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const userChecked = useSelector((state) => state.users.isAdmin);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(adminCheck(token));
  }, [dispatch, token]);
  //no esta llenando el estado en esta ruta

  if (isLoggedIn) {
    if (userChecked || userEmail === "simpleservice@gmail.com") {
      return children;
    }
  }
  return null;
};

export default AdminOnlyRoute;
