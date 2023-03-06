import {FiMail, FiLock} from 'react-icons/fi'
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/buttonText';

import { Container, Form, Background} from './style';

export function Sigin(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

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

                <Button title="Entrar"/>

                <ButtonText to= "/register" title="Criar a conta" isActive/>

            </Form>
            <Background/>
        </Container>
    );
}