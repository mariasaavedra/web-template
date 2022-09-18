import React, { SyntheticEvent, useState } from "react";
import useInput from "../../hooks/useInput";


const LoginPage = () => {


  return (
    <div className="bg-[#80BD02] h-screen">
      <img
        className="mx-auto pt-20"
        src="/images/white-logo.png"
        width="400px"
        alt="logo"
      />
      <div className="flex items-center justify-center">
        <div>
          <img src="/images/truck.png" alt="truck" />
          <div>
            <button className="p-4 my-2 rounded-lg bg-naturalGrey-800 text-[#fff] w-1/2">Login</button>
            <button className="p-4 my-2 rounded-lg bg-white  border-white border-solid border text-[#fff] w-1/2">Sign Up</button>
            <button className="p-4 my-2 w-full block border border-white border-solid border-naturalGrey-50 rounded-lg text-[#fff]">
              Show Classes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
