import { Header } from "../../components/header";
import { ButtonText } from "../../components/buttonText";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { NoteItem } from "../../components/noteitem";
import { Button } from "../../components/button";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form } from "./style";

export function New() {
  const navigate = useNavigate();

  const [links, setLinks] = useState([]);
  const [newlink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newlink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }
  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (title == "") {
      return alert("Dite um titulo para a nota");
    }

    if (newTag || newlink) {
      return alert(
        "Você deixou um tag e/ou um link no campo para adicionar, adicione ela ou deixe o campo vazio"
      );
    }
    await api.post("/notes", {
      title,
      descripition: description,
      tags,
      links,
    });

    alert("Nota criada com sucesso");
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText to="/" title="voltar" />
          </header>
          <Input
            placeholder="Titulo"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <Section title="Links Uteis">
            {links.map((link, index) => {
              return (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              );
            })}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newlink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => {
                return (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                );
              })}

              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
