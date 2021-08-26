[![npm version](https://badge.fury.io/js/eth-address.svg)](https://badge.fury.io/js/eth-address)
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

## Usage

### Importing

#### JavaScript 
```js
const formatEthAddress = require('eth-address');
```

#### JavaScript (ES6) / TypeScript
```ts
import { formatEthAddress } from 'eth-address';
```

### Example

```ts
import { formatEthAddress } from 'eth-address';

const address = '0x61289A6b7819203749E409c7d62427Df7aD36dD7';

const formattedAddressWithDefaultChars = formatEthAddress(address);

// formattedAddressWithDefaultChars result
'0x6128...6dD7'

const charactersASide = 6;
const formattedAddressWith6Chars = formatEthAddress(address, charactersASide);

// formattedAddressWith6Chars result
'0x61289A...D36dD7'
```
