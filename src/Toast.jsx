import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";
import "./Toast.css"; // ✅ Import the CSS file

const icons = {
  success: <CheckCircle style={{ color: "#16A34A", width: "24px", height: "24px" }} />,
  error: <XCircle style={{ color: "#DC2626", width: "24px", height: "24px" }} />,
  warning: <AlertTriangle style={{ color: "#EAB308", width: "24px", height: "24px" }} />,
  info: <Info style={{ color: "#2563EB", width: "24px", height: "24px" }} />
};

const Toast = ({
  id,
  message = "Default Message",
  submessage = "",
  img = null,
  navigateTo = null,
  outerBoxStyle = {},
  messageStyle = {},
  subMessageStyle = {},
  imgStyle = {},
  type = "info",
  duration = 4000,
  onClose = () => {},
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const handleClick = () => {
    if (navigateTo) {
      window.location.href = navigateTo;
    } else {
      onClose(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="toast" 
      style={{ ...outerBoxStyle }}
    >
      {/* ✅ Icon or Image */}
      <div
        style={{
          marginRight: "12px",
          display: "flex",
          alignItems: "center",
          ...imgStyle,
        }}
      >
        {img ? (
          <img
            src={img}
            alt={message}
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          icons[type]
        )}
      </div>

      {/* ✅ Text Content */}
      <div style={{ flex: 1, minWidth: "0" }}>
        <p
          style={{
            fontSize: "clamp(14px, 1.2vw, 16px)",
            fontWeight: "bold",
            color: "#333",
            margin: "0",
            wordBreak: "break-word",
            ...messageStyle,
          }}
        >
          {message}
        </p>
        <span
          style={{
            fontSize: "clamp(12px, 1vw, 14px)",
            color: "#555",
            marginTop: "4px",
            display: "block",
            wordBreak: "break-word",
            ...subMessageStyle,
          }}
        >
          {submessage}
        </span>
      </div>
    </motion.div>
  );
};

export default Toast;
