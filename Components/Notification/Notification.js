import { useEffect, useState } from "react";
import { FaInfoCircle, FaRegBell } from "react-icons/fa";
import React from "react";
import ReactDOM from "react-dom";
import { Dropdown } from "rsuite";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function Notification(props) {
  const { tooltiptext,textcolor } = props;
  const [notification, setNotication] = useState([]);

  const getNotification = () => {
    // todo use axios to fetch notificationfrom the server and save on the state
    setNotication([
      {
        userdetails: {
          name: "kingsley achumie",
          image: "/christmas.png",
        },
        notification:{
            message:"i looked at your pix",
            date:"2 months ago"
        }
      },
      {
        userdetails: {
          name: "kingsley mike",
          image: "/christmas.png",
        },
        notification:{
            message:"we dont do that",
            date:"3 months ago"
        }
      },
    ]);
  };
  useEffect(() => {
    getNotification();
  }, []);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div role="infotooltip">{tooltiptext}</div>
    </Tooltip>
  );
  const CustomDropdown = ({ ...props }) => (
    <Dropdown {...props} renderToggle={renderButton} className="rounded-2xl">
      <div className="p-[20px] min-w-[300px] " role="popupmenu">
        <div className="flex flex-nowrap">
          <div className="w-[60%] self-center ">
            <h4 className="text-[#000]  text-[22px]">Notification</h4>
          </div>
          <div className="grid w-[100%] ">
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <div
                className=" grid  justify-self-end w-[30px] "
                role="infoicon"
              >
                <FaInfoCircle className=" text-[18px] text-[#ccc]" />
              </div>
            </OverlayTrigger>
          </div>
        </div>
        <div>
          {notification.map((value) => (
            <Dropdown.Item className="p-[0] mb-[10px] pt-[8px] pb-[8px] hover:bg-white hover:text-[#000]" key={value.id} role="region" aria-label="notification details">
              <div className="flex">
                <div>
                    <Image src={value.userdetails.image} alt={value.userdetails.name} width={60} height={60} className="rounded-full" />
                </div>
                <div className="pl-[15px]">
                    <div role="region" aria-label={value.notification.message} className="text-sm font-medium text-slate-900"> {value.notification.message}</div>
                    <div role="region" className="text-sm text-slate-500"> {value.notification.date}</div>
                </div>

              </div>
            </Dropdown.Item>
          ))}
        </div>
      </div>
    </Dropdown>
  );

  const renderButton = (props, ref) => {
    return (
      <div {...props} ref={ref} className="w-[30px]">
        <FaRegBell className={`text-[18px] text-[${textcolor}]`} />
      </div>
    );
  };

  //   return (

  //         <OverlayTrigger trigger="click" placement="bottom" overlay={popover} className="w-[30px] h-[30px] bg-white flex items-end justify-center rounded-full p-1"  >
  //         <FaRegBell  className=" text-[18px]  "  />
  //         {
  //             //  className="w-[30px] h-[30px] bg-white flex items-end justify-center rounded-full p-1"
  //         }
  //         </OverlayTrigger>

  //   );

  return <CustomDropdown trigger="hover" role="hoverbutton" placement={"bottomEnd"} />;
}
