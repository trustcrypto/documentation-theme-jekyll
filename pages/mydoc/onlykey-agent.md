---
title: OnlyKey SSH/GPG agent
tags: [OnlyKey, Agent, Python]
keywords: OnlyKey, Agent
last_updated: Aug, 17, 2020
summary: Using OnlyKey as hardware SSH and GPG agent.
sidebar: mydoc_sidebar
permalink: onlykey-agent.html
folder: mydoc
---

# onlykey-agent

SSH agent for the OnlyKey.

SSH is a popular remote access tool that is often used by administrators. Thanks to the OnlyKey SSH Agent remote access can be passwordless and more secure.

## SSH Agent Quickstart Guide

1) After installing [prerequisites](#installation), install OnlyKey agent on your client machine:

```
$ pip3 install onlykey-agent
```

2) Generate your First SSH Key on the OnlyKey

Plug in and unlock your OnlyKey and then run:

```
$ onlykey-agent identity@myhost
```

Where identity is your usual SSH user and myhost the host you want to connect to.

3) You now have the SSH public key for the user and the host you previously selected.

i.e.

`ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJcNZQFm742/hIf6KvbaApQM1VzoW6L2BHANZ4KgiU0o <ssh://identity@myhost|ed25519>`

Cut and paste the whole string into your server ~/.ssh/authorized_keys file, you're now ready to use SSH with your newly generated key.

4) From now on you can log in to your server using OnlyKey using the following command:

```
$ onlykey-agent identity@myhost -c
```

You will be prompted for a challenge code, type this on your OnlyKey to complete log in. If you wish to just require any button press to login, in the OnlyKey App -> Preferences choose to [disable challenge code](https://docs.crp.to/usersguide.html#challenge-mode) (device must be in config mode to change setting).

Note: This method can also be used for git push, scp, or other mechanisms that are using SSH as their communication protocol:

```
$ onlykey-agent identity@myhost -- COMMAND --WITH --ARGUMENTS
```

### Use the derived key for subversion commits
```
$ onlykey-agent identity@myhost -- svn commit -m "commit message"
```

### Use the key for git clone/pull/fetch/push
```
$ onlykey-agent identity@myhost -- git push
```

### For rsyncing
```
$ onlykey-agent identity@myhost -- rsync -a /path   someuser@somehost:/remote/path
```

### Copy a file to an SSH server running in Termux running on an android device
```
$ onlykey-agent identity@myhost -- scp -P 8022 /path/somefile.txt 192.168.56.195:/sdcard/
```

## GPG Agent Quickstart Guide

1) After installing [prerequisites](#installation), install OnlyKey agent on your client machine:

```
$ pip3 install onlykey-agent
```

2) Plug in and unlock your OnlyKey and then run:

```
$ onlykey-gpg init "Bob Smith <bob@protonmail.com>"
```

Where "Bob Smith <bob@protonmail.com>" is your email address that you want to use with your GPG identity.

3) Add export GNUPGHOME=~/.gnupg/onlykey to your .bashrc or other environment file.

This GNUPGHOME contains your hardware keyring and agent settings. This agent software assumes all keys are backed by hardware devices so you can't use standard GPG keys in GNUPGHOME (if you do mix keys you'll receive an error when you attempt to use them).

If you wish to switch back to your software keys unset GNUPGHOME.

4) Log out and back into your session to ensure your environment is updated everywhere.

### Inspect GPG keys
You can use GNU Privacy Assistant (GPA) in order to inspect the created keys and perform signature and decryption operations as usual:

```
$ sudo apt install gpa
$ gpa
```

