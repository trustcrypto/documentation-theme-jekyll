---
title: OnlyKey Features
permalink: features.html
sidebar: mydoc_sidebar
tags: [OnlyKey, Features]
keywords: OnlyKey, Features
last_updated: Jan, 18 2018
summary: Detailed information on OnlyKey Features
toc: false
folder: mydoc
---


## Features {#features}

### LED Definitions (OnlyKey Color) {#led-definitions-onlykey-color}

*   Steady Green Light = Unlocked
*   No Light = Locked
*   Single Yellow Flash = Button Pressed for PIN entry
*   3 Red Flashes = Wrong PIN
*   Continuous Red Flashes = Exceeded PIN tries
*   Continuous Green Flashes = Backup and restore is complete.
*   Blue Fade in and Fade out = U2F request
*   Purple Fade in and Fade out - Private key signing request (SSH or PGP)
*   Turquoise Fade in and Fade out - Private key decryption request
*   Red Fade in and Fade out - Device is in config mode
*   Steady White Light - Device is in bootloader mode, use the OnlyKey app to load firmware.

### LED Definitions (Original OnlyKey) {#led-definitions-original-onlykey}

*   Steady Light = Unlocked
*   No Light = Locked
*   Single Flash = Button Pressed
*   3 Flash = Wrong PIN
*   Continuous Flash = Exceeded PIN tries
                    Or if you just did a backup and restore, the restore is complete.

*   Fade in and Fade out = U2F, SSH, or private key operation request
   Or if you have placed your device into config mode

### Password Manager {#password-manager}

Instead of having to remember all of your passwords you can just remember one 7 - 10 digit PIN. You can set up 24 unique accounts using strong and random (up to 56 character) passwords along with the login page URLs, usernames, and two-factor authentication. This way whenever you need to log in you just detach the OnlyKey from your keyring and enter your PIN to unlock your passwords. The Onlykey automatically types them into the login fields for you with the press of a button.

### Two-Factor Authentication {#two-factor-authentication}

There are 3 methods of two-factor authentication supported by Onlykey.

*   Google Authenticator (TOTP)
*   Universal 2nd Factor Authentication (U2F)
*   Yubico® One-Time Password

#### Google Authenticator (TOTP) {#google-authenticator-totp}

Google Authenticator is an application that implements TOTP security tokens from RFC 6238 in mobile apps made by Google, sometimes branded ''Two-step verification'' (or 2-Step Verification).

Quoting Wikipedia:

Typically, users will install the Authenticator app on their smartphone. To log in to a site or service that uses two-factor authentication, they provide user name and password to the site and run the Authenticator app which produces an additional six-digit one-time password. The user provides this to the site, the site checks it for correctness and authenticates the user.

For this to work, a set-up operation has to be performed ahead of time: the site provides a shared secret key to the user over a secure channel, to be stored in the Authenticator app. This secret key will be used for all future logins to the site.

With this kind of two-factor authentication, mere knowledge of username and password is not sufficient to break into a user's account. The attacker also needs knowledge of the shared secret key or physical access to the device running the Authenticator app. An alternative route of attack is a man-in-the-middle attack: if the computer used for the login process is compromised by a trojan, then username, password and one-time password can be captured by the trojan, which can then initiate its own login session to the site or monitor and modify the communication between user and site.

The service provider generates an 80-bit secret key for each user (whereas RFC 4226 §4 requires 128 bits and recommends 160 bits).[36] This is provided as a 16, 26 or 32 character base32 string or as a QR code.

As mentioned above the service provider generates a base32 string or a QR code. While the way you would set up the Google Authenticator app on your phone is typically to take a picture of the QR code you also have the option of displaying the base 32 string. This option is available when you are setting up an account there may be a link that says something like ''Can't read QR code'' that you have to click to show the base 32 key. You would then copy and paste this key into the the OnlyKey slot that you would like to use with this account.


{% include image.html file="image79.jpg" max-width="492" %}

