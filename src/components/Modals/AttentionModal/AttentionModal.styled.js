import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding: 60px 40px;
    gap: 40px;
    max-width: 608px;
  }
`;
export const BtnContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  text-align: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    flex-direction: row;
    gap: 20px;
  }
`;
export const Title = styled.h2`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 32.78px;
  letter-spacing: 0.3px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 49.18px;
  }
`;
export const Text = styled.p`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;
const sharedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 38px;
  padding: 8px 28px;
  background-color: transparent;
  cursor: pointer;
  color: var(--yellow);
  font-family: Manrope, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.3px;
`;
export const Icon = styled.svg`
    width: 24px;
    height: 24px;
    fill: var(--yellow);
    transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
`
export const ButtonOrange = styled.button`
  ${sharedStyles};
  width: 248px;
  border: 2px solid var(--yellow);
  border-radius: 40px;
  transition: background-image 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-image: linear-gradient(to left, var(--yellow), var(--yellow));
    color: var(--white);
  }

  &:hover ${Icon}, &:focus ${Icon} {
    fill: var(--white);
  }
`;