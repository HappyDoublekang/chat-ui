import React, { Children } from "react";

function Button({ label, children }) {
  return (
    <div>
      <button>{label}</button>
      {children}
    </div>
  );
}

export default Button;