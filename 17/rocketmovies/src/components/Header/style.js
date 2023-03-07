import styled from "styled-components";


export const Container = styled.header `
    display: flex;
    padding: 40px 123px;
    gap:65px;
    align-items: center;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_800};

    h2{
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;

        color: ${({ theme }) => theme.COLORS.PINK};
    }

    a{
        color: white;
    }

`

export const Profile = styled.header `
    display: flex;
    gap: 10px;
    align-items: center;
    text-align: right;
    >img{
        height: 64px;
        width:64px;
        border-radius: 50%;
    }

    >div{
        width: 90px;
        span{
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            text-transform: capitalize;
        }

        a{
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`