import { Container } from "./style";

export function ButtonText({ title, cor = "false", ...rest }) {
  return (
    <Container type="button" cor={cor.toString()} {...rest}>
      {title}
    </Container>
  );
}
