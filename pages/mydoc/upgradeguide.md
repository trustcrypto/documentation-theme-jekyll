---
title: Upgrading Firmware
tags: [OnlyKey, Firmware, Upgrade]
keywords: OnlyKey, Firmware, Upgrade
last_updated: Sep, 16, 2019
summary: Follow this guide to upgrade firmware
sidebar: mydoc_sidebar
permalink: upgradeguide.html
folder: mydoc
---


We are pleased to announce that the latest and greatest OnlyKey software is now available! This release includes a new, easier to use desktop app for Windows/Mac/Linux to be used in conjunction with the latest OnlyKey firmware.

## Why Upgrade?

This release has a lot of improvements and new features. Here is the short list of new features in this release:

- Windows 10 support (Fixes 1903 compatibility issue)
- Android support (with OpenPGP message/file encryption support) for more information [read this](https://docs.crp.to/android.html).
- FIDO2 (supports Windows Hello and Azure AD)
- File encryption (using Firefox, Chrome, Edge(new), Brave web browsers or a native app to encrypt/decrypt files)
- PINs can now be changed!
- An easy config mode for initial setup, no app needed
- Challenge-response (HMACSHA1 - we are working with the KeepassXC project to add OnlyKey support)
- Lock button - Lock OnlyKey and computer with touch of button on OnlyKey
- Message encryption improvements - Better integration with Keybase, you can now use our search tool to find Keybase user's and easily send secure messages and files. Easily receive secure messages and files from anyone using our web app
- Auto OpenPGP key loading - Loading private keys onto OnlyKey is now easier, just provide the key and passphrase and the key is loaded automatically
- Auto firmware upgrades - The app prompts when new firmware is available and allows automatic upgrade of firmware.

## Before Upgrading

{% include note.html content="If you are a new OnlyKey user skip this section and head over to the [User's Guide](https://docs.crp.to/usersguide.html#onlykey-setup) to get started." %}

{% include warning.html content="This firmware release adds support for FIDO2 (WebAuthn), this has been developed as a replacement for FIDO U2F. This requires re-registering your security keys (U2F Keys). To do this ensure that the sites where OnlyKey has been registered as a U2F security key have an alternate method of two-factor authentication enabled. After upgrading login and re-register OnlyKey as a security key on these sites." %}

{% include callout.html content="**Backup OnlyKey** - It is always a good idea to create a backup prior to upgrading. Do this by going to the Backup/Restore tab in the OnlyKey app. Ensure you have a copy of your backup key/passphrase ([User Guide Backup Instructions here](https://docs.crp.to/usersguide.html#secure-encrypted-backup-anywhere))." type="default" %}

## Steps to Upgrade

{% include callout.html content="**Step 1.** **Upgrade OnlyKey desktop app** - Follow instructions [here](#app-desktop) to install the new OnlyKey app." type="default" %}

{% include callout.html content="**Step 2.** **Upgrade OnlyKey firmware** - Follow instructions [here](#loading-onlykey-firmware) to upgrade firmware on the OnlyKey" type="default" %}

{% include callout.html content="**Step 3.** **Check out the new features [here](#new-features)**" type="default" %}

{% include note.html content="onlykey-agent users, make sure to install the latest version (1.1.0) of onlykey with `$pip install onlykey`" %}

### Install OnlyKey Desktop App {#app-desktop}

{% include callout.html content="**Step 1.** Download installer" type="default" %}

[<i class="fa fa-apple fa-2x"></i> **macOS**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey.App.5.2.0.dmg)

[<i class="fa fa-windows fa-2x"></i> **Windows**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey_5.2.0.exe)

[<i class="fa fa-linux fa-2x"></i> **Linux**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey_5.2.0_amd64.deb)

{% include note.html content="Linux users, if a UDEV rule has not been created previously follow the following instructions here, additionally the OnlyKey app may now be installed via snapcraft - [Linux Guide](https://docs.crp.to/linux.html)" %}


{% include callout.html content="**Step 2.** Install and launch the app." type="default" %}

{% include tip.html content="You can ensure the integrity of your downloaded file by verifying the checksum. <br>macOS SHA 256 CHECKSUM: 247b3ed27a5d7f2c35f6da0d44e0d6e7cb3ac4084eb3f944df1ce58e0df54dce<br>Windows SHA 256 CHECKSUM: 71ae01f86995c1aadae947d447223f65540c0c5ebcd1319dd5e5f1e1907013c0<br>Linux SHA 256 CHECKSUM: 3dc675c5a33c55abb153f98003a41843d4a1b5959f30ff479b76a953799665c8<br> [ **GPG Public Key**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/CryptoTrust_LLC_pub.asc)" %}

### Steps to Upgrade OnlyKey firmware {#loading-onlykey-firmware}

### Automatic Firmware Upgrade

OnlyKey now supports auto firmware update through the OnlyKey App. This requires that "Automatically check for firmware updates" is checked in your OnlyKey App settings.

If this feature is enabled when you restart the OnlyKey App you will see a pop-up, just follow the provided instructions to upgrade OnlyKey firmware:

{% include image.html file="auto-upgrade1.png" %}

{% include image.html file="auto-upgrade2.png" %}

If you don't see a pop-up message proceed to Download Firmware section below:

### Download Firmware

There is a tab named [Firmware] in the app. This may be used to load the latest firmware onto OnlyKey directly through the app, no backup/restore or wiping is required. Firmware updates are securely signed using a simple blockchain and verified on the OnlyKey.

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/newfeature2.png)

