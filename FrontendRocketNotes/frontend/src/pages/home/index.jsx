import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Header } from "../../components/header";
import { ButtonText } from "../../components/buttonText";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Note } from "../../components/note";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  function handleTagSelected(tagname) {
    const alreadySelected = tagsSelected.includes(tagname);
    if (tagname == "all") {
      setTagsSelected([]);
    } else if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagname);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagname]);
    }
  }

  function handleDeatils(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      );

      setNotes(response.data);
    }
    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            cor={tagsSelected.length === 0}
          ></ButtonText>
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={tag.id}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                cor={tagsSelected.includes(tag.name)}
              ></ButtonText>
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo titulo"
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
      </Search>

      <Content>
        <Section title="Minhas Notas">
          {notes.map((note) => {
            return (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDeatils(note.id)}
              />
            );
          })}
        </Section>
      </Content>

      <NewNote>
        <Link to="/new">
          <FiPlus />
          Criar nota
        </Link>
      </NewNote>
    </Container>
  );
}
