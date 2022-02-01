import { useDispatch, useSelector } from 'react-redux';
import { Select } from '@components/Form/elements';
import { CHANNEL_OPTIONS } from '@constants/channel';
import { State } from '@store/interface';
import { mediaPlanActions } from '@store/module/mediaPlan';
import { Channels } from '@type/index';
import { useCallback, useEffect, useMemo } from 'react';

export const FormChannelSelection = (): JSX.Element => {
  const dispatch = useDispatch();
  const { currentOption, channelOptions } = useSelector(
    (state: State) => state.mediaPlan
  );

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(mediaPlanActions.handleCurrentOption(value));
  };

  // MAKE SURE FUNCTION IS NOT RUN AGAIN
  const filteredOption = useCallback(() => {
    const selectedOptions = channelOptions.map((option) => option.text);

    return CHANNEL_OPTIONS.filter(function (option: Channels) {
      return selectedOptions.indexOf(option) < 0;
    });
  }, [channelOptions]);

  // MAKE SURE COMPONENT DOES NOT RE-RENDER ON OPTION CHANGE
  const filteredOptions = useMemo(() => filteredOption(), [filteredOption]);

  // DELAY DISPATCH
  useEffect(() => {
    dispatch(mediaPlanActions.handleCurrentOption(filteredOptions[0]));
  }, [dispatch, filteredOptions]);

  return (
    <>
      <Select
        value={currentOption}
        options={
          filteredOptions.length ? filteredOptions : ['- No option left -']
        }
        handleChange={onHandleChange}
      />
    </>
  );
};
