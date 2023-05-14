import { Container, Form, BackGround } from "./style";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSingUp(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuario Cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        alert("Erro na hora de cadastrar tente de novo mais tarde");
      });
  }

  return (
    <Container>
      <Form onSubmit={handleSingUp}>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button isActive title="Cadastrar" type="submit" />
        <div>
          <Link to="/">
            <FiArrowLeft />
            Voltar para o login
          </Link>
        </div>
      </Form>

      <BackGround />
    </Container>
  );
}