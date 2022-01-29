import Lottie from 'react-lottie';
import signin from '@assets/images/MediaPlayer.json';
import { LOTTIE_OPTIONS } from '@constants/lottie';

export const ContainerImage = () => {
  const options = {
    ...LOTTIE_OPTIONS,
    animationData: signin,
  };

  return <Lottie options={options} width={500} />;
};
