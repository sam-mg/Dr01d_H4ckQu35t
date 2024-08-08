Java.perform(() => {
    const Activity = Java.use('com.ad2001.frida0x1.MainActivity');
    Activity.get_random.implementation = function () {
      send('Inside get_random');
      return 0;
    };
});