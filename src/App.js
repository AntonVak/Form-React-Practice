import {
 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/header/Header";
import FormLogin from "./pages/formLogin";
import FormBuyerAccount from "./pages/formRegister";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header/>}>
        <Route path="/formregister" element={<FormLogin />} />
        <Route path="/formaccount" element={<FormBuyerAccount />} />
      </Route>
    )
  );

  return <div className="App">
    <RouterProvider router={router}/>
  </div>;
}

export default App;
