import HookForm from "../components/hookForm/HookForm";
import NestedForm from "../components/nestedForm/NestedForm";
import { Container } from "../shared/constants/GlobalStyles";

const HomePage = () => {
    return ( 
        <Container>
            <HookForm/>
            <br />
            <NestedForm/>
        </Container>
     );
}
 
export default HomePage;