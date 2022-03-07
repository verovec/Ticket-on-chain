pragma solidity ^0.8.7;

contract Role {

    enum ROLE { VISITOR, AGENT, DELEGATION, OTHER, OWNER }
    mapping(address => ROLE) roleMapping;

    constructor () {
        roleMapping[msg.sender] = ROLE.OWNER;
    }
    
    function getRoleByAddress(address _publicKey) public view returns (ROLE) {
        return roleMapping[_publicKey];
    }
    
    function getOwnRole() public view returns (ROLE) {
        return roleMapping[msg.sender];
    }

    modifier onlyOwner() {
        require(roleMapping[msg.sender] == ROLE.OWNER, "Unauthorized");
        _;
    }

    modifier onlyVisitor() {
        require(roleMapping[msg.sender] == ROLE.VISITOR, "Unauthorized");
        _;
    }

    modifier onlyAgent() {
        require(roleMapping[msg.sender] == ROLE.AGENT, "Unauthorized");
        _;
    }

    modifier onlyDelegation() {
        require(roleMapping[msg.sender] == ROLE.DELEGATION, "Unauthorized");
        _;
    }

    modifier onlyOther() {
        require(roleMapping[msg.sender] == ROLE.OTHER, "Unauthorized");
        _;
    }

    function setVisitor(address _publicKey) public {
        roleMapping[_publicKey] = ROLE.VISITOR;
    }

    function setAgent(address _publicKey) public onlyOwner {
        roleMapping[_publicKey] = ROLE.AGENT;
    }

    function setDelegation(address _publicKey) public onlyAgent {
        roleMapping[_publicKey] = ROLE.DELEGATION;
    }

    function setOther(address _publicKey) public onlyAgent {
        roleMapping[_publicKey] = ROLE.OTHER;
    }

    function setStaff(address _publicKey, uint8 role) public onlyAgent {
        require(role == 0 || role == 2 || role == 3, "Unauthorized");
        if (role == 0)
            roleMapping[_publicKey] = ROLE.VISITOR;
        if (role == 2)
            roleMapping[_publicKey] = ROLE.DELEGATION;
        if (role == 3)
            roleMapping[_publicKey] = ROLE.OTHER;
    }

}
