export const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_contest",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_date",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_maxTickets",
        "type": "uint256"
      }
    ],
    "name": "addEvent",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "date",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxTickets",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sellsTickets",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "validateTickets",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "internalType": "struct OlympicEvent.OlympicEventStruct",
        "name": "tmpOlympicEvent",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "addOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_contest",
        "type": "string"
      }
    ],
    "name": "checkEventExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_ticketId",
        "type": "bytes32"
      }
    ],
    "name": "checkTicket",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_ticketNumber",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "_contest",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "_ticketType",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "_pubKey",
        "type": "address"
      }
    ],
    "name": "createTicketStaff",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "isStaff",
            "type": "bool"
          },
          {
            "internalType": "string",
            "name": "contest",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "ticketNumber",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "buyAt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expireAt",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "ticketType",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "used",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "scannedBy",
            "type": "address"
          }
        ],
        "internalType": "struct Ticket.TicketStruct",
        "name": "ticket",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_contest",
        "type": "string"
      }
    ],
    "name": "createTicketVisitor",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "isStaff",
            "type": "bool"
          },
          {
            "internalType": "string",
            "name": "contest",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "ticketNumber",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "buyAt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expireAt",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "ticketType",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "used",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "scannedBy",
            "type": "address"
          }
        ],
        "internalType": "struct Ticket.TicketStruct",
        "name": "ticket",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "deleteOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_contest",
        "type": "string"
      }
    ],
    "name": "getEvent",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "date",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxTickets",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sellsTickets",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "validateTickets",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "internalType": "struct OlympicEvent.OlympicEventStruct",
        "name": "olympicEvent",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getOwnRole",
    "outputs": [
      {
        "internalType": "enum Role.ROLE",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getOwnTickets",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_contest",
        "type": "string"
      }
    ],
    "name": "getRemainingPlaceNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "remainingPlaceNumber",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_publicKey",
        "type": "address"
      }
    ],
    "name": "getRoleByAddress",
    "outputs": [
      {
        "internalType": "enum Role.ROLE",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_ticketId",
        "type": "bytes32"
      }
    ],
    "name": "getTicket",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "isStaff",
            "type": "bool"
          },
          {
            "internalType": "string",
            "name": "contest",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "ticketNumber",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "buyAt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expireAt",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "ticketType",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "used",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "scannedBy",
            "type": "address"
          }
        ],
        "internalType": "struct Ticket.TicketStruct",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_ownerKey",
        "type": "address"
      }
    ],
    "name": "getTicketsByAddress",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_contest",
        "type": "string"
      }
    ],
    "name": "removeEvent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_ticketId",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "_ownerKey",
        "type": "address"
      }
    ],
    "name": "scanTicket",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_contest",
        "type": "string"
      }
    ],
    "name": "selledTicketEvent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_publicKey",
        "type": "address"
      }
    ],
    "name": "setAgent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_publicKey",
        "type": "address"
      }
    ],
    "name": "setDelegation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_publicKey",
        "type": "address"
      }
    ],
    "name": "setOther",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_publicKey",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "role",
        "type": "uint8"
      }
    ],
    "name": "setStaff",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_publicKey",
        "type": "address"
      }
    ],
    "name": "setVisitor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_pubKey",
        "type": "address"
      }
    ],
    "name": "setWalletDestination",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]



