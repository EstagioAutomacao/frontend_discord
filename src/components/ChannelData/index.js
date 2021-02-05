import React, { useRef, useEffect } from "react";
import ChannelMessages, { Mention } from "../ChannelMessages";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData = () => {
  const messageRef = useRef(null);
  useEffect(() => {
    const div = messageRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);
  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessages author="Fulano" date="22/08/2020" content="ola" />
        ))}
        <ChannelMessages
          author="Fulano"
          date="22/08/2020"
          content={
            <>
              <Mention>@Fulano</Mention>, ola mano{" "}
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
