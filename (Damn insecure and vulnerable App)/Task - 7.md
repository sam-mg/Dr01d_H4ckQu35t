# Task - 7

Next up is Task Seven.  
In `MainActivity.class`, we can trace a path to `SqlInjectionActivity.class`.  
![Untitled](DIVA%20ScreenShots/Level%20-%207%20(SqlInjectionActivity).png)  

As you can see in the query `"SELECT * FROM sqliuser WHERE user = '" + srchtxt.getText().toString() + "'"` is vulnerable to SQL injection.

By inputting a command that overrides the original query, we can retrieve all the data. For example, the query will become:
```sql
"SELECT * FROM sqliuser WHERE user = '' or 1==1;
``` 
When we input `' or 1==1;` into the search field, the query retrieves all records.

Here is the result of the initial injection:
![Untitled](DIVA%20ScreenShots/Level%20-%207%20(First_Injection).png)

Due to an issue with the Toast message, not all user data is visible. We can refine the query further to exclude specific users, such as 'admin', allowing us to see more records. The modified query would be:
```sql
"SELECT * FROM sqliuser WHERE user = '' or 1==1 and user != 'admin';
```
After entering this adjusted query, we retrieve the next set of data:
![Untitled](DIVA%20ScreenShots/Level%20-%207%20(Second_Injection).png)

Continuing this approach, we can exclude additional users. For instance:
```sql
SELECT * FROM sqliuser WHERE user = '' or 1==1 and user != 'admin' and user != 'diva';
```
Entering this query retrieves further records:
![Untitled](DIVA%20ScreenShots/Level%20-%207%20(Third_Injection).png)

We repeat this process until all data is retrieved:
![Untitled](DIVA%20ScreenShots/Level%20-%207%20(Final_Check_Injection).png)

Now, we've successfully retrieved all data from the table.

SQL Injection can be reduced by implementing parameterized queries, which separate SQL commands from user input and prevent malicious code execution. It's crucial to validate and sanitize all user inputs to ensure they conform to expected formats and types, thereby mitigating the risk of injecting unauthorized SQL commands. Escaping special characters in user inputs before using them in SQL queries is essential to treat them as literal values rather than executable code. Additionally, adhering to the principle of least privilege for database permissions and keeping database systems updated with security patches strengthens defenses against SQL injection vulnerabilities.