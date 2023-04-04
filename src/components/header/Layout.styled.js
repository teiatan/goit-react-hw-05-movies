import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    font-size: 30px;
    font-weight: 900;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    flex-direction: row-reverse;

`;

export const HeaderTag = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #ff5e42;
    border-bottom: 1px solid gray;
    box-shadow: 2px 3px 5px lightgrey;
    
    
`;

export const Ul = styled.ul`
    display: flex;
    gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #1e2a06;

  &.active {
    color: #ffd567;
  }
`;

