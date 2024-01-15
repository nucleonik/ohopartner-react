import React from 'react';

import { Text, View, ScrollView } from 'react-native';

const Privacy = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          marginLeft: 15,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            marginTop: 20,
            width: 360,
            textAlign: 'justify',
          }}
        >
          This is a binding contract between you and the Oho! Corp. This
          contract sets forth yours and our rights before you use the Oho!
          application ("App"). Please take a few moments to read these Terms
          before using the App. Once you access, view or use the App, you will
          be legally bound by these Terms.
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginTop: 1,
            width: 360,
            textAlign: 'justify',
            fontWeight: 600,
          }}
        >
          1. Oho! Rules
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            width: 360,
            textAlign: 'justify',
          }}
        >
          Before you can use our App, you will need to register for an account
          ("Account"). In order to create an Account, you must:
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            width: 360,
            textAlign: 'justify',
          }}
        >
          1. be at least 18 years old; and
        </Text>
        <Text
          style={{
            fontSize: 16,

            width: 360,
            textAlign: 'justify',
          }}
        >
          2. be legally permitted to use the App by the laws of your home
          country. You can create an Account via manual registration, in the
          near future you w ill be able to register for an account using a third
          party like Facebook. If you create an Account using your Facebook
          login details, you authorize us to access, display and use certain
          information from your Facebook account (e.g., profile pictures,
          relationship status, location and information about Facebook friends).
          For more information about w hat information w e use and how w e use
          it, please check out our Privacy Policy.
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            width: 360,
            textAlign: 'justify',
          }}
        >
          We do not allow you to use another person's Account without
          permission. You can delete your Account at any time by going to the
          'Settings' page when you are logged in and clicking on the 'Delete'
          button. Your Account will be deleted immediately but it may take a
          little while for Your Content (defined below) to be completely removed
          from the App.
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            width: 360,
            textAlign: 'justify',
          }}
        >
          We reserve the right at our sole discretion to terminate or suspend
          any Account, or make use of any operational, technological, legal or
          other means available to enforce the Terms (including without
          limitation blocking specific IP addresses), at any time without
          liability and without the need to give you prior notice.
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 10,
            width: 360,
            textAlign: 'justify',
          }}
        >
          You may not access, tamper with, or use non-public areas of the App or
          our systems. Certain portions of the App may not be accessible if you
          have not registered for an Account.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Privacy;
