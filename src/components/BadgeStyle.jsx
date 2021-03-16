import React from 'react';
import styled from '@emotion/styled';

const BadgeStyle = ({badgeCount, iconStyle, badgeSize}) => {
    return (
        <BadgeWrap>
            <IconStyle className={`icon ${iconStyle}`} href="javascript:void(0)">
                <i className={`icon ${iconStyle}`} />
            </IconStyle>
            <span className={`badgeCount ${iconStyle} ${badgeSize}`}>{(Number(badgeCount) > 99) && '99+'}</span>
        </BadgeWrap>
    );
};

const BadgeWrap = styled.div`
    display: inline-block;
    position: relative;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0;
    }

    .badgeCount {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0%;
        background-color: #ff4d4f;
        color: #fff;

        &.home {
            width: 6px;
            height: 6px;
            padding: 0;
            font-size: 0;
            border-radius: 50px;
        }
        &.small:not(.home) {
            height: 15px;
            line-height: 15px;
            border-radius: 7.5px;
            padding: 0 5px;
            font-size: 10px;
        }
    }
`;

const IconStyle = styled.a`
  display: block;
  color: #000;
  width: 25px;
  height: 25px;
  
  i {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    display: block;
    width: 100%;
    height: 100%;

    &.alarm {
      background-image: url('https://icongr.am/clarity/bell.svg?size=63&color=currentColor');
    }
    &.home {
      background-image: url('https://icongr.am/clarity/home.svg?size=63&color=currentColor');
    }
  }
`;

export default BadgeStyle;