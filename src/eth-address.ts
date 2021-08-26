import { isAddress } from "@ethersproject/address";

/**
 * Truncate an Ethereum address for display purposes.
 * @param address Address to format
 * @param chars Number of chars to show either side
 * @returns string Formatted address
 * @throws Error
 */
export function formatEthAddress(address: string, chars: number = 4): string {
  const parsedAddress = isAddress(address);
  if (!parsedAddress) {
    throw Error(
      `Provided value of '${address}' is not a valid Ethereum address.`
    );
  }

  const maxNumberOfCharToShowEitherSide = address.length / 2 - 2;
  if (chars > maxNumberOfCharToShowEitherSide) {
    return address;
  }

  return `${address.substring(0, chars + 2)}...${address.substring(
    42 - chars
  )}`;
}
