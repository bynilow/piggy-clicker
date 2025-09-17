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
    z-index: 2;
    top: calc(100% + 16px);
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-height: 250px;
    padding: 16px;
    font-size: 18px;
    color: var(--text-secondary);
    background-color: var(--bg-secondary);
    border-radius: 16px;
    border: 1px solid var(--accent-color);
    box-shadow: 0px 0px 10px 2px rgba(169, 223, 216, 0.3);
    overflow: auto;
`;

export { Dropdown, UserDropdownItem, UserAvatar };
