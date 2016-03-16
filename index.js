const spawn = require('child_process').spawn;

const TVSERVICE_PATH    = "/opt/vc/bin/tvservice"

const HDMI_ON_CMD       = "-p"
const HDMI_OFF_CMD      = "-o"
const HDMI_STATUS_CMD   = "--status"


var runCmd = function(arg, chain){
  var child = spawn(TVSERVICE_PATH, [arg])
  var status = "";
  
  child.stdout.on("data" , function(data){
    status += data;
  })
  
  child.stdout.on("end" , function(){
    chain(null , status);
  });
  
  child.stdout.on("error" , function(err){
    chain(err);
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