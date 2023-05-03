import { BigNumber } from 'ethers';
import { IAssetWithBalance } from '../providers/EtherspotContextProvider';
import { CHAIN_ID } from './chain';
import { PLR_ADDRESS_PER_CHAIN } from '../constants/assetConstants';

export const plrDaoAsset: IAssetWithBalance = {
  address: '0xa6b37fc85d870711c56fbcb8afe2f8db049ae774',
  chainId: CHAIN_ID.POLYGON,
  name: 'Pillar',
  symbol: 'PLR',
  decimals: 18,
  logoURI: 'https://public.etherspot.io/buidler/chain_logos/polygon.svg',
  balance: BigNumber.from(0),
  assetPriceUsd: null,
  balanceWorthUsd: null,
};

export const testPlrDaoAsset: IAssetWithBalance = {
  address: '0x6D5862a18C6a169D44d02a8B726a02A5B707B484',
  chainId: CHAIN_ID.POLYGON,
  name: 'Deku (DKU)',
  symbol: 'DKU',
  decimals: 18,
  logoURI: 'https://public.etherspot.io/buidler/chain_logos/polygon.svg',
  balance: BigNumber.from(0),
  assetPriceUsd: null,
  balanceWorthUsd: null,
};

export const getPlrAssetForChainId = (
  chainId: number,
  balance: BigNumber = BigNumber.from(0),
): IAssetWithBalance => ({
  address: PLR_ADDRESS_PER_CHAIN[chainId],
  chainId,
  name: 'Pillar',
  symbol: 'PLR',
  decimals: 18,
  logoURI: 'https://assets.coingecko.com/coins/images/809/small/v2logo-1.png',
  balance,
  assetPriceUsd: null,
  balanceWorthUsd: null,
});

// TODO: replace with actual values once deployed to mainnet, deployment said to happen after qa passes
export const plrStakedAssetEthereumMainnet: IAssetWithBalance = {
  address: '0x',
  chainId: CHAIN_ID.ETHEREUM_MAINNET,
  name: 'Staked Pillar',
  symbol: 'stkPLR',
  decimals: 18,
  logoURI: 'https://assets.coingecko.com/coins/images/809/small/v2logo-1.png',
  balance: BigNumber.from(0),
  assetPriceUsd: null,
  balanceWorthUsd: null,
};

export const demoPlrStakedAssetEthereumMainnet: IAssetWithBalance = {
  address: '0xf50095bA07f77d86FD06CEBEDc53F88B37c1D3Bc',
  chainId: CHAIN_ID.ETHEREUM_MAINNET,
  name: 'Staked Pillar (DEMO)',
  symbol: 'stkPLR',
  decimals: 18,
  logoURI: 'https://assets.coingecko.com/coins/images/809/small/v2logo-1.png',
  balance: BigNumber.from(0),
  assetPriceUsd: null,
  balanceWorthUsd: null,
};

export const demoPlrEthereumMainnet: IAssetWithBalance = {
  address: '0x8314Af54080dF4d05768c5D3f097f59f170d9564',
  chainId: CHAIN_ID.ETHEREUM_MAINNET,
  name: 'Pillar (DEMO)',
  symbol: 'PLR',
  decimals: 18,
  logoURI: 'https://assets.coingecko.com/coins/images/809/small/v2logo-1.png',
  balance: BigNumber.from(0),
  assetPriceUsd: null,
  balanceWorthUsd: null,
};
