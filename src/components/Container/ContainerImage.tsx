import Lottie from 'react-lottie';
import signin from '@assets/images/MediaPlayer.json';
import styled from '@emotion/styled';
import { LOTTIE_OPTIONS } from '@constants/lottie';
import { createMediaQueries } from '@utils/createMediaQueries';

const options = {
  ...LOTTIE_OPTIONS,
  animationData: signin,
};

const StyledContainerImage = styled.div(
  createMediaQueries(
    1000,
    1200
  )({
    position: 'relative',
    display: ['none', 'block'],
    margin: 'auto',
  })
);

export const ContainerImage = (): JSX.Element => {
  return (
    <StyledContainerImage>
      <Lottie options={options} height={380} width={500} />
    </StyledContainerImage>
  );
};
