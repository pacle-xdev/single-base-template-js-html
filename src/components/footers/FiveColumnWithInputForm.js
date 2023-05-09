import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/12.png";
// import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
// import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
import { ReactComponent as EmailIcon } from "images/email-icon.svg";
// import { ReactComponent as WhatsappIcon } from "images/whatsapp.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const SocialLinkWhite = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-200 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container id="contactus">
      <Content>
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Pinnacle</LogoText>
          </LogoContainer>
          <CopywrightNotice>
            &copy; 2023 pinnacle.com. All Rights Reserved.
          </CopywrightNotice>
          <SocialLinksContainer>
            <SocialLinkWhite href="mailto:udaykiran.pin@gmail.com">
              <EmailIcon />
            </SocialLinkWhite>
            <SocialLink href="https://twitter.com/PinnacleFTSO">
              <TwitterIcon />
            </SocialLink>
            {/* <SocialLinkWhite href="https://wa.me/917780347304">
              <WhatsappIcon />
            </SocialLinkWhite> */}
            {/* <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink> */}
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
