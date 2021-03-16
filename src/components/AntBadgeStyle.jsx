import React from 'react';
import { Badge } from 'antd';
import styled from '@emotion/styled';

const AntBadgeStyle = ({badgeCount, iconStyle, badgeSize}) => {
    return (
        <BadgeWrap 
          count={badgeCount} 
          size={badgeSize} 
          dot={(iconStyle === 'home')}
          overflowCount='99'
        >
          <IconStyle href="javascript:void(0)">
            <i className={`icon ${iconStyle}`} />
          </IconStyle>
        </BadgeWrap>
    );
};

const BadgeWrap = styled(Badge)`
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }

  .ant-scroll-number {
    overflow: hidden;
    font-size: 10px;
    padding: 0 5px;
    line-height: 14px;
    height: 15px;

    &.ant-badge-dot {
      width: 6px;
      height: 6px;
      padding: 0;
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

export default AntBadgeStyle;