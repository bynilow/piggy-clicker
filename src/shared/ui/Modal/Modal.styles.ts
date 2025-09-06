import styled from "styled-components";

const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
`;

const Content = styled.div`
    background-color: #2b2b36;
    padding: 16px;
    width: 100%;
    max-height: 50%;
    border-radius: 16px;
`;

export { Modal, Content };
