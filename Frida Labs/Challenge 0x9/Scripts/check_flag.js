var ch_fg =  Module.enumerateExports("liba0x9.so")[0]['address']
Interceptor.attach(ch_fg, {
    onEnter: function (args) {
    },
    onLeave: function (retval) {
        retval.replace(1337)
    }
});