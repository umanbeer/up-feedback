import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: inline-block;
  width: 286px;
  max-width: 100%;
  min-width: 250px;

  font-size: 14px;
  text-align: center;

  background-color: #ffffff;
  border: 1px solid #382e2d;

  user-select: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 344px;
    font-size: 16px;
  }
`;

export const SelectedText = styled.div`
  padding: 12px 20px;
  text-align: left;

  ::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 18px;
    border: 7px solid transparent;
    border-color: #c6c6c6 transparent transparent transparent;
  }

  &.active::after {
    top: 8px;
    border-color: transparent transparent #c6c6c6 transparent;
  }
`;

export const OptionsList = styled.ul`
  position: absolute;
  left: -1px;
  right: -1px;
  z-index: 1;

  margin: 0;
  padding: 0;
  text-align: left;

  background: white;
  border-left: 1px solid #382e2d;
  border-right: 1px solid #382e2d;
  border-bottom: 1px solid #382e2d;

  list-style: none;
`;

export const OptionItem = styled.li`
  padding: 8px 16px;
  min-height: 53px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #ffffff;
  border-top: 1px solid #c6c6c6;

  cursor: pointer;

  transition: 200ms ease;
  transition-property: color, background-color;

  :hover {
    color: #ffffff;
    background-color: #382e2d;
  }

  > * {
    pointer-events: none;
  }
`;
