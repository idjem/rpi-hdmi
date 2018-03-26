[![Stories in Ready](https://badge.waffle.io/idjem/rpi-hdmi.png?label=ready&title=Ready)](https://waffle.io/idjem/rpi-hdmi)
# rpi-hdmi
Enable and disable the HDMI signal of the Raspberry PI

# Installation
```
npm install --save rpi-hdmi
```

# API

## Get hdmi state

```
const hdmi = require('rpi-hdmi');

hdmi.isConnected((err, hdmiState) => {
  if(hdmiState)
    console.log('HDMI is On')
  else 
    console.log('HDMI is off')
});
```

## Power on HDMI

```
const hdmi = require('rpi-hdmi');

hdmi.on((err) => {
  if(!err)
    console.log('HDMI is off')
});
```

## Power off HDMI

```
const hdmi = require('rpi-hdmi');

hdmi.on((err) => {
  if(!err)
    console.log('HDMI is On')
});
```

