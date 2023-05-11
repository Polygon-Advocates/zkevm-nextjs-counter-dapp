import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const styles = {
  // Nav styles
  container: `flex min-h-screen flex-col items-center justify-between p-24 ${montserrat.className}`,
  nav: "z-10 items-center justify-between w-full max-w-5xl text-sm lg:flex",
  navTitle:
    "fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",
  codeText: "ml-2 font-bold",
  navRightBox:
    "fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",
  navLink:
    "flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0",

  // Counter styles
  counterBox:
    "relative flex place-items-center before:absolute before:h-[300px] before:w-[880px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:#6e38cc before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:#6e38cc after:#6e38cc after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:#6e38cc after:dark:from-sky-900 after:dark:via-[#8a46ff]/40 before:lg:h-[360px]",
  counterText:
    "relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-8xl text-center p-8 font-bold",
    buttonBox: "text-center p-5",
  button:
    "text-white text-center uppercase cursor-pointer bg-gradient-to-b from-[#8a46ff] to-[#6e38cc] rounded-full px-8 py-4 text-xs font-medium no-underline transition-all duration-200 relative m-5 hover:opacity-[90%]",

  // Footer styles
  footer: "grid mb-32 text-center lg:mb-0 lg:grid-cols-4 lg:text-left",
  footerLink:
    "px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
  footerH2: "mb-3 text-2xl font-semibold",
  arrow:
    "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
  footerP: "m-0 max-w-[30ch] text-sm opacity-50",
};

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.nav}>
        <p className={styles.navTitle}>
          Counter App built using
          <code className={styles.codeText}>zkEVMs, foundry and, Next.js</code>
        </p>
        <div className={styles.navRightBox}>
          <a
            className={styles.navLink}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            presented by{" "}
            <Image
              src="/advocates.png"
              alt="Vercel Logo"
              width={150}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.counterBox}>
        <div>
          <h1 className={styles.counterText}>12</h1>
          <div className={styles.buttonBox}>
            <button className={styles.button}>Increase (+1)</button>
            <button className={styles.button}>Decrease (-1)</button>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <a
          href="#"
          className={styles.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.footerH2}>
            GitHub
            <span className={styles.arrow}>-&gt;</span>
          </h2>
          <p className={styles.footerP}>Checkout this project</p>
        </a>

        <a
          href="#"
          className={styles.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.footerH2}>
            zkEVM
            <span className={styles.arrow}>-&gt;</span>
          </h2>
          <p className={styles.footerP}>Bring Ethereum to everyone</p>
        </a>

        <a
          href="https://zkevm.polygon.technology/docs/develop/"
          className={styles.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.footerH2}>
            Foundry
            <span className={styles.arrow}>-&gt;</span>
          </h2>
          <p className={styles.footerP}>Start Building on Polygon zkEVM</p>
        </a>

        <a
          href="https://polygon.technology/advocate-program"
          className={styles.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.footerH2}>
            Next.js
            <span className={styles.arrow}>-&gt;</span>
          </h2>
          <p className={styles.footerP}>Join the BFFs club</p>
        </a>
      </div>
    </main>
  );
}
