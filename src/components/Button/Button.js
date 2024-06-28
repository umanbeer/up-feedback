import { Btn } from './Button.styled';

const Button = ({ type = 'button', onClick, children }) => {
  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
