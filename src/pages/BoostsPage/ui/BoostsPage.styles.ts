import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 100%;
    overflow: scroll;
`;

const BoostsList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    width: 100%;
`;

const ActionsGroup = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1;
    gap: 14px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export { ActionsGroup, Page, BoostsList, Column };