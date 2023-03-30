import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useState } from "react";

import avatarPlaceHolder from "../../assets/avatarPlaceHolder.svg";

import { Container, Form, Avatar } from "./style";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Link } from "react-router-dom";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const update = {
      name,
      email,
      password: passwordNew,
      oldpassword: passwordOld,
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
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />

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
          onChange={(e) => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
