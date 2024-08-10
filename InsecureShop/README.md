# InsecureShop

InsecureShop is an Android application deliberately designed to be insecure.

> The purpose of this app is to educate developers and security professionals about common security vulnerabilities and poor coding practices found in Android applications.
>
---

In this project, we will examine an intentionally vulnerable Android application, identify its weaknesses, exploit them, and discuss ways to mitigate such vulnerabilities.

## Requirements:

- **APK File:** You can obtain the APK from the [GitHub Link](https://github.com/hax0rgb/InsecureShop) or directly from this repository.
- **Source Code:** Access the source code through the following methods:
  1. Using `jadx` for decompilation.
  2. Alternatively, access the source code from the [GitHub Repo](https://github.com/hax0rgb/InsecureShop) for examination and learning purposes.
- **Android Emulator:** An emulator or physical device to install and test the APK.

To install necessary tools such as `adb` and `jadx`, use the following commands:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install adb
brew install jadx
```

## Prerequisites:

- Basic knowledge of `adb` (Android Debug Bridge) commands.
- Familiarity with Android application security concepts.

## Installation:

1. **Install the APK on your emulator:**

    ```bash
    adb install InsecureShop.apk
    ```
2. **Decompile the APK (if needed) using apktool:**
    ```bash
    apktool d InsecureShop.apk
    ```
    
## Write-ups:

In this directory, you'll find detailed write-ups on the vulnerabilities discovered and exploited within the InsecureShop application. These write-ups cover the methodologies used to identify and exploit the flaws, as well as strategies for mitigating these vulnerabilities.

Attempt the challenges on your own first. If you encounter difficulties, refer to the write-ups for guidance and solutions.

---

Feel free to explore, learn, and enhance your understanding of Android application security through this project. If you have any questions or need further assistance, don't hesitate to reach out.