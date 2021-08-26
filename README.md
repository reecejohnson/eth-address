# eth-address

A lightweight library to format ethereum addresses.

## Installation

### npm
```
npm install eth-address
```

### yarn
```
yarn add eth-address
```

## Functions

### formatEthereumAddress

```ts
formatEthAddress(address: string, chars: number = 4): string;
```

Formats a given Ethereum address at the desired length each side of the "..." separator. 