---
title: About Security
tags: [OnlyKey, security]
keywords: OnlyKey, security
last_updated: Feb, 22, 2019
summary: This article talks about the security features and security architecture of OnlyKey
sidebar: mydoc_sidebar
permalink: security.html
folder: mydoc
---

## Security Features Overview

- Firmware verification - The bootloader verifies the firmware signature on the OnlyKey. The firmware is only loaded onto the OnlyKey if the firmware is correctly signed by CryptoTrust.

- Firmware integrity checking - The bootloader verifies the firmware hash each time the device is used. The device only starts the firmware if the firmware has not changed.

- Tamper resistant / chemical resistant hardware - The device is coated with a chemical resistant coating that is resistant to chemical removal. Visible damage is done to the device by attempting to access coated electronics (Tamper evident).

- Protected key operations - Encryption / decryption operations are only allowed after user authentication via PIN.

- Read/write-protected secure flash - OnlyKey utilizes Kinetis [flash security](#flashsecurity) to securely lock all data residing on OnlyKey.

- Offline secure processor - The data stored and processed on the OnlyKey is completely isolated from the connected computer. Data can only be written to the OnlyKey or wiped. Physical user touch is required to authorize authentication.

- Secure encrypted backup and restore - Backups are securely encrypted with a user's passphrase (25+ characters) or a user's PGP key.

- [True random number generation](cryptographically-secure-random-number-generator) - To guarantee random keys the patent pending method of random number generation utilizes a combination of hardware entropy and user touch entropy. The user touch entropy is completely unpredictable random data that is affected by many variables such as the conductivity of the user's skin, how long they press button, how long they delay between button presses, temperature and humidity.

### About Hardware Security {#hardware-security}

When it comes to hardware security there are terms such as tamper resistant, tamper evident, tamper proof, and secure element. It is important to understand what these terms mean as they are often used for marketing purposes.

- **Tamper proof** - Anyone with in-depth knowledge of hardware security understands there is no such thing as tamper proof. The National Institute of Standards and Technology has established some standards for the SECURITY REQUIREMENTS FOR CRYPTOGRAPHIC MODULES in the publication [here](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.140-2.pdf). This standard defines 4 security levels. A simplified explanation of these levels can be found on [wikipedia](https://en.wikipedia.org/wiki/FIPS_140-2) (Notice that even the highest security level is not tamper proof)

- **Tamper resistant** - This can mean something as simple as the device being coated in plastic. In many cases that plastic can [easily be removed](http://www.hexview.com/~scl/neo/) with household chemicals.

- **Secure element** - This label indicates that the manufacturer intends for the device to be used for security related applications. This label does not ensure that a device is actually secure. For example, the recent article [here](https://www.cl.cam.ac.uk/~sps32/cardis2016_sem.pdf) found that when attempting to extract the memory from a device using a scanning electron microscope, the smart card (secure element) was compromised just as the other non-secure elements tested.
– ATMEL AT90SCxx 0.21µm 2T memory cell (smart card type IC)
Additionally, it is important to consider that most security weaknesses are related to issues with the implementation of a secure element. For example, the Ledger hardware wallet was [recently compromised](https://saleemrashid.com/2018/03/20/breaking-ledger-security-model/) due to their custom architecture. Another consideration with secure elements is that an NDA is required by most manufacturers, which requires the device to be closed source with unverifiable security. This sometimes allows vulnerabilities to go unnoticed for years, as was the case with the recent [Infineon RSA key generation vulnerability](https://crocs.fi.muni.cz/public/papers/rsa_ccs17) that affected millions of smart cards and TPMs; "The vulnerability is present in NIST FIPS 140-2 and CC EAL 5+ certified devices since at least the year 2012".

OnlyKey meets many of the requirements of FIPS certification including using FIPS approved algorithms (FIPS 140-2 Level 1 - AES-256). OnlyKey circuitry is coated with a compound that is both chemical resistant and tamper resistant. This means that it would be difficult to remove and not easily dissolvable with chemicals like plastic coatings. Removal of the coating also results in noticeable damage to the OnlyKey (FIPS 140-2 Level 2 - Tamper Evident).

## Technical Specifications

### Encryption and hashing methods

- Data at rest is encrypted via AES-256-GCM
- SSH Authentication uses ECC P256 or ed25519
- OpenPGP/GPG Decryption/Signing uses RSA (1024, 2048, 3072, and 4096)
- [FIDO U2F](https://docs.crp.to/features.html#universal-2nd-factor-authentication-u2f) uses AES-256-GCM and ECC P256
- Firmware signing/verification uses NACL
- Firmware integrity checking utilizes SHA-512
- [WebCrypt App](https://docs.crp.to/webcrypt.html) uses NACL and AES-256-GCM for data in transit and OpenPGP for secure messages
- [Yubico® One-Time Password](https://docs.crp.to/features.html#Yubico-one-time-password) uses AES-128
- Challenge-response uses HMACSHA1

### Key storage

- Up to 29 ECC keys are supported of type curve25519, P256 (NIST), and secp256k1 (Used for Bitcoin)
- Up to 4 RSA keys are supported with key sizes 1024, 2048, 3072, and 4096 bit keys.

## Security Threats

### Phishing

OnlyKey by design protects user's from phishing. OnlyKey may be used as a security key (FIDO U2F) which has been found to prevent phishing (Google claims note of it's 85,000+ employees were successfully phished when it implemented U2F security keys)

### Brute forcing the OnlyKey PIN

PINs must be 7 - 10 digits long, this means with a 7 digit PIN there are 279,936 possible PIN codes and with a 10 digit PIN there are 60,466,176 possible PIN codes. After 10 failed PIN attempts the device wipes all data which makes brute forcing of the PIN impossible.

### Stealing the user's computer

OnlyKey stores all sensitive data on the key itself so loss of a computer would not result in loss of this sensitive data.

### Malware on the user's computer

OnlyKey stores all sensitive data on the key itself and malware is not able to extract this data. Sensitive data such as passwords are only entered onto the computer when a physical person presses the assigned button. Additionally, using OnlyKey as a security key (FIDO U2F) provides an additional layer of protection.

### Hacking OnlyKey servers

OnlyKey is a decentralized security key meaning that all sensitive data is stored on the key itself and there are no servers hosting this data.

### Compromising OnlyKey backup files

OnlyKey backup files are encrypted and without the passphrase or PGP key they cannot be decrypted.

### Reflashing the OnlyKey with malicious firmware

OnlyKey may only load firmware signed by CryptoTrust LLC. Developer model devices may be purchased to load test firmware.

### Hardware attacks

There are multiple protections in use to prevent successful hardware attacks.

- All sensitive data is encrypted on OnlyKey and only decrypted after a correct PIN is entered. The decryption key is not stored on the hardware it is derived from the user's PIN and other data including a random nonce.

- While locked and prior to successful PIN entry the device does not allow USB communication and does not read or process USB data.

- While unlocked after a successful PIN entry there is an integrity counter used by the firmware running on OnlyKey. If instructions are skipped over the integrity counter will become corrupt causing the device to restart and lock.

- [Kinetis flash security](https://www.nxp.com/docs/en/application-note/AN4507.pdf) is enabled the first time the device is used. This disables all debugging capabilities of the hardware, securely locks the flash memory, and keeps all information stored within the processor secure.

- Signed firmware uses a block chain where each block is signed and each block is verified on the device itself prior to loading. If any of the blocks of firmware contain an invalid signature the firmware load will be unsuccessful. If any of the blocks of firmware do not contain the valid signature of the previous block the firmware load will be unsuccessful. This ensures that only firmware signed by CryptoTrust LLC may be loaded and the firmware is verified by the device itself.

- Firmware is checked for integrity each time the device is powered on prior to loading the firmware. The device only starts the firmware if the firmware has not changed.

## Advanced

### Cryptographically Secure Random Number Generator {#cryptographically-secure-random-number-generator}

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

#### Config Mode {#config-mode}

This secondary feature has been added to provide additional protection against the following scenario:

Bob leaves his OnlyKey unlocked and plugged into his computer and walks away, Alice walks up and loads her key onto Bob's OnlyKey and sets this as the backup key and then uses this to create a backup. Alice now has the encrypted contents of Bob's OnlyKey and knows the key.

While Bob should not have left his device unlocked and unattended we still want to prevent this scenario so first a device must be in config mode to load keys or to restore from backup. To put a device in config mode hold the # 6 button down for 5 seconds on an unlocked OnlyKey, then re-enter the PIN. This ensures that only someone who knows the PIN can select the private key used to create a backup.

{% include links.html %}
