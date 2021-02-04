import React from "react";
import ChannelMessages from "../ChannelMessages";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
const ChannelData = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessages author="Fulano" date="22/08/2020" content="ola" />
        {/* <ChannelMessages
          author="Fulano"
          date="22/08/2020"
          content={
            <>
              <Mention>@Fulano</Mention>, ola mano{" "}
            </>
          }
        /> */}
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
