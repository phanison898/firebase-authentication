"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { DispatchType } from "../store/store";
import { setUser, clearUser } from "../store/authslice";
import Image from "next/image";

type Props = {};

const SignIn: React.FC = (props: Props) => {
  const dispatch = useDispatch<DispatchType>();

  const signin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;
      dispatch(
        setUser({
          uid: loggedInUser.uid,
          email: loggedInUser.email,
          displayName: loggedInUser.displayName,
          photoURL: loggedInUser.photoURL,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(clearUser());
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="signin w-[300px] h-[300px] flex flex-col justify-center items-center gap-5 p-5 rounded-lg shadow-md border-2 border-blue-100">
        <Image
          src="https://raw.githubusercontent.com/phanison898/github-drive/refs/heads/main/logo.png"
          alt="Sign In Logo"
          width={100}
          height={100}
        />
        <button
          onClick={signin}
          className="w-full h-auto p-2 flex justify-center items-center text-white bg-blue-600 rounded-md shadow-sm"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
