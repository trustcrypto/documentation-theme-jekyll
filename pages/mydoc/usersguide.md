---
title: OnlyKey User's Guide
tags: [OnlyKey, User's Guide]
keywords: OnlyKey, User's Guide
last_updated: Sept, 25, 2017
summary: The OnlyKey user's guide provides step-by-step instructions for configuring and using OnlyKey.
sidebar: mydoc_sidebar
permalink: usersguide.html
folder: mydoc
---
{% include image.html file="image50.png" %}
<h1>&nbsp;&nbsp;USER'S GUIDE</h1>
<br>

## Unpacking OnlyKey {#unpacking}

{% include callout.html content="**Step 1.** Remove the OnlyKey and Keychain from packaging." type="default" %}

{% include callout.html content="**Step 2.** Remove the small metal keyring if one is attached and discard this keyring." type="default" %}

{% include image.html file="image76.jpg" max-width="138" %}

{% include callout.html content="**Step 3.** Attach the plastic end of the keychain to your own keyring that you use to carry your keys and the other string end of the keychain to your OnlyKey." type="default" %}

{% include image.html file="image14.jpg" max-width="350" %}

{% include callout.html content="**Step 4.** By pressing the buttons on both sides of the plastic attachment you can remove your OnlyKey from your keyring to insert it into USB." type="default" %}

{% include callout.html content="**Step 5.** (Optional) Insert OnlyKey into silicone case as shown [here.](#onlykey-case)" type="default" %}

{% include tip.html content="(Optional) Check out OnlyKey accessories - [color cases](#onlykey-case), [keychain options](#keychain-options), [mobile adapter](#android-support)." %}

<i class="fa fa-arrow-down fa-3x"></i> ***Proceed to setup below***

## Setting up OnlyKey {#initial-setup}

### Install OnlyKey App {#app-install}

There are two options for installing the OnlyKey app.
- Install the [OnlyKey Desktop App](#app-desktop)
- Install the [OnlyKey Chrome App](#app-chrome)

Once you have installed the app proceed to [Set PIN(s)](#set-pin)

### Install OnlyKey Desktop App {#app-desktop}

{% include callout.html content="**Step 1.** Download installer" type="default" %}

[<i class="fa fa-apple fa-2x"></i> **macOS**](https://s3.amazonaws.com/onlykey/apps/desktop/releases/latest/OnlyKey_5.0.0.dmg.zip)

[<i class="fa fa-windows fa-2x"></i> **Windows**](https://s3.amazonaws.com/onlykey/apps/desktop/releases/latest/OnlyKey_5.0.0.exe.zip)

[<i class="fa fa-linux fa-2x"></i> **Linux**](https://s3.amazonaws.com/onlykey/apps/desktop/releases/latest/OnlyKey_5.0.0.deb.gz)

{% include callout.html content="**Step 2.** Install and launch the app." type="default" %}

{% include tip.html content="You can ensure the integrity of your downloaded file by verifying the checksum. <br>macOS SHA 256 CHECKSUM: 51db9944ee234569146e053341cd57168baf84b145054cde77211c64cbbb81c7<br>Windows SHA 256 CHECKSUM: bdfb4561f506992664dbb9450033a2222160bfd8d5d7b6702512db438a110e9f<br>Linux SHA 256 CHECKSUM: 517d8d795b4a293b773676623997464b91e7756f1e2454b5e6c3c692fd467ed3" %}

### Install OnlyKey Chrome App {#app-chrome}

{% include callout.html content="**Step 1.** Open the Chrome Web Browser (If you do not have the chrome web browser installed you can install this by following the instructions here: [https://www.google.com/chrome/browser/desktop/](https://www.google.com/chrome/browser/desktop/))" type="default" %}

{% include callout.html content="**Step 2.** Click [here](https://chrome.google.com/webstore/detail/onlykey-configuration/adafilbceehejjehoccladhbkgbjmica) to browse to the OnlyKey Configuration Web app on the Chrome Web Store and select 'Add to Chrome'" type="default" %}

{% include image.html file="image41.png" %}

{% include callout.html content="**Step 3.** When prompted select ''Add App''" type="default" %}

{% include image.html file="image12.png" max-width="359" %}

{% include callout.html content="**Step 4.** To launch the OnlyKey Configuration App select the top right menu icon -> Bookmarks -> Show Bookmarks Bar to enable the bookmarks bar to become visible. Then select the Apps icon (Or alternatively browse to ''chrome://apps/'') and then select the ''OK'' icon to launch the OnlyKey App." type="default" %}

{% include image.html file="image33.png" max-width="544" %}
<br>
<br>
{% include image.html file="image17.png" %}

### Set PIN(s) {#set-pin}

{% include callout.html content="**Step 1.** Once the OnlyKey App launches you will see the message ''Please connect your OnlyKey''" type="default" %}

{% include image.html file="image18.png" %}

{% include callout.html content="**Step 2.** Insert the OnlyKey into USB port." type="default" %}

{% include callout.html content="**Step 3.** Once the OnlyKey has been successfully attached to the computer the Initial Setup Wizard screen will appear. Select ''Next'' to continue." type="default" %}

{% include note.html content="LINUX USERS - If you are using Linux your system may by default only allow read access to USB devices including the OnlyKey. In order to allow read/write access follow the instructions[ here](https://docs.google.com/document/d/1Go_Rs218fKUx-j_JKhddbSVTqY6P0vQO831t2MKCJC8/edit?usp=sharing) to create a udev rule. Also see the following forum topic [here.](https://groups.google.com/forum/#!topic/onlykey/MnD03gQzczg)" %}

{% include image.html file="image77.png" %}

{% include callout.html content="**Step 4. Select OnlyKey Edition** - This is where you select the edition of OnlyKey that you have. If you purchased OnlyKey through Amazon or the online store select the Standard Edition." type="default" %}

{% include note.html content="International Travel Edition<br><br>This edition of OnlyKey may ship globally, even to countries where encryption devices are not permitted as it does not utilize encryption. If strong encryption is permitted in your country ([check here](http://www.cryptolaw.org/)) and you would prefer the Standard Edition then you may load this firmware by following the instructions in the [Firmware Loading](#loading-onlykey-firmware) section and then return to initial setup. For more information on the two editions of OnlyKey firmware see [Plausible Deniability](https://docs.crp.to/features.html#plausible-deniability-international-travel-edition-and-standard-edition-of-firmware)" %}

{% include image.html file="image88.png" %}

{% include tip.html content="Before setting a PIN<br><br>You may find it easier to remember a pattern rather than a 7 - 10 digit PIN. Kind of like patterns used to unlock an Android Lockscreen:" %}

{% include image.html file="image86.png" max-width="157" %}

{% include note.html content="As described in the following steps you can use multiple PINs, make sure PINs are not set to the same thing or share the same sequence, this will not work they must be different. For example, if PIN A is '11223344' and PIN B is '1122334455' then when you try to type in PIN B the device would read PIN A before you enter '55'." %}

{% include callout.html content="**Step 5. Set Your PIN** - Read and accept the Warning and Disclaimer by checking the checkbox. On your Onlykey six digit keypad enter a PIN between 7 - 10 digits long. When you are finished select ''Next'' to continue." type="default" %}

{% include note.html content="The OnlyKey LED should be on and briefly turn off (blink) when you press each digit of your PIN." %}

{% include callout.html content="**Step 6. Confirm Your PIN -**  Re-enter the same PIN and select ''Next'' to continue. Once you click next you can see the messages in red at the bottom of the app displaying ''Successfully set PIN'' and that your ''OnlyKey is ready…'' at this point the mandatory steps of your initial setup is complete you can either remove and reinsert your OnlyKey to start using or optionally continue to set the self-destruct and plausible deniability PINs." type="default" %}

{% include callout.html content="**Step 7. Set Self-Destruct PIN** - The Self-Destruct PIN is an additional PIN you can set that is used to wipe your OnlyKey. Whenever this PIN is entered the OnlyKey will wipe all data and return to a factory default state. See [this](https://docs.crp.to/features.html#self-destruct) for more information on this feature.
<br>
<br>
Read and accept the Warning and Disclaimer by checking the checkbox. On your Onlykey six digit keypad enter a PIN between 7 - 10 digits long. When you are finished select ''Next'' to continue." type="default" %}

{% include callout.html content="**Step 8. Confirm Your PIN -**  Re-enter the same PIN and select ''Next'' to continue. Once you click next you can see the messages in red at the bottom of the app displaying ''Successfully set PIN'' and that your ''OnlyKey is ready…'' at this point your initial setup is complete you can either remove and reinsert your OnlyKey to start using or if you have a Standard Edition OnlyKey you can optionally continue to set the plausible deniability PIN." type="default" %}

{% include callout.html content="**Step 9. Set Plausible Deniability PIN (Only For Standard Edition OnlyKey)** - The Plausible Deniability PIN is an additional PIN you can set that is used to set up a separate profile on your OnlyKey. Whenever this PIN is entered the OnlyKey will open the separate profile while your primary profile remains hidden. This second profile operates identically to a profile on the OnlyKey international travel edition. It would be plausible that this second profile is the only profile on your OnlyKey. By design this feature allows a user plausibly deny that a second profile exists on the OnlyKey. See [this](https://docs.crp.to/features.html#plausible-deniability-international-travel-edition-and-standard-edition-of-firmware) for more information on this feature.
<br>
<br>
Read and accept the Warning and Disclaimer by checking the checkbox. On your Onlykey six digit keypad enter a PIN between 7 - 10 digits long. When you are finished select ''Next'' to continue." type="default" %}

{% include callout.html content="**Step 10. Confirm Your PIN -**  Re-enter the same PIN and select ''Next'' to continue. Once you click next you can see the message shown below. Remove and reinsert your OnlyKey to set up your profile." type="default" %}

{% include image.html file="image27.png" %}

{% include tip.html content="***Don't Care About Plausible Deniability, how about a work profile and personal profile?***<br><br>
*We get that there will be some users who think the idea of having a second hidden profile is awesome and others will not want or need it. You can still get value out of having the second profile. Using the second profile you can have up to 24 unique accounts set up instead of 12. For example, you could set up all of your personal accounts under the main profile and all of the work accounts under the hidden profile. You can get creative and use the other profile for whatever you want or not use it at all.*" %}

{% include tip.html content="***Forget your PIN?***<br><br>
If you lose or forget your PIN then a factory default must be completed on your OnlyKey before you can set a new PIN. This wipes all of your sensitive information and allows you to go through the Initial Setup again to configure a new OnlyKey PIN. To perform a factory default you have two options:
<br>
<br>
**Method #1** - Enter your self-destruct PIN. The device will then have a solid light on that indicates that it is un-initialized and ready to reconfigure.*
<br>
<br>
**Method #2** - Enter 10 incorrect PINs. You will notice that after entering 3 incorrect PINs your OnlyKey is steadily blinking. This is an intentional safeguard so that in the event that a child gets ahold of your OnlyKey the device will not be inadvertently wiped by them repeatedly pressing buttons. You must remove and reinsert your OnlyKey and enter 3 more incorrect PINs. Repeat this until 10 incorrect PINs have been entered. The device will then have a solid light on that indicates that it is un-initialized and ready to reconfigure." %}


*If you want to learn more about the Self-Destruct and Plausible Deniability features see the [OnlyKey FAQ](https://docs.crp.to/faq.html) and the [OnlyKey Features](https://docs.crp.to/features.html#features).*

<i class="fa fa-arrow-down fa-3x"></i> ***Proceed to setup accounts below***

## Set up accounts {#account-setup}

{% include tip.html content="Set aside some time to set up accounts as this can be time consuming the first time you set it up. After you configure your profiles once you won't have to do this again unless you add a new account. Think of all the time you will save not having to remember and type usernames, passwords, and getting your phone out to type codes etc. This is a huge time saver in the long run." %}

### Configure Basic Login Info {#all-about-slots}

{% include callout.html content="**Enter your PIN -**  After removing and reinserting your OnlyKey you are prompted to enter the PIN you set during initial setup onto your OnlyKey six button keypad." type="default" %}

{% include image.html file="image82.png" %}

Now that your OnlyKey is unlocked you see this screen.

{% include image.html file="image31.png" %}

#### All About Slots {#all-about-slots}

The Slots area of the application is where you will set up things like your usernames, passwords, and 2 factor. As you can see the word ''empty'' is shown 12 times next to a button with a number and a letter. Each of these buttons refer to one of the slots on your OnlyKey.

**What are slots?** On the OnlyKey you have 6 buttons and 12 available slots in your profile. Each slot can be set with a Label, URL, Username, Password, and two-factor authentication. Each slot is assigned to a button on your OnlyKey. So for example if you were to save your Google password to slot 1a, then to type out your Google password you would tap button 1 on your OnlyKey for less than one second (Slot 1a). If you were to save your Yahoo password to slot 1b, then to type our your Yahoo password you would hold button 1 on your OnlyKey for more than one second (Slot 1b).

Each button has two slots assigned to it that can be activated by holding the button for less than or more than one second.

The slots that have not been configured have no label so they are shown as ''empty''. Next, let's set a label to slot 1a.

#### Set a Label {#set-a-label}

{% include callout.html content="**Step 1.** Click the 1a button in the OnlyKey app and see the Slot 1a Configuration" type="default" %}

{% include image.html file="image36.png" %}

{% include callout.html content="**Step 2.** Enter a label such as Gmail in the Label field, check the box next to Label, and click Submit." type="default" %}

*Now the label you entered is assigned to slot 1a. Slot labels are helpful if you forget which button is assigned to which account you can open the OnlyKey app at any time to see how it is set up.*

{% include image.html file="image66.png" %}

**What if I am using a computer without the OnlyKey app?**

This is where the card you received with your OnlyKey comes in handy. You can write your labels on this and carry this in your wallet. This is a low tech solution but it works great.

{% include image.html file="card.jpg" max-width="400" %}

{% include important.html content="Obviously, no sensitive information should be written on the card or saved to your slot labels. Just something that helps you remember which account is assigned there. Next, let's assign a username and password to slot 1a." %}

#### Set up a Slot {#set-up-a-slot}

The example configuration shown below would be to set up a username and password to automatically login to the Google page shown below.

{% include image.html file="image35.png" max-width="602" %}

{% include callout.html content="**Step 1.** To configure OnlyKey to log into the example Google page, Click the 1a button in the OnlyKey app, click the checkboxes and enter values as shown:" type="default" %}

{% include image.html file="image24.png" max-width="602" %}

{% include callout.html content="**Step 2.** Click submit to save the configuration to OnlyKey:" type="default" %}

{% include image.html file="image3.png" max-width="295" %}

**Now the configuration is saved and shows up in the OnlyKey app as ''Google 1''**

{% include note.html content="Since not all Login pages are the same OnlyKey has options like tab (use to go to the next field) and Return (submit). These essentially press either the tab or return key so if you are unsure of how to set up your OnlyKey configuration try logging into your login page first by using just your keyboard. For the example above you would do this by entering your password, pressing the Return/Enter key, on the next page entering your password and then pressing the Return/Enter key to complete your login." %}

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

**The example configuration shown below would be to set up a URL and password to automatically login to the Google page shown below. Notice that the username is already remembered so there is not a need to set this in the OnlyKey slot.**

{% include image.html file="image72.png" max-width="624" %}

{% include image.html file="image23.png" max-width="602" %}

*The table below shows how to configure some common login forms that at first may seem problematic. By using the delay setting of the OnlyKey we can support practically any login field format.*


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
   <td><em>With URL - You will notice that the delay is set to a high value so that you have plenty of time to select the username field manually since it's not selected automatically.</em>
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
<em>Username Remembered w/URL - If you use your device mostly on a computer where you username is remembered this is a good option.</em>
{% include image.html file="image61.png" max-width="395" %}
   </td>
  </tr>
  <tr>
   <td>Site that does not automatically select OTP code field (i.e. Salesforce)
{% include image.html file="image22.png" max-width="201" %}
After loading next page
{% include image.html file="image47.png" max-width="201" %}
   </td>
   <td><em>You will notice that the delay before 2FA is set to a high value so that you have plenty of time to select the OTP code field manually since it's not selected automatically.</em>
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

Two-factor authentication (2FA) is essentially an extra step that is required during the login process that makes it so that even if your username and password are compromised an attacker cannot login to your account. It is called two-factor authentication, or sometimes also multifactor authentication, because more than one factor is required to login. Factors can be something you know like a password, something you are like a fingerprint or iris scan, or something you have like the OnlyKey. There are three different types of 2FA supported by OnlyKey. By supporting multiple modes of 2FA OnlyKey will work with most sites that suppor 2FA - [http://www.dongleauth.info/](http://www.dongleauth.info/)

#### Google Authenticator (TOTP) {#google-authenticator-totp}

*DISCLAIMER - Google® is the registered trademarks of Google Inc. OnlyKey is not associated with or sponsored by Google® Inc.*

{% include tip.html content="If you are not a 2FA guru then this is the recommended method to use." %}

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

Once your account has been verified you are all set. You can add a username and password to this slot so that you can do a one touch login. Keep in mind that the page may take a second or two to load where your 6 digit OTP is entered so set the delay accordingly, 4 - 5 seconds delay should be plenty of time.

{% include image.html file="image37.png" max-width="600" %}

Learn more about the implementation of Google Auth OTP [here.](#google-authenticator-totp)

#### Yubico® One-Time Password {#Yubico-one-time-password}

*DISCLAIMER - Yubico® and Yubikey® are the registered trademarks of Yubico® AB. OnlyKey is not associated with or sponsored by Yubico® AB. Yubikey® OTP has been released by Yubico® as open source software with license found [here](https://github.com/Yubico/Yubico-c/blob/master/COPYING)*

{% include tip.html content="The majority of Yubikey® OTP applications online require Yubicloud setup. See the Yubicloud setup section after setting up Yubico® OTP." %}

*   First download and install the [Yubikey® personalization tools](https://www.Yubico.com/support/download/)
*   Go into Yubico® OTP and select ''Quick''

{% include image.html file="image43.png" %}

*   Select the ''Hide values'' checkbox and select ''Regenerate'' to create a Public Identify, Private Identity, and Secret Key.

{% include image.html file="image1.png" %}

*   Copy and paste these into the corresponding fields on the OnlyKey Configuration App.

{% include image.html file="image62.png" max-width="330" %}

*   Select ''Save to OnlyKey'' to write these values to your OnlyKey
*   Now your OnlyKey is ready to function in Yubikey® OTP mode
*   Just select a slot that you wish to use with Yubikey® OTP mode by selecting the radio button and then selecting ''Submit''. The Yubikey® OTP will be generated when the corresponding button is pressed.

{% include image.html file="image56.png" max-width="400" %}

The majority of Yubikey® OTP applications online require Yubicloud setup. See the Yubicloud setup section after setting up Yubico® OTP.

Learn more about Yubikey® OTP implementation [here.](#Yubico-one-time-password)

#### Yubicloud (Not Officially Support)  {#yubicloud-not-officially-support}

Some online services use Yubicloud for authentication. Yubicloud is owned by Yubico® and 3rd party devices are not supported so OnlyKey is not supported on Yubicloud. However, 3rd party devices will technically work with Yubicloud as long as you own an actual Yubikey®.

The following instructions show you how to set up a 3rd party device on Yubicloud. This is for your information only and we do not recommend setting up a 3rd party device on Yubicloud. If you choose to follow this information to set up a 3rd party device on Yubicloud you choose to do so against our recommendations and at your own risk.

{% include callout.html content="**Step 1.** Download and install the [Yubikey® personalization tools](https://www.Yubico.com/support/download/)" type="default" %}

{% include callout.html content="**Step 2.** Go into Yubico® OTP and select ''Quick''" type="default" %}

{% include callout.html content="**Step 3.** Insert Yubikey®, select a configuration slot, and click ''Write configuration'' button" type="default" %}

{% include image.html file="image5.png" %}

{% include callout.html content="**Step 4.** Set the values shown in the Public Identity, Private Identity, and Secret Key to your 3rd party device." type="default" %}

{% include callout.html content="**Step 5.** Once this is complete select ''Upload to Yubico®''" type="default" %}

{% include callout.html content="**Step 6.** This will open a web browser, to complete the registration enter the OTP in the ''OTP from the Yubikey®'' field by pressing the button on your 3rd party device." type="default" %}

{% include image.html file="image46.png" %}

{% include callout.html content="**Step 7.** Once the form is complete enter the Captcha and select Upload AES key." type="default" %}

{% include callout.html content="**Step 8.** Now you can test your OTP on the site [https://demo.Yubico®.com/](https://demo.Yubico®.com/)" type="default" %}

{% include image.html file="image51.png" %}

#### Security Key - Universal 2nd Factor (U2F) {#universal-2nd-factor-u2f}

{% include note.html content="U2F is supported on **Google Chrome** and **Firefox**. Firefox U2F support is still in it's early development stages so it is not enabled by default. If using Firefox, U2F must be enabled by completing the following steps in your browser:<br>
- Type about:config into the Firefox browser.<br>
- Search for “u2f”.<br>
- Double click on security.webauth.u2f to enable U2F support.<br><br>
*There is currently a bug in Firefox when registering* **multiple security keys** *on the same website. This was reported to Mozilla on 2/21/18. Register multiple U2F security keys using Chrome browser or if using Firefox make sure to register OnlyKey as the first security key in the list. More details [here](https://groups.google.com/d/msg/onlykey/HZ-HWk_LibE/jQMxWgV4BQAJ).*" %}

OnlyKey works just like any other U2F token. Follow the steps below to configure a slot to use U2F.

{% include callout.html content="**Step 1.** Select a slot that you wish to use with U2F mode by selecting the radio button and then selecting ''Submit''." type="default" %}

{% include image.html file="image34.png" %}

{% include callout.html content="**Step 2.** Go to the website that you wish to register a new security token and when you select to register a token you will notice the OnlyKey light flashing (Blue for OnlyKey Color) on and off. Press the button corresponding to the slot you set to U2F in step 1 to register token." type="default" %}

{% include callout.html content="**Step 3.** Once registered, your token can be used to authenticate by pressing the button. You can also add username and password to this slot to have a one touch login." type="default" %}

{% include tip.html content="There are **two ways to use U2F** on OnlyKey:<br><br>**1)** Have one designated slot on OnlyKey for U2F. i.e. Set slot 6a as U2F and press button 6 to authenticate to an unlimited number of sites.<br><br>**2)** Have U2F enabled along with other account information for each site. i.e. Set slot 1a as Dropbox login and include URL, Username, Password, and U2F all in one profile like this:<br>
![U2F Example](https://docs.crp.to/images/u2f-slot.jpeg)
<br>Now you can register your security key by pressing button 1. But won't it type out my information while registering? No, while your device is flashing blue you can press the button to register and typing is disabled. Once your security key is registered you can log out and now you have a one touch login configured:<br>- Automatically type out and browse to login page (https://www.dropbox.com/login).<br>- Three second delay ensures login page has time to load, this can be increased if using slow internet connections.<br>- Username and password are entered in login field.<br>- Two second delay ensures security key page has time to load.<br>- U2F authentication completes automatically." %}

Learn more about OnlyKey's implementation of U2F [here.](https://docs.crp.to/features.html#universal-2nd-factor-authentication-u2f)

### Using OnlyKey With A Software Password Manager {#using-onlykey-with-a-software-password-manager}

OnlyKey stores up to 24 unique accounts in offline storage and can be used to secure an unlimited number of accounts if used in conjunction with a software password manager. For example, set one of the OnlyKey slots to Dashlane, Google (Smart Lock), Lastpass, etc. enable 2-factor on this slot and then use your OnlyKey to unlock your software password manager. This way you can keep your most valuable accounts in offline storage and everything else in the software password manager.

{% include tip.html content="This way you can keep your most valuable accounts in offline storage and everything else in the software password manager." %}

#### LastPass {#lastpass}

LastPass supports both Google Authenticator and Yubico® OTP. Google Authenticator is supported in the free version of LastPass and Yubico® OTP is supported in the premium version of LastPass.

To protect LastPass account with Google Authenticator 2FA follow the steps below.

{% include callout.html content="**Step 1.** Go into Account settings-> Multi-factor Options and select the edit button in the Google Authenticator column." type="default" %}

{% include image.html file="image71.png" %}

{% include callout.html content="**Step 2.** Change to enabled and select View button next to Private Key" type="default" %}

{% include image.html file="image7.png" %}

{% include callout.html content="**Step 3.** You will be prompted to enter your master password and then the key is displayed." type="default" %}

{% include image.html file="image11.png" max-width="469" %}

{% include callout.html content="**Step 4.** Copy and paste the key into the Google Auth OTP field of the OnlyKey app for the slot that you want to set up." type="default" %}

{% include image.html file="image53.png" max-width="600" %}

{% include callout.html content="**Step 5.** Make sure to check the radio button next to Google Auth OTP and select Submit." type="default" %}

{% include callout.html content="**Step 6.** Go back to the LastPass app and select Update. You will be prompted for your password again and then your current verification code. Click inside the verification code box and press the button assigned to the slot you set up on your OnlyKey to type out the verification code." type="default" %}

{% include image.html file="image74.png" max-width="600" %}

{% include image.html file="image13.png" max-width="624" %}

{% include image.html file="image10.png" max-width="500" %}

#### DashLane {#dashlane}

DashLane supports Google Authenticator, Yubico® OTP, and U2F. The choice is yours but for beginners Google Authenticator is the best option.

#### Google SmartLock {#google-smartlock}

SmartLock is a new password manager that is available in Google Chrome. Since this uses a Google account it supports Google Authenticator or U2F. The choice is yours but for beginners Google Authenticator is the best option.

## Preferences {#preferences}

OnlyKey has several customizable preferences that can be accessed from the preferences tab of the configuration app.

{% include image.html file="image63.png" %}

### Configurable Inactivity Lockout Period {#configurable-inactivity-lockout-period}

This is the amount of time that the OnlyKey should remain unlocked while not being used. The default value is 30 minutes and the maximum is 255 minutes (about 4 hours). To disable lockout altogether set the lockout to 0.

### Configurable Keyboard Type Speed {#configurable-keyboard-type-speed}

Setting a custom type speed may be desirable in cases where the application you are using can not keep up with fast typing. Or if you don't use any applications with type speed restrictions you can have the text typed at top speed for the fastest logins. Setting value to 1 will result in very slow type speed of about one character a second, setting value to 10 will result in very fast type speed that will type almost instantly.

### Configurable Wipe Mode {#configurable-wipe-mode}

**Use Case #1** - If you are using the plausible deniability feature there is one scenario where an adversary may be able to determine that you were using the plausible deniability feature. This is possible if the adversary enters 10 incorrect PINs causing your OnlyKey to wipe all data and then they go to reconfigure the PINs. The adversary would be able to set both a regular PIN and PD PIN on the newly wiped OnlyKey and thus they would be able to conclude that you have the Standard Edition firmware. At this point the device is wiped the adversary would not have access to any sensitive information but the adversary would know that your device is capable of encryption which in some areas may be undesirable. To address this issue you can now set the wipe mode of your OnlyKey to Full Wipe. Given the same scenario with Full Wipe set when 10 incorrect PINs are entered the device will completely wipe all information including the firmware from your OnlyKey. No useful information would be available to an adversary concerning what firmware you were running and in order to use the device new firmware must be loaded.

**Use Case #2** - You are just really paranoid and want to erase any trace of your OnlyKey when a factory default occurs. Doing a full wipe is one way to be absolutely sure that everything including the firmware has been eliminated from your device.

### Configurable Keyboard Layouts {#configurable-keyboard-layouts}

You can change your keyboard layout on the fly through the OnlyKey app preferences. Traveling to France from the US? No problem just set the OnlyKey keyboard to French and change it back to US when you return. Here are the options supported for international keyboards:

*   US_ENGLISH
*   CANADIAN_FRENCH
*   CANADIAN_MULTILINGUAL
*   DANISH
*   FINNISH
*   FRENCH
*   FRENCH_BELGIAN
*   FRENCH_SWISS
*   GERMAN
*   GERMAN_MAC
*   GERMAN_SWISS
*   ICELANDIC
*   IRISH
*   ITALIAN
*   NORWEGIAN
*   PORTUGUESE
*   PORTUGUESE_BRAZILIAN
*   SPANISH
*   SPANISH_LATIN_AMERICA
*   SWEDISH
*   TURKISH
*   UNITED_KINGDOM
*   US_INTERNATIONAL
*   CZECH
*   SERBIAN_LATIN_ONLY

## Encryption Keys {#encryption-keys}

OnlyKey makes encryption keys easier and more secure by storing them offline, protected even if the computer using the key is compromised.

### Key FAQ {#key-faq}

**What is a key?**

In the simplest terms an encryption key is something you have that allows you to encrypt data. This data could be emails, files, or anything really. Every time you browse to a secure website there are keys being used in the background to encrypt the information you send so that only you and the website can see the information.

**Why does protecting private keys matter?**

You may hear the term private key being used sometimes, we will not get into the details here but there are plenty of places to read further on this topic online. For our purposes here a private key is used to read the secure messages / data that someone sends you. Only you should have access to this key because anyone with access to the key can read all messages sent to you in the past or in the future. This is why it is important to protect the key from exposure and why storing it on the OnlyKey is better than on your computer somewhere. If it's on your computer and your computer is hacked then all past and future messages you send may be read by the hacker.

**What does OnlyKey use keys for?**

The OnlyKey stores private keys. These private keys are used for four different purposes.

1.  **Secure Encrypted Backup** - This will backup everything including your stored accounts, preferences, and other keys to an encrypted text file. For information on backing up OnlyKey see [Secure Encrypted Backup](#secure-encrypted-backup-anywhere).
2.  **Secure Encrypted Messages (OpenPGP)**
  - **[OnlyKey WebCrypt - WebCrypt](https://docs.crp.to/webcrypt.html)** is a serverless Web App that integrates with [OnlyKey](https://crp.to/p/) and [keybase.io](https://keybase.io/) to provide encryption everywhere on-the-go.
  - **[OnlyKey BrowerCrypt - BrowserCrypt](https://docs.crp.to/webcrypt.html)** is a Google Chrome Extension that integrates with [OnlyKey](https://crp.to/p/) and [keybase.io](https://keybase.io/) to provide easy and secure PGP encryption in Google Chrome.
3.  **SSH Authentication** - SSH is a popular remote access tool that is often used by administrators. Thanks to the OnlyKey SSH Agent remote access can be passwordless and more secure. For information on using OnlyKey for SSH authentication see [OnlyKey-Agent](https://docs.crp.to/onlykey-agent.html).

Learn more about keys feature [here.](https://docs.crp.to/features.html#keys-feature)

### Generating Keys {#generating-keys}

{% include warning.html content="Only generate keys on a computer that you trust (i.e. never a publicly accessible or shared workstation)." %}

{% include callout.html content="**Step 1.** Go to https://keybase.io" type="default" %}

{% include callout.html content="**Step 2.** Select Login" type="default" %}

{% include image.html file="keybase1.jpeg" max-width="434" %}

{% include callout.html content="**Step 3.** Select Join Keybase" type="default" %}

{% include image.html file="keybase2.jpeg" max-width="434" %}

{% include callout.html content="**Step 4.** Enter an email address, username, and passphrase. This username will be used by others who want to send you encrypted messages. When finished select join." type="default" %}

{% include image.html file="keybase11.jpeg" max-width="434" %}

{% include callout.html content="**Step 5.** Select add a PGP key" type="default" %}

{% include image.html file="keybase3.jpeg" max-width="434" %}

{% include callout.html content="**Step 6.** Select I need a public key" type="default" %}

{% include image.html file="keybase4.jpeg" max-width="434" %}

{% include callout.html content="**Step 7.** Select Ok, got it" type="default" %}

{% include image.html file="keybase5.jpeg" max-width="434" %}

{% include callout.html content="**Step 8.** Enter Full name and at least one email. These will appear on the messages you send. When finished select Let the math begin." type="default" %}

{% include image.html file="keybase6.jpeg" max-width="434" %}

{% include callout.html content="**Step 9.** After the key is generated make sure to uncheck Host encrypted private key, too. Best security practices are to only keep your private key offline." type="default" %}

{% include image.html file="keybase7.jpeg" max-width="434" %}

{% include callout.html content="**Step 10.** Highlight your private key and copy to a text file. Save this to removable media like a USB flash drive or CD/DVD. You may want to make multiple copies as there is no way to recover this key if you lose it. Also ensure you write down your key passphrase (Same as Keybase account password) this is required to unlock your key. Store both in a physically secure location." type="default" %}

{% include tip.html content="A great physically secure location is a safe, preferably a fire safe." %}

{% include image.html file="keybase8.jpeg" max-width="434" %}

{% include image.html file="keybase9.jpeg" max-width="434" %}

{% include callout.html content="**Step 11.** Select Done, post to Keybase." type="default" %}

Now all that is needed to start sending encrypted messages is to load the key you generated onto your OnlyKey.

<i class="fa fa-arrow-down fa-3x"></i> ***Proceed to Loading Keys below***

### Loading Keys {#loading-keys}

{% include warning.html content="Only load keys on a computer that you trust (i.e. never a publicly accessible or shared workstation)." %}

If you generated your keys as described in the Generating Keys section above proceed to follow the steps below. If not head over to [Loading Keys Advanced](#loading-keys-a).

{% include callout.html content="**Step 1.** Open the text file of your private key that you saved in the previous steps. Select all of the text of the private key (CTRL+A), and copy the text (CTRL+C)." type="default" %}

{% include image.html file="Keybase12.jpg" %}

{% include callout.html content="**Step 2.** Click on the Keys tab of the OnlyKey App." type="default" %}

{% include callout.html content="**Step 3.** Put the OnlyKey into config mode doing the following" type="default" %}

*   Ensure OnlyKey is unlocked
*   Hold the 6 button down for more than 5 seconds, and then release, you will see the light turn off.
*   Re-enter your PIN, you will see the OnlyKey LED fade in and out continuously (Red if OnlyKey Color) while in config mode.

{% include callout.html content="**Step 4.** Paste the copied private key into the RSA Private Key box. Ensure *slot 1* is selected, the same passphrase you used with Keybase is entered as passphrase, *Set as decryption key* is selected, and *Set as backup key* is selected. When finished select Save to OnlyKey" type="default" %}

{% include image.html file="loadkey1.jpeg" %}

{% include note.html content="Selecting set as backup key will use your Keybase key to encrypt backups. If you wish to use a different key for backups just load that key and set it as backup. There can only be one backup key set." %}

{% include callout.html content="**Step 5.** Select Subkey 1 and save" type="default" %}

You should see a message displayed indicating the key was successfully saved to OnlyKey.

{% include callout.html content="**Step 6.** Paste the copied private key into the RSA Private Key box  again. Ensure *slot 2* is selected, the same passphrase you used with Keybase is entered as passphrase, and *Set as signature key* is selected. When finished select Save to OnlyKey" type="default" %}

{% include callout.html content="**Step 5.** Select Subkey 2 and save" type="default" %}

You should see a message displayed indicating the key was successfully saved to OnlyKey.

Now your OnlyKey is ready to:

- Send/receive PGP encrypted messages using [WebCrypt](https://docs.crp.to/webcrypt.html)
- Send/receive PGP encrypted messages using [BrowserCrypt](https://docs.crp.to/browsercrypt.html)
- Create [secure encrypted backups](https://docs.crp.to/usersguide.html#secure-encrypted-backup-anywhere)

### Loading Keys Advanced {#loading-keys-a}

{% include warning.html content="Only load keys on a computer that you trust (i.e. never a publicly accessible or shared workstation)." %}

If you did not generate keys using the [Generating Keys](#generating-keys) steps provided or you already have an OpenPGP key that you would like to use there are some additional considerations.

- OnlyKey supports RSA OpenPGP keys of sizes 2048 and 4096 (ECC Keys are not used for OpenPGP).
- Decryption operations using a 2048 size key takes about 2 seconds, with 4096 size key it takes about 9 seconds (or up to 30 seconds with OnlyKey Original).

For best user experience we recommend using OnlyKey Color with 2048 key size (subkeys) for decryption and signing.

**What are subkeys?**

Each OpenPGP key is actually multiple keys. There is a primary key and subkey(s), for example when you follow the Generating Keys steps Keybase generates a key that has a 4096 key size primary key and two 2048 key size subkeys. The first subkey is used for decryption and the second subkey is used for signing.

**Why does this matter?**

You need to determine which keys to load to OnlyKey if you are generating your own key. Typically, if your key has two subkeys then subkey 1 is used for decryption and subkey 2 is used for signing.

If your key only has one subkey then the primary (master) key is typically used for signing and the subkey is used for decryption. This is the default for keys created with GnuPG and Mailvelope (OpenPGP.js).

Once you determine which key is your used for signing and which key is used for decryption:
- Load the decryption subkey into slot 1 of OnlyKey and check "set as decryption key".
- Load the signing primary/subkey into slot 2 of OnlyKey and check "set as signature key".

**Digging Deeper into PGP**

You can use gpg2 via terminal to check the key flags by using the following commands:
```
$ gpg2 --import /Downloads/asdf_priv.asc
gpg: key 86F9C12A016169E4: public key "asdf <asdf@asdf.com>" imported
gpg: key 86F9C12A016169E4: secret key imported
gpg: Total number processed: 1

$ gpg2 --with-colons --list-keys 86F9C12A016169E4
tru::1:1481922139:0:3:1:5
pub:-:4096:1:86F9C12A016169E4:1513980282:::-:::scESC::::::23::0:
fpr:::::::::37F75C777AEBB46FB690040986F9C12A016169E4:
uid:-::::1513980287::AB20A6F0D2D7FE2A9EFF4575C3FF7ED2DAC66F4A::asdf <asdf@asdf.com>::::::::::0:
sub:-:4096:1:8E6332B693FB6D8F:1513980282::::::e::::::23:
fpr:::::::::F5F80C91796859CEC6CB54768E6332B693FB6D8F:
```
In the shown example the flag 'e' (encryption) indicates that the first subkey is the decryption key. The flag 'sc' indicates that the primary key is the signing key

## Secure Encrypted Backup Anywhere {#secure-encrypted-backup-anywhere}

The Secure Encrypted Backup Anywhere feature allows you to backup OnlyKey on the go. The way that this works is that the OnlyKey encrypts everything on your OnlyKey using an encryption key and then types it out. This allows saving the backup in a text file or email on any computer.

**Before Getting Started**

The backup feature is supported on firmware v0.2-beta.5 or later. You can check this once your device is configured by looking in the bottom right corner of the OnlyKey app.

{% include warning.html content="U2F and Yubikey OTP backup and restore is only supported on backups that were created on firmware v0.2-beta.6 (Released Feb 2018) or later. This means if you are upgrading from v0.2-beta.5 to v0.2-beta.6 you MUST have an alternate two factor method set on your account. Make sure to have an alternative two factor method set prior to upgrade." %}

{% include image.html file="image83.png" %}

### Backup With OnlyKey App {#backup-with-onlykey-app}

{% include callout.html content="**Step 1.** First, you must have a backup key and have this set on your OnlyKey. Follow the instructions in the [Generating Keys](#generating-keys) section to create a new key and then follow the instructions in the [Loading Keys](#loading-keys) section to load and set as backup key." type="default" %}

{% include callout.html content="**Step 2.** Click on the Backup/Restore tab of the OnlyKey app." type="default" %}

{% include callout.html content="**Step 3.** Click inside the Backup data box and then hold down the 1 button on your OnlyKey for 5 seconds or more and then release. This will type out an encrypted backup of your OnlyKey configuration into the box. Select save file to save the backup file which has a timestamp so you can keep track of the latest backup file." type="default" %}

{% include image.html file="image78.png" max-width="650" %}

{% include tip.html content="Backup can take a long time if your Keyboard Type Speed is set to a low setting. To speed this up go to Preferences in the OnlyKey app and select a higher setting, 9 usually works well" %}

### Backup Without OnlyKey App {#backup-without-onlykey-app}

The process is the same to backup without the app. OnlyKey can type out your encrypted backup anywhere.

**Save to a text file** - Instead of clicking in the Backup data box you could click into any text editor like notepad and when the backup is complete save the text file using whatever filename you prefer.

**Save it in an email** - In the same way you could also click into any email client and then when the backup is complete send the email to yourself or someone else.

## Restore From Backup {#restore-from-backup}

Using the backup file created in the Secure Encrypted Backup Anywhere section, we can restore an OnlyKey from backup. This also allows restoring to a different OnlyKey or a second OnlyKey in order to have an extra.

{% include note.html content="The way that a restore works is that it overwrites the current information on your OnlyKey with the information stored in the backup. So if you for example have a backup file that contains a password in slot 1 and you do a restore to an OnlyKey that already has a username and password in slot 1 the result would be that the username would remain unchanged and the password would be overwritten." %}

{% include callout.html content="**Step 1.** Ensure that a PIN is set on the target OnlyKey by completing the [Initial Setup](#initial-setup) section and ensure that the same key is loaded onto the OnlyKey that was used to backup by following the steps in the [Loading Keys](#loading-keys) section." type="default" %}

{% include callout.html content="**Step 2.** Put the OnlyKey into config mode by holding the 6 button down for more than 5 seconds, and then re-entering your PIN. You will see the OnlyKey LED fade in and out continuously (Red) while in config mode." type="default" %}

{% include callout.html content="**Step 3.** Click on the Backup/Restore tab of the OnlyKey App and then click Choose File to select your OnlyKey backup file. Click Restore to OnlyKey." type="default" %}

If you used the OnlyKey App to create the backup then the name of this file will be ''onlykey-backup-<timestamp>.txt''. The timestamp can be used to make sure you are loading the latest backup.

{% include image.html file="image45.png" %}

{% include callout.html content="**Step 4.** Restore may take a minute or two depending on the amount of data to restore. You will know that the restore is complete when the OnlyKey starts blinking continuously (Green)." type="default" %}

## Loading OnlyKey Firmware {#loading-onlykey-firmware}

**Before Getting Started**

{% include warning.html content="U2F and Yubikey OTP backup and restore is only supported on backups that were created on firmware v0.2-beta.6 (Released Jan 2018) or later. This means if you are upgrading from v0.2-beta.5 to v0.2-beta.6 and you use U2F or Yubikey OTP you MUST have an alternate two factor method set on your account. Make sure to have an alternative two factor method set prior to upgrade." %}

You can check firmware version by looking in the bottom right corner of the OnlyKey App.

{% include image.html file="image83.png" %}

{% include tip.html content="Can I load the Standard Edition firmware on an International Travel Edition OnlyKey?

Yes, you can load the Standard Edition firmware on an International Travel Edition OnlyKey or vice versa the hardware is identical." %}

{% include callout.html content="**Step 1.**  Insert OnlyKey into USB port" type="default" %}
{% include callout.html content="**Step 2.**  Download and install [Teensy Loader](https://www.pjrc.com/teensy/loader.html)" type="default" %}
{% include callout.html content="**Step 3.**  Determine which version of OnlyKey you have and download firmware below" type="default" %}

{% include image.html file="image25.jpg" max-width="285" %}

<table>
  <tr>
   <td colspan="2" >OnlyKey Color (Has a square LED)              OnlyKey Original (Has text "LED" visible)
   </td>
  </tr>
  <tr>
   <td>Download OnlyKey Color Standard Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.6/OnlyKey_Beta6_STD_Color.cpp.hex">here</a>
   </td>
   <td>Download OnlyKey Original Standard Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.6/OnlyKey_Beta6_STD_Original.cpp.hex">here</a>
   </td>
  </tr>
  <tr>
   <td>Download OnlyKey Color International Travel Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.6/OnlyKey_Beta6_IN_TRVL_Color.cpp.hex">here</a>
   </td>
   <td>Download OnlyKey Original International Travel Edition firmware <a href="https://github.com/trustcrypto/OnlyKey-Firmware/releases/download/v0.2-beta.6/OnlyKey_Beta6_IN_TRVL_Original.cpp.hex">here</a>
   </td>
  </tr>
</table>


{% include callout.html content="**Step 4.** You can ensure the integrity of your downloaded firmware by verifying the checksum" type="default" %}

<table>
  <tr>
   <td>
File Name
   </td>
   <td>SHA 256 Checksums
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta6_STD_Color.cpp.hex
   </td>
   <td>68f2ba7a23e6d4983cb47d4318e8eedbb86ecdf094feaf4928383ade88eb9150
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta6_STD_Original.cpp.hex
   </td>
   <td>309da576981b0f9cf811f577467c8e214ce761bc543f7a469eed25e43c0dd811
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta6_IN_TRVL_Color.cpp.hex
   </td>
   <td>d50ffa47c1e201fea4f77cddc3ad49e3afeb5873c537281569df65d12e27749d
   </td>
  </tr>
  <tr>
   <td>OnlyKey_Beta6_IN_TRVL_Original.cpp.hex
   </td>
   <td>018c2f3fda8f958653e9e3f0c686ca1b9f84c2d5f1dab182b6efa8d2428234e8
   </td>
  </tr>
</table>


{% include tip.html content="To do this in Windows open a command prompt and type 'certUtil -hashfile pathToFileToCheck SHA256'. To do this in Linux open a terminal and type 'sha256sum pathToFileToCheck'. Where pathToFileToCheck is replaced with the path of the file you are checking." %}

{% include callout.html content="**Step 5.**  In Teensy Loader select File -> Open HEX File. Then select the firmware you downloaded and click open." type="default" %}
{% include callout.html content="**Step 6.**  Now the firmware should appear at the bottom of the Teensy Loader application." type="default" %}

{% include image.html file="image67.png" max-width="213" %}

{% include note.html content="If a message prompts that 'HEX file is too large' ensure that your OnlyKey is plugged in." %}

{% include callout.html content="**Step 7.**  In order to enable the OnlyKey to upload the new firmware a jumper (Paperclip, aluminum foil etc) must make contact between the two small copper color circles shown while the OnlyKey is plugged into the USB port." type="default" %}

{% include tip.html content="If your OnlyKey has a case on it you can just slip the two corners out of the case without completely removing the case." %}

{% include image.html file="image16.png" %}

{% include callout.html content="**Step 8.**  With the Teensy Loader in the foreground, you should now see the Teensy Loader progress bar and then a reboot complete appear in the Teensy Loader which indicates that the firmware has loaded successfully." type="default" %}

{% include image.html file="image48.png" max-width="200" %}

{% include image.html file="image2.png" max-width="202" %}

**Under The Hood** - One of the great things about this method of firmware loading is that you, the user, can load your own firmware and in doing so be sure that your OnlyKey has not been tampered with. What actually happens when you load the firmware is that a mass erase is completed first. What this means is that all data is completely wiped, and then the new firmware is loaded. This way if say you suspect that your device was tampered with by someone or you just like to know for sure you can just re-load the firmware yourself.

## OnlyKey Accessories / Mobile Support {#onlykey-accessories-mobile-support}

### OnlyKey Case {#onlykey-case}

The OnlyKey case provides additional protection and gives OnlyKey a polished appearance. To put on the case just carefully slide the case over the OnlyKey as shown below:


<table>
  <tr>
   <td>
{% include image.html file="image40.jpg" max-width="121" %}
   </td>
   <td>
{% include image.html file="image80.jpg" max-width="292" %}
   </td>
   <td>
{% include image.html file="image49.jpg" max-width="227" %}
   </td>
  </tr>
</table>

Additional color cases are available - Choose a color that fits your style – Stealth Black, Guardian Blue, Hacker Green, Resistance Red, or Quantum White.

{% include image.html file="cases.jpg" max-width="500" %}

[Purchase in OnlyKey Store](https://onlykey.io/products/onlykey-silicone-case?variant=469636644908)
[Purchase on Amazon](https://crp.to/Amazon-Case)

### Android Support {#android-support}

Android is supported by using a USB on-the-go (OTG) adapter. There are two types of OTG adapters that can be purchased USB Micro and USB C.

Since the OnlyKey is essentially detected by Android as a keyboard, the username / password / Yubikey® OTP login features will work. Unfortunately, there is no support for U2F or Google Authenticator currently on Android. We are currently working on an Android app that would support these features.

#### [Purchase USB Micro to USB 3 OTG in OnlyKey Store](https://onlykey.io/collections/accessories-1/products/usb-micro-to-usb-a-otg-adapter?variant=1294977826860) {#usb-micro-to-usb-3-otg-adapter-with-keychain}

{% include note.html content="Supports Samsung Galazy S7 S6 S5 S4 S3 Note 2 Note, HTC One X, HTC One S, Moto G5, Moto X, or other Android device with USB Micro and OTG support." %}

#### [Purchase USB C to USB 3 OTG in OnlyKey Store](https://onlykey.io/collections/accessories-1/products/usb-c-to-usb-a-otg-adapter?variant=1294695989292) {#usb-c-to-usb-3-otg-adapter}

{% include note.html content="Supports OnePlus2/3, Nexus 5X, LG G5, HTC 10 or other Android device with USB C and OTG support." %}

### iPhone/iPad Support (Experimental) {#iphone-ipad-support-experimental}

This is currently in the experimental phase so there is not official support. User's have claimed to successfully use OnlyKey on their iPhones using a USB adapter like the one shown below.

{% include image.html file="image29.png"  max-width="248" %}

[Purchase on Amazon from 3rd party seller](https://www.amazon.com/gp/product/B00S9I7EPO/)

Since the OnlyKey is essentially detected by iPhone/iPad as a keyboard then the username / password / Yubikey® OTP login features will work. Unfortunately, there is no support for U2F or Google Authenticator currently.

### Keychain Accessory Options {#keychain-options}

#### Standard Plastic Keychain

The standard keychain that comes with the OnlyKey is plastic which provides good durability and an easy quick disconnect for convenient access.

If you ever need a replacement or extra keychain one can be purchased from the [OnlyKey store](https://onlykey.io/collections/keychains/products/extra-standard-keychain?variant=926841372716).

#### Heavy Duty Metal Keychain

This keychain provides better performance and durability than the standard plastic keychain. This keychain swivels 360° and is designed to withstand the stresses of demanding use. This can be purchased from the [OnlyKey store](https://onlykey.io/collections/keychains/products/heavy-duty-metal-keychain?variant=7154240028716).
{% include image.html file="51vOBo8vUSL._SL1000_.jpg"  max-width="248" %}

#### Standard Plastic Keychain DIY

If you don't like how far your OnlyKey hangs off of your keyring then follow these instructions to create a nice short keychain. You can do this yourself all that is needed is a pair of scissors.

{% include callout.html content="**Step 1.** As shown in the diagram below, pull excess through clip opening and tie a second knot approximately at the length of the end of the plastic attachment." type="default" %}

{% include image.html file="image64.jpg" max-width="156" %}

{% include callout.html content="**Step 2.** Put the knot back through the clip opening and remove the keychain to make sure there is enough length left to fit over plastic attachment, if not increase length and re-tie knot." type="default" %}

{% include image.html file="image70.jpg" max-width="179" %}

{% include callout.html content="**Step 3.** Finally, cut off the first knot and enjoy your optimum length keychain." type="default" %}

{% include image.html file="image9.jpg" max-width="134" %}

## Troubleshooting {#troubleshooting}

### Common Issues {#common-issues}

Below is a list of common issues and solutions.


<table>
  <tr>
   <td><strong>Issue</strong>
   </td>
   <td><strong>Solution</strong>
   </td>
  </tr>
  <tr>
   <td>Accidentally press OnlyKey button
   </td>
   <td>All OnlyKeys now include a silicone case accessory, this is also available for purchase on Amazon. Using the case makes it difficult to inadvertently press a button.
   </td>
  </tr>
  <tr>
   <td>Not working with certain sites / Not entering data in correct field
   </td>
   <td>We often get customers that ask how to set up a specific site with OnlyKey. There are several examples listed in the table provided in the <a href="#set-up-a-slot">Set up a slot</a> section. If you have a use case that is not covered by this please open a new issue on the support forum.
   </td>
  </tr>
  <tr>
   <td>Missing characters while typing / typing too fast / typing too slow
   </td>
   <td>Adjust the type speed in <a href="#configurable-keyboard-type-speed">preferences.</a>
   </td>
  </tr>
  <tr>
   <td>Google Authenticator types NOTSET instead of OTP code
   </td>
   <td>This occurs when the OnlyKey does not have the time set. Time is set from the OnlyKey app which occurs automatically. The OnlyKey app must be installed for the code to be generated.
   </td>
  </tr>
  <tr>
   <td>Entering data into OnlyKey App and selecting submit but the data is not saved
   </td>
   <td>The check box next to the data must be selected.
   </td>
  </tr>
  <tr>
   <td>Yubico® OTP Error (LastPass)
   </td>
   <td>The majority of Yubikey® OTP applications require Yubicloud setup including LastPass. See Yubicloud section of User's Guide.
   </td>
  </tr>
</table>


If you have an issue not listed here please reference the online support forum [here.](https://groups.google.com/forum/#!forum/onlykey)

## Change your PIN {#pin-change}

If you need to change your self-destruct or plausible deniability PINs that can be completed by going through the initial setup again. If you need to change your primary profile PIN you must do a backup and restore. The process is as follows:

- Backup OnlyKey
- Wipe OnlyKey (self destruct PIN or enter incorrect PIN 10x)
- Complete initial setup again and choose a different PIN
- Load backup key
- Restore backup file

{% include note.html content="The reason that primary PIN can't just be changed is a security reason. The key that encrypts all of sensitive data on the OnlyKey is derived from your PIN and a random number. This means that just changing the PIN makes the sensitive data unreadable." %}

## Web Links {#web-links}

Documentation - [https://docs.crp.to](https://docs.crp.to)

FAQs - [https://docs.crp.to/faq.html](https://docs.crp.to/faq.html)

Forum -[ https://groups.google.com/forum/#!forum/onlykey](https://groups.google.com/forum/#!forum/onlykey)

Store –[ https://crp.to/ok](https://crp.to/ok)

Github –[ https://github.com/trustcrypto](https://github.com/trustcrypto)

Getting started with OnlyKey –[ https://crp.to/okstart](https://crp.to/okstart)

{% include links.html %}
