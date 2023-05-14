import { Container, Main, Card, Tags, Rating } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/button";
import { FiPlus } from "react-icons/fi";
import star from "../../assets/star.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

export function Home() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [filtro, setFiltro] = useState("");

  function handleInputChange(sla) {
    setFiltro(sla);
  }
  function handlePreview(id) {
    navigate(`/preview/${id}`);
  }
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get("/notes");
        setMovies(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("não foi possivel criar o filme");
        }
      }
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get("/notes", {
          params: {
            title: filtro,
          },
        });
        setMovies(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("não foi possivel criar o filme");
        }
      }
    }
    fetchMovies();
  }, [filtro]);

  return (
    <Container>
      <Header handleInputChange={handleInputChange} />

      <Main>
        <div>
          <h1>Meu filmes</h1>
          <Link to="/create">
            <Button isActive icon={FiPlus} title="Adicionar filme" />
          </Link>
        </div>

        {movies &&
          movies.map((movie) => {
            return (
              <Card
                key={String(movie.id)}
                onClick={() => handlePreview(movie.id)}
              >
                <h3>{movie.title}</h3>
                <Rating>
                  {movie.rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}
                  {movie.rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}
                  {movie.rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}
                  {movie.rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}
                  {movie.rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}
                </Rating>
                <p>{movie.description}</p>
                <div>
                  {movie.tags.map((tag) => {
                    return <Tags key={String(tag.id)}>{tag.name}</Tags>;
                  })}
                </div>
              </Card>
            );
          })}
      </Main>
    </Container>
  );
}
