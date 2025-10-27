import { useState } from "react";
import Auth from "./pages/Auth";
import Homepage from "./pages/Homepage";
import Medicines from "./pages/Medicines";

function App() {
  const [view, setView] = useState("home");
  const [authMode, setAuthMode] = useState("login");

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
