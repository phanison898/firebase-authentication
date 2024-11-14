"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, DispatchType, persistor } from "../store/store";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { clearUser } from "../store/authslice";

type Props = {};

const DashBoard = (props: Props) => {
  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch = useDispatch<DispatchType>();

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
      persistor.purge();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[400px] h-[450px] flex flex-col justify-start items-center p-5 gap-5 shadow-md rounded-md">
        <div className="w-full flex justify-end items-center cursor-pointer">
          <LogOut onClick={logout} />
        </div>
        <Image
          className="rounded-full shadow-sm"
          src={user?.photoURL || ""}
          alt="profile picture"
          width={100}
          height={100}
        />
        <div className="w-full h-auto px-4 py-2 flex items-center gap-10 border-b-2">
          <p className="font-bold text-sm">ID :</p>
          <p className="text-sm">{user?.uid}</p>
        </div>
        <div className="w-full h-auto px-4 py-2 flex items-center gap-5 border-b-2">
          <p className="font-bold text-sm">Name :</p>
          <p className="text-sm">{user?.displayName}</p>
        </div>
        <div className="w-full h-auto px-4 py-2 flex items-center gap-5 border-b-2">
          <p className="font-bold text-sm">Email :</p>
          <p className="text-sm">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
