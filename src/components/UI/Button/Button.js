// --------------------------------------
// METHOD 1: using styled-components
// --------------------------------------
// import styled from "styled-components";

// 1. we can apply styles directly to the button without specifying the selectors
// 2. for pseudo class, we use `&` to replace `.button:focus`. & means the class name that will be created by the lib
// the styled-compnents generates randomly unique class name behind the scence
// that is how it scopes the style to this component only
// *** IMPORTANT ***
// this styled.button returns a REACT COMPONENT which also takes in props
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// --------------------------------------
// METHOD 2: using css modules
// --------------------------------------
import React from "react";
// *** IMPORTANT ***
// to use css modules
// 1. we have to import the style this way
// 2. rename the css file from `Button.css` to `Button.module.css`
// 3. use className as styles.someKey
// the css module converts the css file into big object, the selector in the css file will be the object key
// hence, we can do `styles.test` or `styles.button`
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>

    // if we need to dynamically add more classes then:
    // <button type={props.type} className={`${styles.button} ${!isValid && 'inValid'}`} onClick={props.onClick}>
    //   {props.children}
    // </button>
  );
};

export default Button;
