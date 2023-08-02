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


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<HomePage/>} />
        <Route path="formregister" element={<RegistrationPage/>} />
        <Route path="formaccount" element={<AccountPage/>} />
      </Route>
    )
  );

  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
