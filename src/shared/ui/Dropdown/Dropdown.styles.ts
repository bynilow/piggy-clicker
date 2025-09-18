import styled from "styled-components";

const UserDropdownItem = styled.button`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--text-primary);
    cursor: pointer;
    transform-origin: left;
`;

const UserAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--accent-color);
`;

const Dropdown = styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    margin: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: calc(100% - 32px);
    max-height: 250px;
    height: fit-content;
    min-height: 50px;
    padding: 16px;
    font-size: 18px;
    color: var(--text-secondary);
    background-color: var(--bg-secondary);
    border-radius: 16px;
    border: 1px solid var(--text-secondary);
    overflow: auto;
    box-shadow: 0px 12px 25px 25px rgba(0, 0, 0, 0.7);
`;

export { Dropdown, UserDropdownItem, UserAvatar };
