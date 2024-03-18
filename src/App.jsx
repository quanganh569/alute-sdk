import posthog from "posthog-js";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CookieBanner from "./components/CookieBanner";
const App=()=> {
  
  return (
    <div id="#fcc_foldout_menu">
      <ToastContainer />
      {posthog.has_opted_out_capturing() || // new
      posthog.has_opted_in_capturing() ? null : (
        <CookieBanner />
      )}
    </div>
  );
}

export default App;
