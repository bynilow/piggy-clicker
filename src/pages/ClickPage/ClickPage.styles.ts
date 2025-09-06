import styled from "styled-components";

const Page = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 100%;
`;

const MainButton = styled.img`
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 80%;
    aspect-ratio: 1/1;
    border-radius: 50%;
`;

const LevelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
    width: 100%;
`;

const LevelName = styled.div`

`;

const LevelCount = styled.div`
    
`

const LevelLine = styled.div`
    width: 100%;
    height: 16px;
    background-color: #a9dfd8;
    border-radius: 16px;
`

const LevelHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Click = styled.div`
    position: absolute;
    z-index: 2;
    font-size: 28px;
    font-weight: bold;
`

export { Click, Page, MainButton, LevelWrapper, LevelName, LevelCount, LevelLine, LevelHead };
