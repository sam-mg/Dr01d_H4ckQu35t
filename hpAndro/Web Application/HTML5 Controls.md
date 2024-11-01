# HTML5 Controls

## Description
```
You need to install the application in your android device/emulator, intercept web traffic using web proxy tools (BURPSuite etc.) solve it and find a flag.
```

After opening the activity, we can use Burp to capture the traffic.

We notice that a `js` file is retrieved. The `eval` function is used to execute the code, and the text inside the eval is `JSFuck`. We can use a [decompiler](https://enkhee-osiris.github.io/Decoder-JSFuck/) to decode it.

Once decoded, we obtain the flag:
```js
localStorage.setItem("flag", "hpandro{HTML5.JFQLiroEjtmOfS47SmQThgVoHEzMHobi}")
```