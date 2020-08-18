---
title: OnlyKey SSH/GPG agent
tags: [OnlyKey, Agent, Python]
keywords: OnlyKey, Agent
last_updated: Aug, 17, 2020
summary: Using OnlyKey as hardware SSH agent (GPG not supported yet).
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
