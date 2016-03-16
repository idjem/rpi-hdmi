const exec = require('child_process').exec;

const HDMI_ON_CMD       = "/opt/vc/bin/tvservice -p"
const HDMI_OFF_CMD      = "/opt/vc/bin/tvservice -o"
const HDMI_STATUS_CMD   = "/opt/vc/bin/tvservice -o"



module.exports.status = function(){
  return new Promise(function(resolve, reject){
    exec(HDMI_STATUS_CMD , function(error, stdout){
      if(error !== null)
        reject(error);
      resolve(stdout);
    })
  })
}

module.exports.on = function(){
  return exec(HDMI_ON_CMD);
}

module.exports.off = function(){
  return exec(HDMI_OFF_CMD);
}