import React from "react";
import { StyledButton } from "../../../components/button";
import Icon from "../../../components/icon";
import { ButtonContainer } from "./style";

const SocialButton = () => {
  return (
    <ButtonContainer>
      <div>
        <StyledButton type="bordered" iconOnly block>
          <Icon glyph="facebook-solid" color="#6B7280" />
        </StyledButton>
      </div>
      <div>
        <StyledButton type="bordered" iconOnly block>
          <Icon glyph="twitter-solid" color="#6B7280" />
        </StyledButton>
      </div>
    </ButtonContainer>
  );
};

export default SocialButton;
