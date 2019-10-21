---
title: OnlyKey Features
permalink: features.html
sidebar: mydoc_sidebar
tags: [OnlyKey, Features]
keywords: OnlyKey, Features
last_updated: Oct, 10 2019
summary: Detailed information on OnlyKey Features
toc: false
folder: mydoc
---


## Features {#features}

### LED Definitions {#led-definitions-onlykey-color}

*   Steady green light = Unlocked
*   No light = Locked
*   Single yellow flash = Button pressed for PIN entry
*   3 red flashes = Wrong PIN
*   Continuous red flashes = Exceeded PIN tries
*   Continuous green flashes = Backup and restore is complete.
*   Blue fade in and fade out = FIDO U2F request
*   Blue blink on/off = FIDO2 request
*   Purple fade in and fade out - Private key signing request (SSH or PGP)
*   Turquoise fade in and fade out - Private key decryption request
*   Red fade in and fade out - Device is in config mode
*   Steady white light - Device is in bootloader mode, use the OnlyKey app to load firmware.

### Password Manager {#password-manager}

Instead of having to remember all of your passwords you can just remember one 7 - 10 digit PIN. You can set up 24 unique accounts using strong and random (up to 56 character) passwords along with the login page URLs, usernames, and two-factor authentication. This way whenever you need to log in you just detach the OnlyKey from your keyring and enter your PIN to unlock your passwords. The Onlykey automatically types them into the login fields for you with the press of a button.

### Two-Factor Authentication {#two-factor-authentication}

There are 3 methods of two-factor authentication supported by Onlykey.

*   Google Authenticator (TOTP)
*   FIDO2 and FIDO Universal 2nd Factor Authentication (U2F)
*   Yubico® One-Time Password

#### Google Authenticator (TOTP) {#google-authenticator-totp}

