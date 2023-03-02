import { useEffect } from "react";
import MenuDropdown from "../../../components/MenuDropdown/MenuDropdown";
import Mobilemenu from "../../../components/Mobilemenu/Mobilemenu";

export default function Menu() {
  

  
  useEffect(()=>{
    
  },[])
  
  return (
    <div>
      <section>
        <MenuDropdown textColor="black" />
        <Mobilemenu isLoggedIn="true" />
      </section>
    </div>
  );
}
