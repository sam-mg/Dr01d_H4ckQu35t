# HTTPS Traffic

## Description
```
Intercept HTTPS request and observe response to get a flag.
```

As before, let's try viewing the traffic in HTTP Toolkit. We encounter an error like this:
```
Upstream connection error: certificate has expired
```

Let's try using [Burp Suite](https://portswigger.net/burp/communitydownload) by referring to [this blog](https://danaepp.com/hacking-modern-android-apps-with-burpsuite) to intercept the traffic. We can see a request to `https://hpandro.raviramesh.info/task/https.android` and the response contains the flag.

```
hpandro{https.C006anP2rUecUMUrR6XBp2FLNVMNe7La}
```