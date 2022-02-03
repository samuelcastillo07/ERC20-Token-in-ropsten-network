const dmd = artifacts.require("dmd");

module.exports = async function (deployer){
    await deployer.deploy(dmd);
}