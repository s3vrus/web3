import React from 'react'
import NftItem from './NftItem'

const Nfts = (props) => {
  return (
    <div className='card-container'>

        {props.nfts.map(nfts => {
            return (
                <NftItem nfts={nfts} key={nfts.name}/>
            )
        })}

    </div>
  )
}

export default Nfts