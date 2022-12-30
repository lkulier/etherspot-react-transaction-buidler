import { SessionStorage } from 'etherspot';

import {
  getItem,
  setItem,
} from './storage';

class LocalSessionStorage extends SessionStorage {
  constructor () {
    super();
  }

  setSession = async (walletAddress: string, session: Object) => {
    console.log("walletAddress__set", walletAddress, session)
    if (walletAddress) {
      setItem(`session-${walletAddress}`, JSON.stringify(session))
    }
  }

  getSession = (walletAddress: string) => {
    let result = null;
    console.log("walletAddress__get", walletAddress)

    try {
      const raw = getItem(`session-${walletAddress}`)
      result = raw ? JSON.parse(raw) : null
    } catch (err) {
      //
    }

    return result
  }

  resetSession = (walletAddress: string) => {
    console.log("walletAddress__reset", walletAddress)
    setItem(`session-${walletAddress}`, '');
  }
}

export const sessionStorageInstance = new LocalSessionStorage();
