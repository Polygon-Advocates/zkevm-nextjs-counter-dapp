# Counter DApp
![Dapp banner](./assets/full-stack-counter-dapp.jpg)  

This project is a simple decentralized counter application (DApp) that demonstrates how to build a full-stack DApp using Next.js, Web3.js, Foundry, and Polygon zkEVM. Users can interact with the counter by incrementing and decrementing its value through a user-friendly interface.

## Technologies

- **Frontend**: Next.js - A React-based framework for server-rendered applications.
- **Blockchain Interaction**: Web3.js - A JavaScript library for interacting with Ethereum-based blockchains.
- **Smart Contracts**: Foundry - A Rust-based smart contract development framework for writing, testing, and deploying contracts.
- **Blockchain Network**: Polygon zkEVM - A Layer 2 Ethereum-compatible scalable network, utilizing zero-knowledge rollups for efficient and secure transactions.

## Getting Started

### Prerequisites

- Node.js (>= 14.x.x)
- Yarn (>= 1.22.x)
- Foundry CLI

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your_username/counter-dapp.git
   cd counter-dapp
   ```

2. Install the frontend dependencies:

   ```
   cd frontend
   yarn install
   ```

3. Compile and deploy the smart contract:

   ```
   cd ../contracts
   foundry build
   foundry deploy
   ```

   Make sure to copy the deployed contract address for the next step.

4. Configure the frontend:

   Create a `.env.local` file in the `frontend` directory with the following content:

   ```
   NEXT_PUBLIC_CONTRACT_ADDRESS=YOUR_DEPLOYED_CONTRACT_ADDRESS
   NEXT_PUBLIC_RPC_URL=YOUR_RPC_URL
   ```

   Replace `YOUR_DEPLOYED_CONTRACT_ADDRESS` with the contract address from the previous step, and `YOUR_RPC_URL` with a valid RPC URL for the Polygon zkEVM network.

5. Run the frontend development server:

   ```
   cd ../frontend
   yarn dev
   ```

   The application should now be accessible at [http://localhost:3000](http://localhost:3000).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.