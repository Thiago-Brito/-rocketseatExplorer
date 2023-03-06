
import {FiMail, FiLock, FiUser,FiArrowLeft, FiCamera} from 'react-icons/fi'
import { Input } from '../../components/input';
import { Button } from '../../components/button';


import { Container,Form, Avatar } from "./style";

import { Link } from "react-router-dom";




export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>
            

            <Form>
                <Avatar>
                    <img src="https://github.com/Thiago-Brito.png" alt="Foto do usuário" />
                    
                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input type="file" id="avatar" />
                    </label>
                </Avatar>
                <Input
                placeholder = "Nome"
                type = "text"
                icon={FiUser}
                />

                <Input
                placeholder = "E-mail"
                type = "text"
                icon={FiMail}
                />
                <Input
                placeholder = "Senha Atual"
                type = "password"
                icon={FiLock}
                />

                <Input
                placeholder = "Nova Senha"
                type = "password"
                icon={FiLock}
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    );
}