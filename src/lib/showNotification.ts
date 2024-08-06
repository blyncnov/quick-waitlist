// Toastify
import { toast } from "react-hot-toast";

export const showNotification = (
  message: string,
  errorType: "success" | "error",
  isDark?: boolean
) => {
  // use a random type of notification
  toast(message, {
    icon: errorType === "success" ? "👏" : "❌",
    style: {
      background: isDark ? "#333" : "#ffffff",
      color: errorType === "success" ? "#6533FF" : "#F05152",
    },
  });
};

export default showNotification;
