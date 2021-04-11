import tokens from '@/_generated/tokens/tokens-volta.json';
import contracts from '@/_generated/contracts/contract-abi-volta.json';
import volta from '@/assets/images/networks/volta.svg';

export default {
  name: 'Volta',
  homePage: 'https://volta-rpc.energyweb.org/',
  blockExplorerTX: 'https://volta-explorer.energyweb.org/tx/[[txHash]]',
  blockExplorerAddr: 'https://volta-explorer.energyweb.org/account/[[address]]',
  chainID: 73799,
  tokens: tokens,
  contracts: contracts,
  icon: vt,
  currencyName: 'VT'
};
