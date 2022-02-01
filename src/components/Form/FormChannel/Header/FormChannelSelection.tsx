import { CHANNEL_OPTIONS } from '@constants/channel';
import { Select } from '@components/Form/elements/Select';
import { mediaPlanActions } from '@store/module/mediaPlan';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store/interface';

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
