api.md

Fetching Crypto Data

We use CoinGecko API to fetch live cryptocurrency prices.

Data is retrieved from:

```
https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,cardano,solana&vs_currencies=usd
```

API response format:

```
{
"bitcoin": { "usd": 45000 },
"ethereum": { "usd": 3200 },
"dogecoin": { "usd": 0.25 }
}
```

Updating Data

Prices are updated automatically every 60 seconds using React Query's polling.

A manual refresh button allows users to fetch the latest prices instantly.
