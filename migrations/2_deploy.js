var fs = require("fs");

var VeBankV1Factory = artifacts.require("VeBankV1Factory");

const feeToSetter = "0x23fd7c63c35fd26ac5c4e7e6dc52cca6ab7511d7";

const DEPLOY_NEW = true;

function wf(name, address) {
  fs.appendFileSync('.env', name + "=" + address);
  fs.appendFileSync('.env', "\r\n");
}


module.exports = async function (deployer) {
  //require('dotenv').config();
 
  if (DEPLOY_NEW) {
    await deployer.deploy(VeBankV1Factory, feeToSetter);
    var iVeBankV1Factory = await VeBankV1Factory.deployed();
    wf("iVeBankV1Factory", iVeBankV1Factory.address);
  } else {
      //var iVeBankV1Factory = await VeBankV1Factory.at(process.env.iVeBankV1Factory);
  }
};
