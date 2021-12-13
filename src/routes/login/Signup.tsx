import React, { useCallback, useRef } from "react";
import "./login.css"

export const Signup: React.FC<any> = React.memo(() => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const printValue = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      console.log(inputRef.current?.value)
    },
    [],
  )
  return (
    <div className="container">
      <label htmlFor="email">Email</label>
      <input onBlur={printValue} type="text" name="email" id="email" ref={inputRef} />
    </div>
  );
});
