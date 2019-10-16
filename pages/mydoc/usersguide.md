---
title: OnlyKey User's Guide
tags: [OnlyKey, User's Guide]
keywords: OnlyKey, User's Guide
last_updated: Oct, 01, 2019
summary: The OnlyKey user's guide provides step-by-step instructions for configuring and using OnlyKey.
sidebar: mydoc_sidebar
permalink: usersguide.html
toc: false
folder: mydoc
---
{% include image.html file="image50.png" %}
<h1>&nbsp;&nbsp;USER'S GUIDE</h1>
<br>

## Unpacking OnlyKey {#unpacking}

{% include callout.html content="**Step 1.** Remove the OnlyKey and Keychain from packaging." type="default" %}

{% include callout.html content="**Step 2.** Attach the provided keychain to your OnlyKey and insert OnlyKey into protective case." type="default" %}

{% include callout.html content="**Step 3.** (Optional) Check out OnlyKey accessories - [color cases](https://onlykey.io/products/onlykey-silicone-case?variant=469636644908), [mobile adapter](https://onlykey.io/collections/accessories-1), [business workstation](https://onlykey.io/collections/workstation)." type="default" %}

<i class="fa fa-arrow-down fa-3x"></i> ***Proceed to setup below***

## Setting up OnlyKey {#initial-setup}

There are two options for setting up your OnlyKey.

- [OnlyKey Quick Setup](#quick-setup) (No app required, less than 5 minute setup time)
- [OnlyKey Setup Using OnlyKey App](#onlykey-setup) (App install required, 10 minute setup time)

### OnlyKey Quick Setup {#quick-setup}

{% include important.html content="Quick setup is the quickest way to set up a new OnlyKey and there are no apps required. However, to take advantage of many of the OnlyKey features the OnlyKey app is required." %}

To complete OnlyKey quick setup follow the instructions below:

- Open a text editor such as notepad on a trusted computer
- Click inside the text editor
- Insert OnlyKey into the USB port on your computer
- Hold button #3 on your OnlyKey down for 5+ seconds and then release

{% include callout.html content="OnlyKey will type out instructions for you to follow into the text editor. Follow these instructions to set PINs on OnlyKey and a backup passphrase. You can choose to have OnlyKey automatically generate random PINs or set PINs yourself. When setting a PIN keep in mind that remembering a pattern may be easier than remembering numbers." type="default" %}

- When you are complete the quick setup you will see the text 'SETUP COMPLETE, DELETE THIS TEXT'
- Make sure you have carefully written down your PINs and backup passphrase and store this in a secure location
- When finished enter your PIN onto OnlyKey to start using your new device, OnlyKey is ready for use as a security key (FIDO2/U2F) and for challenge-response

 ***To use OnlyKey for password management, file encryption, and secure messaging follow the steps below to install the OnlyKey app***.

<i class="fa fa-arrow-down fa-3x"></i>

### Install OnlyKey App {#app-install}

There are two options for installing the OnlyKey app.
{% include important.html content="The latest version of Windows 10 (1903) does not support the Chrome App, the Desktop App must be used." %}
- Install the [OnlyKey Desktop App](#app-desktop) (Recommended)
- Install the [OnlyKey Chrome App](#app-chrome)

Once you have installed the app proceed to [OnlyKey Setup](#onlykey-setup)

### Install OnlyKey Desktop App {#app-desktop}

{% include callout.html content="**Step 1.** Download installer" type="default" %}

[<i class="fa fa-apple fa-2x"></i> **macOS**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey.App.5.2.0.dmg)

[<i class="fa fa-windows fa-2x"></i> **Windows**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey_5.2.0.exe)

[<i class="fa fa-linux fa-2x"></i> **Linux**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.2.0/OnlyKey_5.2.0_amd64.deb)

{% include note.html content="Linux users, if a UDEV rule has not been created previously follow the following instructions here, additionally the OnlyKey app may now be installed via snapcraft - [Linux Guide](https://docs.crp.to/linux.html)" %}

{% include callout.html content="**Step 2.** Install and launch the app." type="default" %}

{% include tip.html content="You can ensure the integrity of your downloaded file by verifying the checksum. <br>macOS SHA 256 CHECKSUM: 247b3ed27a5d7f2c35f6da0d44e0d6e7cb3ac4084eb3f944df1ce58e0df54dce<br>Windows SHA 256 CHECKSUM: 71ae01f86995c1aadae947d447223f65540c0c5ebcd1319dd5e5f1e1907013c0<br>Linux SHA 256 CHECKSUM: 3dc675c5a33c55abb153f98003a41843d4a1b5959f30ff479b76a953799665c8<br>" %}

### Install OnlyKey Chrome App {#app-chrome}

{% include callout.html content="**Step 1.** Open the Chrome (or Chromium) Web Browser. If you do not have the chrome web browser installed you can install this by following the instructions here: [https://www.google.com/chrome/browser/desktop/](https://www.google.com/chrome/browser/desktop/))" type="default" %}

{% include callout.html content="**Step 2.** Click [here](https://chrome.google.com/webstore/detail/onlykey-configuration/adafilbceehejjehoccladhbkgbjmica) to browse to the OnlyKey Configuration Web app on the Chrome Web Store and select 'Add to Chrome'" type="default" %}

{% include image.html file="image41.png" %}

{% include callout.html content="**Step 3.** When prompted select ''Add App''" type="default" %}

{% include image.html file="image12.png" max-width="359" %}

{% include callout.html content="**Step 4.** To launch the OnlyKey Configuration App select the top right menu icon -> Bookmarks -> Show Bookmarks Bar to enable the bookmarks bar to become visible. Then select the Apps icon (Or alternatively browse to ''chrome://apps/'') and then select the ''OK'' icon to launch the OnlyKey App." type="default" %}

{% include image.html file="image33.png" max-width="544" %}
<br>
<br>
{% include image.html file="image17.png" %}
<br>
<br>

### OnlyKey Setup Using OnlyKey App {#onlykey-setup}

If you have already setup OnlyKey using quick setup proceed to [Account Setup](#account-setup)

{% include callout.html content="**Step 1.** Insert OnlyKey and select [Next] to get started." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite1.png)

{% include tip.html content="Before setting a PIN<br><br>You may find it easier to remember a pattern rather than a 7 - 10 digit PIN. Kind of like patterns used to unlock a phone lock screen:" %}

{% include image.html file="image86.png" max-width="157" %}

{% include callout.html content="**Step 2.** Enter a PIN code on the OnlyKey Keypad, check the disclaimer box, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite2.png)

{% include callout.html content="**Step 3.** Re-enter PIN code, and select [Next]." type="default" %}

{% include callout.html content="**Step 4.** Enter a PIN code for second profile, check the disclaimer box, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite4.png)

{% include callout.html content="**Step 5.** If you wish to set a self-destruct PIN enter a PIN code, check the disclaimer box, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite5.png)

{% include callout.html content="**Step 6.** Re-enter PIN code, and select [Next]." type="default" %}

{% include callout.html content="**Step 7.** Follow the instructions to enter a Backup Passphrase and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/setup7-2.png)

{% include callout.html content="**Step 8.** If you have an OnlyKey backup to restore, select [Choose File] and select your OnlyKey backup file and then select [Next] to load it onto your OnlyKey. If you do not have a backup just select [Next] to complete the setup." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/setup10.png)

Your device is now set up and will automatically reboot. You will be prompted to enter your PIN from now on when using the OnlyKey.

{% include tip.html content="***Forget your PIN?***<br><br>
If you lose or forget your PIN then a factory default must be completed on your OnlyKey before you can set a new PIN. This wipes all of your sensitive information and allows you to go through the Setup again to configure a new OnlyKey PIN. To perform a factory default you have two options:
<br>
<br>
**Method #1** - Enter your self-destruct PIN.
<br>
<br>
**Method #2** - Enter 10 incorrect PINs. You will notice that after entering 3 incorrect PINs your OnlyKey is steadily blinking red. This is an intentional safeguard so that your OnlyKey will not be inadvertently wiped by repeatedly pressing buttons. You must remove and reinsert your OnlyKey and enter 3 more incorrect PINs. Repeat this until 10 incorrect PINs have been entered. The device will then have a solid green light on that indicates that it is ready to set up." %}

*If you want to learn more about the Self-Destruct and Plausible Deniability features see the [OnlyKey FAQ](https://docs.crp.to/faq.html) and the [OnlyKey Features](https://docs.crp.to/features.html#self-destruct).*

<i class="fa fa-arrow-down fa-3x"></i> ***Proceed to setup accounts below***

## Set up accounts {#account-setup}

{% include tip.html content="Set aside some time to set up accounts as this can be time consuming the first time you set it up. After you configure your profiles once you won't have to do this again unless you add a new account. Think of all the time you will save not having to remember and type usernames, passwords, and getting your phone out to type codes etc. This is a huge time saver in the long run." %}

### Configure Basic Login Info {#all-about-slots}

{% include callout.html content="**Enter your PIN -**  After setup you are prompted to enter the PIN you set onto your OnlyKey six button keypad." type="default" %}

Now that your OnlyKey is unlocked you see this screen.

{% include image.html file="image31.png" %}

#### All About Slots {#all-about-slots}

The Slots area of the application is where you will set up things like your usernames, passwords, and 2 factor. As you can see the word ''empty'' is shown 12 times next to a button with a number and a letter. Each of these buttons refer to one of the slots on your OnlyKey.

**What are slots?** On the OnlyKey you have 6 buttons and 12 available slots in each profile. Each slot can be set with a Label, URL, Username, Password, and two-factor authentication. Each slot is assigned to a button on your OnlyKey. So for example if you were to save your Google password to slot 1a, then to type out your Google password you would tap button 1 on your OnlyKey for less than one second (Slot 1a). If you were to save your Yahoo password to slot 1b, then to type out your Yahoo password you would hold button 1 on your OnlyKey for more than one second (Slot 1b).

Each button has two slots assigned to it that can be activated by holding the button for less than or more than one second.

The slots that have not been configured have no label so they are shown as ''empty''. Next, let's set a label to slot 1a.

#### Set a Label {#set-a-label}

{% include callout.html content="**Step 1.** Click the 1a button in the OnlyKey app and see the Slot 1a Configuration" type="default" %}

{% include callout.html content="**Step 2.** Enter a label such as Gmail in the Label field, check the box next to Label, and click Submit." type="default" %}

{% include image.html file="image36.png" %}

*Now the label you entered is assigned to slot 1a. Slot labels are helpful if you forget which button is assigned to which account you can open the OnlyKey app at any time to see how it is set up.*

{% include image.html file="image66.png" %}

#### OnlyKey On-The-Go {#otg}

**What if I am using a computer without the OnlyKey app?**

This is where the card you received with your OnlyKey comes in handy. You can write your labels on this and carry this in your wallet. This is a low tech solution but it works great.

{% include image.html file="card.jpg" max-width="400" %}

Also, as mentioned on the card you can hold down the 2 button on OnlyKey for 5+ seconds and OnlyKey will type out your slot labels which may look something like this:

1a Google<br>
2a Bank<br>
3a Email<br>
4a VPN<br>
5a School<br>
6a U2F<br>
1b Amazon<br>
2b Dropbox<br>
3b<br>
4b<br>
5b<br>
6b Lastpass<br>

{% include important.html content="Obviously, no sensitive information should be written on the card or saved to your slot labels. Just something that helps you remember which account is assigned there. Next, let's assign a username and password to slot 1a." %}

#### Set up a Slot {#set-up-a-slot}

The example configuration shown below would be to set up a username and password to automatically login to the Google page shown below.

{% include image.html file="image35.png" max-width="602" %}

{% include callout.html content="**Step 1.** To configure OnlyKey to log into the example Google page, Click the 1a button in the OnlyKey app, click the checkboxes and enter values as shown:" type="default" %}

{% include image.html file="image24.png" max-width="602" %}

{% include callout.html content="**Step 2.** Click submit to save the configuration to OnlyKey:" type="default" %}

**Now the configuration is saved and shows up in the OnlyKey app as ''Google 1''**

{% include note.html content="Since not all Login pages are the same OnlyKey has options like tab (use to go to the next field) and Return (submit). These essentially press either the tab or return key so if you are unsure of how to set up your OnlyKey configuration try logging into your login page first by using just your keyboard. For the example above you would do this by entering your username, pressing the Return/Enter key, on the next page entering your password and then pressing the Return/Enter key to complete your login." %}

#### Test a Slot {#test-a-slot}

Once you set your desired account information to a slot then try it out by going to the login page, clicking in the login field, and pressing the corresponding button on the OnlyKey.

***Common issues:***

*   ***The password is entered before page loads.***
    *   *Set the delay, usually 2-3 seconds works well but this may not be enough time for slow web pages or slow internet connections.*
*   ***There is a Captcha required sometimes after password***
    *   *You can either set the delay to a high value like 8 - 9 seconds to give yourself time to enter this or select None. Selecting None means that the password is entered but not submitted so you have time to enter additional information.*
*   ***Everything works fine but I really wish it typed faster.***
    *   *You can adjust the type speed in [preferences.](#configurable-keyboard-type-speed)*

As mentioned earlier, login pages can be different between sites and sometimes even different on the same site. For the second example we will set up another Google login, this one for a Google account where the username is already saved to the website so all you need to do is enter a password. This is the default when you have already logged into Google in the past on a computer.

Additionally, by using the URL field we can have the OnlyKey type the login page URL into the browser and browse to the login page (in this case accounts.google.com). This way a one-touch login is possible. Just select the empty URL field in the browser and the URL is automatically typed out and Return is pressed to browse to the site. Once on the site the password is entered and the login is complete.

{% include tip.html content="Using the URL field provides protection against spear phishing attacks as this provides assurance that the site you are entering your password into is the legitimate site. For example, if you receive an email asking you to log into your account to verify something instead of clicking the link in the email to login you would use OnlyKey to browse to the correct site to login.
<br>
*Need a URL longer than 56 characters? Try using a URL shortner like Bit.ly*" %}

**The example configuration shown below would be to set up a URL and password to automatically login to the Google page shown below. Notice that the username is already remembered by the website, so there is not a need to set this in the OnlyKey slot.**

{% include image.html file="image72.png" max-width="624" %}

{% include image.html file="image23.png" max-width="602" %}

**These examples illustrate how to use OnlyKey in two real world scenarios. A key takeaway here is that you can configure OnlyKey to automatically do what you would normally do manually. Any combination of the fields shown in the slot configuration may be used or not used to fit login format.**

<br>
*The table below shows how to configure some common login forms that at first may seem problematic.*
<br>

<table>
  <tr>
   <td><strong>Login Format</strong>
   </td>
   <td><strong>Configuration</strong>
   </td>
  </tr>
  <tr>
   <td>Site that does not automatically select username field after loading page (i.e.Kracken).
{% include image.html file="image42.png" max-width="201" %}
   </td>
   <td><em>With URL - You will notice that "Tab before UserName" is checked. This will select the username field as it is not automatically selected when the page loads.</em>
{% include image.html file="image54.png" max-width="395" %}
<em>Without URL - Browse to the login page first and place cursor in the username field before selecting the assigned OnlyKey button.</em>
{% include image.html file="image4.png" max-width="395" %}
   </td>
  </tr>
  <tr>
   <td>Site where username is remembered after first login (i.e. Google).
   </td>
   <td><em>Password and 2FA only - This is usually the best option if you remember your username/email address as this will work on any computer whether your username is remembered or not. This method does not include URL in case you are prompted for a password.</em>
{% include image.html file="image60.png" max-width="395"%}
<em>Username Remembered w/URL - If you use your device mostly on a computer where you username is remembered this is a good option. If you use this configuration on a computer where username is not remembered then you must output of the login information into notepad and paste into login fields.</em>
{% include image.html file="image61.png" max-width="395" %}
   </td>
  </tr>
  <tr>
   <td>Site that does not automatically select OTP code field (i.e. Salesforce)
{% include image.html file="image22.png" max-width="201" %}
After loading next page
{% include image.html file="image47.png" max-width="201" %}
   </td>
   <td><em>You will notice that "Tab before OTP" is checked. This will select the OTP field as it is not automatically selected when the page loads.</em>
{% include image.html file="image44.png" max-width="395"%}
   </td>
  </tr>
  <tr>
   <td>Site where username and password is required first and then OTP code field appears below (i.e. IT Glue)
{% include image.html file="image28.png" max-width="207"%}
   </td>
   <td>
{% include image.html file="image52.png" max-width="395" %}
   </td>
  </tr>
</table>


{% include tip.html content="Before testing a configuration in your web browser it is a good idea to try it out in a text editor like notepad, just to make sure it looks right. The last thing you want is to find that you accidentally are typing your password out in the wrong field and now have to change the password." %}

{% include important.html content="***NO WEAK PASSWORDS*** - While OnlyKey makes it possible for your accounts to be more secure than remembering passwords or than using a software password manager one thing to remember is that it is up to you to use strong passwords. If you set your password to something like ''password1'' this is not secure, in fact we recommend using randomly generated strong passwords that cannot be guessed or cracked by a hacker." %}

Generating a strong password is easy to do. Next, let's use two different methods to generate strong uncrackable passwords.

#### Generate Strong Password via Browser Extension {#generate-strong-password-via-browser-extension}

Install a browser extension by selecting add to Chrome the same way that you installed the OnlyKey app.

Chrome Extension available from the Chrome Web Store [here](https://chrome.google.com/webstore/detail/strong-password-generator/emehklffcaphknhhfhadkjhpfapcbpco).

{% include image.html file="image21.png" %}

#### Generate Strong Passwords Online {#generate-strong-passwords-online}

There are many websites that allow you to generate a secure random password including the Lastpass tool.

LastPass password generation tool available [here](https://lastpass.com/generatepassword.php).

{% include image.html file="image59.png" %}

### Configure Two Factor Authentication (2FA) {#two-factor-authentication-2fa}

Two-factor authentication (2FA) is essentially an extra step that is required during the login process that makes it so that even if your username and password are compromised an attacker cannot login to your account. It is called two-factor authentication, or sometimes also multifactor authentication, because more than one factor is required to login. Factors can be something you know like a password, something you are like a fingerprint or iris scan, or something you have like the OnlyKey. There are three different types of 2FA supported by OnlyKey. By supporting multiple modes of 2FA OnlyKey will work with most sites that support 2FA - [http://www.dongleauth.info/](http://www.dongleauth.info/)

#### Google Authenticator (TOTP) {#google-authenticator-totp}

*DISCLAIMER - Google® is the registered trademarks of Google Inc. OnlyKey is not associated with or sponsored by Google® Inc.*

{% include tip.html content="If you are not a 2FA guru then this is the recommended method to use. Six digit codes will be typed automatically by OnlyKey." %}

***Background Information***

*The way you would typically set up Google Authenticator without OnlyKey is to download the Google Authenticator app to your smartphone. You would then enable Google Authenticator on a website and the website would provide you with a QR code that looks like this:*

{% include image.html file="image84.png" max-width="550" %}

*You would then take a picture of the QR code the website gives you. The app then starts generating a 6 digit number that changes every 30 seconds that is required to be typed into the website login prompt in addition to your username and password.*

*This method of two-factor authentication has some notable advantages over using features like 2nd-step verification where a website will send you an SMS message with a code to enter to login. One weakness in the SMS approach is that phone numbers can be transferred to a malicious party sometimes just by calling and asking the phone company to do this and providing some personal information. Another weakness is that more sophisticated attackers may be able to clone your phone number and then receive SMS messages sent to you. Google authenticator (TOTP) solves some of these issues by generating the code on your phone itself using a private key. Now that the background is covered we can set this up on your OnlyKey. No phone or app required for setting this up on your OnlyKey but if you wish to maintain a backup of your two-factor authentication codes it may be a good idea to download the app and scan the QR code as a backup in case you lose your OnlyKey.*

{% include callout.html content="**Step 1. Enable Google Authenticator App on Website -** If you are unsure if the website you want to setup supports OTP check [here](http://www.dongleauth.info/). Assuming that the website supports Google Authenticator you can proceed to enable Google Authenticator. For example to do this for your Google Account you must first enable 2-Step Verification and then you select ''SETUP'' as shown below:" type="default" %}

{% include image.html file="image85.png" max-width="582" %}

As you go through the steps you will be prompted to scan a QR code (Looks like a square bar code). You can go ahead and scan the QR code using your smartphone Google Authenticator app if you wish to create a backup and then select "CAN'T SCAN IT" as shown below:

{% include image.html file="image6.png" max-width="392" %}

{% include callout.html content="**Step 2. Copy and Paste Code into app -**

Selecting ''CAN'T SCAN IT'' will display the private code. Select this text and copy it as shown below:" type="default" %}

{% include image.html file="image38.png" max-width="383"%}

Now open the OnlyKey Chrome Configuration App. With your correct PIN entered on the OnlyKey you are able to select the Slot to configure and paste this code into the field located next to ''Google Auth OTP'' as shown below:

{% include image.html file="image65.png" max-width="599" %}

Once you click submit your OnlyKey is ready to generate OTPs.

{% include callout.html content="**Step 3. Generate OTP -** Place your cursor in the ''Enter code'' field and press the button that corresponds to the slot that was set. In the example above we set slot 2a so we press the #2 button to generate the OTP." type="default" %}

{% include image.html file="image20.png" max-width="339" %}

{% include image.html file="image75.png" max-width="324" %}

Once your account has been verified you are all set. You can add a username and password to this slot so that you can do a one touch login. Keep in mind that the page may take a second or two to load where your 6 digit OTP is entered so set the delay accordingly, 4 - 5 seconds delay should work in most cases.

{% include image.html file="image37.png" max-width="600" %}

If you are looking for step-by-step guides on setting up other popular sites with 2FA check out the guides [here](https://authy.com/guides-filter/compatible-with-authy/). Just as with the steps mentioned above, instead of scanning the QR code with an app, click "CAN'T SCAN IT" to copy and paste the text into the Google Auth OTP field of the OnlyKey app.

To find out if a specific website is supported there is a full list of websites and wether or not they support 2FA [here](http://www.dongleauth.info/). To see if a certain site is supported see that there is a check next to "One Time Passwords (OTP)"

Learn more about the implementation of Google Auth OTP [here.](#google-authenticator-totp)

#### Google Authenticator OTP On-The-Go {#google-authenticator-otg}

One requirement of TOTP (Time-based One-time Password) is having the correct time. If OnlyKey is used on a system where the OnlyKey app is not running it will display "NOTSET" instead of the OTP code. Because OnlyKey has no battery it requires an app to send it the correct time to be able to generate TOTP codes. For this reason it is important to ensure the OnlyKey app is permitted to autostart.

However, OnlyKey TOTP will work on-the-go without the app running. All you have to do is browse to our web app [https://apps.crp.to](https://apps.crp.to) in Google Chrome or Firefox. This web app in addition to being used to send encrypted messages sets the current time on OnlyKey and login with TOTP will function as normal.

{% include image.html file="totp.png" max-width="600" %}


{% include links.html %}
