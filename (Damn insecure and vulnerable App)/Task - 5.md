# Task - 5

Let's delve into Task Five now.  
Upon examining `MainActivity.class`, it directs us to `InsecureDataStorage3Activity.class`.
![Untitled](DIVA%20ScreenShots/Level%20-%205%20(InsecureDataStorage3Activity).png)

This activity involves creating a new file where a password is stored. After entering and saving the password, it becomes stored in a new file.

Here's the command to view such files:
```bash
adb shell
cd data/data/jakhar.aseem.diva/
cat uinfo*
```
Using this command, we can view files starting with uinfo.

Here's a terminal view demonstrating this process:
![Untitled](DIVA%20ScreenShots/Level%20-%205%20(Terminal).jpg)

It's evident that the password we entered is stored in a file without any encryption.

Storing sensitive data in files without encryption raises ethical concerns regarding data security and user privacy. Encrypting sensitive data before storing it in files is essential to prevent unauthorized access and to uphold ethical data handling practices.

By implementing encryption protocols, we can significantly bolster the security of the application and ensure the protection of user data against potential threats.