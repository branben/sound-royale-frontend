/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import InstagramImage from 'src/assets/images/Web_Instagram.svg';
import LinkedInImage from 'src/assets/images/Web_LinkedIn.svg';
import TwitterImage from 'src/assets/images/Web_Twitter.svg';
import { styled } from '@mui/material/styles';
import VuesaxLinearArrowRight from 'src/components/VuesaxLinearArrowRight/VuesaxLinearArrowRight';
import Options from 'src/components/Options/Options';
// import Buttons from 'src/components/Buttons/Buttons';
import { Link } from 'react-router-dom';

const Web1 = styled('div')({
  backgroundColor: `rgba(0, 0, 0, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `1117px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  maxWidth: '1440px',
  minWidth: '1440px',
});

const Frame5 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `81px`,
  top: `160px`,
  minWidth: '1440px',
});

const SoundRoyale = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Newake`,
  fontWeight: `400`,
  fontSize: `260px`,
  letterSpacing: `-13px`,
  textDecoration: `none`,
  lineHeight: `86.00000143051147%`,
  textTransform: `uppercase`,
  margin: `0px`,
});

const SoundRoyale1 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Newake`,
  fontWeight: `400`,
  fontSize: `260px`,
  letterSpacing: `-13px`,
  textDecoration: `none`,
  lineHeight: `86.00000143051147%`,
  textTransform: `uppercase`,
  WebkitTextStroke: `4px rgba(255, 255, 255, 1)`,
  margin: `0px`,
});

const SoundRoyale2 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Newake`,
  fontWeight: `400`,
  fontSize: `260px`,
  letterSpacing: `-13px`,
  textDecoration: `none`,
  lineHeight: `86.00000143051147%`,
  textTransform: `uppercase`,
  WebkitTextStroke: `2px rgba(255, 255, 255, 1)`,
  margin: `0px`,
});

const SoundRoyale3 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Newake`,
  fontWeight: `400`,
  fontSize: `260px`,
  letterSpacing: `-13px`,
  textDecoration: `none`,
  lineHeight: `86.00000143051147%`,
  textTransform: `uppercase`,
  WebkitTextStroke: `1px rgba(255, 255, 255, 1)`,
  margin: `0px`,
});

const SoundRoyale4 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Newake`,
  fontWeight: `400`,
  fontSize: `260px`,
  letterSpacing: `-13px`,
  textDecoration: `none`,
  lineHeight: `86.00000143051147%`,
  textTransform: `uppercase`,
  WebkitTextStroke: `0.5px rgba(255, 255, 255, 1)`,
  margin: `0px`,
});

const Frame8 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px 80px`,
  boxSizing: `border-box`,
  width: `1440px`,
  left: `0px`,
  top: `50px`,
});

const SocialNetworksDark = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: `400px`,
});

const Instagram = styled('img')({
  height: `auto`,
  width: `52px`,
});

const LinkedIn = styled('img')({
  height: `auto`,
  width: `52px`,
});

const Twitter = styled('img')({
  height: `auto`,
  width: `52px`,
});

const Frame7 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const AboutUs = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `-1.6px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `uppercase`,
  margin: `0px`,
  maxWidth: '141px',
  minWidth: '141px',
});

const VuesaxLinearArrowRig = styled(VuesaxLinearArrowRight)(({ theme }) => ({
  width: `40px`,
  height: `40px`,
  margin: `0px 0px 0px 20px`,
}));

const Text = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `italic`,
  fontFamily: `GothamBook`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `-1px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  position: `absolute`,
  left: `1001px`,
  top: `980px`,
});

const Frame3 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px 80px`,
  boxSizing: `border-box`,
  width: `1440px`,
  left: `0px`,
  top: `947px`,
});

const NavigationBars = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(27, 27, 27, 1)`,
  boxShadow: `0px 0px 50px rgba(151, 71, 255, 0.08)`,
  borderRadius: `100px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `20px 100px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  overflow: `hidden`,
}));

const Sr = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Newake`,
  fontWeight: `400`,
  fontSize: `36px`,
  letterSpacing: `-1.8px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `capitalize`,
  maxWidth: '36px',
  minWidth: '36px',
});

function Web(props) {
  return (
    <Web1 className={props.className}>
      <Frame5>
        <SoundRoyale>{`sound royale`}</SoundRoyale>
        <SoundRoyale1>{`sound royale`}</SoundRoyale1>
        <SoundRoyale2>{`sound royale`}</SoundRoyale2>
        <SoundRoyale3>{`sound royale`}</SoundRoyale3>
        <SoundRoyale4>{`sound royale`}</SoundRoyale4>
      </Frame5>
      <Frame8>
        <SocialNetworksDark>
          <Instagram src={InstagramImage} loading="lazy" alt={'Instagram'} />
          <LinkedIn src={LinkedInImage} loading="lazy" alt={'LinkedIn'} />
          <Twitter src={TwitterImage} loading="lazy" alt={'Twitter'} />
        </SocialNetworksDark>
        <Frame7>
          <AboutUs><Link to="/about">{`ABOUT US`}</Link></AboutUs>
          <VuesaxLinearArrowRig />
        </Frame7>
      </Frame8>
      <Text>{`FAQ`}</Text>
      <Frame3>
        <NavigationBars>
          <Sr>{`SR`}</Sr>
          <Options />
          {/* <Buttons /> */}
        </NavigationBars>
      </Frame3>
    </Web1>
  );
}

export default Web;
