import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMetaMask from "@/hooks/useMetamask";

export default function Home() {
  // Create a state variable 'address' that will hold the user's account address.
  const [address, setAddress] = useState<string | null>();

  // Import 'account' and 'connectToMetaMask' from the custom hook 'useMetaMask'.
  const { account, connectToMetaMask } = useMetaMask();

  useEffect(() => {
    // If 'account' has a value, store it in localStorage under the key "address"
    // and also set the 'address' state variable to the current 'account' value.
    if (account) {
      localStorage.setItem("address", account);
      setAddress(account);
    }

    // If there's already an account address stored in localStorage under the key "address",
    // set the 'address' state variable to this stored address.
    if (localStorage.getItem("address")) {
      setAddress(localStorage.getItem("address"));
    }
  }, [account]); 


  return (
    <main className="container element">
      <div className="nav">
        <div className="navTitle">
          <p>
            Counter App built using
            <b> zkEVMs</b>, <b>foundry</b> and, <b>Next.js</b>
          </p>
          <a
            className="presentedBy"
            href="https://polygon.technology/advocate-program"
            target="_blank"
            rel="noopener noreferrer"
          >
            presented by{" "}
            <Image
              src="/advocates.png"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <div className="navRightBox">
          {address ? (
            <button className="button">{`${address.slice(
              0,
              5
            )}.....${address.slice(-5)}`}</button>
          ) : (
            <button className="button" onClick={connectToMetaMask}>
              connect wallet
            </button>
          )}
        </div>
      </div>

      <div className="counterBox">
        <div>
          <h1 className="counterText">12</h1>
          <div className="buttonBox">
            <button className="button">Increase ( +1 )</button>
            <button className="button">Decrease ( -1 )</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <a
          href="https://github.com/Polygon-Advocates/zkevm-nextjs-counter-dapp"
          className="footerLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="footerH2">
            GitHub
            <span className="arrow">-&gt;</span>
          </h2>
          <p className="footerP">Checkout this project repo</p>
        </a>

        <a
          href="https://polygon.technology/polygon-zkevm"
          className="footerLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="footerH2">
            zkEVM
            <span className="arrow">-&gt;</span>
          </h2>
          <p className="footerP">Bring Ethereum to everyone</p>
        </a>

        <a
          href="https://github.com/foundry-rs/foundry"
          className="footerLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="footerH2">
            Foundry
            <span className="arrow">-&gt;</span>
          </h2>
          <p className="footerP">Toolkit for Ethereum development</p>
        </a>

        <a
          href="https://nextjs.org/"
          className="footerLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="footerH2">
            Next.js
            <span className="arrow">-&gt;</span>
          </h2>
          <p className="footerP">The React Framework for the web</p>
        </a>
      </div>
    </main>
  );
}
