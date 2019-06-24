import React from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default () => (
  <View>
    <Loader />
  </View>
);
