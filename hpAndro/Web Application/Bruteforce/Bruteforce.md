# Bruteforce

## Description
```
user is admin and bruteforce top 10000 password and get a flag
```

We can brute force the password for the user `admin` using the top 10,000 passwords. Many tools can accomplish this, but I will use `Python`.
[Here is the Python script](Bruteforce.py).

Once we send requests to the server with the username `admin` and the password `753951`, we get the flag:
```
hpandro{Brute.zf7zoSEUxvXQVfkCOolSx1gtRCAApNwE}
```