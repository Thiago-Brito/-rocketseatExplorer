import { Container } from "./style";
import {Header} from "../../components/Header"
import {FiArrowLeft} from 'react-icons/fi'
import {Input} from "../../components/Input"
import {AiOutlineClose} from 'react-icons/ai'
import { FiPlus } from "react-icons/fi";
import {Button} from "../../components/Button"
import { Link } from "react-router-dom";


export function Create(){
    return(
        <Container>
            <Header/>
            <main>
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar
                </Link>
                <h1>Novo Filme</h1>
                <div>
                    <Input
                    placeholder = "Título"/>
                    <Input
                    placeholder = "Sua nota (de 0 a 5)"/>

                </div>
                <textarea placeholder="Observações"></textarea>


                <p>Marcadores</p>

                <div>
                    <div>
                        React
                        <AiOutlineClose/>
                    </div>
                    <div>
                        Novo Marcador
                        <FiPlus/>
                    </div>
                </div>
                
                <div>
                    <Button title="Excluir filme"/>
                    <Button isActive title="Salvar alterações"/>
                </div>
                
            </main>
            
        </Container>
    );
}