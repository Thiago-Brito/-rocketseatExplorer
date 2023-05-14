import { Container, Profile } from "./style";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import avatarPlace from "../../assets/avatarPlaceHolder.svg";
import { api } from "../../services/api";
import { useState } from "react";

export function Header({ handleInputChange }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlace;
  const [avatar, setAvatar] = useState(avatarUrl);

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <h2>RocketMovies</h2>

      <Input
        placeholder="Pesquisar pelo título"
        onChange={(e) => handleInputChange(e.target.value)}
      />

      <Link to="/profile">
        <Profile>
          <div>
            <span>{user.name}</span>
            <br />
            <Link to={"/"}>
              <button onClick={handleSignOut}>sair</button>
            </Link>
          </div>

          <img src={avatar} alt="Foto do usario" />
        </Profile>
      </Link>
    </Container>
  );
}
