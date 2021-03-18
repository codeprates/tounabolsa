import styled from 'styled-components'

import Styles from '../Styles';

export default function Footer() {
  return (
    <Styles.Footer>
    <p>
      &copy; 2021 Todos os direitos reservados.
    </p>
    <p>
      <a href="/termos_de_uso">
        <span>Termos de uso</span>
      </a>
      {' '}
      <a href="/politica_de_privacidade">
        <span>Política de privacidade de dados</span>
      </a>
    </p>
    </Styles.Footer>
  );
}
