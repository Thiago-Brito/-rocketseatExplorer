import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./style";
import { Link } from "react-router-dom";


export function Header(){
    return(
        <Container>
        <Link to="/profile">
            <Profile>
                
                    <img 
                    src="https://github.com/Thiago-Brito.png" 
                    alt="Foto do usario" />

                    <div>
                        <span>Bem vindo</span>
                        <strong>Thiago brito</strong>
                    </div>
                
            </Profile>
        </Link>

        <Logout>
            <RiShutDownLine/>
        </Logout>
        </Container>
    );
}