import styled from 'styled-components';
import layoutBg from '../img/bg-corn.jpg';
import layoutBg2x from '../img/bg-corn@2x.jpg';
import layoutBgMobile from '../img/bg-corn-mobile.jpg';
import layoutBgMobile2x from '../img/bg-corn-mobile@2x.jpg';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 74px 37px;

  background-color: #382e2d;
  background-image: url(${layoutBgMobile});
  background-size: cover;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    background-attachment: fixed;
  }

  /* Перевизначаємо шлях до 2x зображення,
    якщо щільність екрану мінімум 2 */
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${layoutBgMobile2x});
  }

  @media screen and (min-width: 376px) {
    background-image: url(${layoutBg});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${layoutBg2x});
    }
  }
`;

export const Container = styled.div`
  max-width: 375px;
  padding: 30px 20px;
  background-color: #ffc72c;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 900px;
    padding: 58px 30px;
    font-size: 21.5px;
  }

  @media screen and (min-width: 1024px) {
    padding: 58px 35px;
    width: 900px;
    font-size: 22px;
  }
`;
