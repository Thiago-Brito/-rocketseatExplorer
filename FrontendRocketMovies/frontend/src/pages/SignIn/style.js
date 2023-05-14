import styled from 'styled-components'
import backgroundimg from '../../assets/background-img.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
   padding: 0 150px;
   text-align: justify;

    h1{
        margin-top: 230px;
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 63px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    p{
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    h2{
        margin-top: 50px;
        margin-bottom: 50px;
    }

    >button{
        margin-top: 25px;
    }

    >div:last-child{
        text-align: center;
        margin-top: 42px;
        a{
            color: ${({ theme }) => theme.COLORS.PINK};
        }
        
    }
`

export const BackGround = styled.div`
    flex: 1;
    background: url(${backgroundimg}) no-repeat center center;
    background-size: cover;
`