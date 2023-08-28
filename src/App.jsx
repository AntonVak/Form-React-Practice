import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RegistrationPage from "./pages/registrationPage";
import AccountPage from "./pages/accountPage";
import Root from "./components/root/root";
import HomePage from "./pages/homePage";
import RegistrationPage1 from "./components/formRegistration/RegistranionPage1";
import RegistrationPage2 from "./components/formRegistration/RegistranionPage2";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="formregister" element={<RegistrationPage />}>
         
        </Route>
        <Route path="formregister/pg1" element={<RegistrationPage1 />} />
        <Route path="formregister/:pg2" element={<RegistrationPage2 />} />
        <Route path="formaccount" element={<AccountPage />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
