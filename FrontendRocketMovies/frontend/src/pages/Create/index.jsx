import { Container } from "./style";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";

import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { AiOutlineClose } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { Button } from "../../components/button";
import { useState } from "react";

import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Create() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState("");
  function handleAddTag() {
    if (newTag != "") {
      if (!tags.some((tag) => tag.toLowerCase() === newTag.toLowerCase())) {
        setTags((prevState) => [...prevState, newTag]);
        setNewTag("");
      }
    }
  }
  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }
  async function handleNewMovie() {
    try {
      if (
        title == "" ||
        rating == null ||
        tags.length == 0 ||
        description == ""
      ) {
        alert("Preencha todos campos");
        return;
      }
      if (rating > 5 || rating < 0) {
        alert("Avalie de 0 a 5");
        return;
      }
      await api.post("/notes", {
        title,
        description,
        rating,
        tags,
      });
      alert("Filme criado");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("não foi possivel criar o filme");
      }
    }
  }
  return (
    <Container>
      <Header />
      <main>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
        <h1>Novo Filme</h1>
        <div>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            type="number"
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Observações"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <p>Marcadores</p>

        <div>
          {tags.map((tag, index) => {
            return (
              <Tag
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            );
          })}
          <Tag
            isNew
            placeholder="Nova Palavra Chave"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onClick={handleAddTag}
          />
        </div>

        <div>
          <Button isActive title="Salvar alterações" onClick={handleNewMovie} />
        </div>
      </main>
    </Container>
  );
}
