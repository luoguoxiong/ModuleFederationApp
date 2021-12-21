const child_process = require('child_process');
const path = require('path');
const config = require('../config');


const createProcessToStartServer = (config, serverName) => {
  var worker_process = child_process.fork(path.join(__dirname, 'server.js'), [JSON.stringify(config), serverName]);

  worker_process.on('close', function(code) {
    console.log(`${serverName}服务退出，退出码 ${ code}`);
  });
};

const setServerPath = (path, config) => {
  config.path = path;
  return config;
};

for(const type in config){
  if(type === 'services'){
    for(const app in config[type]){
      createProcessToStartServer(setServerPath(`/services/${app}`, config[type][app]), app);
    }
  }else{
    createProcessToStartServer(setServerPath(`/${type}`, config[type]), type);
  }
}

