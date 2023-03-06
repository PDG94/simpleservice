import { useSelector } from "react-redux";

// hidde logout botton or show it

function ShowOnLogout({ children }) {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  if (!isLoggedIn) {
    return children;
  }
  return null;
}

export default ShowOnLogout;
