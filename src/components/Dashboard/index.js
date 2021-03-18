import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Csstag = styled.div`
  /* html {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
  } */
  html, body {
    height: 100vh;
    margin: 0;
    font-size: 1.2rem;
  }
  #app {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    /* width: 100vw; */
    height: 90vh;
    padding: 40px;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.75);
    font-size: 1.2rem;
    /* background-color: #654;
    border: 3px solid #ccc; */
    /* 860 */
  }
  #header {
    display: flex;
    /* width: 100%; */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    margin: 0 auto;
    border: 1px solid lightgray;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 260px;
    background-color: #ccc;
    margin: 15px;
    /* border: 1px solid gray; */
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
    @media screen and (max-width: 500px) {
      width: 260px;
      height: 160px;
      img {
        object-fit: scale-down;
        max-width: 100%;
      }
    }
    p {
      @media screen and (max-width: 500px) {
        font-size: 1rem;
      }
    }
  }
  h1 {
    color: #444;
    margin: 15px;
    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 344px) {
      font-size: 1.0rem;
    }
  }
  div > a {
    padding: 0px 15px 0px 15px;
    border-radius: 4px; 
    margin: 10px;
    color: #444;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      color: white;
      border-radius: 4px; 
      /* background-color: ${({ theme }) => theme.colors.mainBg}; */
      /* opacity: .75; */
    }
  }
`;

export default function Dashboard() {
  return (
    <Csstag>
      <div id="app">
        <div className="box">
          <img src="https://source.unsplash.com/fiXLQXAhCfk/360x200" alt="Gráfico 1" />
          <p>Gráfico 1</p>
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/N__BnvQ_w18/360x200" alt="Gráfico 2" />
          <p>Gráfico 2</p>
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/DfjJMVhwH_8/360x200" alt="Gráfico 3" />
          <p>Gráfico 3</p>
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/EMPZ7yRZoGw/360x200" alt="Gráfico 4" />
          <p>Gráfico 4</p>
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/obJBg2lZjMg/360x200" alt="Gráfico 5" />
          <p>Gráfico 5</p>
        </div>
        <div className="box">
          <img src="https://source.unsplash.com/MFms-wkv3Ow/360x200" alt="Gráfico 6" />
          <p>Gráfico 6</p>
        </div>
      </div>
    </Csstag>
  );
}
