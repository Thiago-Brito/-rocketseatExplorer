import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Form, Background } from "./style";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Sigup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = useAuth();
  console.log("MEU CONTEXTO2 =>", data);

  const navigate = useNavigate();

  function handleSingUp(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      return alert("digite todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuario cadastrado com sucesso");
        navigate("/");
      })
      .catch((erro) => {
        if (erro.response) {
          alert(erro.response.data.message);
        } else {
          alter("Não foi possivel realizarCasdatro");
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSingUp} />

        <ButtonText to="/" title="Voltar para o login" cor="true" />
      </Form>
    </Container>
  );
}
