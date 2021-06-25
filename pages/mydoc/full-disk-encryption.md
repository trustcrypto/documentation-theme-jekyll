---
title: Using OnlyKey for Full-Disk Encryption and Head-less Server
tags: [OnlyKey, server, head-less, authentication, FDE, full-disk encryption]
keywords: OnlyKey, server, head-less, authentication, FDE, full-disk encryption
last_updated: May, 17, 2020
summary: How to use OnlyKey for full-disk encryption
sidebar: mydoc_sidebar
permalink: full-disk-encryption.html
folder: mydoc
---

## Full-Disk Encryption

OnlyKey may be used to store a long random password (up to 56 characters long) that is ideal for full-disk encryption. As OnlyKey is detected as a regular USB keyboard this method of full-disk encryption password entry works on all devices and operating sytems.

### Windows Bitlocker

OnlyKey may be used to enter passphrase/PIN to unlock Bitlocker encrypted drives.

### LUKS

OnlyKey may be used to enter passphrase to unlock LUKS encrypted drives. Additionally, by using the FIDO2 features of OnlyKey this may be used to implement LUKS 2-factor authentication with open source solutions such as [fido2luks](https://github.com/shimunn/fido2luks).

### Other

OnlyKey may be used to unlock any encrypted drive that supports a PIN, password, or passphrase such as VeraCrypt drives.

## Head-less Device Authentication Scenarios

There are quite a few scenarios where secure authentication with a head-less (no monitor) computer is required. Here is an example use case and how OnlyKey may be utilized:

- A consulting company wants to ship a testing device to a customer. Full-disk encryption is enabled to ensure that only the customer at the destination can decrypt and access the server. Company ships both the server and a provisioned OnlyKey protected by a PIN code. Upon receiving the shipment customer calls client to obtain PIN code (or sent via secure messaging). The client inserts the OnlyKey, unlocks with PIN code and presses a button which sends a very strong 56 character password to unlock the server.

OnlyKey helps is several ways:
  - Sending the client the password securely may be an issue. If the password is intercepted by a hacker it may be used to access the server. On the other hand, the OnlyKey PIN is only usable by a hacker if they also have access to the physical OnlyKey device.
  - The client may decide to write the password down or store it insecurely, with OnlyKey there is no password to write down.
  - The client may become frustrated typing that long of a password. OnlyKey automatically types the password at the push of a button which adds convenience without compromise of security.
  - OnlyKey gives visible feedback to the user when FDE login is successful on Linux systems by using custom UDEV rule [here](https://docs.crp.to/49-onlykey-blink.rules) which makes OnlyKey blink blue after login success.


{% include links.html %}
