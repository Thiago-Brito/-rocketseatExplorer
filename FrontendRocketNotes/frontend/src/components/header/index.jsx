import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceHolder from "../../assets/avatarPlaceHolder.svg";

export function Header() {
  const { user, signOut } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder;
  return (
    <Container>
      <Link to="/profile">
        <Profile>
          <img src={avatarUrl} alt={user.name} />

          <div>
            <span>Bem vindo</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>
      </Link>
      <Link to="/">
        <Logout onClick={signOut}>
          <RiShutDownLine />
        </Logout>
      </Link>
    </Container>
  );
}
