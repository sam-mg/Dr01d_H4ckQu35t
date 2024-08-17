# DIVA

DIVA (Damn insecure and vulnerable App) is an App intentionally designed to be insecure.

> The aim of the app is to teach developers and security professionals about flaws commonly present in apps due to poor or insecure coding practices.
> 
---
Now, let's delve into an application built to be insecure. We will identify vulnerabilities within it, exploit them, and explore methods to prevent such vulnerabilities.

## Requirements:

You can obtain the APK from the [GitHub Link](https://github.com/0xArab/diva-apk-file) or from this repository.
You can access the source code through the following methods:
1. Using `jadx`
2. Alternatively, you can access the source code from the [Github Repo](https://github.com/payatu/diva-android)

An Android Emulator

To install ADB or jadx, run the following commands:
```bash
/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"

brew install adb
brew install jadx
```

Prerequisites:

- Basic `adb` commands

---

First, we need to install the APK on our emulator:
```bash
adb install DIVA.apk
```

---

In this directory, you can find my write-ups for the challenges, detailing how I faced and solved them. Attempt to solve them on your own; if you encounter difficulty, refer to my write-ups for guidance.

---
If you have any questions or need further assistance, feel free to open an issue on this repository or reach out through the available contact methods. Happy exploring and learning!