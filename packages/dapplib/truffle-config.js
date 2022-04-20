require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remain mistake hunt slam flush spy'; 
let testAccounts = [
"0x28ca233a22b0090e1a43ffcdf8ea99cb534c37f330ab2672ed58842916d49a16",
"0x145fc367ef4e343ac3ba7c14fe9ae2d2c9af48a0364e6060ae25a0229dff19ec",
"0xfc61a950a13a6e337d9ff8b9fa3baa5952d35f15bd7f305d9c8cecaa803253a2",
"0xc30ac9a7f699b16841fc4aa3b311c27ad86191bdbf20c6cd5440d63f9fc9842d",
"0x59db728ede3336374d98ca8a51f8403d41147136670ba8b811e103987b95bffa",
"0xab6120fda340e9f99eeac64e0af09d881cc3dac4ff1571598221b55cabd4be0f",
"0x9f49f1c9bee7d0aa06bb89015ca6db11088c786a7c280e26fc5ee3e05bca47ce",
"0x34d8b8febc60a009b845abcfed2a86883eda27d79de1e88724dfed0b43112c90",
"0xaddf35ba92ede30bdc71639a54a05aca81322355fa0c377fc5f9b02b71cfa35e",
"0x3cb8310c824969b61bf740abedbde2a3788a15e659a8e73742f6adc04182df5e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

