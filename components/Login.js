import React from "react";
import { useMetamask } from "@thirdweb-dev/react";

const Login = () => {
  const connectWithMetamask = useMetamask();
  return (
    <div>
      <button
        onClick={connectWithMetamask}
        className="bg-gradient-to-r from-fuchsia-600 to-pink-600 p-5 text-xl font-bold text-white rounded-full"
      >
        Sign in with Metamask
      </button>
      <p className="text-white pt-9 hover:underline">
        <a
          href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
          target="_blank"
        >
          No metamask? Download from here
        </a>
      </p>
    </div>
  );
};

export default Login;
