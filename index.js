"use strict";

var spawn = require('child_process').spawn;

var TVSERVICE_PATH    = "/opt/vc/bin/tvservice";

var HDMI_ON_CMD       = "-p";
var HDMI_OFF_CMD      = "-o";
var HDMI_STATUS_CMD   = "--status";


var runCmd = function(arg, chain){
  chain = chain || Function.prototype;
  var child = spawn(TVSERVICE_PATH, [arg]);
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

var hdmi = {
    status : function(chain){
      runCmd(HDMI_STATUS_CMD , chain);
    },

    on :  function(chain){
      runCmd(HDMI_ON_CMD , chain);
    },
    off : function(chain){
      runCmd(HDMI_OFF_CMD , chain);
    },

   isConnected : function(chain){
    chain = chain || Function.prototype;
    hdmi.status(function(err , data){
      if(err)
        return chain(err)
      chain(null , (data.indexOf("TV is off") === -1) )
    });
  }
};

module.exports = hdmi;
