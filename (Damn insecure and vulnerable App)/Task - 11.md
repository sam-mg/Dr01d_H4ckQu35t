# Task - 11

Next up is Task Eleven.  
Reviewing `MainActivity.class`, we see that it points to `AccessControl3Activity.class`.  
![Untitled](DIVA%20ScreenShots/Level%20-%2011%20(AccessControl3Activity).png)

In this case, we observe that a pin has been implemented for security purposes. However, since there are no encryption or decryption methods in place, the pin doesn't provide meaningful protection. Although the app requires the pin to access notes, you can easily bypass this safeguard using terminal commands.

To access the notes without knowing the pin, use the following terminal commands:
```bash
adb shell
cd /data/data/jakhar.aseem.diva/databases
sqlite3 divanotes.db
```

Then, execute these SQL commands:
```sql
.tables
select * from notes;
```
![Untitled](DIVA%20ScreenShots/Level%20-%2011%20(Terminal).jpg)
The image above demonstrates how to access the notes directly through the terminal, bypassing the need for the pin entirely.