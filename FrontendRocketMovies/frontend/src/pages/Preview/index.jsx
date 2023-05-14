import { Container, About, Tags, Nota } from "./style";
import { Header } from "../../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import star from "../../assets/star.png";
import { TfiTimer } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import moment from "moment";

import avatarPlace from "../../assets/avatarPlaceHolder.svg";

export function Preview() {
  const [movie, setMovie] = useState([]);
  const [dono, setDono] = useState([]);
  const parms = useParams();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get(`/notes/${parms.id}`);
        const user = await api.get(`/users/${response.data.notes[0].user_id}`);
        setDono(user.data);
        setMovie(response.data);
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
  return (
    <Container>
      <Header />

      {movie && movie.notes && movie.tags && (
        <main>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>

          <Nota>
            <h1>{movie.notes[0].title}</h1>
            <div>
              {movie.notes[0].rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}
              {movie.notes[0].rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}
              {movie.notes[0].rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}
              {movie.notes[0].rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}
              {movie.notes[0].rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}
            </div>
          </Nota>

          <About>
            <img
              src={
                dono.avatar
                  ? `${api.defaults.baseURL}/files/${dono.avatar}`
                  : avatarPlace
              }
              alt="Foto do usario"
            />
            <span>Por {dono.name}</span>
            <TfiTimer />
            <span>
              {moment(movie.notes[0].created_at).format("DD/MM/YY [às] HH:mm")}
            </span>
          </About>

          <div>
            {movie.tags.map((tag) => {
              return <Tags key={String(tag.id)}>{tag.name}</Tags>;
            })}
          </div>

          <p>{movie.notes[0].description}</p>
        </main>
      )}
    </Container>
  );
}
