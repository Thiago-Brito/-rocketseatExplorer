import { Container,Form,BackGround} from './style';

import {FiUser,FiMail,FiLock,FiArrowLeft} from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/button';
import { Link } from "react-router-dom";

export function SignUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input
                placeholder= "Nome"
                type = "text"
                icon={FiUser}
                />
                 <Input
                placeholder= "E-mail"
                type = "email"
                icon={FiMail}
                />
                 <Input
                placeholder= "Senha"
                type = "password"
                icon={FiLock}
                />

                <Button isActive title="Cadastrar"/>
                <div>
                    <Link to ="/">
                        <FiArrowLeft/>
                        Voltar para o login
                    </Link>
                </div>
                
                
            </Form>

            <BackGround/>
        </Container>
    );
}