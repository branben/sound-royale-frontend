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
import VectorImage from 'src/assets/images/vuesaxlineararrowleft_Vector.png';
import Vector1Image from 'src/assets/images/vuesaxlineararrowleft_Vector_1.png';
import Vector2Image from 'src/assets/images/vuesaxlineararrowleft_Vector_2.png';
import { styled } from '@mui/material/styles';

const VuesaxLinearArrowLef = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `40px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const VuesaxLinearArrowLef1 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `40px`,
  height: `40px`,
  left: `0px`,
  top: `0px`,
});

const ArrowLeft = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `40px`,
  height: `40px`,
  left: `0px`,
  top: `0px`,
});

const Vector = styled('img')({
  height: `20.23px`,
  width: `10.12px`,
  position: `absolute`,
  left: `6px`,
  top: `10px`,
});

const Vector1 = styled('img')({
  height: `0px`,
  width: `28.05px`,
  position: `absolute`,
  left: `6px`,
  top: `20px`,
});

const Vector2 = styled('img')({
  height: `40px`,
  width: `40px`,
  position: `absolute`,
  left: `80px`,
  top: `80px`,
});

function VuesaxLinearArrowLeft(props) {
  return (
    <VuesaxLinearArrowLef className={props.className}>
      <VuesaxLinearArrowLef1>
        <ArrowLeft>
          <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
          <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
          <Vector2 src={Vector2Image} loading="lazy" alt={'Vector'} />
        </ArrowLeft>
      </VuesaxLinearArrowLef1>
    </VuesaxLinearArrowLef>
  );
}

export default VuesaxLinearArrowLeft;
