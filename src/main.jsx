import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Store } from './Store.js'
import { Provider } from 'react-redux'
import "./i18n"; // MUST be here
import  { Toaster } from 'react-hot-toast';


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}

createRoot(document.getElementById('root')).render(
  <Provider store={Store} >
  <StrictMode>
   <Toaster />
      <App  />
   
    
  </StrictMode>,
  </Provider>
)
