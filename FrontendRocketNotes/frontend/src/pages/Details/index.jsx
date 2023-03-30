import { Container, Links, Content } from "./style";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";
import { ButtonText } from "../../components/buttonText";

import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export function Details() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const parms = useParams();

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${parms.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${parms.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />
            <h1>{data.title}</h1>
            <p>{data.descripition}</p>

            {data.links && (
              <Section title="links uteis">
                {data.links.map((link) => {
                  return (
                    <Links>
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    </Links>
                  );
                })}
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => {
                  return <Tag key={String(tag.id)} title={tag.name} />;
                })}
              </Section>
            )}

            <Link to="/">
              <Button title="voltar" />
            </Link>
          </Content>
        </main>
      )}
    </Container>
  );
}
