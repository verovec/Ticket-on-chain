pragma solidity ^0.8.7;

import "./OlympicEvent.sol";


contract Ticket is OlympicEvent {
    
    struct TicketStruct {
        bool isStaff;
        string contest;
        uint256 ticketNumber;
        bytes32 id;
        uint256 buyAt;
        uint256 expireAt;
        uint8 ticketType;
        bool used;
        address scannedBy;
    }

    mapping (address => bytes32[]) ownerTicketMapping;
    mapping (bytes32 => TicketStruct) ticketMapping;

    function getTicket(bytes32 _ticketId) public view returns (TicketStruct memory){
        return ticketMapping[_ticketId];
    }

    function createTicketVisitor(string memory _contest) public payable returns (TicketStruct memory ticket) {
        require(checkEventExists(_contest) == true, "Event does not exists");
        OlympicEventStruct memory olympicEventStruct = getEvent(_contest);
        require(msg.value == olympicEventStruct.price, "Amount did not match with price of ticket");
        require(getRemainingPlaceNumber(_contest) > 0, "There is no more ticket for this event");
        getWalletDestination().transfer(msg.value);
        ticket.isStaff = false;
        ticket.ticketNumber = olympicEventStruct.sellsTickets;
        ticket.ticketType = 1;
        ticket.contest = _contest;
        ticket.used = false;
        ticket.buyAt = block.timestamp;
        ticket.expireAt = olympicEventStruct.date + 36000;
        ticket.id = keccak256(abi.encodePacked(ticket.buyAt, ticket.expireAt));
        ticketMapping[ticket.id] = ticket;
        ownerTicketMapping[msg.sender].push(ticket.id);
        setVisitor(msg.sender);
        ticketOlympicEventMapping[ticket.id] = getEvent(_contest);
        selledTicketEvent(_contest);
    }

    function createTicketStaff(uint8 _ticketNumber, string memory _contest, uint8 _ticketType, address _pubKey) public onlyAgent returns (TicketStruct memory ticket) {
        require(checkEventExists(_contest) == true, "Event does not exists");
        ticket.isStaff = true;
        ticket.ticketNumber = _ticketNumber;
        ticket.ticketType = _ticketType;
        ticket.contest = _contest;
        ticket.used = false;
        ticket.buyAt = block.timestamp;
        OlympicEventStruct memory olympicEventStruct = getEvent(_contest);
        ticket.expireAt = olympicEventStruct.date + 36000;
        ticket.id = keccak256(abi.encodePacked(ticket.buyAt, ticket.expireAt));
        ticketMapping[ticket.id] = ticket;
        ownerTicketMapping[_pubKey].push(ticket.id);
        setStaff(_pubKey, _ticketType);
        ticketOlympicEventMapping[ticket.id] = getEvent(_contest);
    }

    function getRemainingPlaceNumber(string memory _contest) public view returns (uint remainingPlaceNumber) {
        OlympicEventStruct memory olympicEvent = getEvent(_contest);
        remainingPlaceNumber = olympicEvent.maxTickets - olympicEvent.sellsTickets;
    }

    function validateTicket(string memory _contest) private onlyAgent {
        require(checkEventExists(_contest) == true, "Event does not exists");
        for (uint i = 0; i < olypicEvents.length; i++) {
            if (keccak256(bytes(olypicEvents[i].name)) == keccak256(bytes(_contest))) {
                OlympicEventStruct storage olympicEvent = olypicEvents[i];
                olympicEvent.validateTickets++;
            }
        }
    }

    function scanTicket(bytes32 _ticketId, address _ownerKey) public onlyAgent returns (bool) {
        if (checkTicket(_ticketId) == true) {
            bytes32[] memory ownerTicketsId = getTicketsByAddress(_ownerKey);
            for (uint8 i = 0; i < ownerTicketsId.length; i++) {
                if (ownerTicketsId[i] == _ticketId) {
                    TicketStruct storage ticket = ticketMapping[_ticketId];
                    if (getRoleByAddress(_ownerKey) == ROLE.VISITOR) {
                        validateTicket(ticket.contest);
                        ticket.used = true;
                    }
                    ticket.scannedBy = msg.sender;
                    return true;
                }
            }
        }
        return false;
    }

    function getTicketsByAddress(address _ownerKey) public view onlyAgent returns (bytes32[] memory) {
        return ownerTicketMapping[_ownerKey];
    }
    
    function checkTicket(bytes32 _ticketId) public view onlyAgent returns (bool) {
        TicketStruct memory ticketObject = ticketMapping[_ticketId];
        if (ticketObject.used == true || ticketObject.expireAt < block.timestamp)
           return false;
        else
            return true;
    }
    
    function getOwnTickets() public view returns (bytes32[] memory) {
        return ownerTicketMapping[msg.sender];
    }

}
