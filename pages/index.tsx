import type { NextPage } from 'next';
import { useWeb3React } from '@web3-react/core';

import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

const Home: NextPage = () => {
  const { active, account, chainId, library, connector, activate, deactivate } =
    useWeb3React();

  const CoinbaseWallet = new WalletLinkConnector({
    url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_KEY_MUMBAI_TESTNET}`,
    appName: 'Web3-react Demo',
    supportedChainIds: [80001],
  });


  const Injected = new InjectedConnector({
    supportedChainIds: [80001],
  });

  return (
    <>
      <h1>Klim-Sala-Bim</h1>
      <div><strong>Connection Status: </strong>{active ? 'connected' : 'not connected'}</div>
      <div><strong>Account:</strong> {account}</div>
      <div><strong>Network ID:</strong> {chainId}</div>
      <br />
      <button
        onClick={() => {
          activate(CoinbaseWallet);
        }}
      >
        Coinbase Wallet
      </button>
      <button
        onClick={() => {
          activate(Injected);
        }}
      >
        Metamask
      </button>

      <button onClick={deactivate}>Disconnect</button>
    </>
  );
};

export default Home;
