var fs = require("fs");

var CalHashInitCode = artifacts.require("CalHashInitCode");

const DEPLOY_NEW = true;

function wf(name, address) {
  fs.appendFileSync('.env', name + "=" + address);
  fs.appendFileSync('.env', "\r\n");
}


module.exports = async function (deployer) {
  //require('dotenv').config();
 
  if (DEPLOY_NEW) {
    await deployer.deploy(CalHashInitCode);
    var iCalHashInitCode = await CalHashInitCode.deployed();
    wf("iCalHashInitCode", iCalHashInitCode.address);
    var initCode = await iCalHashInitCode.getInitHash();
    console.log(initCode);
  } else {
      //var iCalHashInitCode = await CalHashInitCode.at(process.env.iCalHashInitCode);
  }
};
