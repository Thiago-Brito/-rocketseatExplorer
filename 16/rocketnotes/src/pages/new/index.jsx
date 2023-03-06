import {Header} from '../../components/header'
import {ButtonText} from '../../components/buttonText'
import {Input} from '../../components/input'
import { Section } from "../../components/section";
import { NoteItem } from "../../components/noteitem";
import { Button } from "../../components/button";



import { Container, Form } from './style'

export function New(){
    return(
        <Container>
            <Header/>
            <main>
            <Form>
                <header>
                    <h1>Criar nota</h1>
                    <ButtonText to="/" title="voltar"/>

                    

                </header>
                <Input placeholder ="Titulo"/>
                <textarea placeholder='Observações'></textarea>

                <Section title="Links Uteis">
                    <NoteItem value="https://www.rocketseat.com.br/"/>
                    <NoteItem isNew placeholder= "Novo link"/>
                    
                </Section>

                <Section title="Marcadores">
                    <div className='tags'>
                        <NoteItem value="react"/>
                        <NoteItem isNew placeholder= "Nova tag"/>
                    </div>
                    
                    
                </Section>
                <Button title="Salvar"/>
            </Form>
            </main>
            
        </Container>
    );
}