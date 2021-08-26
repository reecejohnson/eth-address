import { formatEthAddress } from "./eth-address";

describe("Ethereum address", () => {
  const address = "0x61289A6b7819203749E409c7d62427Df7aD36dD7";
  it("should format an ethereum address", () => {
    const result = formatEthAddress(address);
    expect(result).toEqual("0x6128...6dD7");
  });

  it("should format an ethereum address with six characters", () => {
    const result = formatEthAddress(address, 6);
    expect(result).toEqual("0x61289A...D36dD7");
  });

  it("should only remove two characters when at char limit", () => {
    const result = formatEthAddress(address, 19);
    expect(result).toEqual("0x61289A6b7819203749E...9c7d62427Df7aD36dD7");
  });

  it("should return entire address when provided char value is too high", () => {
    const result = formatEthAddress(address, 20);
    expect(result).toEqual(address);
  });

  it("should throw error when address is invalid", () => {
    expect(() => formatEthAddress("invalidaddress", 6)).toThrow(
      "Provided value of 'invalidaddress' is not a valid Ethereum address."
    );
  });
});
