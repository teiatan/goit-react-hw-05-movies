import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
    color: black;

    &.active {
        color: rgb(20, 150, 144);
        font-weight: 700;
    }
`;

export const Ul = styled.ul`
   display: flex; 
   justify-content: space-around;
   gap: 30px;
`;

export const Li = styled.li`
   
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-width: 300px;
    margin: 20px auto;
    border: 10px solid transparent;
    border-image: 10 repeating-linear-gradient(45deg, #A7CECC, #A7CECC 10px, transparent 10px, transparent 20px, #F8463F 20px, #F8463F 30px,transparent 30px, transparent 40px);
`;