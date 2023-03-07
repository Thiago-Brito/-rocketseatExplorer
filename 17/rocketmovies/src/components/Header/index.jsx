import { Container,Profile} from "./style";
import { Input } from "../input";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <Container>
            <h2>RocketMovies</h2>

            <Input
            placeholder = "Pesquisar pelo título"
            />

            <Link to="/profile">
                <Profile>
                    <div>
                        <span>Thiago brito</span>
                        <br />
                        <a href="">sair</a>
                    </div>
                    
                    <img 
                    src="https://github.com/Thiago-Brito.png" 
                    alt="Foto do usario" />

                </Profile>
            </Link>
        </Container>
    );
}