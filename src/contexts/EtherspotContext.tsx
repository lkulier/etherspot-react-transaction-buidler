import React, { createContext } from 'react';
import { Sdk as EtherspotSdk } from 'etherspot/dist/sdk/sdk';
import {
  AccountBalance,
  WalletProviderLike,
  Web3WalletProvider,
} from 'etherspot';

import { IAssetWithBalance, IAsset, ITotalWorthPerAddress, IBalanceByChain } from '../providers/EtherspotContextProvider';
import { Chain } from '../utils/chain';

export interface EtherspotContextData {
  data: {
    accountAddress: string | null;
    providerAddress: string | null;
    connect: () => Promise<string | undefined>;
    chainId: number;
    setChainId: (chainId: number) => void;
    getSdkForChainId: (chainId: number, forceNewInstance?: boolean) => EtherspotSdk | null;
    isConnecting: boolean;
    sdk: EtherspotSdk | null;
    balancePerChainSmartWallet: IBalanceByChain[] | null;
    getSupportedAssetsForChainId: (chainId: number) => Promise<IAsset[]>;
    getAssetsBalancesForChainId: (assets: IAsset[], chainId: number, address?: string | null, recompute?: boolean ) => Promise<AccountBalance[]>;
    getSupportedAssetsWithBalancesForChainId: (chainId: number, positiveBalancesOnly?: boolean, address?: string | null, recompute?: boolean ) => Promise<IAssetWithBalance[]>;
    getSmartWalletBalancesPerChain: (walletAddress: string, supportedChains: Chain[]) => Promise<any>;
    getAccountBalanceByChainId: (chainId: number, address?: string | null) => Promise<any>;
    web3Provider: WalletProviderLike | Web3WalletProvider | null;
    totalWorthPerAddress: ITotalWorthPerAddress;
    logout: () => void;
    smartWalletOnly: boolean;
  }
}

const EtherspotContext = createContext<EtherspotContextData | null>(null);

export default EtherspotContext;
