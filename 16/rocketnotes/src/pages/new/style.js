import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    >main{
        grid-area: content;
        overflow-y:auto;
    }
    .tags{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`


export const Form = styled.form`
    width: 550px;
    margin: 38px auto;

    >header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 36px;
    }
    >textarea{
        width: 100%;
        height: 150px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        color: ${({ theme }) => theme. COLORS.GRAY_100};
        
        border: none;
        resize: none;

        margin-bottom: 8px;
        border-radius: 10px;
        padding: 10px;
    }
`