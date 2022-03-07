pragma solidity ^0.8.7;

import "./Ownable.sol";


contract OlympicEvent is Ownable {

    struct OlympicEventStruct {
        string name;
        uint256 date;
        uint256 maxTickets;
        uint256 sellsTickets;
        uint256 validateTickets;
        uint256 price;
    }

    mapping (bytes32 => OlympicEventStruct) ticketOlympicEventMapping;
    OlympicEventStruct[] internal olypicEvents;

    function getNumberNewTicket(string memory _contest) internal view returns (uint number) {
        OlympicEventStruct memory olympicEventStruct = getEvent(_contest);
        number = olympicEventStruct.sellsTickets;
    }

    function addEvent(string memory _contest, uint _price, uint _date, uint _maxTickets) onlyOwner public returns(OlympicEventStruct memory tmpOlympicEvent) {
        require(checkEventExists(_contest) == false, "Event already exists");
        tmpOlympicEvent.name = _contest;
        tmpOlympicEvent.date = _date;
        tmpOlympicEvent.price = _price;
        tmpOlympicEvent.maxTickets = _maxTickets;
        tmpOlympicEvent.sellsTickets = 0;
        tmpOlympicEvent.validateTickets = 0;
        olypicEvents.push(tmpOlympicEvent);
    }

    function removeEvent(string memory _contest) public onlyOwner {
        require(checkEventExists(_contest) == true, "Event does not exists");
        for (uint i = 0; i < olypicEvents.length; i++) {
            if (keccak256(bytes(olypicEvents[i].name)) == keccak256(bytes(_contest))) {
                delete olypicEvents[i];
            }
        }
    }

    function selledTicketEvent(string memory _contest) public {
        require(checkEventExists(_contest) == true, "Event does not exists");
        for (uint i = 0; i < olypicEvents.length; i++) {
            if (keccak256(bytes(olypicEvents[i].name)) == keccak256(bytes(_contest))) {
                OlympicEventStruct storage olympicEvent = olypicEvents[i];
                olympicEvent.sellsTickets++;
            }
        }
    }
    
    function checkEventExists(string memory _contest) public view returns (bool) {
        for (uint i = 0; i < olypicEvents.length; i++) {
            if (keccak256(bytes(olypicEvents[i].name)) == keccak256(bytes(_contest))) {
                return true;
            }
        }
        return false;
    }

    function getEvent(string memory _contest) public view returns (OlympicEventStruct memory olympicEvent) {
        require(checkEventExists(_contest) == true, "Event does not exists");
        for (uint i = 0; i < olypicEvents.length; i++) {
            if (keccak256(bytes(olypicEvents[i].name)) == keccak256(bytes(_contest)))
                return olypicEvents[i];
        }
    }

}
