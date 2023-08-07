import styled from '@emotion/styled';

import npLogo from './assets/np.png';

const Container = styled.div`
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
`;
const StyledImage = styled('img')({
  width: '50%',
  maxWidth: '400px',
});

const Image = () => {
  return <StyledImage src={npLogo} alt="Нова Пошта" />;
};

export { Container, Image };
