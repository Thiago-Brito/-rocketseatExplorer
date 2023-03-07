import { Container,Form,BackGround} from './style';

import {FiUser,FiMail,FiLock} from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/button';

import { Link } from "react-router-dom";

export function Signin(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>

            
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

                <Button isActive title="Entrar"/>
                <div>
                    <Link to="/register">
                        Criar conta
                    </Link>
                </div>
                
                
            </Form>

            <BackGround/>
        </Container>
    );
}