[![GPA](https://cloud.githubusercontent.com/assets/9900/20224804/053d7474-a849-11e6-87f3-ab07dc536158.png)](https://www.gnupg.org/related_software/swlist.html#gpa)

### Sign Git commits and tags

Git can use GPG to sign and verify commits and tags (see [here](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)):

```
$ git config --local commit.gpgsign 1
$ git config --local gpg.program $(which gpg2)
$ git commit --gpg-sign                      # create GPG-signed commit
$ git log --show-signature -1                # verify commit signature
$ git tag v1.2.3 --sign                      # create GPG-signed tag
$ git tag v1.2.3 --verify                    # verify tag signature
```

Note that your git email has to correlate to your gpg key email. If you use a different email for git, you'll need to either generate a new gpg key for that email or set your git email using the command:

````
$ git config  user.email foo@example.com
````

If your git email is configured incorrectly, you will receive the error:

````
error: gpg failed to sign the data
fatal: failed to write commit object
````

when committing to git.

### Manage passwords

Password managers such as [pass](https://www.passwordstore.org/) and [gopass](https://www.justwatch.com/gopass/) rely on GPG for encryption so you can use your device with them too.

##### With `pass`:

First install `pass` from [passwordstore.org] and initialize it to use your TREZOR-based GPG identity:
```
$ pass init "Bob Smith <bob@protonmail.com>"
Password store initialized for Bob Smith <bob@protonmail.com>
```
Then, you can generate truly random passwords and save them encrypted using your public key (as separate `.gpg` files under `~/.password-store/`):
```
$ pass generate Dev/github 32
$ pass generate Social/hackernews 32
$ pass generate Social/twitter 32
$ pass generate VPS/linode 32
$ pass
Password Store
├── Dev
│   └── github
├── Social
│   ├── hackernews
│   └── twitter
└── VPS
    └── linode
```
In order to paste them into the browser, you'd need to decrypt the password using your hardware device:
```
$ pass --clip VPS/linode
Copied VPS/linode to clipboard. Will clear in 45 seconds.
```

You can also use the following [Qt-based UI](https://qtpass.org/) for `pass`:
```
$ sudo apt install qtpass
```

### Re-generate a GPG identity

You can re-run the init command to regenerate your GPG key.

```
$ rm -rf ~/.gnupg/onlykey
$ onlykey-gpg init "Bob Smith <bob@protonmail.com>"
```

## Stored Keys

By default OnlyKey will generate a random key that is used to derive an unlimited number of keys for SSH and GPG use. Since each derived key is different based on the identity@myhost provided, it is required to copy the unique public key for each host to that host's ~/.ssh/authorized_keys file.

i.e.
`ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJcNZQFm742/hIf6KvbaApQM1VzoW6L2BHANZ4KgiU0o <ssh://identity@myhost|ed25519>`
`ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIXzPsm6lkM6xSADnwh/S1IGLlU+dHE8M/xEp2qeol2w <ssh://identity@myhost2|ed25519>`
`ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILb27+QTNo+9+xm1AzvlQHmjWt1XMwokM00xfZPJiUHP <ssh://identity@myhost3|ed25519>`

OnlyKey also stores up to 16 private keys that may be used instead of the default derived keys. To use stored keys, first a key must be loaded onto OnlyKey. The easiest way to load a key is to use an existing OpenPGP key such as an X25519 Protonmail key.

Follow the guide [here](https://docs.crp.to/importpgp.html) to load an existing OpenPGP key.
OnlyKey supports 4 RSA key slots and 16 ECC key slots. By default, when set to "Slot: Auto Load" in the OnlyKey app, OpenPGP keys are stored as follows:
- RSA Decryption key is slot 1
- RSA Signing key in slot 2
- ECC (NIST256P1 and X25519) Decryption key is slot 101
- ECC (NIST256P1 and X25519) Signing key in slot 102

Advanced users may load and use keys in any of the 4 RSA slots, and 16 ECC slots.

### SSH Agent Quickstart Guide (Stored Keys)

1) After installing [prerequisites](#installation) and [loading keys](#stored-keys), install OnlyKey agent on your client machine:

```
$ pip3 install onlykey-agent
```

2) Generate your First SSH Key on the OnlyKey

Plug in and unlock your OnlyKey and then run:

```
$ onlykey-agent identity@myhost -sk 102
```

Where identity is your usual SSH user, myhost is the host you want to connect to, and -sk 102 is the signing key to use.

3) You now have the SSH public key for the user and the host you previously selected.

i.e.

`ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJcNZQFm742/hIf6KvbaApQM1VzoW6L2BHANZ4KgiU0o <ssh://identity@myhost|ed25519>`

Cut and paste the whole string into your server ~/.ssh/authorized_keys file, you're now ready to use SSH with your newly generated key.

4) From now on you can log in to your server using OnlyKey using the following command:

```
$ onlykey-agent identity@myhost -c -sk 102
```

### GPG Agent Quickstart Guide (Stored Keys)

1) After installing [prerequisites](#installation) and [loading keys](#stored-keys), install OnlyKey agent on your client machine:

```
$ pip3 install onlykey-agent
```

2) Plug in and unlock your OnlyKey and then run:

```
$ onlykey-gpg init "Bob Smith <bob@protonmail.com>" -sk 102 -dk 101
```

Where "Bob Smith <bob@protonmail.com>" is your email address that you want to use with your GPG identity, -sk 102 is the signing key to use, and -dk 101 is the decryption key to use.

3) Add export GNUPGHOME=~/.gnupg/onlykey to your .bashrc or other environment file.