- Download the [latest firmware](https://github.com/trustcrypto/OnlyKey-Firmware/releases/latest/)
  - [OnlyKey Color Standard Edition firmware](https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.8/Signed_OnlyKey_Beta8_STD_Color.txt)
- Follow the instructions in the app to load firmware

## New OnlyKey Features {#new-features}

### FIDO2

OnlyKey is ready for the passwordless future by adding FIDO2 (WebAuthn) support. While the future might be passwordless, the present is definitely not and so OnlyKey continues to support multiple methods of authentication including:

- A hardware password manager
- Multiple two-factor methods – FIDO U2F, FIDO2, TOTP, and Yubikey OTP
- Passwordless SSH login

So what can you do with FIDO2?

- Login to Windows 10 with a security key
- Login to websites with OnlyKey as 2nd factor
- FIDO2 supports something called resident keys, this lets you use the security key and a PIN to login. No username/password required.

### Webcrypt 2.0

We have made many improvements to the Webcrypt secure messaging tool including:

- Secure file encryption/decryption - Easily encrypt multiple files into a GPG encrypted container, no software install required supports Firefox, Chrome, the new Edge browser, and Brave browser.
- Keybase user search tool. Use this to search for and send a secure message or file to anyone on Keybase.
- Native Android support (Chrome and Firefox). Now no app is required to send encrypted messages or encrypt files on Android devices with OnlyKey.

The Webcrypt 2.0 app will be available on Friday Oct 18th

### Challenge-Response

OnlyKey is the first open source device to support this feature which was previously only supported by Yubikey. Challenge and response is a useful feature that is already supported by many apps. Now these apps can support OnlyKey as well as Yubikey. Applications that support this include:

- KeePassXC software password manager will support challenge-response to lock your password vault using OnlyKey (next release KeePassXC 2.5.0). Using a master password plus challenge-response is much better than a master password alone. Stay tuned for the next KeePassXC release with OnlyKey support.

- Computer log in and full-disk encryption – The challenge-response code can be used to log in and is used with full-disk encryption solutions like LUKs. We will be working to add OnlyKey support to these projects. Know of any others we should add? We would love to hear about it, let us know and ask the project to add OnlyKey support.

### Computer Lock

Want a quick and easy way to lock both your OnlyKey and workstation? Just set one of the buttons on OnlyKey as your lock button. When you press the button OnlyKey will automatically lock your computer screen and then lock itself. Configure this in the OnlyKey app [Preferences] tab.

### Adjustable LED Brightness

You can now adjust the brightness of the light on OnlyKey through the app. Configure this in the OnlyKey app [Preferences] tab.

### PIN Change

You can now change your PIN through the OnlyKey app. Go to the [Setup] tab to change your PINs at any time. Configure this in the OnlyKey app [Setup] tab.

### OnlyKey Quick Setup

A keyboard prompt configuration is now available for configuring OnlyKey completely app-free. This feature is very useful for new user’s that only want to use OnlyKey as a security key and don’t want any apps to install.

There are two modes here:
- Auto-mode – Great for administrators provisioning devices for users. Press a button to automatically generate secure random PINs and passphrase. Setup is completed in a matter of seconds.
- Manual-mode – Quickly setup device with chosen PINs by following steps in the keyboard prompt. OnlyKey types out the instructions to follow, no app required.

### Auto OpenPGP Key Loading

Loading private keys onto OnlyKey is now easier, just provide the key and passphrase and the key is loaded automatically. Supports OpenPGP keys generated by Keybase, Mailvelope, and GPG.

{% include image.html file="auto-key.png" %}

{% include links.html %}
