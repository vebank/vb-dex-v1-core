pragma solidity >=0.5.16;
import './VeBankV1Pair.sol';

contract CalHashInitCode {
    function getInitHash() public pure returns(bytes32){
        bytes memory bytecode = type(VeBankV1Pair).creationCode;
        return keccak256(abi.encodePacked(bytecode));
    }
}