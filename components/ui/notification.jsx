import { useContext } from "react";
import NotificationContext from "../../store/notification-context";
import classes from "./notification.module.css";

const Notification = ({ status, title, message }) => {
  const notificationCtx = useContext(NotificationContext);
  let statusClass = "";

  if (status === "success") {
    statusClass = classes.success;
  }
  if (status === "pending") {
    statusClass = classes.pending;
  }
  if (status === "error") {
    statusClass = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClass}`;
  return (
    <div className={cssClasses} onClick={notificationCtx.hideNotification}>
      <div className={classes.footer}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
