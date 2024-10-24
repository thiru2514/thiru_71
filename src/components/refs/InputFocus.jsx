import React, { useEffect, useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);
  // const inputRef2 = useRef(null);

  const handleFocus = (e) => {
    // e.preventDefault();
    // inputRef.current.focus(); // Directly access the DOM input and focus it
  };

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <>
      <form action="" className="profile-form">
        <input type="text" ref={inputRef} placeholder="Enter your name" />
        <input type="password" className="password" placeholder="Enter your password" />
        <button onClick={handleFocus}>Sign in</button>
      </form>
    </>
  );
};

export default InputFocus;
