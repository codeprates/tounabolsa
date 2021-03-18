import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  /* border: 3px solid red; */
`;

Styles.Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 95vh;
  width: 95vw;
  margin-top: 2vh;
  margin-left: 2vw;
  font-size: 1.2rem;
  /* border: 3px solid orange; */
`;

Styles.Nav = styled.div`
  /* height: 95vh; */
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  /* border: 3px solid magenta; */
`;

Styles.Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 10px;
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;  
  }
  /* margin: 0 10px; */
  /* border: 3px solid green; */
`;

Styles.Link = styled.a`
  /* font-size: 0.9rem;
  margin-bottom: 3vh; */
  div > a {
    padding: 0px 15px 0px 15px;
    border-radius: 4px; 
    margin: 10px;
    color: #444;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      /* color: white; */
      color: ${({ theme }) => theme.colors.primary};
      border-radius: 4px; 
      /* background-color: ${({ theme }) => theme.colors.mainBg}; */
      /* opacity: .75; */
    }
  }
`;

Styles.MainArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 3px solid tomato; */
`;

Styles.Dashboard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap;
  height: 95vh;
  width: 95vw; */
  #app {
    display: flex;
    /* flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100vw; */
    /* height: 90vh; */
    /* padding: 40px; */
    /* margin: 0 auto;  */
    /* color: rgba(0, 0, 0, 0.75); */
    /* font-size: 1.2rem; */
    /* background-color: #654; */
    /* border: 3px solid #ccc; */
    /* 860 */
  }
  /* .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 260px;
    background-color: #ccc;
    margin: 15px;
    /* border: 1px solid gray; */
    /* box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  } */
`;

Styles.Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  input {
    margin-bottom: 3vh;
    font-size: 1.0rem;
  }
  button {
    margin-bottom: 3vh;
    font-size: 1.0rem;
  }
`;

Styles.Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* margin-top: -50px; */
  /* position: absolute;
  bottom: 0; */
  /* height: 5vh; */
  width: 75vw;
  padding: 0 25px;
  border-radius: 12px;
  /* color: ${({ theme }) => theme.colors.primary}; */
  background-color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.75;
  @media screen and (max-width: 500px) {
    padding: 0 15px;    
  }
  p, a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    font-size: 0.9rem;
    line-height: 1;
    /* border: 3px solid red; */
    @media screen and (max-width: 500px) {
      font-size: 0.7rem;
    }
  }
`;

export default Styles;