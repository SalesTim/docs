---
author: Kristina Konstantynova

---
# Serve Private Channels in Microsoft Teams only through Collaboration Templates

For a governance purpose, you may want to restrict Private Channels creation for users and make it available only through the ones you define in Templates. Users won't be allowed to create a Private Channel for any other purpose. Private Channels will be created only with the teams created through the defined templates.

_If you want to know more on Private Channels in Collaboration Templates by nBold,_ [_learn more in the dedicated article_](/catalog-manager-guide/collaboration-templates/private-channels)_._

The only thing you need to do is first, to disable the ability for users to create a Private Channel, second, make sure that only _nBold_ App can create private channels.

## **Disable the ability for users to create Private Channel**

As a Microsoft Teams Admin or Global Admin, go to the [Microsoft Teams Admin Portal](https://admin.teams.microsoft.com/) go To Teams > Teams Policies > Select Global > Disable.

As a result, everyone in your organization won't be able to create private channels.

![](/media/governance-policies-private-channels.png)

**Only** _nBold_ **App is allowed to create private channels**

Create a new policy that can call for example "_nBold_ Service Account

![](/media/private-channel.png)

Then select the policy and apply this policy to the nBold Service Account in your tenant.

![](/media/private-2.png)

_Here the Service Account Name is "nBold", in your organization it certainly has another name that is defined._