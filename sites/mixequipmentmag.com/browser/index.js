import Browser from '@parameter1/base-cms-marko-web/browser';
import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import Common from '@ac-business-media/package-common/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';

SocialSharing(Browser);
DefaultTheme(Browser);
GTM(Browser);
Common(Browser);

export default Browser;