And then press the OnlyKey button to output your 6 digit OTP into the passcode field to complete the setup. Now you can also go and set your username and password to this slot and have a complete one touch login with two-factor authentication.

Currently the Google Authenticator (TOTP) feature requires the OnlyKey to have the correct time. This is done automatically by having the OnlyKey app installed or by browsing to https://apps.crp.to for on-the-go use.

#### Universal 2nd Factor Authentication (U2F) {#universal-2nd-factor-authentication-u2f}

OnlyKey's implementation of U2F started out by reviewing the model in use by Yubikey® [here](https://www.Yubico.com/2014/11/Yubicos-u2f-key-wrapping/). We then came up with our own implementation of key wrapping that utilizes [AES-256-GCM](https://github.com/rweather/arduinolibs), this is also used for encryption of local storage. AES-256-GCM is both FIPS approved and [NIST recommended](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf). Our U2F implementation utilizes a double key wrapping method that mitigates the [vulnerabilities that we identified in Yubikey and other U2F devices](https://groups.google.com/forum/#!msg/onlykey/HZ-HWk_LibE/jQMxWgV4BQAJ). Our double key wrapping method works as follows:

**When the Onlykey is configured with a PIN the following occurs:**

1) A first random value is stored (nonce) that is the SHA-256 hash of random values including hardware generated noise and the capacitive touch readings from a user's skin.

2) A second random value is stored (Curve25519 derivation key) that is the SHA-256 hash of random values including hardware generated noise and the capacitive touch readings from a user's skin.

**When U2F is initialized the following occurs:**

1) A U2F handlekey is generated from the SHA-256 hash of the derivation key and the attestation private value.

2) A U2F apphandlekey is generated from the SHA-256 hash of the handlekey, variable portion of the attestation certificate, the attestation private value.

**When U2F registration occurs (physical presence required):**

1) A site specific P256 ECC private key is generated from random values including hardware generated noise and the capacitive touch readings from a user's skin.

2) A site specific thisappkey is generated from the SHA-256 hash of the application id and the apphandlekey.

3) A site specific IV is generated from the SHA-256 hash of the application id.

4) A site specific thishandkey is generated from the SHA-256 hash of the application id, the attestation private value, and the apphandlekey.

6) The site specific application Id is combined with the P256 ECC private key forming a handle.

7) Inner keywrap - The site specific P256 ECC private key portion of the handle is encrypted via AES-256-GCM using the IV and the thishandkey.

8) Outer keywrap - The full handle is encrypted via AES-256-GCM using the IV and the thisappkey.

**When U2F authentication occurs (physical presence required):**

1) A site specific thisappkey is generated from the SHA-256 hash of the application id and the apphandlekey.

2) A site specific IV is generated from the SHA-256 hash of the application id.

3) A site specific thishandkey is generated from the SHA-256 hash of the application id, the attestation private value, and the apphandlekey.

4) Outer keywrap - The full handle is decrypted via AES-256-GCM using the IV and the thisappkey.

5) Inner keywrap - The site specific P256 ECC private key portion of the handle is decrypted via AES-256-GCM using the IV and the thishandkey.

6) The site specific P256 ECC private key is used with uECC_sign_deterministic to sign the hashed challenge.

**When U2F authentication (check-only) occurs:**

1) A site specific thisappkey is generated from the SHA-256 hash of the application id and the apphandlekey.

2) If the website requests check-only, thisappkey is used to decrypt the application id portion of the handle and response is given.

**Attestation Certificates**

For the attestation certificates we allow users to import their own certificates. We do understand that the attestation certificate and private key in other U2F tokens is hard coded and the user is unable to change this. There is an ongoing discussion of how you can have a closed source system (or U2F token) and truly be able to trust the security of that system. A closed source product is not verifiable, and requires you to trust that the vendor was not compelled to put a backdoor into the product. This is why we are using what may be the first open source implementation of U2F that supports user import of attestation certificates.

