import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background: none;
  color: ${({ theme, cor }) =>
    cor == "true" ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  border: none;
  font-size: 16px;
`;
