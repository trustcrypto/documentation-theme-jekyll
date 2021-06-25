---
title: Using OnlyKey with Windows Active Directory and Azure AD
tags: [OnlyKey, Azure, Active Directory, Windows]
keywords: OnlyKey, Azure, Active Directory, Windows
last_updated: June, 24, 2021
summary: How to use OnlyKey with Windows Active Directory and Azure AD for 2-factor Authentication and Protection from Ransomware
sidebar: mydoc_sidebar
permalink: activedirectory.html
folder: mydoc
---

## Windows Active Directory Support

Windows Active Directory provides centralized administration of servers, workstations, users, and applications. There are different types of Active Directory and OnlyKey supports the different types in different ways.

### Local Active Directory (AD)

This is the traditional Active Directory model where there is a direct network connection between Windows workstations and an Active Directory Domain Controller. Local AD does not support FIDO security keys and typically users log in via password authentication. 3rd party 2-factor authentication solutions such as Authlite may be used to implement 2-factor authentication.

OnlyKey can be used with Local AD in two ways:

**1) Strong Passwords (Medium Strength)** - OnlyKey can be used to store strong and complex passwords for Windows authentication. OnlyKey supports up to 56 character long random passwords which prevent successful password cracking. OnlyKey can also be used to store passwords for multiple accounts which allows proper least privilege account provisioning i.e. if Bob is a system administrator he may be provisioned with three accounts which can all be stored on OnlyKey:
- Unprivileged User Account - Bob uses this to login and perform daily tasks like checking email
- Local Administrator Account - Bob uses this to login to other systems to perform system maintenance 
- Domain Administrator Account - Bob uses this to login only to log into the domain controller 

Separate provisioning of accounts is an essential part of a zero-trust security model and can protect against attacks like ransomware, more information on that [here](#ransomware).

**2) Authlite 2-Factor Authentication (High Strength)** - OnlyKey can be used to generate one-time passwords used with Authlite Windows authentication. Authlite supports OnlyKey and is an affordable two-factor authentication solution for Active Directory, more information available at [authlite.com](https://www.authlite.com/). 

Why Authlite instead of one of the other solutions?
- Authlite supports physical security keys like OnlyKey
- Authlite fails closed, this is unlike DUO which may in many cases be bypassed (i.e. boot into safe mode)
- Authlite does not require contact with external service, works offline, and only requires install of software on domain controller
- Like OnlyKey, Authlite is a one-time cost per user

### Azure Active Directory (AAD)

This is a cloud Active Directory model where there is not a direct network connection between Windows workstations and a server but rather an internet connection to remote Azure AD. Windows does support a built-in feature for 2-factor authentication via the Microsoft Authenticator app and physical security keys. OnlyKey is compliant and supported as a physical security key on Azure AD.

To deploy security keys on Azure AD some configuration is required:

1) First identify which users will be permitted to authenticate via the Microsoft Authenticator app and which users will be required to log in via physical security key. A model that works well for most organizations is to permit Microsoft Authenticator app to be used for most unprivileged users and to require a physical security key for administrators.

2) Once the target user group has been created go to Azure AD Security settings -> Authentication methods and create an Authentication method policy

![Azure AD Authentication methods](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/authentication.png)

3) Select "Add AAGUID" under "Restrict specific keys" and add OnlyKey's AAGUID `79d699df-0191-4b10-b903-5467e7ce8231`

## Threat Models Mitigated with OnlyKey Protected Windows Accounts

### Ransomware Protection {#ransomware}

While centralized administration of servers, workstation, and users is a powerful tool for system administrators it can also be a powerful tool for adversaries should account compromise occur. When a privileged account is compromised the same features that allow a legitmate administrator to remotely access systems can allow ransomware to move laterally between systems where it can then encrypt and steal sensitive files.

Here are the steps in a typical ransomware attack:

1. A user clicks a malicious link in an email which installs malware such as the Emotet trojan.
2. The Emotet trojan is used to infect the system with [Trickbot](https://blog.malwarebytes.com/detections/trojan-trickbot/) or other malware that gathers Windows user password hashes from network and systems and sends them back to the attacker.
3. These password hashes are then run through a password cracking appliance that uses combinations of words, numbers, and special characters to crack passwords. Passwords such as Summer2019! and Welcome2020# are cracked almost immediately while other more complex passwords take longer.
4. Once a workstation or server admin account is compromised the credential is used to install ransomware such as [Ryuk](https://www.crowdstrike.com/blog/big-game-hunting-with-ryuk-another-lucrative-targeted-ransomware/) on all accessible (Active Directory) client systems. A ransom that can be up to millions of dollars is demanded to restore client data that is encrypted. Many victims of ransomware may never recover and may even have to close down after an attack.

The one key weakness exploited in a ransomware attack is most commonly passwords. OnlyKey stores long random passwords that are stored offline on a physical key fob. By using long random passwords ransomware is unable to crack passwords. Going a step further and using a 2-factor authentication solution like Authlite provides an even more robust solution for protection of accounts.


{% include links.html %}
