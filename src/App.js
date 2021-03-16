import React from 'react';
import styled from '@emotion/styled';
import AntBadgeStyle from './components/AntBadgeStyle';
import BadgeStyle from './components/BadgeStyle';

function App() {
  return (
    <div className="App">
      <Wrap>
        <div className="antBadgeWrap">
          <h1>antd + badge</h1>
          <AntBadgeStyle badgeCount='9' iconStyle='home' badgeSize='small' />
          <AntBadgeStyle badgeCount='999' iconStyle='alarm' badgeSize='small' />
        </div>
        <div className="badgeWrap">
          <h1>pure badge</h1>
          <BadgeStyle badgeCount='9' iconStyle='home' badgeSize='small' />
          <BadgeStyle badgeCount='999' iconStyle='alarm' badgeSize='small' />
        </div>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  padding: 0;
  margin: 0 auto;
  padding-top: 20px;
  overflow: hidden;
  
  & > div {
    padding: 20px;
  }
`;

export default App;
