import { useState, useCallback } from "react";

// Define a custom hook called useMetaMask
function useMetaMask() {
  // Initialize account state with null as initial value
  const [account, setAccount] = useState(null);

  // Initialize error state with null as initial value
  const [error, setError] = useState<string | null>(null);

  // Define a function to connect to MetaMask using the useCallback hook
  const connectToMetaMask = useCallback(async () => {
    // Check if the browser has an injected ethereum provider (MetaMask)
    // @ts-ignore
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request account access to MetaMask
        //@ts-ignore
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // If user approves MetaMask access, accounts contains array of user's accounts
        const currentAccount = accounts[0];
        // Set the account state with the first account in the array
        setAccount(currentAccount);
        // Reset the error state
        setError(null);
        // Return the first account as the result
        return currentAccount;
      } catch (err) {
        // If there is an error while trying to connect to MetaMask
        // Set the error state with the error message
        setError(`${err}`);
        return null;
      }
    } else {
      // If MetaMask is not installed, set error state indicating MetaMask isn't installed
      setError("MetaMask is not installed.");
      return null;
    }
  }, []);

  // Return an object with the account state, error state and the connectToMetaMask function
  return { account, error, connectToMetaMask };
}

// Export the useMetaMask custom hook
export default useMetaMask;
