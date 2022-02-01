import { FormChannelCta } from './Footer/FormChannelCta';
import { FormChannelSelection } from './Header/FormChannelSelection';
import { FormChannelSelectionCta } from './Header/FormChannelSelectionCta';
import { showToast } from '@utils/showToast';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store/interface';
import { Box } from '@components/Box';
import { FormChannelRow } from './Grid/FormChannelRow';
import { useTheme } from '@emotion/react';
import { FormChannelHeadlines } from './Body/FormChannelHeadlines';
import { FormChannelText } from './Item/FormChannelText';
import { FormChannelTextField } from './Item/FormChannelTextField';
import { FormChannelRadio } from './Item/FormChannelRadio';
import { Baseline } from '@interface/index';
import { mediaPlanActions } from '@store/module/mediaPlan';
import React, { useState } from 'react';

export const FormChannel = (): JSX.Element => {
  const dispatch = useDispatch();
  const { currentOption } = useSelector((state: State) => state.mediaPlan);
  const { baseline }: Baseline = useTheme();

  const [SEA, setSEA] = useState<string>('');
  const [display, setDisplay] = useState<string>('');
  const [social, setSocial] = useState<string>('');
  const [affiliate, setAffiliate] = useState<string>('');
  const [remarketing, setRemarketing] = useState<string>('');

  const onHandleClick = () => {
    showToast(`${currentOption} added`);
  };

  const onHandleChange = (event: React.ChangeEvent<any>) => {
    const { name, type, value } = event.target;

    if (type === 'text') {
      switch (name) {
        case 'SEA':
          setSEA(value);
          break;
        case 'Display':
          setDisplay(value);
          break;
        case 'Social':
          setSocial(value);
          break;
        case 'Affiliate':
          setAffiliate(value);
          break;
        case 'Remarketing':
          setRemarketing(value);
          break;
      }
    }

    const payload = {
      name,
      type,
      value,
    };

    dispatch(mediaPlanActions.handleChannelItem(payload));
  };

  return (
    <>
      <FormChannelSelection />
      <FormChannelSelectionCta handleClick={onHandleClick} />
      <FormChannelHeadlines />

      {/* <Box textAlign={'center'} mt={`${baseline.b4}px`} mb={`${baseline.b4}px`}>
        <Typography variant={'body2'}>- No option added -</Typography>
      </Box> */}

      <Box mt={`${baseline.b4}px`}>
        <FormChannelRow
          component={[
            <FormChannelText text={'SEA'} />,
            <FormChannelTextField
              name={'SEA'}
              value={SEA}
              handleChange={onHandleChange}
            />,
            <FormChannelRadio
              name={'SEA'}
              value={'constant'}
              id={'1'}
              handleChange={onHandleChange}
            />,
            <FormChannelRadio
              name={'SEA'}
              value={'exclude'}
              id={'2'}
              handleChange={onHandleChange}
            />,
          ]}
        />

        <FormChannelRow
          component={[
            <FormChannelText text={'Display'} />,
            <FormChannelTextField
              name={'Display'}
              value={display}
              handleChange={onHandleChange}
            />,

            <FormChannelRadio
              name={'Display'}
              value={'constant'}
              id={'3'}
              handleChange={onHandleChange}
            />,

            <FormChannelRadio
              name={'Display'}
              value={'exclude'}
              id={'4'}
              handleChange={onHandleChange}
            />,
          ]}
        />

        <FormChannelRow
          component={[
            <FormChannelText text={'Social'} />,
            <FormChannelTextField
              name={'Social'}
              value={social}
              handleChange={onHandleChange}
            />,

            <FormChannelRadio
              name={'Social'}
              value={'constant'}
              id={'5'}
              handleChange={onHandleChange}
            />,

            <FormChannelRadio
              name={'Social'}
              value={'exclude'}
              id={'6'}
              handleChange={onHandleChange}
            />,
          ]}
        />

        <FormChannelRow
          component={[
            <FormChannelText text={'Affiliate'} />,
            <FormChannelTextField
              name={'Affiliate'}
              value={affiliate}
              handleChange={onHandleChange}
            />,

            <FormChannelRadio
              name={'Affiliate'}
              value={'constant'}
              id={'7'}
              handleChange={onHandleChange}
            />,

            <FormChannelRadio
              name={'Affiliate'}
              value={'exclude'}
              id={'8'}
              handleChange={onHandleChange}
            />,
          ]}
        />

        <FormChannelRow
          component={[
            <FormChannelText text={'Remarketing'} />,
            <FormChannelTextField
              name={'Remarketing'}
              value={remarketing}
              handleChange={onHandleChange}
            />,

            <FormChannelRadio
              name={'Remarketing'}
              value={'constant'}
              id={'9'}
              handleChange={onHandleChange}
            />,

            <FormChannelRadio
              name={'Remarketing'}
              value={'exclude'}
              id={'10'}
              handleChange={onHandleChange}
            />,
          ]}
        />
      </Box>

      <FormChannelCta />
    </>
  );
};
