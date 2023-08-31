import { useSelector } from "react-redux";
import { selectUser } from "../store/auth/selectors";

export const useAuth = () => {
  const userData = useSelector(selectUser);
  // const email = useSelector(selectEmail)
  // const password = useSelector(selectPassword);

  return  userData ;
};
