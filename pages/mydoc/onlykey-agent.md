---
title: OnlyKey SSH/GPG agent
tags: [OnlyKey, Agent, Python]
keywords: OnlyKey, Agent
last_updated: Dec, 09, 2019
summary: The OnlyKey agent is essentially middleware that lets you use OnlyKey as a hardware SSH/GPG device (GPG not supported yet).
sidebar: mydoc_sidebar
permalink: onlykey-agent.html
folder: mydoc
---

# onlykey-agent

SSH agent for the OnlyKey.

SSH is a popular remote access tool that is often used by administrators. Thanks to the OnlyKey SSH Agent remote access can be passwordless and more secure.

## SSH Agent Quickstart Guide

1) After installing [prerequisites](#install), install OnlyKey agent on your client machine:

```
$ sudo pip2 install onlykey onlykey-agent
```

2) Generate your First SSH Key on the OnlyKey
Plug and unlock your OnlyKey and then run:

```
$ onlykey-agent identity@myhost
```

Where identity is your usual SSH user and myhost the host you want to connect to.

3) You now have the SSH public key for the user and the host you previously selected.

i.e.

`ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBFwsFGFI7px8toa38FVeBIKcYdBvWzYXAiVcbB2d1o3zEsRB6Lm/ZuCzQjaLwQdcpT1aF8tycqt4K6AGI1o+qFk= identity@myhost`

Cut and paste the whole string into your server ~/.ssh/authorized_keys file, you're now ready to use SSH with your newly generated key.

4) From now on you can log in to your server using OnlyKey using the following command:

```
$ onlykey-agent identity@myhost -c
```

You will be prompted for a challenge code, type this on your OnlyKey to complete log in.

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
Python 2.7 and pip are required. To setup a Python environment on MacOS we recommend Anaconda https://www.anaconda.com/download/#macos
```
$ pip2 install onlykey onlykey-agent
```

### Ubuntu Install with dependencies
```
$ apt update && apt upgrade
$ apt install python-pip python-dev libusb-1.0-0-dev libudev-dev
$ pip install onlykey
$ pip install onlykey-agent
```

### Debian Install with dependencies
```
$ apt update && apt upgrade
$ apt install python-pip python-dev libusb-1.0-0-dev libudev-dev
$ pip install onlykey onlykey-agent
```

### Fedora/RedHat/CentOS Install with dependencies
```
$ yum update
$ yum install python-pip python-devel libusb-devel libudev-devel \
              gcc redhat-rpm-config
$ pip install onlykey onlykey-agent
```
### OpenSUSE Install with dependencies
```
$ zypper install python-pip python-devel libusb-1_0-devel libudev-devel
$ pip install onlykey onlykey-agent
```

### Linux UDEV Rule

In order for non-root users in Linux to be able to communicate with OnlyKey a udev rule must be created as described [here](https://docs.crp.to/linux.html).

## Advanced Options

### Supported curves

Keys are generated unique for each user / host combination. By default OnlyKey agent uses NIST P256 but also supports ED25519 keys. ED25519 can be used as follows:

1) Generate ED25519 public key using onlykey-agent
```
$ onlykey-agent user@host -e ed25519
```

2) Log in using ED25519 public key
```
$ onlykey-agent -c user@host -e ed25519
```

You can also just type `-e e` instead of typing out the full `-e ed25519`

The project started from a fork [trezor-agent](https://github.com/romanz/trezor-agent) (thanks!).
