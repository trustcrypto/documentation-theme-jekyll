---
title: OnlyKey Features
permalink: features.html
sidebar: mydoc_sidebar
tags: [OnlyKey, Features]
keywords: OnlyKey, Features
last_updated: Aug, 30 2020
summary: Detailed information on OnlyKey Features
toc: false
folder: mydoc
---

## OnlyKey Product Details

![How-To: Generate and load a new OpenPGP key on OnlyKey](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/Infographic.png)

### UNIVERSAL SUPPORT
Supports Windows, Mac OS, Android, Linux, and Chrome OS. Driverless operation – Recognized by computer as a regular keyboard.

### PORTABLE. DURABLE. WATERPROOF
On-the-go – Easily attach and detach the OnlyKey to your keychain and bring it everywhere you go.

![How-To: Generate and load a new OpenPGP key on OnlyKey](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/package.jpg)

### PIN PROTECTED
Your PIN code must be typed onto the 6 button keypad of the OnlyKey in order to unlock. If you lose OnlyKey no problem, it is PIN protected and can’t be used without the PIN, enter the wrong PIN too many times the data will self destruct

### WHERE CONVENIENCE AND SECURITY MEET
OnlyKey is dual use. It functions as a password manager and a two-factor token. You can plug OnlyKey into any computer, press a button, and it types out a username and password the same as if you typed it yourself; but with one big difference, you don’t have to remember passwords! OnlyKey does that for you. This allows using very complex and secure passwords that cannot be cracked by any available methods.

### SECURE BY DESIGN
Information can only be written to the OnlyKey or wiped. This protects your data even if the connected computer has been compromised. Unlike smartcards that are vulnerable to keylogger attacks, the PIN used to unlock OnlyKey is entered on the OnlyKey itself.

## Key Features

### HARDWARE PASSWORD MANAGER
Instead of having to remember all of your passwords you can just remember one 7 - 10 digit PIN. OnlyKey stores up to 24 unique accounts in offline storage and can be used to secure an unlimited number of accounts if used in conjunction with a software password manager. You can set up each of the 24 accounts using strong and random (up to 56 character) passwords along with the login page URLs, usernames, and/or two-factor authentication. This way whenever you need to log in you just detach the OnlyKey from your keyring and enter your PIN to unlock your passwords. The Onlykey automatically types them into the login fields for you with the press of a button.

### UNIVERSAL 2-FACTOR TOKEN
Supports FIDO2 and FIDO Universal 2nd Factor Authentication (U2F), OATH TOTP, and Yubikey® compatible OTP. Chances are that if the website supports two-factor authentication, OnlyKey is compatible.

