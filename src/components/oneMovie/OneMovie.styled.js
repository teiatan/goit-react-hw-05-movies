import styled from '@emotion/styled';

export const ImgTag = styled.img`
    width: 100%;
    height: auto;
    border-radius: 20px;
    @media screen and (min-width: 768px) {
    width: 320px;
}
`;

export const Div = styled.div`
@media screen and (min-width: 768px) {
    display: flex;
    //justify-content:space-between;
    gap: 10px;
}

    
`;

export const InfoContainer = styled.div`
    width: 100%;
    font-size: 20px;
    color: #1e2a06;
    text-align: center;
    @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
}
`;

