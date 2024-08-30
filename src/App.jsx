import ContainerList from "./components/main/ContainerList";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import About from "./components/header/navbar/about/About";
import Contacto from "./components/header/navbar/contacto/Contacto";
import Layout from "./components/pages/Layout";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer";
import "./App.css";
import CartContextProvider from "./context/CarContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ContainerList />} />
            <Route path="/producto/:producto" element={<ContainerList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacto />} />
            <Route
              path="/producto/:producto/:id"
              element={<ItemDetailsContainer />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
