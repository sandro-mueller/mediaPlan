import { useTheme } from '@emotion/react';
import { Textfield } from '@components/Form/elements';
import { Baseline } from '@interface/index';
import { Channels } from '@type/index';

interface Props {
  name: Channels;
  value: string;
  isError: boolean;
  helperText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormChannelTextField = ({
  name,
  value,
  isError,
  helperText,
  handleChange,
}: Props) => {
  const { baseline }: Baseline = useTheme();

  return (
    <Textfield
      width={`calc(100% - ${baseline.b2}px)`}
      name={name}
      isError={isError}
      isValue={!!value}
      helperText={isError ? helperText : ''}
      value={value}
      placeholder={'0.00'}
      handleChange={handleChange}
    />
  );
};
