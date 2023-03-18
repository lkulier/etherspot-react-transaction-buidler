import { BigNumber, ethers } from 'ethers';
import { WalletProviderLike, Web3WalletProvider } from 'etherspot';

// constants
import {
  DEMO_PLR_STAKING_ADDRESS_ETHEREUM_MAINNET,
} from '../constants/assetConstants';

export const getStakingV2StakedAmount = async (
  address: string,
  web3Provider: WalletProviderLike | Web3WalletProvider,
): Promise<BigNumber> => {
  let stakedAmount = BigNumber.from(0);

  try {
    const stakingV2Contract = new ethers.Contract(
      DEMO_PLR_STAKING_ADDRESS_ETHEREUM_MAINNET,
      ['function getStakedAmountForAccount(address) view returns (uint256)'],
      // @ts-ignore
      new ethers.providers.Web3Provider(web3Provider.web3),
    );
    stakedAmount = await stakingV2Contract.getStakedAmountForAccount(address);
  } catch (e) {
    //
  }

  return stakedAmount;
};
