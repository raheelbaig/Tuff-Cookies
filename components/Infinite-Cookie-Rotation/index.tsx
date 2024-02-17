import React from "react";
import blueCircle from "@/assets/Infinite-Rotation/blue-circle.png";
import orangeCircle from "@/assets/Infinite-Rotation/orange-circle.png";
import cookie from "@/assets/Infinite-Rotation/cookie.png";
import style from "./style.module.css";
const InfiniteRotationCookie = () => {
 
  return (
    <div className={`${style.container} semiLg-mob:hidden`}>
      <img
        className={style.blue_circle_image}
        src={blueCircle.src}
        alt="blue-circle"
      />
      <img
        className={style.orange_circle_image}
        src={orangeCircle.src}
        alt="orange-circle"
      />
      <img className={style.cookie_image} src={cookie.src} alt="cookie" />
    </div>
  );
};

export default InfiniteRotationCookie;
