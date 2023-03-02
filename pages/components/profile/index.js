import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import Notification from "../../../components/Notification/Notification";
import Profilemenu from "../../../components/Profilemenu/Profilemenu";


/**
 * this is an example page for notification, this would help any one to understand how the notification component is used
 * @returns {JSX} 
 */
export default function ProfileMenuExample() {
  return (
    <div>
      <Profilemenu />
    
    </div>
  );
}
