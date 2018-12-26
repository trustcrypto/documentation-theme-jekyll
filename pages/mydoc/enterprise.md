---
title: Deploying OnlyKey to the Enterprise
tags: [OnlyKey, enterprise, provisioning]
keywords: OnlyKey, enterprise, provisioning
last_updated: Dec, 12, 2018
summary: Options for deploying ready to use OnlyKey to employees
sidebar: mydoc_sidebar
permalink: enterprise.html
folder: mydoc
---

## Enterprise Provisioning

Accounts on OnlyKey may be pre-configured by an enterprise administrator in order to deploy ready to use OnlyKey's to employees. There are several options for deploying OnlyKeys.

### Distribute New OnlyKey with Backup File (Medium Deployments)

This option is best for medium sized deployments with geographically distributed employees. With this option the employee receives a new unconfigured OnlyKey, a backup file, and a passphrase. The steps the administrator would take to configure an OnlyKey are as follows:

- Complete setup in the OnlyKey app
  - Set a temporary PIN (This PIN will not be used so anything will work here for example all 1s)
  - Set a backup passphrase unique for this user
- Unlock OnlyKey with temporary PIN
- Load account data into slots such as login URLs, Usernames, Passwords, and TOTP keys
- Register U2F as needed
- Load PGP keys as needed
- Create a backup file

At this point the backup file and the passphrase can be sent to the user and used to configure a new OnlyKey. The enterprise administrator may also want to keep a secure offline copy of the backup file and the passphrase so that in the event that the user loses their OnlyKey a replacement may be easily issued.

The user will choose a PIN, input the backup passphrase, and load the backup file containing accounts. A supplemental guide with screenshots is useful here to ensure that user's correctly set up the device. If assistance is needed contact support@crp.to

### Distribute New OnlyKey Pre-configured (Small Deployments)

This option is best for small deployments. With this option the employee receives a new pre-configured OnlyKey. The steps the administrator would take to configure an OnlyKey are as follows:

- Complete setup in the OnlyKey app
  - Set a random PIN (This PIN will be used so make it a good one)
  - Set a backup passphrase unique for this user
- Unlock OnlyKey with PIN
- Load account data into slots such as login URLs, Usernames, Passwords, and TOTP keys
- Register U2F as needed
- Load PGP keys as needed
- Create a backup file

At this point the OnlyKey can be given to the user and is ready to use. The enterprise administrator may also want to keep a secure offline copy of the backup file and the passphrase so that in the event that the user loses their OnlyKey a replacement may be easily issued.

### Large Scale Deployments

For large scale deployments contact support@crp.to for assistance.

{% include links.html %}
