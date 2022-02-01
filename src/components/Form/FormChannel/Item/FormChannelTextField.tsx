import { useTheme } from '@emotion/react';
import { Textfield } from '@components/Form/elements';
import { Baseline } from '@interface/index';
import { Channels } from '@type/index';

interface Props {
  name: Channels;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormChannelTextField = ({ name, value, handleChange }: Props) => {
  const { baseline }: Baseline = useTheme();

  return (
    <Textfield
      name={name}
      width={`calc(100% - ${baseline.b2}px)`}
      placeholder={'0.00'}
      value={value}
      handleChange={handleChange}
    />
  );
};
