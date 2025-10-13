import styled from "styled-components";

const Achievement = styled.div<{ $rareColor: string }>`
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px;
  background-color: var(--bg-secondary);
  border-radius: 16px;
  width: 100%;
  min-height: 100px;

  &::after {
    content: '';
    position: absolute;
    top: -70px;
    left: -70px;
    background-color: ${({ $rareColor }) => $rareColor};
    width: 100px;
    height: 100px;
    rotate: -45deg;
  }
`;

const Image = styled.img`
  height: 70px;
  width: 70px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: var(--accent-color);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const ProgressBar = styled.progress`
  width: 100%;
  border-radius: 16px;

  &::-webkit-progress-value {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--accent-color);
    height: 32px;
    border-radius: 16px;
  }

  &::-webkit-progress-bar {
    position: relative;
    background-color: #0d0d12;
    height: 14px;
    border-radius: 16px;
  }
`;

const ProgressText = styled.div`
  color: var(--text-secondary);
  white-space: nowrap;
`

export { Achievement, Image, Body, Title, Progress, ProgressBar, ProgressText };
