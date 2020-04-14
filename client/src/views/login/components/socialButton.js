import React from "react";
import { Col, Row } from "components/layout";
import Icon from "components/icon";
import { StyledButton } from "components/button";

const SocialButton = () => {
  return (
    <Row style={{ marginTop: "20px" }} gap="6px">
      <Col gap="6px">
        <StyledButton color="bordered" iconOnly block>
          <Icon glyph="facebook-solid" color="#6B7280" />
        </StyledButton>
      </Col>
      <Col gap="6px">
        <StyledButton color="bordered" iconOnly block>
          <Icon glyph="twitter-solid" color="#6B7280" />
        </StyledButton>
      </Col>
    </Row>
  );
};

export default SocialButton;
