import React, { createContext, useContext, useState } from "react";
import Toast from "./Toast"; // ✅ Import the Toast component
import { AnimatePresence } from "framer-motion";

import "./ToastManager.css"


const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a <ToastContainer>");
  }
  return context; //  Returns the function correctly
};




let toastFunction = null; //  Declare toastFunction at module level

const ToastManager = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (
    message, 
    submessage, 
    img = "", 
    navigateTo, 
    outerBoxStyle = {}, 
    messageStyle = {}, 
    subMessageStyle={},  
    imgStyle ={}, 
    type, 
    duration = 30000) => {
    
      const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, submessage, img, navigateTo, outerBoxStyle, messageStyle, subMessageStyle, imgStyle, type, duration }]);

    //  Auto-remove toast after `duration`
    setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, duration);
};

const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };
  toastFunction = addToast; // Assign function  so it's always defined

  return (

<ToastContext.Provider value={addToast}>
  {children}
  <div className="toast-container">
    <AnimatePresence>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={removeToast} />
      ))}
    </AnimatePresence>
  </div>
</ToastContext.Provider>

  );
};

export { toastFunction };
export default ToastManager;
