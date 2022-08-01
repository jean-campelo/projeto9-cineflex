import styled from "styled-components";

export default function Footer({ optionUser }) {
  return (
    <InfoFooter>
      <Poster>
        <img
          src={optionUser.posterURL}
          alt="poster filme escolhido pelo usuário"
        />
      </Poster>
     
      <Details>
        <h1>{optionUser.title}</h1>
        <h2>{optionUser.weekday} - {optionUser.time}</h2>
      </Details>
    </InfoFooter>
  );
}

const InfoFooter = styled.footer`
  height: 100px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--color-header);
  display: flex;
  align-items: center;

  h1,
  h2 {
    font-family: var(--font-primary);
    font-size: 26px;
    color: var(--color-font);
    margin-bottom: 4px;
  }
`;

const Poster = styled.div`
  width: 60px;
  height: 80px;
  background-color: var(--color-background-app);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px 14px;
  box-shadow: var(--box-shadow-poster);
  border-radius: 4px;

  img {
    width: 46px;
  }
`;

const Details = styled.div``;
