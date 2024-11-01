# Informational Logs

## Description
```
Find flag which is logged in Informational Logs using logcat
```

This challenge is straightforward. We can use `logcat` to retrieve the logs and then grep for the package name to find the flag.

```
adb logcat | grep hpandro
```

And there you have it, the flag:
```
hpandro{logi.8Owdgcsdao2gIEFK5L5YCSo9mbMM74j6}
```