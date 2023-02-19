import { useState } from "react";
import { useAuthContext } from "../src/hooks/useAuthContext";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Login } from "./pages";
import { RootNav } from "./layouts/RootNav";
import GlobalStyle from './css/GlobalStyle';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <>
    <GlobalStyle/>
     <RouterProvider router={router} />
    </>
  )
}

export default App;
