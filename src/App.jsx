import posthog from "posthog-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CookieBanner from "./components/CookieBanner";

const App=()=> {
  
  return (
    <>
      <ToastContainer />
      {posthog.has_opted_out_capturing() || // new
      posthog.has_opted_in_capturing() ? null : (
        <CookieBanner />
      )}
    </>
  );
}

export default App;
