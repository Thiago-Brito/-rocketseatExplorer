import { Container} from './style';
import { Tag } from '../../components/tag';
export function Note({data , ...rest}){
    return(
        <Container>
            <h1>{data.title}</h1>

            <footer>
                {
                    data.tags.map(tag =>
                        <Tag key ={tag.name}  title = {tag.name}/>
                    )
                }
            </footer>
        </Container>
    );
}