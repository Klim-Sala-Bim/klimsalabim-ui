import type { NextPage } from 'next';
import { useWeb3React } from '@web3-react/core';
import { ethers, Contract, BigNumber } from 'ethers';

import Card from '../components/Card';

import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

import { KLIMSALABIM_ABI_TEST } from '../abis/KlimSalaBimABI';
import { KLIMSALABIM_ABI_MAINNET } from '../abis/KlimSalaBimAPIPolygonMainnet0x24671685';
import { useState } from 'react';
const CONTRACT_ADDRESS_TEST = '0xee8a877E6b98b4B3ad9ABbf00164103CD6789557';
const CONTRACT_ADDRESS_MAINNET = '0x246716856349a0931eefAA42be86e58C3B385a90';

const Home: NextPage = () => {
  const { active, account, chainId, library, connector, activate, deactivate } =
    useWeb3React();

  const cityCarbonOffsetMapping: { [key: string]: number } = {
    Chennai: 123,
    Gothenburg: 132,
    Istanbul: 345,
    Manchester: 456,
    Zurich: 100,
  };

  const CoinbaseWallet = new WalletLinkConnector({
    // url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_KEY_MUMBAI_TESTNET}`,
    url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_KEY_MUMBAI_MAINNET}`,
    appName: 'KlimSalaBim',
    supportedChainIds: [137, 80001],
  });

  const Injected = new InjectedConnector({
    supportedChainIds: [137, 80001],
  });

  /** "selected" here is state variable which will hold the
   * value of currently selected dropdown.
   */
  const [selected, setSelected] = useState<String>();
  const [distanceKm, setDistancetKm] = useState<Number>();

  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setSelected(value);
    setDistancetKm(cityCarbonOffsetMapping[value]);
  };

  /** This will be used to create set of options that user will see */
  let option = null;
  let imageSource = '';

  /** Setting options variable according to dropdown */
  if (selected === 'Chennai') {
    option = 'MAA';
    imageSource = '../Chennai.png';
  } else if (selected === 'Gothenburg') {
    option = 'GOT';
    imageSource = '../Gothenburg.png';
  } else if (selected === 'Istanbul') {
    option = 'IST';
    imageSource = '../Istanbul.png';
  } else if (selected === 'Manchester') {
    option = 'MAN';
    imageSource = '../Manchester.png';
  } else if (selected === 'Zurich') {
    option = 'ZUR';
    imageSource = '../Zurich.png';
  }

  const sendMatic =  async () => {
    const contract = new Contract(
      CONTRACT_ADDRESS_MAINNET,
      KLIMSALABIM_ABI_MAINNET,
      library.getSigner()
    );

    const wallet = await library.getSigner().getAddress();

    const res = await contract.compensateSingleParticipantTravel(
      'Gothenburg',
      1337,
      10000000000000000,
      0,
      { sender: wallet, value: 54882117495512018 }
    );
    
    console.log(res);
  };

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
        <div style={{ border: '1px solid red' }}>
          {option ? (
            <div
              style={{
                display: 'grid',
                gridGap: '30px',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              <div>
                <h3>Route Map</h3> {option} to AMS
                <img
                  style={{ borderRadius: '24px', maxWidth: '400px' }}
                  src={imageSource}
                ></img>
              </div>
              <div>
                distance: {distanceKm}
                <button onClick={sendMatic}>Send MATIC</button>
              </div>
            </div>
          ) : (
            <div>
              <h2>Choose your Origin location below</h2>
              <select onChange={changeSelectOptionHandler}>
                <option>Choose...</option>
                <option>Chennai</option>
                <option>Gothenburg</option>
                <option>Istanbul</option>
                <option>Manchester</option>
                <option>Zurich</option>
              </select>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
