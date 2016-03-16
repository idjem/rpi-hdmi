const exec = require('child_process').exec;

const HDMI_ON_CMD       = "/opt/vc/bin/tvservice -p"
const HDMI_OFF_CMD      = "/opt/vc/bin/tvservice -o"
const HDMI_STATUS_CMD   = "/opt/vc/bin/tvservice --status"


var runCmd = function(cmd, chain){
  exec(cmd , function(error, stdout){
    if(error !== null)
      return chain(error);
    var status = "";
    stdout.on("data" , function(data){
      status += data;
    });
    stdout.on("end" , function(){
      chain(null , status);
    });
    stdout.on("error" , function(err){
      chain(err);
    });
  })
}

module.exports.status = function(chain){
  runCmd(HDMI_STATUS_CMD , chain);
}

module.exports.on = function(chain){
  runCmd(HDMI_ON_CMD , chain);
}

module.exports.off = function(chain){
  runCmd(HDMI_OFF_CMD , chain);
}