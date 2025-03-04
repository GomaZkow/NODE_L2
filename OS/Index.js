require("dotenv").config({ path: "../.env" });
const os = require("os");

const aboutOS = () => {
  const platform = os.platform();
  const memory = os.freemem();
  const homeDirectory = os.homedir();
  const typeOS = os.type();
  const interfacesNetwork = os.networkInterfaces();

  console.log(`Info about OS:
    Platform: ${platform}
    Memory: ${memory}
    Home Directory: ${homeDirectory}
    Operating System: ${typeOS}
    Network Interfaces: ${JSON.stringify(interfacesNetwork, null, 2)}
  `);
};

const memoryCheck = (memory) => {
  return memory > 4294967296;
};

const checkAcess = (cb, currentMode) =>
  currentMode == process.env.MODE ? cb() : console.log("no access");

checkAcess(aboutOS, currentMode);
console.log(memoryCheck(os.freemem()));
