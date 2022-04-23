export const KLIMSALABIM_ABI_TEST = [
  { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
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
          },
          {
            "internalType": "uint256",
            "name": "toucanBadgeID",
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
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "participants",
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
      },
      { "internalType": "uint256", "name": "toucanBadgeID", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalCarbonCompensated",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }
]