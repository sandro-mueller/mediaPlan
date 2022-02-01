import { useDispatch, useSelector } from 'react-redux';
import { Select } from '@components/Form/elements';
import { CHANNEL_OPTIONS } from '@constants/channel';
import { State } from '@store/interface';
import { mediaPlanActions } from '@store/module/mediaPlan';

export const FormChannelSelection = (): JSX.Element => {
  const dispatch = useDispatch();
  const { currentOption } = useSelector((state: State) => state.mediaPlan);

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(mediaPlanActions.handleCurrentOption(value));
  };

  return (
    <>
      <Select
        value={currentOption}
        options={CHANNEL_OPTIONS}
        handleChange={onHandleChange}
      />
    </>
  );
};
