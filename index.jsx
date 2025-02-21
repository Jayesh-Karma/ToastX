import React from "react";
import ToastManager, { toastFunction } from "./src/ToastManager";

export const ToastContainer = ({ children }) => {
  return <ToastManager>{children}</ToastManager>;
};

export const toast = {
  success: (message, submessage, img, navigateTo, outerBoxStyle, messageStyle, subMessageStyle, imgStyle, duration = 3000) => toastFunction?.(message, submessage, img, navigateTo, outerBoxStyle, messageStyle, subMessageStyle, imgStyle, "success", duration),

  error: (message, submessage, img, navigateTo, outerBoxStyle, messageStyle, subMessageStyle, imgStyle, duration = 3000) => toastFunction?.(message, submessage, img, navigateTo, outerBoxStyle, messageStyle, subMessageStyle, imgStyle, "error", duration),

  warning: (message, submessage, img, navigateTo, outerBoxStyle, messageStyle, subMessageStyle, imgStyle, duration = 3000) => toastFunction?.(message, submessage, img, navigateTo, outerBoxStyle, messageStyle, subMessageStyle, imgStyle, "warning", duration),

  info: (message, submessage, img, navigateTo, outerBoxStyle, messageStyle, subMessageStyle, imgStyle, duration = 3000) => toastFunction?.(message, submessage, img, navigateTo, outerBoxStyle, messageStyle, subMessageStyle, imgStyle, "info", duration),
};

export default ToastContainer;
