# DIVA

DIVA is (Damn insecure and vulnerable App) is an App intentionally designed to be insecure.

> The aim of the App is to teach developers/security professionals, flaws that are generally present in the Apps due poor or insecure coding practices.
> 

---

Requirements:

[Challenge File](https://github.com/0xArab/diva-apk-file/archive/refs/heads/main.zip)

An Android Emulator

ADB → {`/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"`} - {`brew install adb`}

jadx → {`/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"`} - {`brew install jadx`}

Prerequisites:

- Basic adb commands

---

First we need to install the apk in our Emalutor

`adb install diva-beta.apk` 

---

---

<aside>
🕐 First Level

</aside>

From the `jadx-gui`, you can see that there is an intent call.

Okay, when we look at the `MainActivity.class`, we can find the respective activities for each corresponding button.

Okay, let's start debugging the `LogActivity.class`, which is the respective class for the first one.

![Untitled](DIVA%20ScreenShots/Level%20-%201%20(LogActivity).png)

You can see that the input entered by the user is being logged.

You see this part `Log.e("diva-log", "Error while processing transaction with credit card: " + cctxt.getText().toString());`, and this is where it is being logged.

It is not ethical to log sensitive data.

---

<aside>
🕑 Second Level

</aside>

Ok, for the next level, let's start debugging the `HardcoreActivity.class`.

![Untitled](DIVA%20ScreenShots/Level%20-%202%20(HardcoreActivity).png)

You can see that it is expecting a specific word `vendorsecretkey`
Once you enter this text and press the button, you will see the Toast message, that the permission is granted.

---

<aside>
🕒 Third Level

</aside>

Ok, for the next level, let's start debugging the `InsecureDataStorage1Activity.class`

![Untitled](DIVA%20ScreenShots/Level%20-%203%20(InsecureDataStorage1Activity).png)

You can see that the entered data is being stored in Shared Preferences.

Once you enter the respective values in the respective fields in the app, the values are being stored in the shared preferences.

![Untitled](DIVA%20ScreenShots/Level%20-%203%20(Terminal).png)

You can see that the data which we entered is being stored in the shared preferences.
It is not ethical to store data as such in shared preferences without any encryption.

---

<aside>
🕓 Fourth Level

</aside>

Ok, for the next level, let's start debugging the `InsecureDataStorage2Activity.class`

![Untitled](DIVA%20ScreenShots/Level%20-%204%20(InsecureDataStorage2Activity).png)

You can see that the data is being stored in the SQL database named `myuser`
Once you enter the details in the app and access the database, you can view it.

![Untitled](DIVA%20ScreenShots/Level%20-%204%20(Terminal).png)

You can see that the data we entered is being stored in the database without any encryption.
It is not ethical to store data in databases without encryption.

---

<aside>
🕔 Fifth Level

</aside>

Ok, for the next level, let's start debugging the `InsecureDataStorage3Activity.class`

![Untitled](DIVA%20ScreenShots/Level%20-%205%20(InsecureDataStorage3Activity).png)

You can see that a new file is being created, and the password is being stored there.

Once you enter the password and save it, you can see that it is being made into a new file and saved.

![Untitled](DIVA%20ScreenShots/Level%20-%205%20(Terminal).png)

---

<aside>
🕕 Sixth Level

</aside>

Ok, for the next level, let's start debugging the `InsecureDataStorage4Activity.class`

![Untitled](DIVA%20ScreenShots/Level%20-%206%20(InsecureDataStorage4Activity).png)

You can see that a new file is being created with the name `/.unifo.txt`, and the data is being saved in it.

Once you enter the details and save them, you can see that a file is created.

![Untitled](DIVA%20ScreenShots/Level%20-%206%20(Terminal).png)

While doing this level, you might face some issues. This is due to the permissions in the emulator.
Once you fix the granted permissions, you can complete the levels.

---

<aside>
🕖 Seventh Level

</aside>

Ok, for the next level, let's start debugging the `SqlInjectionActivity.class`

![Untitled](DIVA%20ScreenShots/Level%20-%207%20(SqlInjectionActivity).png)

As you can see in the query `"SELECT * FROM sqliuser WHERE user = '" + srchtxt.getText().toString() + "'"`, here it is injection vulnerable.

So if we input our own command which overrules the previous one, we can get all the data.

So the query will be `"SELECT * FROM sqliuser WHERE user = '' or 1==1;` 

When we enter this in the query accordingly, it works.

So according to our case, when we enter `' or 1==1;` 

When we do that, we get this.

![Untitled](DIVA%20ScreenShots/Level%20-%207%20(First_Injection).png)

There is some issue with the Toast message, as we can’t see all the user data.

So we can now add more query to it.

So the query now will be `"SELECT * FROM sqliuser WHERE user = '' or 1==1 and user != 'admin';`, when we add the query accordingly, we can get the next one.

![Untitled](DIVA%20ScreenShots/Level%20-%207%20(Second_Injection).png)

See, like this we got it for the next one. It will be like "`SELECT * FROM sqliuser WHERE user = '' or 1==1 and user != 'admin' and user != 'diva';`", when we add the query accordingly, we can get the next one.

![Untitled](DIVA%20ScreenShots/Level%20-%207%20(Third_Injection).png)

Like this, we can also try for the next one.

![Untitled](DIVA%20ScreenShots/Level%20-%207%20(Final_Check_Injection).png)

See, now that we've retrieved all the data from the table, we can't obtain any more. Therefore, we have all the data.

---

<aside>
🕗 Eighth Level

</aside>

Ok, for the next level, let's start debugging the `InputValidation2URISchemeActivity.class`

![Untitled](DIVA%20ScreenShots/Level%20-%208%20(InputValidation2URISchemeActivity).png)

When we see this code, we can notice one thing: there is no validation.

So, at the previous level, a file was created. Let's try accessing it.

The command will be the file’s path (i.e.,) `/data/data/jakhar.aseem.diva/uinfo8255629190154249700tmp`

When we try this, we can view it in the web view.

![Untitled](DIVA%20ScreenShots/Level%20-%208%20(WebView).png)

---

<aside>
🕘 Nineth Level

</aside>

Okay, for the next step, let's now `AccessControl1Activity.class`

![Untitled](DIVA%20ScreenShots/Level%20-%209%20(AccessControl1Activity).png)

Here we can see that the activity leads to `jakhar.aseem.diva.action.VIEW_CREDS` 

When we look into that in the Manifest file, we can find it redirecting to an activity.

![Untitled](DIVA%20ScreenShots/Level%20-%209%20(Manifest).png)

From this, we can see that it leads to `APICredsActivity.class` 

When we navigate there, we can find these items.

![Untitled](DIVA%20ScreenShots/Level%20-%209%20(APICredsActivity).png)

And this is the same thing that is displayed there as well.

However, we need to access this page from outside the app without going through all the button clicks.

We know that using adb, we can open any specific activity that has `exported=”True”` 
So, using this command, we can invoke the activity:  `adb shell am start jakhar.aseem.diva/.APICredsActivity`

By doing this, we can access the activity without any button clicks.

---

<aside>
🕙 Tenth Level

</aside>

Okay, for the next step, let's now cook `AccessControl2Activity.class`

![Untitled](DIVA%20ScreenShots/Level%20-%2010%20(AccessControl2Activity).png)

Here we can see that the activity leads to `jakhar.aseem.diva.action.VIEW_CREDS2` 

When we look into that in the Manifest file, we can find it redirecting to an activity.

![Untitled](DIVA%20ScreenShots/Level%20-%2010%20(Manifest).png)

Similar like before, we can see that it is leading to `APICreds2Activity.class` 

![Untitled](DIVA%20ScreenShots/Level%20-%2010%20(APICreds2Activity).png)

When we go and see that in the file, we can see it.

When we do like before, using `adb shell am start jakhar.aseem.diva/.APICreds2Activity`, we can see that we didn’t get the respective thing we need.

![Untitled](DIVA%20ScreenShots/Level%20-%2010%20(Failed_Attempt).png)

This is because of the boolean check in the intent. We have to override it in the intent to get the respective details as before with the terminal.

To do that, we have to make this line as false: {`boolean bcheck = i.getBooleanExtra(getString(R.string.chk_pin), true);`}

In order to do that and look into ADB commands, we need to do something with the intent which is being sent.

[Custom Commands](https://www.notion.so/Custom-Commands-0b2b910ec23a4c3c8998a337c2867427?pvs=21) 

So what we want is this `adb shell am start -n jakhar.aseem.diva/.APICreds2Activity -a jakhar.aseem.diva.action.VIEW_CREDS2 --ez check_pin false`

![Untitled](DIVA%20ScreenShots/Level%20-%2010%20(Got_Activity).png)

So now we are able to access this activity without the previous steps like selecting the radio button, etc.

---

<aside>
🕚 Eleventh Level

</aside>

Okay, let's now critique `AccessControl3Activity.class`

![Untitled](DIVA%20ScreenShots/Level%20-%2011%20(AccessControl3Activity).png)

Here, it appears they are setting a key to save the notes.

When the key is set and you try to access the notes through the app, you can't do so without the pin.

However, if you navigate to the terminal level, you can access them.

![Untitled](DIVA%20ScreenShots/Level%20-%2011%20(Terminal).png)

The image above demonstrates how to do this.

Knowing the pin you set is unnecessary.

---

<aside>
🕛 Twelfth Level

</aside>

Okay, let’s now rock `Hardcore2Activity.class`

![Untitled](DIVA%20ScreenShots/Level%20-%2012%20(Hardcore2Activity).png)

Here we can see that the string to be checked is obtained from a `Jni` file.

If we gain access to that file, we can complete this task.

![Untitled](DIVA%20ScreenShots/Level%20-%2012%20(DivaJni).png)

Upon inspection of the `DivaJni.class`, we observe that it is being accessed from a file named  `DivaJni`. Therefore, our task is to locate this file.

| Pull Method | ApkTool |
| --- | --- |
| We can find this using the command find / -name "*divajni*" 2>/dev/null | We can use apktool d <apk_file> |
| Once we locate the file, we can pull it using          adb pull <file_path> | In the directories of the folder from apktool, we can find the .so files. |
| Now, we need to decompile the file. | We can decompile it using IDAPro. |

Let's proceed to IDAPro.

Upon examining IDA, we notice something suspicious in the file. Take a look at this.

![Untitled](DIVA%20ScreenShots/Level%20-%2012%20(Hex_View).png)

![Untitled](DIVA%20ScreenShots/Level%20-%2012%20(IDA_View-A(1)).png)

![Untitled](DIVA%20ScreenShots/Level%20-%2012%20(IDA_View-A(2)).png)

![Untitled](DIVA%20ScreenShots/Level%20-%2012%20(IDA_View-A(3)).png)

There is something fishy about this word `olsdfgad;lh` 

Let's try entering this word in the app.

![Untitled](DIVA%20ScreenShots/Level%20-%2012%20(Access_Granted).png)

See, we have solved it.

---

<aside>
🕐 Thirteenth Level

</aside>

Okay, let’s get the shit out of `InputValidation3Activity.class` 

![Untitled](DIVA%20ScreenShots/Level%20-%2013%20(InputValidation3Activity).png)

Now, you can observe the difference. In the same file as before, there were two texts; now you can see the dots connecting them.

![Untitled](DIVA%20ScreenShots/Level%20-%2013%20(DivaJni).png)

Next, let's return to IDAPro and examine it.

Since we've already addressed this in the previous level.

![Untitled](DIVA%20ScreenShots/Level%20-%2013%20(Hex_View).png)

![Untitled](DIVA%20ScreenShots/Level%20-%2013%20(IDA_View-A).png)

Upon entering this word into the app, we can confirm that it functions correctly.

![Untitled](DIVA%20ScreenShots/Level%20-%2013%20(Access_Granted).png)

However, our current objective is different. We need to crash this activity to halt its operation.

After analyzing the code, it's evident that there is no input validation implemented. Our approach is to force the app to crash. Let's attempt entering an excessively long string, such as  `abcdefghijklmnopqrtuvwxyz`

This initial attempt didn’t succeed. Let's double the length and retest.

![Untitled](DIVA%20ScreenShots/Level%20-%2013%20(App_Crash).gif)

Now, with the extended input, the app crashes. Our next step is to identify the cause.

To do so, we'll need to examine the `logcat`.

Upon inspection, it's apparent that due to the extended input, the activity becomes unresponsive and crashes.

---

THE END

---

---