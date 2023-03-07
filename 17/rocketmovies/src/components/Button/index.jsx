import { Container } from "./style";


export function Button({icon: Icon,title, isActive= false}){
    return(
        <Container
        isActive= {isActive}>
            {Icon && <Icon />}
            
            {title}
        </Container>
    );
}