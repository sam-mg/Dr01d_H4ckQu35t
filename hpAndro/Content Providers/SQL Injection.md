# SQL Injection

> SQL Injection is a code injection technique that can potentially destroy your database. It is one of the most common web hacking techniques.

In this activity, you are asked to enter the username and password to log in. You can use SQL Injection to bypass the login. The input should be something like this:  
    
**Username:**

```sql
' or 1=1 --
```

**Password:**

```
<sometext>
```

Once we enter the above input, we will get the flag:
```
hpandro{sqli.B3QAP7gNTgvfRbKgVCaLX5HqjZp99nFY}
```