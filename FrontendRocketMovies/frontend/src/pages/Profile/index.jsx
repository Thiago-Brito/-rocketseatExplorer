import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi";
import { Container, Avatar, Form } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { useState } from "react";
import { api } from "../../services/api";
import avatarPlace from "../../assets/avatarPlaceHolder.svg";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, SetOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlace;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdatee() {
    const update = {
      name,
      email,
      oldPassword,
      newPassword,
    };

    const userUpdated = Object.assign(user, update);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
          onChange={(e) => SetOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button type="button" onClick={handleUpdatee} isActive title="Salvar" />
      </Form>
    </Container>
  );
}
