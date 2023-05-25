import styled, {css} from 'styled-components';


 export const ButtonContainer = styled.button`
    padding: 24px;
    border: 1px solid #000000;
    background-color: #DCDCDC;
    color: #000000;
    font-size: 20px;
    font-weight: 500;
    min-width:60px;
    height: 60px;
    flex: 1;
    border-radius:30px;
    justify-content: space-between;
    &:hover {
        opacity: 0.8;
        background-color: #FFFFFF;
        color: #000000;
    }


    ${({variant})=> variant !== "primary" && css`
    min-width:60px;
    height: 60px;
    background:#228B22;
    color:#fff;

    `      
    }
 `