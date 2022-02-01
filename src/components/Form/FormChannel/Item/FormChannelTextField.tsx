import { Textfield } from '@components/Form/elements/Textfield';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';

export const FormChannelTextField = () => {
  const { baseline }: Baseline = useTheme();

  return (
    <Textfield
      width={`calc(100% - ${baseline.b2}px)`}
      placeholder={'0.00'}
      value={''}
      handleChange={() => console.log('changed')}
    />
  );
};
