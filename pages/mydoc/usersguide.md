---
title: OnlyKey User's Guide
tags: [OnlyKey, User's Guide]
keywords: OnlyKey, User's Guide
last_updated: Oct, 19, 2020
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

{% include callout.html content="**Step 1.** Remove the OnlyKey and the metal quick-connect keychain from packaging." type="default" %}

{% include callout.html content="**Step 2.** Attach the quick-connect to the OnlyKey, the other end of the quick-connect can be attached to your keyring." type="default" %}

{% include callout.html content="**Step 3.** (Optional) Check out OnlyKey accessories - [color cases](https://onlykey.io/products/onlykey-silicone-case?variant=469636644908), [mobile adapter (USB-C, Lightning)](https://onlykey.io/collections/accessories-1), [business workstation](https://onlykey.io/collections/workstation)." type="default" %}

<i class="fa fa-arrow-down fa-3x"></i> ***Proceed to setup below***

## Setting up OnlyKey {#initial-setup}

There are two options for setting up your OnlyKey.

- [OnlyKey Quick Setup](#quick-setup) (No app required, 1-3 minute setup time)

{% include tip.html content="Prefer a how-to video? Watch one [here](https://vimeo.com/372991865) that demonstrates setting up a new OnlyKey with Quick Setup<br>[![How-To:  Setting up OnlyKey with Quick Setup](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/quick-setup.png)](https://vimeo.com/372991865)" %}

- [OnlyKey Setup Using OnlyKey App](#onlykey-setup) (App install required, 5-10 minute setup time)

{% include tip.html content="Prefer a how-to video? Watch one [here](https://vimeo.com/372946883) that demonstrates setting up a new OnlyKey using the OnlyKey App<br>[![How-To: Setting up OnlyKey](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/video-setup.png)](https://vimeo.com/372946883)" %}

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

### Install OnlyKey Desktop App {#app-desktop}

{% include callout.html content="**Step 1.** Download installer" type="default" %}

[<i class="fa fa-apple fa-2x"></i> **macOS**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.3.0/OnlyKey.App.5.3.0.dmg)

[<i class="fa fa-windows fa-2x"></i> **Windows**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.3.0/OnlyKey_5.3.0.exe)

[<i class="fa fa-linux fa-2x"></i> **Linux**](https://github.com/trustcrypto/OnlyKey-App/releases/download/v5.3.0/OnlyKey_5.3.0_amd64.deb)

[<i class="fa fa-chrome fa-2x"></i> **Chrome OS / Chrome App**](https://docs.crp.to/app.html#onlykey-chrome-app-end-of-life)

{% include important.html content="Linux users, if a UDEV rule has not been created previously follow the following instructions here, additionally the OnlyKey app may now be installed via Snapcraft - [Linux Guide](https://docs.crp.to/linux.html)" %}

{% include callout.html content="**Step 2.** Install and launch the app." type="default" %}

{% include note.html content="You can ensure the integrity of your downloaded file by verifying the checksum. <br>macOS SHA 256 CHECKSUM: a19aa2e0e177c68a2d62cdd550a48885e22db8bd4a3527640865cc7b5264929fe<br>Windows SHA 256 CHECKSUM: 44fb2d9e2ac6307ecceb389332e0cdeb30d311bd95069b15595dc4a181310e84<br>Linux SHA 256 CHECKSUM: acb5d769de195b5806257d51d91ac18d7307a5777c027e8046753cf79db84cf4<br>" %}

{% include tip.html content="As you use the OnlyKey app you can hover over icons for tooltips and click on icon's to browse to that topic in the documentation ![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/tooltip.png)" %}

<i class="fa fa-arrow-down fa-3x"></i> ***Proceed to OnlyKey setup below***

### OnlyKey Setup Using OnlyKey App {#onlykey-setup}

If you have already setup OnlyKey using quick setup proceed to [Account Setup](#account-setup)

{% include callout.html content="**Step 1.** Insert OnlyKey and select [Next] to get started." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/config1.png)

{% include tip.html content="Before setting a PIN<br><br>You may find it easier to remember a pattern rather than a 7 - 10 digit PIN. Kind of like patterns used to unlock a phone lock screen:" %}

{% include image.html file="image86.png" max-width="157" %}

{% include callout.html content="**Step 2.** Enter a PIN code on the OnlyKey Keypad, check the disclaimer box, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/ite2.png)

{% include callout.html content="**Step 3.** Re-enter PIN code, and select [Next]." type="default" %}

{% include callout.html content="**Step 4.** Enter a PIN code for second profile, check the disclaimer box, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/config4.png)

{% include callout.html content="**Step 5.** If you wish to set a self-destruct PIN enter a PIN code, check the disclaimer box, and select [Next]." type="default" %}

![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/config5.png)

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

*If you want to learn more about features like [Self-Destruct](https://docs.crp.to/features.html#self-destruct) and [Plausible Deniability](https://docs.crp.to/pdguide.html) see [OnlyKey Features](https://docs.crp.to/features.html).*

<i class="fa fa-arrow-down fa-3x"></i> ***Proceed to setup accounts below***

## Setting up accounts {#account-setup}

{% include tip.html content="Set aside some time to set up accounts as this can be time consuming the first time you set it up. After you configure your profiles once you won't have to do this again unless you add a new account. Think of all the time you will save not having to remember and type usernames, passwords, and getting your phone out to type codes etc. This is a huge time saver in the long run.<br><br>
Prefer a how-to video? Watch one [here](https://vimeo.com/372894554) that demonstrates setting up a new OnlyKey<br>[![How-To: Setup Accounts and Customize OnlyKey Preferences](https://i.vimeocdn.com/video/830893143_640.webp)](https://vimeo.com/372894554)" %}

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

Open a text editor and then hold down the 2 button on OnlyKey for 5+ seconds. OnlyKey will type out your slot labels which may look something like this:

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

Since OnlyKey types out this information this method works on all computers and even mobile devices.

Another low tech option is to write your labels on a card/paper and carry this in your wallet.

{% include important.html content="Obviously, no sensitive information should be written on card/paper or saved to your slot labels. Just something that helps you remember which account is assigned there." %}

Find out more about [mobile support on-the-go](#android-support)?

Find out more about [TOTP support on-the-go](#google-authenticator-otg)?

**Next, let's assign a username and password to slot 1a.**

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

#### Generate Strong Passwords Online {#generate-strong-passwords-online}

There are many websites that allow you to generate a secure random password such as passwordsgenerator.net and there are also tools built into many software password managers.

- Password manager built into [KeePassXC](#keepassxc)
- Passwordsgenerator.net password generation tool available [here](https://passwordsgenerator.net/)
- LastPass password generation tool available [here](https://lastpass.com/generatepassword.php)

{% include image.html file="image59.png" %}

#### Generate Strong Password via Browser Extension {#generate-strong-password-via-browser-extension}

Install a browser extension by selecting add to Chrome the same way that you installed the OnlyKey app.

Chrome Extension available from the Chrome Web Store [here](https://chrome.google.com/webstore/detail/strong-password-generator/emehklffcaphknhhfhadkjhpfapcbpco).

{% include image.html file="image21.png" %}

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

#### TOTP (Google Authenticator) On-The-Go {#google-authenticator-otg}

One requirement of TOTP (Time-based One-time Password) is having the correct time. If OnlyKey is used on a system where the OnlyKey app is not running it will type out "NOTSET" instead of the OTP code. Because OnlyKey has no battery it requires an app to send it the correct time to be able to generate TOTP codes. For this reason it is important to ensure the OnlyKey app is permitted to autostart.

However, OnlyKey TOTP will work on-the-go without the app running. All you have to do is browse to our web app [https://apps.crp.to](https://apps.crp.to) in Google Chrome or Firefox. This web app in addition to being used to send encrypted messages sets the current time on OnlyKey and login with TOTP will function as normal.

{% include image.html file="totp.png" max-width="600" %}

#### Yubico® One-Time Password {#Yubico-one-time-password}

*DISCLAIMER - Yubico® and Yubikey® are the registered trademarks of Yubico® AB. OnlyKey is not associated with or sponsored by Yubico® AB. Yubikey® OTP has been released by Yubico® as open source software with license found [here](https://github.com/Yubico/Yubico-c/blob/master/COPYING)*

{% include tip.html content="The majority of Yubikey® OTP applications online require Yubicloud setup. See the Yubicloud setup section after setting up Yubico® OTP." %}

*   First download and install the [Yubikey® personalization tools](https://www.Yubico.com/support/download/)
*   Go into Yubico® OTP and select ''Quick''

{% include image.html file="image43.png" %}

*   Select the ''Hide values'' checkbox and select ''Regenerate'' to create a Public Identify, Private Identity, and Secret Key.

{% include image.html file="image1.png" %}

*   Copy and paste these into the corresponding fields in the OnlyKey App (Advanced Tab).

{% include image.html file="image62.png" max-width="330" %}

*   Select ''Save to OnlyKey'' to write these values to your OnlyKey
*   Now your OnlyKey is ready to function in Yubikey® OTP mode
*   Just select a slot that you wish to use with Yubikey® OTP mode by selecting the radio button and then selecting ''Submit''. The Yubikey® OTP will be generated when the corresponding button is pressed.

{% include image.html file="image56.png" max-width="400" %}

The majority of Yubikey® OTP applications online require Yubicloud setup. See the Yubicloud setup section after setting up Yubico® OTP.

Learn more about Yubikey® OTP implementation [here.](#Yubico-one-time-password)

#### Yubicloud (Not Officially Supported)  {#yubicloud-not-officially-support}

Some online services use Yubicloud for authentication. Yubicloud is owned by Yubico® and 3rd party devices are not supported so OnlyKey is not supported on Yubicloud. However, 3rd party devices will technically work with Yubicloud as long as you own an actual Yubikey®.

The following instructions show you how to set up a 3rd party device on Yubicloud. This is for your information only and we do not recommend setting up a 3rd party device on Yubicloud. If you choose to follow this information to set up a 3rd party device on Yubicloud you choose to do so against our recommendations and at your own risk.

{% include callout.html content="**Step 1.** Download and install the [Yubikey® personalization tools](https://www.Yubico.com/support/download/)" type="default" %}

{% include callout.html content="**Step 2.** Go into Yubico® OTP and select ''Quick''" type="default" %}

{% include callout.html content="**Step 3.** Insert Yubikey®, select a configuration slot, and click ''Write configuration'' button" type="default" %}

{% include image.html file="image5.png" %}

{% include callout.html content="**Step 4.** Set the values shown in the Public Identity, Private Identity, and Secret Key to your OnlyKey." type="default" %}

{% include callout.html content="**Step 5.** Once this is complete select ''Upload to Yubico®''" type="default" %}

{% include callout.html content="**Step 6.** This will open a web browser, to complete the registration enter the OTP in the ''OTP from the Yubikey®'' field by pressing the button on your OnlyKey." type="default" %}

{% include image.html file="image46.png" %}

{% include callout.html content="**Step 7.** Once the form is complete enter the Captcha and select Upload AES key." type="default" %}

{% include callout.html content="**Step 8.** Now you can test your OTP generated by OnlyKey on the site [https://demo.Yubico®.com/](https://demo.Yubico®.com/)" type="default" %}

{% include image.html file="image51.png" %}

{% include tip.html content="Keep in mind that once you write this configuration to OnlyKey you can no longer use a Yubikey with the same configuration. Attempting to do this causes one of the devices to be out of sync." %}

#### Security Key - FIDO2, FIDO U2F, and WebAuthn {#universal-2nd-factor-u2f}

The terminology for security keys can be a bit confusing so here are some quick definitions to make sense of it.

When websites use the term security key they typically are referring to one of these:
- Universal 2nd Factor (FIDO U2F) - Security key is used just as a 2nd factor along with your password.
- FIDO2 - A replacement for FIDO U2F released in 2019, Security key may be used as a 2nd factor along with your password or may be used as a passwordless security key on supported websites. Passwordless authentication allows logging in with just a security key and a PIN code.

The term WebAuthn is sometimes used instead of FIDO2, essentially WebAuthn is the browser Javascript standard and is part of the larger FIDO2 project.

OnlyKey works just like any other FIDO2 or FIDO U2F token. The first step to use a security key is to register the key and then once registered you can login to that site with the key.

To use OnlyKey as a security key follow the instructions given by the website where you wish to register OnlyKey. When using Onlykey as a security key you will see the light flash blue, press any button on the OnlyKey to register or login to a site.

{% include tip.html content="If I press an OnlyKey button where a password is already assigned won't OnlyKey type out my password?

No, while OnlyKey is flashing blue it will not type out any information, OnlyKey also has a 2 second cool off period to ensure this does not happen accidentally.

While you can press any button, some user's may prefer to always press the button of unused slot for FIDO authentication. For example, keep slot 6a unused and always press OnlyKey button 6 for FIDO authentication.
" %}

#### Security Key Advanced {#security-key-advanced}

One touch login may be configured with a security key by assigned the FIDO U2F two-factor mode to a slot.

{% include callout.html content="**Step 1.** Select a slot that you wish to use with U2F mode by selecting the radio button and then selecting ''Submit''." type="default" %}

{% include image.html file="image34.png" %}

{% include callout.html content="**Step 2.** Go to the website that you wish to register a new security token and when you select to register a token you will notice the OnlyKey light flashing blue, on and off. Press the button corresponding to the slot you set to U2F in step 1 to register token." type="default" %}

{% include callout.html content="**Step 3.** Once registered, your token can be used to authenticate by pressing the button. You can also add username and password to this slot to have a one touch login." type="default" %}

{% include tip.html content="There are **two ways to use FIDO U2F** on OnlyKey:<br><br>**1)** Press any button when prompted for FIDO U2F login<br><br>**2)** Have FIDO U2F enabled along with other account information for each site. i.e. Set slot 1a as Dropbox login and include URL, Username, Password, and U2F all in one profile like this:<br>
![U2F Example](https://docs.crp.to/images/u2f-slot.jpeg)
<br>Now you can register your security key by pressing button 1. But won't it type out my information while registering? No, while your device is flashing blue you can press the button to register and typing is disabled. Once your security key is registered you can log out and now you have a one touch login configured:<br>- Automatically type out and browse to login page (https://www.dropbox.com/login).<br>- Three second delay ensures login page has time to load, this can be increased if using slow internet connections.<br>- Username and password are entered in login field.<br>- Two second delay ensures security key page has time to load.<br>- U2F authentication completes automatically." %}

Learn more about OnlyKey's implementation of FIDO2 / FIDO U2F [here.](https://docs.crp.to/features.html#universal-2nd-factor-authentication-u2f)

### Using OnlyKey With A Software Password Manager {#using-onlykey-with-a-software-password-manager}

OnlyKey stores up to 24 unique accounts in offline storage and can be used to secure an unlimited number of accounts if used in conjunction with a software password manager. For example, set one of the OnlyKey slots to KeePassXC, Dashlane, Google (Smart Lock), Lastpass, etc. enable 2-factor on this slot and then use your OnlyKey to unlock your software password manager. This way you can keep your most valuable accounts in offline secure hardware and everything else in the software password manager.

There are two types of software password managers:
- Online Password Managers - Less secure but more convenient because passwords sync automatically between devices
  - [LastPass](https://onlykey.io/pages/secure-lastpass-with-onlykey)
  - [Dashlane](https://onlykey.io/pages/secure-dashlane-with-onlykey)
  - Bitwarden
  - 1Password
- Offline Password Managers - More secure but less convenient because passwords don't sync automatically
  - [KeePassXC](https://onlykey.io/pages/securing-keepassxc-with-onlykey)
  - KeePass
  - Password Safe


#### KeePassXC {#keepassxc}

What's great about KeePassXC:
- Its 100% open source (verifiable security)
- Its cross platform, supports Windows, Linux, Mac (in contrast to KeePass which is for Windows)
- Its offline, no passwords in the cloud
- We collaborated with the KeePassXC team to develop a custom integration with OnlyKey that provides a major security benefit
{% include image.html file="keepassxc.png" %}

Starting with the 2.5.0 release of KeePassXC you can use OnlyKey in challenge-response mode to secure your KeePassXC password database.

**Windows Install**
- Download and install KeePassXC from https://keepassxc.org/download/#windows

**macOS Install**
- Download and install KeePassXC from https://keepassxc.org/download/#mac
- An additional step is required in macOS 10.15 Catalina
  - Go to Settings -> Security & Privacy -> Input Monitoring
  - Unlock and click the +
  - Select KeePassXC and click open

*This additional step is required so that KeePassXC has permission to access your OnlyKey*

**Linux Install**
- Download and install KeePassXC from https://keepassxc.org/download/#linux

**KeePassXC Setup**

You can either import passwords to a create a new KeePassXC database by going to Database -> Import, or create a new empty KeePassXC database by selecting "Create a new KeePassXC database"

{% include tip.html content="Not sure how to export the passwords from your old password manager?<br>
- Chrome/Brave - Go to Settings -> Passwords -> click ... and select Export passwords<br>
 " %}

- Give your Password database a name and continue
- Select continue again to keep default encryption settings
- Enter a master password for your password database, click the dice to randomly generate one  
- (Optional) Copy the master password and save it to one of your OnlyKey slots using the OnlyKey app
- Select "Add additional protection"
- Select "Add YubiKey Challenge-Response"
![](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/keepassxc4.png)
- OnlyKey will show in the list of devices, select slot1 or slot2 and click done
- OnlyKey will flash yellow, press any button, if importing OnlyKey may flash yellow several times, press any button when it does this to complete import
- Congrats! You now have a new password database

{% include warning.html content="**Remember to securely delete your exported password file after you have imported it into KeePassXC**" %}

**KeePassXC Settings/Sync**
- Click on the wrench icon in KeePassXC to customize settings
- To enable browser integration (where KeePassXC can autofill account information in browser) click the Browser Integration icon, check the Enable browser integration checkbox, and select the browsers to enable
- Install the KeePassXC Browser plugin https://keepassxc.org/docs/keepassxc-browser-migration/
- To enable the SSH Agent click the SSH Agent icon and check the Enable SSH Agent checkbox. With this feature enabled your OnlyKey will be required to SSH.

**KeePassXC Cloud Sync**
While your KeePassXC database is encrypted and can be synced to multiple devices by copying it to cloud drive a better option that we recommend is to use [Cryptomator](https://cryptomator.org/).

- Download and install Cryptomator
- Create a vault inside of your cloud drive synced folder (i.e. Onedrive, Google Drive, etc)
- You can optionally store the vault password in one of your OnlyKey slots
- Move your KeePassXC kbdx file to your Cryptomator vault
- Congrats! You now can access your new password database from any computer with Internet access, Cryptomator, and your OnlyKey.

{% include tip.html content="So now your passwords are very secure, but you need to make sure they aren't so secure that you lock yourself out. Create a backup of both your KeePassXC database and your [OnlyKey](#secure-encrypted-backup-anywhere) and keep it somewhere safe, like in an actual safe. If you don't keep your Cryptomator password and KeePassXC password on your OnlyKey make sure you have a backup of those as well. Be to keep your OnlyKey backup passphrase in a safe location too in case you forget." %}

Mobile Setup and usage (Coming soon!)

**What is needed to use the challenge-response feature?**
No setup is required, OnlyKey generates a private key for HMAC SHA1 automatically when the device is first configured. After creating the KeePassXC database you will be prompted to press any button on OnlyKey (flashes yellow) to unlock your KeePassXC database. Additionally, since OnlyKey also stores static passwords you can use OnlyKey to store your KeePassXC master password in one of the available slots.

**What is challenge-response?**
Your passwords are stored in an encrypted Keepass container, in addition to requiring a master password to decrypt this a response (HMAC SHA1) from OnlyKey is required. The OnlyKey flashes yellow and you must press a button on OnlyKey. By requiring a master password and an OnlyKey, your accounts are protected by two layers of security. This solution is more secure than software password managers that only rely on a master password. Here is a threat model explaining why -

In order to unlock your KeePassXC database a hacker would need four things:
- Access to your computer (where the KeePass database resides)
- Physical access to your OnlyKey
- Know your OnlyKey PIN
- Know your master password

**What is challenge-response?**



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

DashLane supports Google Authenticator, Yubico® OTP, and Security Keys. The security key (FIDO2 / U2F) option is the most secure option.

#### Google SmartLock {#google-smartlock}

SmartLock is a password manager that is available in Google Chrome, it supports Google Authenticator and Security Keys. The security key (FIDO2 / U2F) option is the most secure option.

## OpenPGP File Encryption and Secure Communication {#secure-com}

OnlyKey is OpenPGP compatible and the worlds first plug and play encryption device. It is universally supported and does not require special software or drivers. With OnlyKey and Keybase together you have offline cold storage of your OpenPGP keys and can still easily encrypt messages and files.

{% include tip.html content="Watch a video [here](https://vimeo.com/374653109) that demonstrates using OnlyKey WebCrypt for file encryption<br>[![How-To: Use OnlyKey WebCrypt for file encryption](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/webcrypt.png)](https://vimeo.com/374653109)" %}

1) **[OnlyKey WebCrypt Web App](https://docs.crp.to/webcrypt.html)** is supported on Firefox, Brave, Edge (new) and Google Chrome for sending secure messages right in the browser. It is also supported on Android and iOS for more information [read this](https://docs.crp.to/mobile.html).

2) **[OnlyKey WebCrypt Native App](https://docs.crp.to/webcrypt.html)** provides the same app functionality but as a native app for that runs on Windows, mac OS, or Linux.

{% include note.html content="Private keys are securely stored on OnlyKey and are not accessible to the app or to the browser. This is in contrast to for example PGP/GPG software, webmail (i.e. Protonmail), and smartphone apps. Additionally, physical user presence is required to process secure messages/files. This is in contrast to Smart Cards which only require a PIN code that can be captured and replayed without physical user presence." %}

### How it works {#openpgp-how}

{% include callout.html content="**Step 1. Find a Keybase User -** The first step in sending a secure message or file is to identify who to send it to. Browse to [https://apps.crp.to/search](https://apps.crp.to/search) to use our custom Keybase search tool to search Keybase users by:<br>
- Twitter, Github, Reddit, or Hackernews Usernames<br>
- Web domains<br>
- PGP fingerprint<br>
- Or Automatically search for best match" type="default" %}

{% include image.html file="user-search.jpg" %}

{% include callout.html content="**Step 2. Send a user encrypted message or file -** Click the link in the search results to send the selected user encrypted message/file. You can also browse to [https://apps.crp.to/encrypt](https://apps.crp.to/encrypt) to send a secure message or browse to [https://apps.crp.to/encrypt-file](https://apps.crp.to/encrypt-file) to send a secure file if you already know the recipient. To encrypt files for yourself just use your Keybase username as the recipient. " type="default" %}

{% include image.html file="webcrypt1.png" %}

{% include callout.html content="**Step 3. Receive an encrypted message or file -** To decrypt a message or file browse to [https://apps.crp.to/decrypt](https://apps.crp.to/decrypt) or [https://apps.crp.to/decrypt-file](https://apps.crp.to/decrypt-file). " type="default" %}

{% include image.html file="webcrypt2.png" %}

{% include tip.html content="
You can receive encrypted messages and files from anyone, no tech skills are required!<br><br>
Receiving encrypted files is as easy as putting a custom link in your email signature:<br><br>
**Bob Smith**<br>
**Email:** Bobsmith@bobsmith.com<br>
**Phone:** 111.222.3333<br>
*Send me a secure [message](https://apps.crp.to/encrypt.html?type=e&recipients=bobsmith2) or [file](https://apps.crp.to/encrypt-file.html?type=e&recipients=bobsmith2)*<br>
*[More info](https://onlykey.io/pages/webcrypt)*<br>
<br>
- Link the text **'message'** to: https://apps.crp.to/encrypt.html?type=e&recipients=<mark>bobsmith2</mark>
<br><br>
- Link the text **'file'** to: https://apps.crp.to/encrypt-file.html?type=e&recipients=<mark>bobsmith2</mark>
<br><br>
- Change <mark>bobsmith2</mark> in the link to your Keybase user name
<br><br>
- Add a **'More info'** link to: https://onlykey.io/pages/webcrypt<br>
This link provides information to let your sender know what WebCrypt is, why it's secure, and includes a quick 30 second video that will shows how to use it.<br>
[![How-To: Use OnlyKey WebCrypt](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/webcrypt3.png)](https://vimeo.com/374672956)" %}

## Preferences {#preferences}

OnlyKey has several customizable preferences that can be accessed from the preferences tab of the configuration app.

{% include image.html file="image63.png" %}

### Configurable Inactivity Lockout Period {#configurable-inactivity-lockout-period}

This is the amount of time that the OnlyKey should remain unlocked while not being used. The default value is 30 minutes and the maximum is 255 minutes (about 4 hours). To disable lockout altogether set the lockout to 0.

### Configurable Keyboard Type Speed {#configurable-keyboard-type-speed}

Setting a custom type speed may be desirable in cases where the application you are using can not keep up with fast typing. Or if you don't use any applications with type speed restrictions you can have the text typed at top speed for the fastest logins. Setting value to 1 will result in very slow type speed of about one character a second, setting value to 10 will result in very fast type speed that will type almost instantly.

### Configurable Keyboard Layouts {#configurable-keyboard-layouts}

You can change your keyboard layout on the fly through the OnlyKey app preferences. Traveling to France from the US? No problem just set the OnlyKey keyboard to French and change it back to US when you return. Here are the options supported for international keyboards:

*   US_ENGLISH
*   CANADIAN_FRENCH
*   CANADIAN_MULTILINGUAL
*   DANISH
*   DANISH_MAC
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
*   HUNGARIAN
*   US_DVORAK

### Derived Key User Input Mode {#derived-challenge-mode}

OnlyKey supports automatic generation of keys that may be used for SSH and PGP/GPG with the [onlykey-agent app](https://docs.crp.to/onlykey-agent.html).

The default setting is "Challenge Code Required" which requires a 3 digit challenge code to be entered on OnlyKey to perform SSH or PGP/GPG operation. This is great for security but for some users a more convenient approach may be preferred. With "Button Press Required", a physical press on any key is all that is required to perform the operation.

### Stored Key User Input Mode {#stored-challenge-mode}

OnlyKey supports [import of existing OpenPGP keys](https://docs.crp.to/usersguide.html#loading-keys) using the [OnlyKey app](https://docs.crp.to/app.html). These keys once imported are securely stored in OnlyKey hardware and may be used to perform SSH or PGP/GPG operations with the [onlykey-agent app](https://docs.crp.to/onlykey-agent.html) or in the browser with the [OnlyKey WebCrypt](https://docs.crp.to/webcrypt.html).

By default, you must enter a 3 digit challenge code on OnlyKey to perform SSH or PGP/GPG operation. If a more convenient approach is preferred "Button Press Required" may be set so that a physical press on any key is all that is required.

### HMAC Mode {#hmac-mode}

OnlyKey supports HMAC challenge-response. By default, user input (button press) is required on OnlyKey to perform HMAC operation. For some use cases such as full-disk encryption no button press may be preferred. With "Button Press Not Required", HMAC challenge-response operations may be performed without user interaction.

### Backup Key Mode {#backup-key-mode}

You can change your backup key/passphrase at any time by entering your PIN to put the device in config mode. By setting backup key mode to locked, the backup key/passphrase may not be changed. This setting provides extra security so that even if an adversary has your PIN and has physical access to your device they would not be able to backup and restore your data.

{% include important.html content="With OnlyKey Go, if no PIN is set the backup key is locked by default." %}

### Configurable Wipe Mode {#configurable-wipe-mode}

Setting wipe mode to "Full Wipe" ensures that not only is your sensitive data wiped when a factory default occurs but also the firmware is wiped. This ensures that no data or meta data such as what version of firmware you had would be accessible to an adversary that steals or otherwise obtains a user's OnlyKey and then performs a factory default. The tradeoff of setting wipe mode to full wipe is that this cannot be changed once set and when a factory default occurs the firmware must be reloaded using the [**firmware upgrade guide **](https://docs.crp.to/upgradeguide.html). For user's desiring the highest level of security we recommend enabling full wipe.

### Sysadmin Mode {#sysadmin-mode}

By default, OnlyKey may only type regular keyboard characters, TAB, and RETURN. This is useful for entering usernames, passwords, etc. For more advanced use cases such as for system administrators it may be helpful to utilize modifier keys to save time while entering common keystrokes such as CTRL-ALT-DEL, and then entering a username/password. With "Sysadmin Mode" set this permits the use of the following modifier and additional keys to be stored and typed by OnlyKey:

- Ctrl (\c)
- Shift (\s)
- Alt (\a)
- Windows (PC) or Clover (Mac) (\g)
- Tab (\t)
- Return (\r)
- Printscreen (\p)
- Home (\h)
- Page Up (\u)
- Page Down (\o)
- End (\e)
- Delete (\d)
- Backspace (\b)
- Arrow-Up (\U)
- Arrow-Down (\D)
- Arrow-Left (\L)
- Arrow-Right (\R)
- Escape (\E)
- Delay (\#) # is number of seconds to wait

{% include important.html content="Once you enable this feature you will no longer be able to set slot values without first putting OnlyKey into config mode. This adds an extra layer of security for system administrators." %}

Once enabled, this can be used like this:

i.e. To press Ctrl-Alt-Del, release Ctrl-Alt-Del, delay 3 seconds, press TAB, enter username, and enter password:

" \c\a\d  \3 USERNAME \t PASSWORD"

Notice that a space followed by the '\' character is used to begin " \c\a\d " and one space is used to end (resets modifier keys).
Here are some other common examples:

- To enter Ctrl+Alt+T (the shortcut to open terminal in Ubuntu), then delay two seconds, then enter a command into terminal " \c\at  \2 ssh user@domain"

- To enter Windows+R (the shortcut to run a command in Windows), then delay two seconds, then enter a command into command prompt " \gr  \2 powershell.exe"

- To enter text into fields 1, 3, and 5 of a multiple field form and then submit " \t textforfield#1 \t  \t textforfield#3 \t  \t textforfield#5 \r "

### Configurable Lock Button {#configurable-lock-button}

One of the buttons on OnlyKey can be configured as a lock button. When the lock button is pressed the OnlyKey locks and the OnlyKey sends keystrokes to lock the computer (Windows+L for Windows and Linux, CTRL+SHIFT+EJECT for Mac).

### Configurable Indicator Light (LED) Brightness {#configurable-led-brightness}

The multicolor LED on OnlyKey is set to medium (8) brightness by default. Brightness may be adjusted between 1 (dimmest) and 10 (brightest).

## Encryption Keys {#encryption-keys}

OnlyKey makes encryption keys easier and more secure by storing them offline, protected even if the computer using the key is compromised.

### Key FAQ {#key-faq}

**What is a key?**

In the simplest terms an encryption key is something you have that allows you to encrypt data. This data could be emails, files, or anything really. Every time you browse to a secure website there are keys being used in the background to encrypt the information you send so that only you and the website can see the information.

**Why does protecting private keys matter?**

You may hear the term private key being used sometimes, we will not get into the details here but there are plenty of places to read further on this topic online. For our purposes here a private key is used to read the secure messages / data that someone sends you. Only you should have access to this key because anyone with access to the key can read all messages sent to you in the past or in the future. This is why it is important to protect the key from exposure and why storing it securely on the OnlyKey is better than on your computer somewhere.

**What does OnlyKey use keys for?**

The OnlyKey stores private keys. These private keys are used for four different purposes.

1.  **Secure Encrypted Backup** - This will backup everything including your stored accounts, preferences, and other keys to an encrypted text file. For information on backing up OnlyKey see [Secure Encrypted Backup](#secure-encrypted-backup-anywhere).
2.  **Secure Encrypted Messages (OpenPGP)**
  - **[OnlyKey WebCrypt](https://docs.crp.to/webcrypt.html)** is a serverless Web App that integrates with [OnlyKey](https://crp.to/p/) and [keybase.io](https://keybase.io/) to provide encryption everywhere on-the-go.
3.  **SSH Authentication** - SSH is a popular remote access tool that is often used by administrators. Thanks to the OnlyKey SSH Agent remote access can be passwordless and more secure. For information on using OnlyKey for SSH authentication see [OnlyKey-Agent](https://docs.crp.to/onlykey-agent.html).

Learn more about keys feature [here.](https://docs.crp.to/features.html#keys-feature)

### Generating Keys {#generating-keys}

{% include warning.html content="Only generate keys on a computer that you trust (i.e. never a publicly accessible or shared workstation)." %}

{% include tip.html content="Prefer a how-to video? Watch one [here](https://vimeo.com/374512727)<br>[![How-To: Generate and load a new OpenPGP key on OnlyKey](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/pgp.png)](https://vimeo.com/374512727)" %}

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

{% include tip.html content="Prefer a how-to video? Watch one [here](https://vimeo.com/374512727)<br>[![How-To: Generate and load a new OpenPGP key on OnlyKey](https://raw.githubusercontent.com/trustcrypto/trustcrypto.github.io/master/images/pgp.png)](https://vimeo.com/374512727)" %}

If you generated your keys as described in the Generating Keys section above, using Keybase, or using Mailvelope proceed to follow the steps below. If not head over to [Loading Keys Advanced](#loading-keys-a).

{% include callout.html content="**Step 1.** Open the text file of your private key that you saved in the previous steps. Select all of the text of the private key (CTRL+A), and copy the text (CTRL+C)." type="default" %}

{% include image.html file="Keybase12.jpg" %}

{% include callout.html content="**Step 2.** Click on the Keys tab of the OnlyKey App." type="default" %}

{% include callout.html content="**Step 3.** Put the OnlyKey into config mode doing the following" type="default" %}

*   Ensure OnlyKey is unlocked
*   Hold the 6 button down for more than 5 seconds, and then release, you will see the light turn off.
*   Re-enter your PIN, you will see the OnlyKey LED fade in and out continuously (Red if OnlyKey Color) while in config mode.

{% include callout.html content="**Step 4.** Paste the copied private key into the RSA Private Key box. Ensure *Auto* is selected as Slot, the same passphrase you used with Keybase (Or Protonmail / Mailvelope) is entered as passphrase. When finished select Save to OnlyKey" type="default" %}

{% include image.html file="loadkey1.jpg" %}

{% include note.html content="Selecting set as backup key will use your Keybase key to encrypt backups. Setting this will override any previously set backup passphrase/key as there can only be one backup key set." %}

You should see a message displayed indicating the key was successfully saved to OnlyKey.

Now your OnlyKey is ready to:

- Send/receive PGP encrypted messages/files using [WebCrypt](https://docs.crp.to/webcrypt.html)

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

**Exporting a key from GPG and Loading onto OnlyKey**

{% include callout.html content="**Step 1.** Export the OpenPGP compatible private key from GPG" type="default" %}
```
$ gpg2 --export-secret-key -a "asdf"
```

% include callout.html content="**Step 2.** Click on the Keys tab of the OnlyKey App." type="default" %}

{% include callout.html content="**Step 3.** Put the OnlyKey into config mode doing the following" type="default" %}

*   Ensure OnlyKey is unlocked
*   Hold the 6 button down for more than 5 seconds, and then release, you will see the light turn off.
*   Re-enter your PIN, you will see the OnlyKey LED fade in and out continuously (Red if OnlyKey Color) while in config mode.

{% include callout.html content="**Step 4.** Copy and paste the private key into the RSA Private Key box. Ensure *slot 1* is selected, the same passphrase you used with GPG is entered as passphrase, *Set as decryption key* is selected. If you wish to use your PGP to encrypt OnlyKey backups select *Set as backup key* (Note: If you previously set a backup passphrase and set this the PGP key will be used instead). When finished select Save to OnlyKey" type="default" %}

{% include note.html content="Selecting set as backup key will use your GPG key to encrypt backups. If you wish to use a different key for backups just load that key and set it as backup. There can only be one backup key set." %}

{% include callout.html content="**Step 5.** Select the decryption subkey and save" type="default" %}

You should see a message displayed indicating the key was successfully saved to OnlyKey.

{% include callout.html content="**Step 6.** Paste the copied private key into the RSA Private Key box again. Ensure *slot 2* is selected, the same passphrase you used with GPG is entered as passphrase, and *Set as signature key* is selected. When finished select Save to OnlyKey" type="default" %}

{% include callout.html content="**Step 5.** Select the signing primary/subkey and save" type="default" %}

You should see a message displayed indicating the key was successfully saved to OnlyKey.

## Secure Encrypted Backup Anywhere {#secure-encrypted-backup-anywhere}

The Secure Encrypted Backup Anywhere feature allows you to backup OnlyKey on the go. The way that this works is that the OnlyKey encrypts everything on your OnlyKey using an encryption key and then types it out. This allows saving the backup in a text file or email on any computer.

### Backup With OnlyKey App {#backup-with-onlykey-app}

{% include callout.html content="**Step 1.** First, you must have a backup passphrase or key set on your OnlyKey." type="default" %}

{% include callout.html content="**Step 2.** Click on the Backup/Restore tab of the OnlyKey app." type="default" %}

{% include callout.html content="**Step 3.** Click inside the Backup data box and then hold down the 1 button on your OnlyKey for 5 seconds or more and then release. This will type out an encrypted backup of your OnlyKey configuration into the box. Select save file to save the backup file which has a timestamp so you can keep track of the latest backup file." type="default" %}

{% include image.html file="image78.png" max-width="650" %}

{% include tip.html content="Backup can take a long time if your Keyboard Type Speed is set to a low setting. To speed this up go to Preferences in the OnlyKey app and select a higher setting, 9 usually works well" %}

### Backup Without OnlyKey App {#backup-without-onlykey-app}

The process is the same to backup without the app. OnlyKey can type out your encrypted backup anywhere.

**Save to a text file** - Instead of clicking in the Backup data box you could click into any text editor like notepad and when the backup is complete save the text file using whatever filename you prefer.

**Save it in an email** - In the same way you could also click into any email client and then when the backup is complete send the email to yourself or someone else.

## Restore From Backup {#restore-from-backup}

Using the backup file created in the [Secure Encrypted Backup Anywhere](https://docs.crp.to/usersguide.html#secure-encrypted-backup-anywhere) section, OnlyKey can be restored to a previous state. This also allows restoring to a different OnlyKey or a second OnlyKey in order to have an extra.

{% include note.html content="The way that a restore works is that it overwrites the current information on your OnlyKey with the information stored in the backup. So if you for example have a backup file that contains a password in slot 1 and you do a restore to an OnlyKey that already has a username and password in slot 1 the result would be that the username would remain unchanged and the password would be overwritten." %}

{% include callout.html content="**Step 1.** Ensure that a PIN is set on the target OnlyKey by completing the [Initial Setup](#initial-setup) section and ensure that the same passphrase/key is loaded onto the OnlyKey that was used to backup." type="default" %}

{% include callout.html content="**Step 2.** Put the OnlyKey into config mode by holding the 6 button down for more than 5 seconds, and then re-entering your PIN. You will see the OnlyKey LED fade in and out continuously (Red) while in config mode." type="default" %}

{% include callout.html content="**Step 3.** Click on the Backup/Restore tab of the OnlyKey App and then click Choose File to select your OnlyKey backup file. Click Restore to OnlyKey." type="default" %}

If you used the OnlyKey App to create the backup then the name of this file will be ''onlykey-backup-<timestamp>.txt''. The timestamp can be used to make sure you are loading the latest backup.

{% include image.html file="image45.png" %}

{% include callout.html content="**Step 4.** Restore may take a minute or two depending on the amount of data to restore. You will know that the restore is complete when the OnlyKey reboots automatically." type="default" %}

## Loading OnlyKey Firmware {#loading-onlykey-firmware}

Follow the upgrade guide below to load the latest OnlyKey firmware:

- [**Firmware upgrade guide **](https://docs.crp.to/upgradeguide.html)

If you received a message in the OnlyKey app stating *"This application is designed to work with a newer version of OnlyKey firmware."* or if your OnlyKey has firmware v0.2-beta.6x or earlier follow the link below:

- [**Legacy firmware upgrade guide (v0.2-beta.6x or earlier)**](https://docs.crp.to/legacyupgradeguide.html)

## OnlyKey Accessories / Mobile Support {#onlykey-accessories-mobile-support}

### OnlyKey Case {#onlykey-case}

The OnlyKey case provides additional protection and lets you select a custom OnlyKey color. To put on the case just carefully slide the case over the OnlyKey as shown below:


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

#### [Purchase in OnlyKey Store](https://onlykey.io/products/onlykey-silicone-case?variant=469636644908)

#### [Purchase on Amazon](https://crp.to/Amazon-Case)

### Android/iOS Support {#android-support}

Android and iOS is supported by using a USB on-the-go (OTG) adapter. For Android, there are two types of OTG adapters that can be purchased, USB Micro and USB C.

Since the OnlyKey is essentially detected by mobile device as a keyboard, the username / password / Yubikey® OTP login features will work. Newer Android and iOS devices that support USB FIDO2 will support using OnlyKey as a security key. WebCrypt may also be used to encrypt messages and files more info [here](https://docs.crp.to/mobile)

The TOTP feature requires the correct time in order to generate correct codes. In order to set the time on OnlyKey browse to https://apps.crp.to from Chrome or Firefox in Android (Safari in iOS) before trying to login.

#### [Purchase USB C to USB 3 OTG in OnlyKey Store](https://onlykey.io/collections/all/products/usb-c-to-usb-a-otg-adapter) {#usb-c-to-usb-3-otg-adapter}

{% include note.html content="Supports OnePlus2/3, Nexus 5X, LG G5, HTC 10 or other Android device with USB C and OTG support." %}

#### [Purchase USB Micro to USB 3 OTG in OnlyKey Store](https://onlykey.io/collections/all/products/usb-micro-to-usb-a-otg-adapter) {#usb-micro-to-usb-3-otg-adapter-with-keychain}

{% include note.html content="Supports Moto G5 Plus, Samsung Galazy S7 S6 S5 S4 S3 Note 2 Note, HTC One X, HTC One S, Moto G5, Moto X, or other Android device with USB Micro and OTG support." %}

#### [Purchase Lighting to USB 3 OTG in OnlyKey Store](https://onlykey.io/collections/all/products/lightning-to-usb-a-otg-adapter-for-iphone-or-ipad) {#lightning-to-usb-a-otg-adapter-for-iphone-or-ipad}

You may use OnlyKey with a USB to Lightning adapter (sometimes called camera adapter) with iPhones and iPads.

{% include note.html content="With iOS 13.3+ you may use OnlyKey as a FIDO2 security key and also use [OnlyKey WebCrypt](https://apps.crp.to) for OpenPGP support in Safari." %}

{% include image.html file="image29.png"  max-width="248" %}

### Keychain Accessory {#keychain-options}

#### Heavy Duty Metal Keychain

This keychain swivels 360° and is designed to withstand the stresses of demanding use. This can be purchased from the [OnlyKey store](https://onlykey.io/collections/keychains/products/heavy-duty-metal-keychain?variant=7154240028716).
{% include image.html file="51vOBo8vUSL._SL1000_.jpg"  max-width="248" %}

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


If you have an issue not listed here please reference the online support forum [here.](https://forum.onlykey.io)

## Change your PIN {#pin-change}

OnlyKey support for PIN change was added in firmware version Beta8. You can check the firmware version in the lower right corner of the OnlyKey app. To change PIN go to the [Setup] tab, put OnlyKey in config mode, and follow the instruction in the app to set a new PIN.

## Web Links {#web-links}

Documentation - [https://docs.crp.to](https://docs.crp.to)

FAQs - [https://docs.crp.to/faq.html](https://docs.crp.to/faq.html)

Forum -[ https://forum.onlykey.io](https://forum.onlykey.io)

Store –[ https://crp.to/ok](https://crp.to/ok)

Github –[ https://github.com/trustcrypto](https://github.com/trustcrypto)

Getting started with OnlyKey –[ https://crp.to/okstart](https://crp.to/okstart)

{% include links.html %}
