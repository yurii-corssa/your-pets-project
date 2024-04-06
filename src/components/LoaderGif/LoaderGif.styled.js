import styled from 'styled-components';

export const ImgLoader = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoaderContainer = styled.div`
  position: fixed;
  background: transparent;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 999;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
`;
