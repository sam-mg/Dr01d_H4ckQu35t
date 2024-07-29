# Task - 8

We're now on Task Eight now.  
Upon inspecting `MainActivity.class`, we see that it points us to `InputValidation2URISchemeActivity.class`.  
![Untitled](DIVA%20ScreenShots/Level%20-%208%20(InputValidation2URISchemeActivity).png)

When we review this code, we notice that there is no validation for the user input provided to the WebView.

Given that files were created in previous levels, let's try accessing one. The command will be the file's path, which is: 
```
/data/data/jakhar.aseem.diva/uinfo8255629190154249700tmp
```

When we use this path, we can view it in the WebView.
![Untitled](DIVA%20ScreenShots/Level%20-%208%20(WebView).png)

Failing to validate user input can lead to significant security vulnerabilities, such as exposing sensitive data or enabling malicious code execution. It's crucial to implement proper input validation to prevent such security risks and ensure the application's robustness.