The information below is intended to provide information on OnlyKey's Google Authenticator (TOTP) feature. For information on setting up and using TOTP see the user's guide [here](https://docs.crp.to/usersguide.html#google-authenticator-totp)

**Background**
Google Authenticator is an application that implements TOTP security tokens from RFC 6238 in mobile apps made by Google, sometimes branded ''Two-step verification'' (or 2-Step Verification).

Quoting Wikipedia:

Typically, users will install the Authenticator app on their smartphone. To log in to a site or service that uses two-factor authentication, they provide user name and password to the site and run the Authenticator app which produces an additional six-digit one-time password. The user provides this to the site, the site checks it for correctness and authenticates the user.

For this to work, a set-up operation has to be performed ahead of time: the site provides a shared secret key to the user over a secure channel, to be stored in the Authenticator app. This secret key will be used for all future logins to the site.

With this kind of two-factor authentication, mere knowledge of username and password is not sufficient to break into a user's account. The attacker also needs knowledge of the shared secret key or physical access to the device running the Authenticator app. An alternative route of attack is a man-in-the-middle attack: if the computer used for the login process is compromised by a trojan, then username, password and one-time password can be captured by the trojan, which can then initiate its own login session to the site or monitor and modify the communication between user and site.

The service provider generates an 80-bit secret key for each user (whereas RFC 4226 §4 requires 128 bits and recommends 160 bits).[36] This is provided as a 16, 26 or 32 character base32 string or as a QR code.

**How it works on OnlyKey**
As mentioned above the service provider generates a base32 string or a QR code. While the way you would set up the Google Authenticator app on your phone is typically to take a picture of the QR code you also have the option of displaying the base 32 string. This option is available when you are setting up an account there may be a link that says something like ''Can't read QR code'' that you have to click to show the base 32 key. You would then copy and paste this key into the the OnlyKey slot that you would like to use with this account.


{% include image.html file="image79.jpg" max-width="492" %}

And then press the OnlyKey button to output your 6 digit OTP into the passcode field to complete the setup. Now you can also go and set your username and password to this slot and have a complete one touch login with two-factor authentication.

Currently the Google Authenticator (TOTP) feature requires the OnlyKey to have the correct time. This is done automatically by having the OnlyKey app installed or by browsing to https://apps.crp.to for on-the-go use.

#### FIDO2 and FIDO Universal 2nd Factor Authentication (U2F) {#universal-2nd-factor-authentication-u2f}

The information below is intended to provide information on OnlyKey's FIDO2 / FIDO U2F feature. For information on setting up and using FIDO2 see the user's guide [here](https://docs.crp.to/usersguide.html#universal-2nd-factor-u2f)

OnlyKey uses the open source Solokey FIDO2 implementation and the source is available [here](https://github.com/trustcrypto/libraries/tree/master/fido2). The Solokey FIDO2 implementation is FIDO2 Certified - Certification No. FIDO20020191001001.

There are differences between OnlyKey and Solokey FIDO2 implementations which are highlighted below.

**Attestation Certificates**

*What are they?* - An attestation certificate and signing key is used to attest to a server or application that a key is from a certain vendor. This permits servers/applications to only allow keys from certain vendors (i.e. Only permit Yubikey to be used). Attestation certificates and signing keys are not used for securing or encrypting data.

For the attestation certificates OnlyKey comes with a default attestation certificate and signing key and also allows users or enterprises to import their own attestation certificate/key. This feature allows organizations to only permit FIDO2 keys issued by the organization to be used. Importing attestation certificates and signing keys can be done in the OnlyKey app.

**Secure Backup and Restore**
OnlyKey supports the [secure encrypted backup anywhere](#secure-backup) feature to enable secure backup and restore of security keys.

**Resident Keys**
OnlyKey supports up to 15 resident keys.

**WebCrypt Support**
OnlyKey supports the WebCrypt FIDO2 extension which permits secure messaging and file encryption via PGP encryption.

#### Yubico® One-Time Password {#Yubico-one-time-password}

OnlyKey's implementation of the Yubico® OTP is based on the open source library provided by Yubico® [here](https://github.com/Yubico/Yubico-c). The one-time passwords generated by OnlyKey have been tested to be indistinguishable from the one-time passwords generated by a Yubikey®. However, some services like Yubicloud do not allow third-party devices and require a valid serial number from a Yubikey®. For example, you can test your OnlyKey with the [https://demo.Yubico.com/](https://demo.Yubico.com/) test site but you would be required to have a valid Yubikey® serial number to do so.

For more information on Yubico® OTP see [this](https://www.Yubico.com/products/services-software/personalization-tools/Yubikey-otp/)

### Keys Feature {#keys-feature}

The keys feature allows you to use OnlyKey to store private keys that can be used for SSH authentication, OpenPGP, and secure OnlyKey backup. Each key may also have a label assigned to it so just like with slots, an identifier can be assigned to each key.

Keys are loaded using the OnlyKey App. Step by step directions for generating and loading keys are provided in the User's Guide here:

- [Generate keys](https://docs.crp.to/usersguide.html#generating-keys) using Keybase
- [Load keys](https://docs.crp.to/usersguide.html#loading-keys) onto OnlyKey

### SSH Login {#ssh-login}

SSH Authentication - Currently only ECC keys (curve25519 & NIST-P256) are supported for SSH authentication. Using the [OnlyKey-Agent](https://docs.crp.to/onlykey-agent.html) SSH authentication is easy and your private key is never exposed on a computer where it can be compromised by hacker.

### OpenPGP Everywhere Message and File Encryption {#openpgp}

The information below is intended to provide information on OnlyKey's OpenPGP everywhere feature. For information on setting up and using OpenPGP everywhere see the user's guide [here](https://docs.crp.to/usersguide.html#secure-com)

OnlyKey is OpenPGP compatible and the worlds first plug and play encryption device. It is universally supported and does not require special software or drivers. With OnlyKey and Keybase together you have offline cold storage of your OpenPGP keys and can still easily encrypt messages and files.

1) **[OnlyKey WebCrypt Web App](https://docs.crp.to/webcrypt.html)** is supported on Firefox, Brave, Edge (new) and Google Chrome for sending secure messages right in the browser. It is also supported on Android for more information [read this](https://docs.crp.to/android.html).

2) **[OnlyKey WebCrypt Native App](https://docs.crp.to/webcrypt.html)** provides the same app functionality but as a native app for that runs on Windows, mac OS, or Linux.

{% include note.html content="Private keys are securely stored on OnlyKey and are not accessible to the app or to the browser. This is in contrast to for example PGP/GPG software, webmail (i.e. Protonmail), and smartphone apps. Additionally, physical user presence is required to process secure messages/files. This is in contrast to Smart Cards which only require a PIN code that can be captured and replayed without physical user presence." %}

### Secure Encrypted Backup Anywhere {#secure-backup}

For information on setting up and using secure encrypted backup see the user's guide [here](https://docs.crp.to/usersguide.html#secure-encrypted-backup-anywhere)

For security information on secure encrypted backup see the security page [here](https://docs.crp.to/security.html#how-backup)

### Self-Destruct {#self-destruct}

Wouldn't it be nice to know that your data is protected, and if you are in a pinch or forced to give up your PIN there is an easy way to make sure that your data does not get into the wrong hands? That is what the Self-Destruct feature is all about. You set this PIN code whenever you first setup your OnlyKey and then if you or anyone else ever enters it the OnlyKey wipes all of the sensitive data you have stored on it.

### Plausible Deniability (International Travel Edition and Standard Edition of Firmware) {#plausible-deniability-international-travel-edition-and-standard-edition-of-firmware}

TL;DR - With a fake profile and a real profile someone can't just force you to hand over your PIN to gain access to all your accounts.

OnlyKey allows the use of a hidden profile (Primary standard profile) and a fake profile (Second profile set to plausible deniability) that essentially provides a cover story. If compelled to unlock an OnlyKey the fake profile can be activated by entering the second profile PIN code. The goal of this feature is that there is no proof that the first profile even exists. The [International Travel Edition](https://docs.crp.to/ite.html) OnlyKey firmware looks and acts just like the Standard Edition firmware when in plausible deniability mode. This means that its not possible to determine if the device is running International Travel Edition firmware (which only has one profile) or the Standard Edition firmware in plausible deniability mode. When the standard edition OnlyKey is in plausible deniability mode it is indistinguishable from an International Travel Edition OnlyKey.

Now that you understand the basics of how the plausible deniability feature works the reason for having two versions of firmware becomes more clear. **OnlyKey is the only device in the world where you can have encryption and there isn't a way to prove that you have encryption.**

For more information read the [International Travel Edition Guide](https://docs.crp.to/ite.html).



{% include links.html %}
