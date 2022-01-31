import Lottie from 'react-lottie';
import signin from '@assets/images/MediaPlayer.json';
import styled from '@emotion/styled';
import facepaint from 'facepaint';
import { LOTTIE_OPTIONS } from '@constants/lottie';

const options = {
  ...LOTTIE_OPTIONS,
  animationData: signin,
};

const breakPoints = [1000, 1200];

const mediaQuery = facepaint(
  breakPoints.map((breakpoint) => `@media (min-width: ${breakpoint}px)`)
);

const StyledContainerImage = styled.div(
  mediaQuery({
    position: 'relative',
    display: ['none', 'block'],
    margin: 'auto',
  })
);

export const ContainerImage = () => {
  return (
    <StyledContainerImage>
      <Lottie options={options} height={380} width={500} />
    </StyledContainerImage>
  );
};
