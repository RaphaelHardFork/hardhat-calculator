// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SimpleCalculator {
    // storage
    uint256 private _nbOperation;

    // functions
    function add(int256 number1, int256 number2) public returns (int256) {
        _nbOperation++;
        return number1 + number2;
    }

    function sub(int256 number1, int256 number2) public pure returns (int256) {
        return number1 - number2;
    }

    function mul(int256 number1, int256 number2) public returns (int256) {
        _nbOperation++;
        return number1 * number2;
    }

    function div(int256 number1, int256 number2) public returns (int256) {
        require(number2 != 0, "SimpleCalculator: cannot divide by zero.");
        _nbOperation++;
        return number1 / number2;
    }

    function mod(int256 number1, int256 number2) public returns (int256) {
        _nbOperation++;
        return number1 % number2;
    }

    function nbOperation() public view returns (uint256) {
        return _nbOperation;
    }
}
