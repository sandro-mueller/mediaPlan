import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { State } from '@store/interface';
import { FormChannel } from '@components/Form/FormChannel';
import { FormGeneral } from '@components/Form/FormGeneral';
import { createMediaQueries } from '@utils/createMediaQueries';

const StyledContainerForm = styled.div(
  createMediaQueries(1060, 1200)({ width: ['100%', '50%'] })
);

export const ContainerForm = (): JSX.Element => {
  const { page } = useSelector((state: State) => state.mediaPlan);

  return (
    <StyledContainerForm>
      {!page ? <FormGeneral /> : <FormChannel />}
    </StyledContainerForm>
  );
};
