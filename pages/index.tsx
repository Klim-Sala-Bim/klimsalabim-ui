import type { NextPage } from 'next';
import { useWeb3React } from '@web3-react/core';
import { ethers, Contract } from 'ethers';

import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

import { KLIMSALABIM_ABI_TEST } from '../abis/KlimSalaBimABI';
import { useState } from 'react';
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

  /** "selected" here is state variable which will hold the
* value of currently selected dropdown.
*/
  const [selected, setSelected] = useState<String>();

  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
  };

  /** This will be used to create set of options that user will see */
  let option = null;

  /** Setting options variable according to dropdown */
  if (selected === "Chennai") {
    option = "MAA";
  } else if (selected === "Gothenburg") {
    option = "GOT";
  } else if (selected === "Istanbul") {
    option = "IST";
  } else if (selected === "Manchester") {
    option = "MAN";
  } else if (selected === "Zurich") {
    option = "ZUR";
  }

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
          <div>Choose your Origin location below</div>
          {/* <button onClick={deactivate}>Disconnect</button> */}
          <br/>
          <br/>
          <form>
            <div>
              <select onChange={changeSelectOptionHandler}>
                <option>Choose...</option>
                <option>Chennai</option>
                <option>Gothenburg</option>
                <option>Istanbul</option>
                <option>Manchester</option>
                <option>Zurich</option>
              </select>
            </div>
            <br/>
            <br/>
            <div> Route Map</div>
            <br/>
            <div>
                {
                  /** This is where we have used our options variable */
                  // Based on the variable we need to display the map from public folder
                  option
                } to AMS
            </div>
            <br/>
            <br/>
            
            <div>
              <img src='../Chennai.png'></img>
            </div>
          </form>

        </div>
      )}
    </>
  );
};

export default Home;
