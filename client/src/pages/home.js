import React from 'react';
import axios from 'axios';
import { TransactionContext } from '../context/TransactionContext';
import { useContext, useEffect, useState } from "react";
import Nfts from "../components/Nfts"

const Home = () => {

    const [nfts, setNfts] = useState([])
    const { currentAccount } = useContext(TransactionContext);
  
    const url = `https://api.opensea.io/api/v1/collections?asset_owner=${currentAccount}&offset=0&limit=50`
  
    useEffect (() => {
      axios.get(url).then((response) => {
        setNfts(response.data)
        console.log(response.data)
      })
    }, [url])

  return (
      <div className='wrapper'>
        <h1>
            Connect your wallet to view information about collections you own a piece of
        </h1>

      <Nfts nfts={nfts}/>
      
      </div>
  )
}

export default Home