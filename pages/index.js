import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Styles from '../src/components/Styles';
import Footer from '../src/components/Footer';


export default function Home() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Styles.Background>
      <Head>
        <title>Tou na Bolsa</title>
      </Head>

      <nav>
        <Styles.Title>Tou na bolsa</Styles.Title>
      </nav>
      
      <Styles.MainArea>
        <form onSubmit={function (EventData) {
          EventData.preventDefault();
          router.push(`/dashboard?user=${email}`);
        }}
        >
          <Styles.Form> 
            <input
              type="email"
              name="userEmail"
              onChange={(EventData) => setEmail(EventData.target.value)}
              placeholder="Digite aqui o seu e-mail"
              value={email}
            />
            <input
              type="password"
              name="userPass"
              onChange={(EventData) => setPassword(EventData.target.value)}
              placeholder="Digite sua senha"
              value={password}
            />
            <button type="submit" disabled={email.length === 0 || password.length === 0}>
              {`LogIn`}
            </button>
          </Styles.Form>
        </form>

        <Styles.Link>
          <a href="/account_creation">Criar uma conta</a>
        </Styles.Link>
      </Styles.MainArea>
   
      <Footer />
    </Styles.Background>
  )
}
