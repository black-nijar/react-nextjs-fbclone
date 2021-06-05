import { signIn } from "next-auth/client";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="grid place-items-center mt-10 ">
      <Image
        src={`https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg`}
        height={200}
        width={200}
        objectFit="contain"
      />
      <h1
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer mt-10"
        onClick={signIn}
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
