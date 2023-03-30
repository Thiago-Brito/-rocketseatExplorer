import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";

import { useAuth } from "../../hooks/auth";

import { Container, Form, Background } from "./style";
import { useState } from "react";

export function Sigin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

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

        <Button title="Entrar" onClick={handleSignIn} />

        <ButtonText to="/register" title="Criar a conta" cor="true" />
      </Form>
      <Background />
    </Container>
  );
}
