import type { NextPage } from 'next';
import { useWeb3React } from '@web3-react/core';
import { ethers, Contract } from 'ethers';

import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

import { KLIMSALABIM_ABI_TEST } from '../abis/KlimSalaBimABI';
const CONTRACT_ADDRESS_TEST = '0xee8a877E6b98b4B3ad9ABbf00164103CD6789557';

const Home: NextPage = () => {
  const { active, account, chainId, library, connector, activate, deactivate } =
    useWeb3React();

  const CoinbaseWallet = new WalletLinkConnector({
    url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_KEY_MUMBAI_TESTNET}`,
    appName: 'KlimSalaBim',
    supportedChainIds: [80001],
  });

  const Injected = new InjectedConnector({
    supportedChainIds: [80001],
  });

  return (
    <>
      {!active && (
        <div>
          <div style={{ display: 'flex', gridGap: '30px' }}>
            <button
              onClick={() => {
                activate(CoinbaseWallet);
              }}
            >
              <span className="button-text">Coinbase Wallet</span>
            </button>
            <button
              onClick={() => {
                activate(Injected);
              }}
            >
              <span className="button-text">Metamask</span>
            </button>
          </div>
        </div>
      )}
      {active && (
        <div>
          <div>DASHBOARD</div>
          {/* <button onClick={deactivate}>Disconnect</button> */}
        </div>
      )}
    </>
  );
};

export default Home;
