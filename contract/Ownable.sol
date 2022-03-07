pragma solidity ^0.8.7;

import "./Role.sol";

contract Ownable is Role {
    
    address payable destinationWallet;

    function transferOwnership(address _newOwner) external onlyOwner {
        require(_newOwner != msg.sender, "Unauthorized");
        delete roleMapping[msg.sender];
        roleMapping[_newOwner] = ROLE.OWNER;
    }

    function addOwner(address _newOwner) external onlyOwner {
        roleMapping[_newOwner] = ROLE.OWNER;
    }

    function deleteOwner(address _owner) external onlyOwner {
        roleMapping[_owner] = ROLE.OWNER;
    }
    
    function setWalletDestination(address payable _pubKey) external onlyOwner {
        destinationWallet = _pubKey;
    }
    
    function getWalletDestination() internal view returns (address payable) {
        return destinationWallet;
    }

}
