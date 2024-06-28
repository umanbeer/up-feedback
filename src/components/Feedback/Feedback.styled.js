import styled from 'styled-components';

export const Wrapper = styled.div`
  > svg {
    @media screen and (min-width: 768px) {
      width: 333px;
      height: 41px;
    }
  }

  > p {
    max-width: 660px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
`;
