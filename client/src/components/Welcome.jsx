import React from 'react'
import '../styles/styles.scss';
import { TransactionContext } from '../context/TransactionContext';
import { useContext } from "react";

const Welcome = () => {
  
  const { currentAccount } = useContext(TransactionContext);

  async function getOpenseaItems() {

    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch('https://api.opensea.io/api/v1/collections?asset_owner=0xA02e9EeE780F57d2AD4613D3fE48923cDE7d1161&offset=0&limit=300', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return (
    <div>
        <button onClick={getOpenseaItems}>OpenSea Items</button>
    </div>
  )
}

export default Welcome