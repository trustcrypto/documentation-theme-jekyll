---
title: OpenSSH
tags: [SSH]
keywords: OnlyKey, SSH, OpenSSH
last_updated: May, 22, 2020
summary: The OnlyKey can be used with OpenSSH to provide multifactor authentication on SSH keys
sidebar: mydoc_sidebar
permalink: openssh.html
folder: mydoc
---

# OpenSSH v8.2

This document describes how to use the OnlyKey as a second factor authentication device with traditional SSH Keys.

The OnlyKey currently only supports `ecdsa` keys with OpenSSH.

## Quickstart Guide

1. You must have OpenSSH v8.2 or higher and the necessary [prerequisites](#prerequisites) installed.

2. You may now generate your SSH keys using `ssh-keygen`.  Provide any desired optional arguments and you will be prompted to press your OnlyKey and provide an optional passphrase.

```
$ ssh-keygen -t ecdsa-sk
You may need to touch your authenticator to authorize key generation.
Enter file in which to save the key (/home/user/.ssh/id_ecdsa_sk):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/user/.ssh/id_ecdsa_sk
Your public key has been saved in /home/user/.ssh/id_ecdsa_sk.pub
The key fingerprint is:
SHA256:ECFmaoLZENpq0rLem8HC1F6vTwH1pjsnR6X8l/r54rQ user@host
The key's randomart image is:
+-[ECDSA-SK 256]--+
|o.  + oo         |
|o= + ....        |
|= =. ... o .     |
| =.   ..+ o      |
|+o.. . oS+       |
|=oo . . + .   .  |
|.o +   * o . +   |
|. o o o o = +.o  |
| . +....   .oEo. |
+----[SHA256]-----+
```

3. Then copy the new public key to your remote hosts.

```
$ ssh-copy-id -i ~/.ssh/id_ecdsa_sk user@remotehost
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "id_ecdsa_sk.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'user@remotehost'"
and check to make sure that only the key(s) you wanted were added.
```

4. And then log in your remote host.  You will be prompted to enter your passphrase (if entered during key generation) and asked to press your OnlyKey.

```
$ ssh -i ~/.ssh/id_ecdsa_sk user@remotehost
Enter passphrase for key 'id_ecdsa_sk':
Confirm user presence for key ECDSA-SK SHA256:ECFmaoLZENpq0rLem8HC1F6vTwH1pjsnR6X8l/r54rQ
```

5. Success!


## Prerequisites

### Void Linux
```
$ xbps-install -S openssh openssh-sk-helper
```


### Arch Linux
```
$ pacman -S openssh libfido2
```

### Ubuntu (20.10 Groovy Gorilla) & Debian (bullseye)
```
$ apt install openssh-client
```


