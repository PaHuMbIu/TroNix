import { FC } from "react";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

export const TONConnectPage: FC = () => {
  const wallet = useTonWallet();

  if (!wallet) {
    return (
      <div>
        <h2>TON Connect</h2>
        <p>To connect your wallet, click the button below:</p>
        <TonConnectButton />
      </div>
    );
  }

  const {
    account: { address, chain, publicKey },
  } = wallet;

  return (
    <div>
      <h2>Wallet Connected</h2>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Chain:</strong> {chain}
      </p>
      <p>
        <strong>Public Key:</strong> {publicKey}
      </p>
      <TonConnectButton />
    </div>
  );
};
