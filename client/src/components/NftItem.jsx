import React from 'react'

const NftItem = (props) => {
  return (
    <div className='cards'>
      <div>
        <img src={props.nfts.image_url} alt=''/>
      </div>
      <div>
        <p className='name'>{props.nfts.name}</p>
        <p>Items: {props.nfts.stats.count}</p>
        <p>Owners: {props.nfts.stats.num_owners}</p>
        <p>Floor Price: {props.nfts.stats.floor_price} ETH</p>
        <p>Total Volume: {props.nfts.stats.total_volume.toFixed(2)} ETH</p>
        </div>
    </div>
  )
}

export default NftItem