{% include note.html content="In order to Load your own custom U2F certificate to OnlyKey see the certificate generation guide [here](https://docs.google.com/document/d/1LE09BB2ULGblc--3Ttut66NVMJk698LHp0f3DeRdr7w/edit?usp=sharing)" %}

**What is attestation and why would I load a custom certificate and key?**

*Short Answer - A custom certificate and key is generally not needed. Keeping the default attestation certificate and key is good for privacy as there is no personally identifiable information in the default key. However, there are some use cases like if an organization wants to load custom certificates and keys to devices so that employees only use the company issued device.*

Attestation is basically U2F's way of attesting that a token is from a certain vendor. For example, if you were to use a Yubikey, the website would know that you were using a Yubikey to authenticate instead of some other vendor's device as shown below:

{% include image.html file="u2f-attestation.jpg" max-width="500" %}

This is good in some ways as website's may be able to only permit certain vendor's devices that they trust. But there are two big problems here:

**1) This also can be used to track users and has some serious privacy implications.**
As shown in the output from U2F authentication you can see that a unique serial number is visible.

{% include image.html file="serial-number.jpg" max-width="400" %}

It is unclear if manufactures generally use a unique serial number for each device or a batch of devices. Either way there are many cases where this may permit identification and tracking of the user.

In the case of unique serial numbers the website knows exactly which device was used to authenticate. Knowing what device was used in one step away from knowing what person is accessing the website. And along with this at what time they accessed it, from what location, and what they accessed. If the website were to receive a national security letter they would then have to turn over this information on all of their users. This metadata provides a way to track user's activity and identity with precision.

i.e. Bob uses his device to authenticate to Google and to Facebook. Agency X knows that serial number '123456' device is used to authenticate to Google and Facebook. Agency X knows that this Facebook account belongs to Bob because he has a profile picture of himself, now they know that the Google account also belongs to Bob along with every other account that has a device with serial number '123456' assigned.

OnlyKey addresses this issue by using a generic certificate. The serial number of the default attestation certificate on OnlyKey is '1', this is the same across all OnlyKey devices and to even further obfuscate the identity of the user this same certificate is used by another device (software simulated U2F). So this way there is no way to prove that you are even using an OnlyKey. This makes it so that U2F can be used without compromising privacy.

**2) You can never have an open source U2F device with a "trusted" attestation key/certificate**

In order to be open source it must be possible for a user to change the source (firmware) running on their device. Otherwise, there is no way of knowing what firmware is running on their device or if the vendor was compelled to put a backdoor into the device. But if you allow a user to change the source on their device now you have just invalidated the attestation that this device is a trusted device from a certain vendor. Open source U2F and attestation are essentially incompatible.  

At this point this is not much of an issue as websites allow all U2F token's and do not enforce the attestation. If this were to occur, then open source U2F tokens would no longer work. As many user's do not trust closed source systems for privacy reasons, if this were to occur there may be a need for a new open source friendly fork of U2F to be developed, or use an alternative form of 2FA.

#### Yubico® One-Time Password {#Yubico-one-time-password}

OnlyKey's implementation of the Yubico® OTP is based on the open source library provided by Yubico® [here](https://github.com/Yubico/Yubico-c). The one-time passwords generated by OnlyKey have been tested to be indistinguishable from the one-time passwords generated by a Yubikey®. However, some services like Yubicloud do not allow third-party devices and require a valid serial number from a Yubikey®. For example, you can test your OnlyKey with the [https://demo.Yubico.com/](https://demo.Yubico.com/) test site but you would be required to have a valid Yubikey® serial number to do so.

