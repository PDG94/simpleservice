import { useSelector } from "react-redux";

function ShowOnLogout({ children }) {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  if (!isLoggedIn) {
    return children;
  }
  return null;
}

export default ShowOnLogout;
