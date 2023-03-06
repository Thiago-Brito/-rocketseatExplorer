import {FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/buttonText';

import { Container, Form, Background} from './style';

export function Sigup(){
    return(
        <Container>
             <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

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
                placeholder = "Senha"
                type = "password"
                icon={FiLock}
                />

                <Button title="Cadastrar"/>

                <ButtonText to="/" title="Voltar para o login" isActive/>

            </Form>
           
        </Container>
    );
}