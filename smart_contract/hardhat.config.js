require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/iqJibMxnra5SxTTCkVBJdOzEkJxXUzvD',
      accounts: [ '6b9c7afbf0cb8bfd77f82e9985a7f69206e641723059e3c078fc88ff2ed73e5b' ]
    }
  }
}