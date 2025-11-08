export const Success = "Success"
export const Processing = "Processing"
export const Reversal = "Reversal"


export const nairaSymbol = "₦"
export const BuyAndSellRateDifference = 0.04



export const cryptoLogos = {
  ethereum: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023",
  bsc: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=023",
  bitcoin: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023",
  solana: "https://cryptologos.cc/logos/solana-sol-logo.png?v=023",
  polygon: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=023",
  arbitrum: "https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=023",
  avalanche: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=023",
  tron: "https://cryptologos.cc/logos/tron-trx-logo.png?v=023",
  dogecoin: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=023",
  cardano: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=023",
  binance: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=023",
  bep20: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=023",

};

export const stablecoinLogos = {
  usdt: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=025",
  usdc: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=025"
}


export const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat("en-US", {
    // style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
  }).format(value);
}






const formatFullDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}


// Format time to: 2:30 PM
const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}


export const formatFullDateTime = (date) => {
  const dateObj = new Date(date);
  return `${formatFullDate(dateObj)} ${formatTime(dateObj)}`;
}


export const getStableCoinLogo = (coin) => {
  const logo = stablecoinLogos[coin.toLowerCase()]
  return logo  ? logo : stablecoinLogos["usdc"]
}