import React from "react";

import styles from "../../styles/Option.module.css";

function ContainerOption(props) {
  return <ul className={styles.checkCustom}>{props.children}</ul>;
}

function Option(props) {
  const { active } = props;

  return (
    <li>
      <input
        type="checkbox"
        id={props.value}
        value={props.value}
        onClick={(e) => console.log("")}
        onChange={(e) => (active ? active(!e.target.checked) : {})}
      />
      <label htmlFor={props.value}>{props.text}</label>
    </li>
  );
}

export default Option;

export { ContainerOption };
