import { Container } from "./style";

export function Button({
  icon: Icon,
  title,
  isActive = false,
  onClick,
  ...rest
}) {
  return (
    <Container isActive={isActive} {...rest} onClick={onClick}>
      {Icon && <Icon />}

      {title}
    </Container>
  );
}
