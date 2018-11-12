---
title: Using OnlyKey with Virtual Machines
tags: [OnlyKey, vm, vmware, virtual]
keywords: OnlyKey, vm, vmware, virtualbox, virtual
last_updated: Nov, 12, 2018
summary: How to use OnlyKey with VMware, Virtualbox, Qubes OS
sidebar: mydoc_sidebar
permalink: virtualmachines.html
folder: mydoc
---

## Virtual Machine Support

OnlyKey is supported on Virtual Machines in the same way as USB keyboards (USB HID).

## VMware Support

### VMware Workstation or VMware Fusion

- With the VM shut down, open the .vmx file in a text editor
- Add this line to the .vmx file and save
```
usb.generic.allowHID = "TRUE"
```
- Restart the VM and now you will be able to connect OnlyKey to the VM

## VirtualBox Support

- Go to Devices -> USB
- Select "CRYPTOTRUST ONLYKEY"

Or to have OnlyKey automatically connect to the VM whenever the VM is powered on

- Go to Devices -> USB -> USB Settings
- Select the add button (Green Plus)
- Select "CRYPTOTRUST ONLYKEY"
- Remove and reinsert OnlyKey to connect it to the VM

## Qubes OS

Coming soon

{% include links.html %}