This GNUPGHOME contains your hardware keyring and agent settings. This agent software assumes all keys are backed by hardware devices so you can't use standard GPG keys in GNUPGHOME (if you do mix keys you'll receive an error when you attempt to use them).

If you wish to switch back to your software keys unset GNUPGHOME.

4) Log out and back into your session to ensure your environment is updated everywhere.

## Installation

### Windows Install with dependencies
Currently Windows is not supported directly but may be used with Windows Subsystem for Linux (WSL). Follow the [WSL guide here](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to set this up. This essentially installs Linux on Windows, for example you can install Ubuntu Linux on Windows and then follow the instructions below "Ubuntu Install with dependencies".

### MacOS Install with dependencies
Python 3.8 and pip3 are required. To setup a Python environment on MacOS we recommend Anaconda [https://www.anaconda.com/download/#macos](https://www.anaconda.com/download/#macos)
```
$ brew install libusb
$ pip3 install onlykey-agent
```

### Ubuntu Install with dependencies
```
$ sudo apt update && apt upgrade
$ sudo apt install python3-pip python3-tk libusb-1.0-0-dev libudev-dev
$ pip3 install onlykey-agent
$ wget https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/49-onlykey.rules
$ sudo cp 49-onlykey.rules /etc/udev/rules.d/
$ sudo udevadm control --reload-rules && udevadm trigger
```

### Debian Install with dependencies
```
$ sudo apt update && apt upgrade
$ sudo apt install python3-pip python3-tk libusb-1.0-0-dev libudev-dev
$ pip3 install onlykey-agent
$ wget https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/49-onlykey.rules
$ sudo cp 49-onlykey.rules /etc/udev/rules.d/
$ sudo udevadm control --reload-rules && udevadm trigger
```

### RedHat Install with dependencies
```
$ yum update
$ yum install python3-pip python3-devel python3-tk libusb-devel libudev-devel \
              gcc redhat-rpm-config
$ pip3 install onlykey-agent
$ wget https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/49-onlykey.rules
$ sudo cp 49-onlykey.rules /etc/udev/rules.d/
$ sudo udevadm control --reload-rules && udevadm trigger
```

### Fedora Install with dependencies
```
$ dnf install python3-pip python3-devel python3-tkinter libusb-devel libudev-devel \
              gcc redhat-rpm-config
$ pip3 install onlykey-agent
$ wget https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/49-onlykey.rules
$ sudo cp 49-onlykey.rules /etc/udev/rules.d/
$ sudo udevadm control --reload-rules && udevadm trigger
```

### OpenSUSE Install with dependencies
```
$ zypper install python3-pip python3-devel python3-tk libusb-1_0-devel libudev-devel
$ pip3 install onlykey-agent
$ wget https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/49-onlykey.rules
$ sudo cp 49-onlykey.rules /etc/udev/rules.d/
$ sudo udevadm control --reload-rules && udevadm trigger
```

### Linux UDEV Rule

In order for non-root users in Linux to be able to communicate with OnlyKey a udev rule must be created as described [here](https://docs.crp.to/linux.html).

## Advanced Options

### Supported curves

Keys are generated unique for each user / host combination. By default OnlyKey agent uses ED25519 keys but also supports NIST256P1 keys. NIST256P1 can be used as follows:

1) Generate NIST256P1 public key using onlykey-agent
```
$ onlykey-agent user@host -e nist256p1
```

2) Log in using nist256p1 public key
```
$ onlykey-agent -c user@host -e nist256p1
```
