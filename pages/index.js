import Head from "next/head";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import Login from "../components/Login";
export default function Home() {
  const address = useAddress();
  return (
    <div className="bg-gradient-to-tl bg-gradient-to-tr from-violet-500 to-orange-300 h-screen">
      <div>
        {address ? (
          <h4>Connected as {address}</h4>
        ) : (
          <div className="grid h-screen place-items-center">
            <Login />
          </div>
        )}
      </div>
    </div>
  );
}
