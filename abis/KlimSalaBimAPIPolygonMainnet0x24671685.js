export const KLIMSALABIM_ABI_MAINNET = [
  { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "NftReceived",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "startingLocation",
        "type": "string"
      },
      { "internalType": "uint256", "name": "distance", "type": "uint256" },
      {
        "internalType": "uint256",
        "name": "carbonToCompensate",
        "type": "uint256"
      },
      {
        "internalType": "enum KlimSalaBim.TravelModes",
        "name": "modeOfTravel",
        "type": "uint8"
      }
    ],
    "name": "compensateSingleParticipantTravel",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "compensatedTravels",
    "outputs": [
      {
        "internalType": "string",
        "name": "startingLocation",
        "type": "string"
      },
      { "internalType": "uint256", "name": "eventId", "type": "uint256" },
      {
        "internalType": "enum KlimSalaBim.TravelModes",
        "name": "modeOfTravel",
        "type": "uint8"
      },
      { "internalType": "uint256", "name": "distance", "type": "uint256" },
      {
        "internalType": "uint256",
        "name": "compensatedCarbon",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getParticipants",
    "outputs": [
      { "internalType": "address[]", "name": "", "type": "address[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "userAddress", "type": "address" }
    ],
    "name": "getTravelsCompensated",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "startingLocation",
            "type": "string"
          },
          { "internalType": "uint256", "name": "eventId", "type": "uint256" },
          {
            "internalType": "enum KlimSalaBim.TravelModes",
            "name": "modeOfTravel",
            "type": "uint8"
          },
          { "internalType": "uint256", "name": "distance", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "compensatedCarbon",
            "type": "uint256"
          }
        ],
        "internalType": "struct KlimSalaBim.SingleCompensatedTravel[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "operator", "type": "address" },
      { "internalType": "address", "name": "from", "type": "address" },
      { "internalType": "uint256", "name": "nftTokenId", "type": "uint256" },
      { "internalType": "bytes", "name": "data", "type": "bytes" }
    ],
    "name": "onERC721Received",
    "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "participants",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pauseContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalCarbonCompensated",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpauseContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
