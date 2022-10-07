import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import MyNavbar from "./components/MyNavbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/products";
import Purchases from "./pages/Purchases";
import { getProductsThunk } from "./store/slice/Products.slice";

function App() {
  const isLoading = useSelector((state) => state.IsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);
  return (
    <HashRouter>
      <MyNavbar />
      {isLoading && <LoadingScreen />}
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
