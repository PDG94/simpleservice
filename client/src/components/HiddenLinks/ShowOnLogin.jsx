import { useSelector } from "react-redux";

function ShowOnLogin({ children }) {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return null;
}
export default ShowOnLogin;
