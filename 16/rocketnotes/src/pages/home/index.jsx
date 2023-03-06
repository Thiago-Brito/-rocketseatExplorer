import {FiPlus} from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote} from './style';
import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';
import { Input } from '../../components/input';
import { Section } from '../../components/section';
import { Note} from '../../components/note';

import { Link } from "react-router-dom";

export function Home() {
    return (
    <Container>
    <Brand>
    <h1>Rocketnotes</h1>
    </Brand>
    
    <Header/>
    
    <Menu>
        <li><ButtonText  title="Todos" isActive></ButtonText></li>
        <li><ButtonText  title="React"></ButtonText></li>
        <li><ButtonText  title="Nodejs"></ButtonText></li>

    </Menu>

    <Search>
        <Input placeholder = "Pesquisar pelo titulo"></Input>
    </Search>

    
    <Content>
        <Link to="/details/10">
        <Section title= "Minhas Notas">
            <Note data={{
                title :'React',
                tags:[
                    {id:'1', name:'react'},
                    {id:'2', name:'rocketseat'}
                ]
            }}
            />
        </Section>
        </Link>
    </Content>
    
    <NewNote>
        <Link to="/new">
            <FiPlus/>
            Criar nota
        </Link>
    </NewNote>
    </Container>
    );
}