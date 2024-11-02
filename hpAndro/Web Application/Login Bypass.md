# Login Bypass

## Description
```
You need to install the above application in your android device/emulator, intercept web traffic using web proxy tools (BURPSuite etc.) solve it and find a flag.
```

Let's use Burp Suite to capture the request when the login request is sent to the server.  
In the cookies, we can see that the admin cookie is set to `0`. Let's change it to `1` and forward the request.  
Once we forward the request, we get the flag.  

```
hpandro{Login.uUTtzpgcnXJhXqFpmZjuNuK7y3Lvb4mc}
```