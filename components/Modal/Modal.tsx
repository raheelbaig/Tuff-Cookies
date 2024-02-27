"use client";
import React, { useEffect, useState } from "react";
// import "./style.scss";
import styles from "./style.module.css";
const Container = ({ displayModal, hideOnBlur, children }:{displayModal:boolean,hideOnBlur:() => void,children:React.ReactNode}) => {
  const [displayModalState, setModalDisplayState] = useState(false);

  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    if (displayModal) {
      setModalDisplayState(displayModal);
    } else {
      timeOut = setTimeout(() => {
        setModalDisplayState(displayModal);
      }, 1000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [displayModal]);

  const handleMdal = () => {}
  return displayModalState ? (
    <div
      onClick={hideOnBlur}
      className={`${styles.modalContainer} ${
        displayModal ? styles.active : styles.default
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.contentSection} ${
          displayModal ? styles.active : styles.default
        }`}
      >
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};
const Header = (props:{children:React.ReactNode}) => {
  return <div className={`${styles.headerSection}`}>{props.children}</div>;
};
const Body = (props:{children:React.ReactNode}) => {
  return (
    <div className={`${styles.bodySection}`}>
      
      {props.children}
    </div>
  );
};
const Footer = ({ children }:{ children:React.ReactNode }) => {
  return (
    <div className={`${styles.footerSection} justify-start`}>{children}</div>
  );
};

export default {
  Container,
  Header,
  Body,
  Footer,
};