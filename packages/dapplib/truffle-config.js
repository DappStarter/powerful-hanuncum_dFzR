require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remember around hover problem occur type'; 
let testAccounts = [
"0x2985124b46c587d131dcf3d09829808957b3cadd44f0c112318da1368e873eaf",
"0x6af7a86a2d114c91662b9f8970a2d566e96abde8d9ffea8b5995a15b0de5d1df",
"0x12254d05127796ece9f5139898f3fc2f9035dee13c81a7d9dfcf7361491a9917",
"0x39187fbf0b53f60c78206e57faccab0f4f1df6151a5894d67d65868539b60bad",
"0x840a9a62d604b9edae8a19267b31900677e28b46d8caf233ff22685748ea6eb3",
"0x870b77264356c5a25e0b02078a75b2d2dfe292edb8c5a8ef9b792012db6b23ba",
"0xef523b5d6eee5b11afb9a08086113853f9167b8f58651618f5e94348b255c1c1",
"0xb6f869efa849c84082601862c5a248250e8ce8b26f2febed183a1238f12c9280",
"0xcc45fc59fd24924370dde2d36fdc662055e8e3c75096ff1490735359046d448b",
"0xb12ad0458c9f74ca9df0b1b8bb794ec8004766b58d47a4ec8b48b411e31686d2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

