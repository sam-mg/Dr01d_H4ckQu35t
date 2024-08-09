var get_flag_adr =  Module.enumerateExports("libfrida0xa.so")[137]["address"]
var native_ptr = new NativePointer(get_flag_adr);
const get_flag = new NativeFunction(native_ptr, "void", ['int', 'int']);
get_flag(1,2);