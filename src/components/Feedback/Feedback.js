import { Wrapper, Title } from './Feedback.styled';

const Feedback = ({ title, image: Image, children }) => {
  return (
    <Wrapper>
      {Image && <Image width={179} height={22} />}
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
};

export default Feedback;
