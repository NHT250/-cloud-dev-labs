import { useState } from "react";
import Auth from "./pages/Auth";
import Homepage from "./pages/Homepage";
import Medicines from "./pages/Medicines";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [view, setView] = useState("home");
  const [authMode, setAuthMode] = useState("login");
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (view === "home") {
    return (
      <Homepage
        onLoginClick={() => {
          setAuthMode("login");
          setView("auth");
        }}
        onRegisterClick={() => {
          setAuthMode("register");
          setView("auth");
        }}
        onNavigateMedicines={() => setView("medicines")}
      />
    );
  }

  if (view === "medicines") {
    return (
      <Medicines
        onNavigateHome={() => setView("home")}
        onLoginClick={() => {
          setAuthMode("login");
          setView("auth");
        }}
        onRegisterClick={() => {
          setAuthMode("register");
          setView("auth");
        }}
        onSelectProduct={(product) => {
          setSelectedProduct(product);
          setView("productDetail");
        }}
      />
    );
  }

  if (view === "productDetail" && selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onNavigateBack={() => setView("medicines")}
        onNavigateHome={() => setView("home")}
        onLoginClick={() => {
          setAuthMode("login");
          setView("auth");
        }}
        onRegisterClick={() => {
          setAuthMode("register");
          setView("auth");
        }}
      />
    );
  }

  return (
    <Auth
      initialMode={authMode}
      onNavigateHome={() => setView("home")}
    />
  );
}

export default App;
