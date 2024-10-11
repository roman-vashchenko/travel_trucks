import React from "react";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <a className={css.logo} href="/">
        <svg width={136} height={16}>
          <use href="/icons.svg#logo"></use>
        </svg>
      </a>
    </>
  );
};

export default Logo;
