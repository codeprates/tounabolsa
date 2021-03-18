import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Styles from '../src/components/Styles';
import Footer from '../src/components/Footer';

export default function AccountCreation() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConf, setPasswordConf] = React.useState('');


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
          router.push(`/`);
        }}
        >
          <Styles.Form> 
            <input
              type="text"
              name="userName"
              // pattern="[A-z]"
              onChange={(EventData) => setName(EventData.target.value)}
              placeholder="Digite o seu nome completo"
              value={name}
            />
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
              placeholder="Crie uma senha"
              value={password}
            />
            <input
              type="password"
              name="userPassConf"
              onChange={(EventData) => setPasswordConf(EventData.target.value)}
              placeholder="Confirme a sua senha"
              value={passwordConf}
            />
            <button 
              type="submit" 
              disabled={
                name.length === 0 || 
                email.length === 0 || 
                password.length === 0 ||
                password !== passwordConf
              }
            >
              {`Criar conta`}
            </button>
          </Styles.Form>
        </form>

        <Styles.Link>
          <a href="/">Voltar</a>
        </Styles.Link>
      </Styles.MainArea>
   
      <Footer />
    </Styles.Background>
  )
}
