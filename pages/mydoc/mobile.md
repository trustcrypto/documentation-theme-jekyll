---
title: Using OnlyKey with Mobile Devices (Android and iOS)
tags: [OnlyKey, Android]
keywords: OnlyKey, Android, mobile
last_updated: Feb, 21, 2020
summary: Options for using OnlyKey with Android and iOS phones / tablets
sidebar: mydoc_sidebar
permalink: mobile.html
folder: mydoc
---

### Prerequisites

- Ensure the latest firmware is loaded on OnlyKey. Instructions are available [here](https://docs.crp.to/usersguide.html#loading-onlykey-firmware) for loading firmware.
- Mobile device using adapter, these may also be purchased [here](https://onlykey.io/collections/accessories-1).
- To encrypt/decrypt a key must be loaded on OnlyKey. Instructions are available [here](https://docs.crp.to/usersguide.html#generating-keys).

### Android/iOS Static Password, TOTP, and Yubikey OTP Support

Since the OnlyKey is essentially detected by mobile device as a keyboard, the username / password / Yubikey® OTP login features will work.

The TOTP feature requires the correct time in order to generate correct codes. In order to set the time on OnlyKey browse to https://apps.crp.to from Chrome or Firefox in Android (Safari in iOS) before trying to login.

### Using OnlyKey as a Security Key on Android

Registering and logging in with OnlyKey as a security key on Android is almost the same as using on a desktop computer. This is currently supported using Firefox and Chrome browsers for Android. To use OnlyKey as a security key:

- Plug OnlyKey into mobile device using adapter
- Enter PIN to unlock OnlyKey
- Browse to the site you wish to use OnlyKey with
- Register OnlyKey as a security key (Android has several pop up messages that you must accept to proceed)
- Once registered you can use OnlyKey as a security key to login

{% include note.html content="If you have already registered OnlyKey as a security key for a website on desktop computer you may still have to re-register security key on Android." %}

### Using OnlyKey to encrypt files on Android

This is currently supported using Firefox and Chrome browsers for Android. To use OnlyKey to encrypt/decrypt files:

- Plug OnlyKey into mobile device using adapter
- Enter PIN to unlock OnlyKey
- Browse to https://apps.crp.to/encrypt-files
- A pop-up will appear that you must accept for the device to communicate with OnlyKey
- If OnlyKey is correctly connected a message will show "OnlyKey v0.2-beta.8c Secure Connection Established"
- Enter your Keybase username and the recipient's username (if you are encrypting files for yourself this is your username)
- Select files to encrypt and click encrypt and sign
- Accept the pop-up messages that appear so that the device may communicate with OnlyKey
- Enter the challenge code on OnlyKey

{% include tip.html content="The challenge code is an added security feature, if ease of use is the priority this can be turned off so that pressing any button will confirm. To do this set 'Disable Challenge Code for PGP' in the OnlyKey app preferences." %}

### Using OnlyKey to decrypt files on Android

- Plug OnlyKey into mobile device using adapter
- Enter PIN to unlock OnlyKey
- Browse to https://apps.crp.to/decrypt-files
- A pop-up will appear that you must accept for the device to communicate with OnlyKey
- If OnlyKey is correctly connected a message will show "OnlyKey v0.2-beta.8c Secure Connection Established"
- Enter your Keybase username
- Select the encrypted file to decrypt (should be a .gpg file) and click decrypt
- Accept the pop-up messages that appear so that the device may communicate with OnlyKey
- Enter the challenge code on OnlyKey
- Once completed a zip file containing your files will be downloaded to Android
- Use a zip utility app to open the zip and access files i.e. Winzip for Android


### Using OnlyKey as a Security Key on iOS (Experimental)

Registering and logging in with OnlyKey as a security key on iOS is almost the same as using on a desktop computer. This is currently supported using the iOS Safari browser. To use OnlyKey as a security key:

- Plug OnlyKey into mobile device using adapter
- Enter PIN to unlock OnlyKey
- Browse to the site you wish to use OnlyKey with
- Register OnlyKey as a security key (iOS may have several pop up messages that you must accept to proceed)
- Once registered you can use OnlyKey as a security key to login

{% include note.html content="If you have already registered OnlyKey as a security key for a website on desktop computer you may still have to re-register security key on iOS." %}

### Using OnlyKey to encrypt files on iOS (Experimental)

This is currently supported using the iOS Safari browser. To use OnlyKey to encrypt/decrypt files:

- Plug OnlyKey into mobile device using adapter
- Enter PIN to unlock OnlyKey
- Browse to https://apps.crp.to/encrypt-files
- A pop-up will appear that you must accept for the device to communicate with OnlyKey
- If OnlyKey is correctly connected a message will show "OnlyKey v0.2-beta.8c Secure Connection Established"
- Enter your Keybase username and the recipient's username (if you are encrypting files for yourself this is your username)
- Select files to encrypt and click encrypt and sign
- Accept the pop-up messages that appear so that the device may communicate with OnlyKey
- Enter the challenge code on OnlyKey

{% include tip.html content="The challenge code is an added security feature, if ease of use is the priority this can be turned off so that pressing any button will confirm. To do this set 'Disable Challenge Code for PGP' in the OnlyKey app preferences." %}

### Using OnlyKey to decrypt files on iOS (Experimental)

This is currently supported using the iOS Safari browser. To use OnlyKey to encrypt/decrypt files:

- Plug OnlyKey into mobile device using adapter
- Enter PIN to unlock OnlyKey
- Browse to https://apps.crp.to/decrypt-files
- A pop-up will appear that you must accept for the device to communicate with OnlyKey
- If OnlyKey is correctly connected a message will show "OnlyKey v0.2-beta.8c Secure Connection Established"
- Enter your Keybase username
- Select the encrypted file to decrypt (should be a .gpg file) and click decrypt
- Accept the pop-up messages that appear so that the device may communicate with OnlyKey
- Enter the challenge code on OnlyKey
- Once completed a zip file containing your files will be downloaded to iOS
- Use a zip utility app to open the zip and access files

{% include links.html %}
