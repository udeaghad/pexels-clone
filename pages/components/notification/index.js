import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import Notification from "../../../components/Notification/Notification";


/**
 * this is an example page for notification, this would help any one to understand how the notification component is used
 * @returns {HTMLElement} 
 */
export default function NotificationExample() {
  return (
    <div>
      <Notification tooltiptext="just a message"/>
      <Notification tooltiptext="just a message" />
    </div>
  );
}
