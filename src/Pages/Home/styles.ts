import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(70deg, rgb(134, 132, 132) 5%, #0D0D0D);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 350px;
    max-width: 90%;
  }

  h1 {
    margin-top: 20px;
    color: white;
    font-size: 60px;

    @media (max-width: 460px) {
      font-size: 40px;
    }
  }

  h2 {
    margin-top: 10px;
    color: white;
    font-size: 25px;
    text-align: center;
    line-height: normal;

    @media (max-width: 460px) {
      font-size: 18px;
    }
  }
`;