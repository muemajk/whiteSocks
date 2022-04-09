const Whitesocks = artifacts.require("WhiteSocks");

module.exports = function (deployer) {
    
  deployer.deploy(Whitesocks,100);
};
