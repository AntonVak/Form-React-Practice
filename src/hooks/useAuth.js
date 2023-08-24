import { useSelector } from "react-redux"
import { selectEmail, selectName, selectPassword } from "../store/auth/selectors"

export const useAuth = () => {
    const userName = useSelector(selectName)
    const email = useSelector(selectEmail)
    const password = useSelector(selectPassword);


    return {userName, email, password};
}

