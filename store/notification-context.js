import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

export function NotificationContextProvider({ children }) {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    let timeout;
    if (
      notification &&
      (notification.status === "success" || notification.status === "error")
    ) {
      timeout = setTimeout(() => {
        setNotification(null);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [notification]);

  const showNotificationHandler = (notificationData) => {
    setNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setNotification(null);
  };

  const context = {
    notification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
