import { useEffect } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const facebookScript = document.createElement("script");
    facebookScript.async = true;
    facebookScript.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0";
    document.body.appendChild(facebookScript);
    if(window.FB){
      window.FB.XFBML.parse();
      }
  }, []);

  return (
    <>
    <Navbar/>
  <Component {...pageProps} />
  </>
  
  )
}

export default MyApp;
