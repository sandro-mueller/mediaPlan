import styled from '@emotion/styled';
import facepaint from 'facepaint';
import { useSelector } from 'react-redux';
import { State } from '@store/interface';
import { FormChannel } from '@components/Form/FormChannel/FormChannel';
import { FormGeneral } from '@components/Form/FormGeneral/FormGeneral';

const breakPoints = [1000, 1200];
const mediaQuery = facepaint(
  breakPoints.map((breakpoint) => `@media (min-width: ${breakpoint}px)`)
);

const StyledContainerForm = styled.div(mediaQuery({ width: ['100%', '50%'] }));

export const ContainerForm = (): JSX.Element => {
  const { page } = useSelector((state: State) => state.mediaPlan);

  return (
    <StyledContainerForm>
      {!page ? <FormGeneral /> : <FormChannel />}
    </StyledContainerForm>
  );
};
