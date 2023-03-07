import styled from "styled-components";

export const Container = styled.div`
    >main{
        padding: 40px 120px;
        overflow-y: auto    ;
        height: 100vh;


        a{
            color: ${({ theme }) => theme.COLORS.PINK};
            display: flex;
            align-items: center;
            margin-bottom: 25px;
        }

        >div{
            margin-top: 40px;
            display: flex;
            gap: 40px;
        }

         >textarea{
            margin-top: 40px;
            width: 100%;
            height: 275px;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            color:  ${({ theme }) => theme.COLORS.WHITE};
            
            border: none;
            resize: none;

            margin-bottom: 8px;
            border-radius: 10px;
            padding: 10px;
        }

        p{
            margin-top: 40px;
            font-family: 'Roboto Slab';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 26px;

            /* Gray */

            color: #999591
        }

        >div:nth-child(6){
            padding: 16px;
            background-color: black;
            margin-top: 40px;
            display: flex;
            gap: 40px;
            border-radius: 8px;

            >div:first-child{
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
                padding: 20px;
                display: flex;
                align-items: center;
                border-radius: 10px;
                gap: 10px;
                svg{
                    color: ${({ theme }) => theme.COLORS.PINK};;
                }
            }

            >div:last-child{
                border: 2px dashed #948F99;
                padding: 20px;
                display: flex;
                align-items: center;
                border-radius: 10px;
                gap: 10px;
                svg{
                    color: ${({ theme }) => theme.COLORS.PINK};;
                }
            }
        }
    }
`