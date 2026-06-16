import { Connection } from "@solana/web3.js";

export async function mintCNFT(
  wallet: string,
  metadata: any
) {
  return {
    success: true,
    owner: wallet,
    metadata
  };
}
