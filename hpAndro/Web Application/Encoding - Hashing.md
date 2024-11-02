# Encoding - Hashing

## Description
```
You need to install the above application in your android device/emulator, intercept web traffic using web proxy tools (BURPSuite etc.) solve it and find a flag.
```

We have two strings: one encoded and one hashed. Our task is to decode the encoded string and decrypt the hashed string.

```
Encoded String: NDg3MDQxNmU2NDcyNmYyMzM4MzgzMjMxMzkzMTM4MzIzNTMyMjM=
Hashed String: 22ac63087327912aeefd98d64932bba239eb7aa7
```

Let's start with decoding. The encoded string is base64 encoded.

```
4870416e64726f233838323139313832353223
```

Next, we move on to the hashing part. The hashed string is a SHA1 hash. Using an online tool, we decrypt the hash to:

```
eagles1
```

However, submitting this as the flag is incorrect. We are missing something. The decoded string is in hexadecimal. Let's convert it to ASCII.

```
HpAndro#8821918252#
```

Now, let's try submitting it again. And we get the flag:

```
hpandro{Encode.gGtDGWD47U7C2CuNejTDQ6xpKMje5Tr3}
```