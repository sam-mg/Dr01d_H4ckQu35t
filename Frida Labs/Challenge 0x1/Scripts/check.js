Java.perform(() => {
    const Activity = Java.use('com.ad2001.frida0x1.MainActivity');
    Activity.check.overload('int','int').implementation = function (a,b) {
      send('Inside check method');
      this.check(4, 12);
    };
});