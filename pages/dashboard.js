import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Styles from '../src/components/Styles';
import Footer from '../src/components/Footer';
import Dashboard from '../src/components/Dashboard';

const Csstag = styled.div`
  #app {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;


export default function LocalDashboard() {
  const router = useRouter();

  return (
    // <>
    <Styles.Background>
      <Styles.MainArea>
        <Head>
          <title>Tou na Bolsa</title>
        </Head>

        <Styles.Nav>
          <div>
            <Styles.Title>Tou na bolsa</Styles.Title>
          </div>
          <Styles.Link>
            <a href="/">Voltar</a>
          </Styles.Link>
        </Styles.Nav>

        <Dashboard />
      </Styles.MainArea>
  
      <Footer />
    </Styles.Background>
    // </>
  );
}