For more information on Yubico® OTP see [this](https://www.Yubico.com/products/services-software/personalization-tools/Yubikey-otp/)

### Keys Feature {#keys-feature}

The keys feature allows you to use OnlyKey to store private keys that can be used for SSH authentication, OpenPGP, and secure OnlyKey backup. Each key may also have a label assigned to it so just like with slots, an identifier can be assigned to each key.

Under the hood -

*   Up to 30 ECC keys are supported of type curve25519, P256 (NIST), and secp256k1 (Used for Bitcoin)
*   Up to 4 RSA keys are supported with key sizes 1024, 2048, 3072, and 4096 bit keys.

{% include image.html file="image69.png" %}

Keys are loaded using the OnlyKey App. Step by step directions for generating and loading keys are provided in the User's Guide here:

- [Generate keys](https://docs.crp.to/usersguide.html#generating-keys) using Keybase
- [Load keys](https://docs.crp.to/usersguide.html#loading-keys) onto OnlyKey

### SSH Login {#ssh-login}

SSH Authentication - Currently only ECC keys (curve25519 & NIST-P256) are supported for SSH authentication. Using the [OnlyKey-Agent](https://docs.crp.to/onlykey-agent.html) ssh authentication is easy and your private key is never exposed on a computer where it can be compromised by hacker.

### OpenPGP Everywhere {#openpgp}

OnlyKey supports OpenPGP everywhere using our apps:

**[OnlyKey WebCrypt - WebCrypt](https://docs.crp.to/webcrypt.html)** is a serverless Web App that integrates with [OnlyKey](https://crp.to/p/) and [keybase.io](https://keybase.io/) to provide encryption everywhere on-the-go.

**[OnlyKey BrowerCrypt - BrowserCrypt](https://docs.crp.to/webcrypt.html)** is a Google Chrome Extension that integrates with [OnlyKey](https://crp.to/p/) and [keybase.io](https://keybase.io/) to provide easy and secure PGP encryption in Google Chrome.

### Self-Destruct {#self-destruct}

Wouldn't it be nice to know that your data is protected, and if you are in a pinch or forced to give up your PIN there is an easy way to make sure that your data does not get into the wrong hands? That is what the Self-Destruct feature is all about. You set this PIN code whenever you first setup your OnlyKey and then if you or anyone else ever enters it the OnlyKey wipes all of the sensitive data you have stored on it.

### Plausible Deniability (International Travel Edition and Standard Edition of Firmware) {#plausible-deniability-international-travel-edition-and-standard-edition-of-firmware}

TL;DR - With a fake profile and a real profile someone can't just force you to give up your PIN.

Wouldn't it be nice to be able to travel to a country where encryption is illegal or to a country where it is against the law to refuse to give up your password to authorities and be able to comply without actually giving any access to your accounts?

That is what the plausible deniability feature is all about. OnlyKey allows the use of a hidden profile and a fake profile (Plausible Deniability Mode) that essentially provides a cover story. If compelled to do so a fake profile can be activated by entering a plausible deniability PIN code and the goal of this feature is that there is no proof that the hidden profile even exists. In fact since the international travel edition of the OnlyKey ships without the plausible deniability feature there is no way to know if you are using an OnlyKey with the international travel edition firmware or the standard edition firmware in plausible deniability mode. When the standard edition OnlyKey is in plausible deniability mode it is essentially indistinguishable from an international travel edition OnlyKey.

Now that you understand the basics of how the plausible deniability feature works the reason for having two versions of firmware becomes more clear. **OnlyKey is the only device in the world where you can have encryption and there isn't a way to prove that you have encryption.** Here is how this is possible:

Part 1. We ship two versions of the OnlyKey, an international travel edition and a standard edition. We can ship the international travel edition globally and even if there is an encryption ban in the receiving country it is in compliance because it is just a password manager that does not utilize any encryption. The Standard Edition on the other hand does utilize encryption but when the plausible deniability PIN is entered it makes the OnlyKey appear to be running the international travel edition firmware.

Part 2. Both versions utilize physical flash security to essentially lock the information stored on the devices so there is no way to know what version a device has loaded. We have taken great care to ensure that the plausible deniability mode on the standard edition firmware acts exactly the same as the international travel edition firmware.

Part 3. We make it easy for user's to load whatever version of the firmware they want. International customers can easily load the standard edition and vice versa. Even we have no way of knowing what version of firmware a device has loaded.

Anyone can view the open source firmware [here](https://github.com/trustcrypto/OnlyKey-Firmware/releases) and verify that this is the case. Since there are devices that ship without the ability to perform encryption it is plausible that your OnlyKey is one of these, just a basic password manager. There is not a way of knowing that there is another hidden profile that is only activated if you know the secret PIN. Best of all, changing the version of firmware on your device is easily accomplished as the OnlyKey is field upgradable. There is a section in the user's guide [here](#loading-onlykey-firmware) that provides instructions on flashing Onlykey firmware.

So now you can see how a user if compelled to do so could say ''I just have a basic password manager, here is my PIN code'' and it would be completely plausible that they do in fact just have a basic password manager. To be even more plausible the user should set up actual accounts with real credentials which work to log into websites.

Alternatively, if you don't need the second profile for plausible deniability you can just use it as a second profile to store additional accounts, such as a personal profile and keep your work accounts in the primary profile.

For more information on encryption and international travel see [https://www.princeton.edu/itsecurity/encryption/encryption-and-internatio/](https://www.princeton.edu/itsecurity/encryption/encryption-and-internatio/)

### Security Features {#security-features}

#### Hardware Security {#hardware-security}

When it comes to hardware security there are terms such as tamper resistant, tamper proof, and secure element. These terms are mostly marketing terms as anyone with in-depth knowledge of hardware security understands there is no such thing as tamper proof, and tamper resistant can mean something as simple as the device being coated in plastic that can [easily be removed](http://www.hexview.com/~scl/neo/). The National Institute of Standards and Technology has established some standards for the SECURITY REQUIREMENTS FOR CRYPTOGRAPHIC MODULES in the publication [here](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.140-2.pdf). This standard defines 4 security levels.

A simplified explanation of these levels can be found on [wikipedia](https://en.wikipedia.org/wiki/FIPS_140-2) (Notice that even the highest security level is not tamper proof)

While we do not plan on pursuing FIPS certification at this time we can attest that OnlyKey meets many of the requirements of FIPS certification including using a FIPS approved algorithms (FIPS 140-2 Level 1 - AES-256 is an approved algorithm). The coating of the OnlyKey would be difficult to remove and not easily dissolvable with chemicals like plastic coatings. In our testing chemical removal of the coating results in noticeable damage to the OnlyKey that results in evidence that it was tampered with (FIPS 140-2 Level 2 - Tamper Evident). In the same way attempts to manually delaminate the potting compound in our testing will also delaminate electronic components rendering the device inoperable and creates visible damage to the silkscreen/soldermask layers.

In addition to this, we enable the [Kinetis flash security](http://cache.nxp.com/files/microcontrollers/doc/app_note/AN4507.pdf) the first time the device is used. This ensures that the firmware, and all sensitive information stored in memory is essentially locked. The ability to read or write to the chip from external sources is disabled. The only way to clear this so the OnlyKey can load new firmware is to place a jumper between the two touch points of the OnlyKey shown here:

{% include image.html file="image16.png" %}

When a connection is placed between these two points it does two things, first it proves that a user is present there is no way for malware running on the connected computer to do this, second it does a mass erase of the OnlyKey. A mass erase essentially wipes everything and returns the chip to a factory default state. Once this is complete new firmware can be loaded to the Onlykey.

If you would like to read more about the flash security features of the MK20 [here](https://www.pjrc.com/teensy/K20P64M72SF1RM.pdf) is a document that describes in detail.

If you plan to modify the flash security features be warned that changes may brick your device. We tested this feature to ensure this does not happen but any changes you make to source code are at your own risk.

#### Config Mode {#config-mode}

This secondary feature has been added to provide additional protection against the following scenario:

Bob leaves his OnlyKey unlocked and plugged into his computer and walks away, Alice walks up and loads her key onto Bob's OnlyKey and sets this as the backup key and then uses this to create a backup. Alice now has the encrypted contents of Bob's OnlyKey and knows the key.

While Bob should not have left his device unlocked and unattended we still want to prevent this scenario so first a device must be in config mode to load keys or to restore from backup. To put a device in config mode hold the # 6 button down for 5 seconds on an unlocked OnlyKey, then re-enter the PIN. This ensures that only someone who knows the PIN can select the private key used to create a backup.

{% include note.html content="Backups only supported on Standard Edition firmware and not while in plausible deniability mode. The reason is the backup requires encryption and plausible deniability requires being able to deny that any encryption is used." %}

#### Cryptographically Secure Random Number Generator {#cryptographically-secure-random-number-generator}

After much research it was concluded that Arduino and other microcontrollers such as MK20 are not ideal for generating truly random numbers. While the Arduino Reference Manual recommends using analog pins, which read random atmospheric noise to seed a PRNG, it was concluded that this method alone may not generate a cryptographically secure random number. The paper here goes into more detail - [http://benedikt.sudo.is/ardrand.pdf](http://benedikt.sudo.is/ardrand.pdf). A true random number generator uses non-deterministic sources to produce randomness. Thus, the random number generation function in use requires user provided entropy. This is similar to how TrueCrypt/VeraCrypt use mouse movements to generate entropy during key generation. The OnlyKey RNG function uses a combination of the entropy provided from two separate analog pins (atmospheric noise) and the user's key presses on the six capacitive touch sensors (conductivity of user's skin, duration of key press, number of key presses, conductivity of air).

Below is an example of values read from the analog 0 pin and the touchpins values, read once per second for 3 seconds without any user provided entropy.

Analog 0 Value = 123

Touchpin 1 Value = 552

Touchpin 2 Value = 553

Touchpin 3 Value = 607

Touchpin 4 Value = 700

Touchpin 5 Value = 662

Touchpin 6 Value = 723

Analog 0 Value = 87

Touchpin 1 Value = 553

Touchpin 2 Value = 555

Touchpin 3 Value = 610

Touchpin 4 Value = 700

Touchpin 5 Value = 663

Touchpin 6 Value = 724

Analog 0 Value = 242

Touchpin 1 Value = 552

Touchpin 2 Value = 553

Touchpin 3 Value = 605

Touchpin 4 Value = 699

Touchpin 5 Value = 662

Touchpin 6 Value = 723

Without any interaction from the user there is entropy generated from analog 0 and some entropy generated from the touchpins. The touchpin's values change slightly based on temperature, humidity, and no two pins have exactly the same sensing calibration. Below is an example of values read from the analog 0 pin and the touchpins, values read once per second for 3 seconds with user entering a three digit PIN.

Analog 0 Value = 221

Touchpin 1 Value = 551

Touchpin 2 Value = 559

Touchpin 3 Value = 6452

Touchpin 4 Value = 700

Touchpin 5 Value = 662

Touchpin 6 Value = 709

Analog 0 Value = 84

Touchpin 1 Value = 550

Touchpin 2 Value = 559

Touchpin 3 Value = 611

Touchpin 4 Value = 712

Touchpin 5 Value = 5684

Touchpin 6 Value = 729

Analog 0 Value = 130

Touchpin 1 Value = 550

Touchpin 2 Value = 553

Touchpin 3 Value = 609

Touchpin 4 Value = 6228

Touchpin 5 Value = 669

Touchpin 6 Value = 721

With user interaction, the touchpin values change significantly. Also the touchpins next to the button that was pressed change slightly just from the proximity of a user's finger to that button. As implemented, touchpin values are read from all six capacitive touch sensors once every ~10ms and users are required to have a PIN of 7 – 10 digits. During a typical login (One button press per second), this generates approximately 56 - 80 numbers based on the conductivity of a user's skin and 280 - 400 numbers based on the conductivity of the air around the buttons not being pressed. By performing xor and bitshift operations on these numbers we can generate a random number that is based on non-deterministic values that are completely unpredictable. Additionally, if a user enters an incorrect PIN this would generate even more entropy as this would require re-entering the PIN and during use the buttons are also pressed to select sites to authenticate to which generates constantly unpredictable entropy.

{% include links.html %}
