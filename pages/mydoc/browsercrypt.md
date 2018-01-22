---
title: OnlyKey BrowserCrypt Extension
tags: [OnlyKey Extension, BrowserCrypt]
keywords: OnlyKey, Extension, BrowserCrypt
last_updated: Jan, 19, 2018
summary: A chrome extension that enables simple click to encrypt/decrypt PGP messages in the browser with Keybase and OnlyKey.
sidebar: mydoc_sidebar
permalink: webcrypt.html
folder: mydoc
---

![OnlyKey BrowserCrypt](https://raw.githubusercontent.com/trustcrypto/OnlyKey-BrowserCrypt/master/images/logo-with-text.png)
========

**Still in early development available for testing only.**

## About

BrowserCrypt is a Google Chrome Extension that integrates with [OnlyKey](https://crp.to/p/) and [keybase.io](https://keybase.io/) to provide easy and secure PGP encryption in Google Chrome.

## How it works

With Keybase user/key management is made easy and with OnlyKey private keys remain offline and protected. They are not accessible to the browser, the extension, or the local computer. By using U2F the extension can send messages to OnlyKey to be securely decrypted and signed offline. This provides similar function to a token/smart card but no drivers or software required. With this extension and an OnlyKey secure messages can be sent using Windows, Mac, Linux, Chromebook.

## Setup

**Before using this extension you must follow these instructions to generate PGP keys and load them on OnlyKey:**
- [Generate keys](https://docs.crp.to/usersguide.html#generating-keys) using Keybase
- [Load keys](https://docs.crp.to/usersguide.html#loading-keys) onto OnlyKey

### Install extension

BrowserCrypt is only available for testing as an unpacked extension. To add the extension to Chrome:

![Install](https://raw.githubusercontent.com/trustcrypto/OnlyKey-BrowserCrypt/master/images/Install-Extension.jpg)

- Download the app and unzip - https://github.com/trustcrypto/OnlyKey-BrowserCrypt/archive/master.zip
- Browse to chrome://extensions
- Check the box for Developer mode
- Select "Load unpacked extension"
- Select the folder OnlyKey-BrowserCrypt-master to load

### Add Keybase friends

After you create a Keybase account using the instructions provided in the [User's Guide](https://docs.crp.to/usersguide.html) you can add your account and your Keybase friends. This way you can send encrypted messages easily without having to remember their Keybase ID.

![Setup](https://raw.githubusercontent.com/trustcrypto/OnlyKey-BrowserCrypt/master/images/Add-Friends.jpg)

- Click the OnlyKey app icon in the upper-right hand side of the browser (OK)
- Type in your Keybase Username in the first box
- Type in your friends Keybase Usernames in the second box. Separated by commas.
- Click Submit

## Sending and receiving secure messages

Now whenever you need to send an encrypted message:

![Click to encrypt](https://raw.githubusercontent.com/trustcrypto/OnlyKey-BrowserCrypt/master/images/Click-to-encrypt.jpg)

- Just highlight a message to encrypt
- Right-click, and select Encrypt for [Keybase User] to encrypt the message via OnlyKey
- Enter the challenge code that displays in prompt and also displays on the OnlyKey app icon onto the OnlyKey

**Make sure to compose your message in a form that does not have auto draft save features. For example, Gmail may save copies of unencrypted message as you type. The message box on https://apps.crp.to/encrypt may be used to compose messages. We will be introducing a feature soon to open a secure composition window**

The encrypted message will be displayed and you can paste it into an email, IM, app or pretty much anything.

![Highlight message to encrypt/sign and confirm on OnlyKey](https://raw.githubusercontent.com/trustcrypto/OnlyKey-BrowserCrypt/master/images/encrypt.gif)

![Confirm on OnlyKey to Decrypt](https://raw.githubusercontent.com/trustcrypto/OnlyKey-BrowserCrypt/master/images/decrypt.gif)

## Security Goals

**Empower the people**: Give people the ability to securely send and receive messages using any computer with no complicated software/drivers required and no worrying about compromise of user's private identity.

**Serverless**: All processing done via javascript in users own browser locally (no server to hack).

**Private**: No logins required. No tracking!!! No emails. No ads. No demographics. No local proof of who was using this extension as anyone can enter any username and/or list of friends from publicly available Keybase profiles.

**Strong Crypto** - Everything should be sent via HTTPS to/from the web application. Data between local browser and OnlyKey should be encrypted using AES/ECDH shared secret (NaCl + AES-256-GCM). This means on the local computer data is end-to-end encrypted and even if a malicious applications were to intercept communication it would be encrypted and unreadable without the key.

**Open source & audit-able** - What you see is what you get this repository is a Github page hosted directly on Github.

Please, feel free to commit fixes!

## Protocol

A detailed description of the underlying communication protocol can be found here - https://github.com/onlykey/onlykey.github.io

## Thanks to!

This work began with a fork of [Anycrypt](http://lettergram.github.io/AnyCrypt/) written by [Austin Walters](http://austingwalters.com).

## Cryptography Notice

This distribution includes cryptographic software. The country in which you currently reside may have restrictions on the import, possession, use, and/or re-export to another country, of encryption software.
BEFORE using any encryption software, please check your country's laws, regulations and policies concerning the import, possession, or use, and re-export of encryption software, to see if this is permitted.
See <http://www.wassenaar.org/> for more information.

The U.S. Government Department of Commerce, Bureau of Industry and Security (BIS), has classified this software as Export Commodity Control Number (ECCN) 5D002.C.1, which includes information security software using or performing cryptographic functions with asymmetric algorithms.
The form and manner of this distribution makes it eligible for export under the License Exception ENC Technology Software Unrestricted (TSU) exception (see the BIS Export Administration Regulations, Section 740.13) for both object code and source code.

The following cryptographic software is included in this distribution:

   "Fast Elliptic Curve Cryptography in plain javascript" - https://github.com/indutny/elliptic
   "RFC4880 Implementation in IcedCoffeeScript" - https://github.com/keybase/kbpgp

For more information on export restrictions see: http://www.apache.org/licenses/exports/

## Source

[OnlyKey WebCrypt on Github](https://github.com/trustcrypto/OnlyKey-BrowserCrypt)

{% include links.html %}
