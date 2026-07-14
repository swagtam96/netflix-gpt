//import React from "react"

import Header from "../components/Header";
import { BgBanner } from "../utils/PageLinks";
import SignBtn from "./SignBtn";

const BodyLayout = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="flex justify-between sticky items-center z-50 top-0 ">
        <Header />
        <SignBtn />
      </div>

      <img className="absolute top-0 z-0" src={BgBanner} alt="banner"></img>
      <div className="absolute top-0 z-0  bg-black/80  min-h-screen w-full"></div>
      <main className="absolute flex flex-col justify-center items-center  text-white pt-40 px-120">
        <h1 className="text-6xl font-bold">Unlimited movies,</h1>
        <h1 className="text-6xl font-bold">shows, and more</h1>
        <h3 className="text-xl mt-3">Starts at ₹149. Cancel at any time.</h3>
      </main>
    </div>
  );
};

export default BodyLayout;