*   [FIDO2 and FIDO Universal 2nd Factor Authentication (U2F)](#universal-2nd-factor-authentication-u2f)
*   [OATH TOTP](#google-authenticator-totp)
*   [Yubico® One-Time Password](#Yubico-one-time-password)

### SSH AUTHENTICATION
SSH authentication is easy with passwordless login. Your SSH key remains securely stored in hardware and not available to attackers.

*   [OpenSSH Support](https://docs.crp.to/openssh.html)
*   [OnlyKey Agent SSH](https://docs.crp.to/onlykey-agent.html)

### OPENPGP SUPPORT
Using OnlyKey makes OpenPGP easier than ever.

*   [OnlyKey WebCrypt](https://docs.crp.to/webcrypt.html)
*   [OnlyKey Agent GPG](https://docs.crp.to/onlykey-agent.html)

Keys are loaded using the OnlyKey App. Step by step directions for generating and loading keys are provided in the User's Guide here:

*   [Generate keys](https://docs.crp.to/usersguide.html#generating-keys) using Keybase
*   [Load keys](https://docs.crp.to/usersguide.html#loading-keys) onto OnlyKey

### SELF-DESTRUCT FEATURE
In a pinch and want to wipe your OnlyKey? Enter your self-destruct PIN to wipe EVERYTHING! Plus you can always restore from backup easily.

*   [What does entering the self destruct PIN do?](https://docs.crp.to/faq.html#what-does-entering-the-self-destruct-pin-do)

### PLAUSIBLE DENIABILITY FEATURE
The first and only hardware solution where only you hold the keys + no proof there even are keys! Travel abroad without having to give up your encryption keys/passwords.

*   [International Travel Edition Guide](https://docs.crp.to/ite.html)

### ENCRYPTED BACKUP ANYWHERE
OnlyKey types out the encrypted backup so it works anywhere independent of apps. Save the encrypted backup to a file or email it to yourself.

*   For information on setting up and using secure encrypted backup see the user's guide [here](https://docs.crp.to/usersguide.html#secure-encrypted-backup-anywhere)
*   For security information on secure encrypted backup see the security page [here](https://docs.crp.to/security.html#how-backup)

## Other Features

### AUTOMATIC LOCK FEATURE
Want your OnlyKey to automatically lock itself after being inactive for 30 minutes? No problem, this is customizable in [OnlyKey preferences](https://docs.crp.to/usersguide.html#configurable-inactivity-lockout-period).

### ADVANCED HARDWARE SECURITY
Once a PIN has been set on your OnlyKey it locks down the hardware so that even if an attacker gains physical access to your OnlyKey, without the correct PIN it will be useless. Read more about [security architecture of OnlyKey](https://docs.crp.to/security.html).

### INTERNATIONAL KEYBOARD LAYOUTS
OnlyKey is the world's first device to allow changing your keyboard layout on the fly. Supports multiple international keyboard layouts:
- US_ENGLISH (default)
- CANADIAN_FRENCH
- CANADIAN_MULTILINGUAL
- DANISH
- DANISH_MAC
- FINNISH
- FRENCH
- FRENCH_BELGIAN
- FRENCH_SWISS
- GERMAN
- GERMAN_MAC
- GERMAN_SWISS
- ICELANDIC
- IRISH
- ITALIAN
- NORWEGIAN
- PORTUGUESE
- PORTUGUESE_BRAZILIAN
- SPANISH
- SPANISH_LATIN_AMERICA
- SWEDISH
- TURKISH
- UNITED_KINGDOM
- US_INTERNATIONAL
- CZECH
- SERBIAN_LATIN_ONLY
- HUNGARIAN
- DVORAK

### USER SELECTABLE TYPE SPEED FEATURE
Want your OnlyKey to type out information faster or slower? No problem, this is customizable.

### LED DEFINITIONS {#led-definitions-onlykey-color}

*   Steady green light = Unlocked
*   No light = Locked
*   Single yellow flash = Button pressed for PIN entry
*   3 red flashes = Wrong PIN
*   Continuous red flashes = Exceeded PIN tries
*   Continuous green flashes = Backup and restore is complete.
*   Blue blink then green blink = FIDO U2F request
*   Blue blink on/off = FIDO2 request
*   Purple fade in and fade out - Private key signing request (SSH or PGP)
*   Turquoise fade in and fade out - Private key decryption request
*   Red fade in and fade out - Device is in [config mode](https://docs.crp.to/security.html#config-mode)
*   Steady white light - Device is in bootloader mode, use the OnlyKey app to [load firmware](https://docs.crp.to/usersguide.html#loading-onlykey-firmware).

### Button Definitions {#button-definitions}

#### Unconfigured OnlyKey {#uninitialized-onlykey}

*   Hold button #3 down for 5+ seconds to start quick setup - See [OnlyKey Quick Setup](https://docs.crp.to/usersguide.html#quick-setup) for more information.
*   Hold button #1 down for 5+ seconds to start quick setup in manual mode.
*   Hold button #2 down for 5+ seconds to start quick setup in auto mode.

#### Locked OnlyKey {#uninitialized-onlykey}

*   While locked buttons only function to enter PIN code to unlock OnlyKey, 7-10 digits.

#### Unlocked OnlyKey {#unlocked-onlykey}

*   Tap a button for slot <button #>A (i.e. Press OnlyKey button #1 for less than 1 second to type out account data stored in slot 1a)
*   Hold a button for slot <button #>B (i.e. Press OnlyKey button #1 for more than 1 second to type out account data stored in slot 1b)

***Note: This provides 12 slots, as OnlyKey supports two profiles there are a maximum of 24 accounts.***

*   Hold button #1 for 5+ seconds to backup OnlyKey - See [secure backup feature](https://docs.crp.to/usersguide.html#secure-encrypted-backup-anywhere) for more information.
*   Hold button #2 for 5+ seconds to type out slot labels - See [OnlyKey on-the-go](https://docs.crp.to/usersguide.html#otg) for more information.<br>i.e.<br>
1a Google<br>
2a Bank<br>
3a Email<br>
4a VPN<br>
5a School<br>
6a Coinbase<br>
1b Amazon AWS<br>
2b Dropbox<br>
3b KeePassXC<br>
4b Azure<br>
5b Github<br>
6b Lastpass<br>

*   Hold button #6 for 5+ seconds to put OnlyKey in config mode - See [config mode](https://docs.crp.to/security.html#config-mode) for more information.

{% include links.html %}
