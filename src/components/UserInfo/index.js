import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles";
const UserInfo = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Guilherme Rodz</strong>
          <span>#2323</span>
        </UserData>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
