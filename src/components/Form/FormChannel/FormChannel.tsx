import { FormChannelCta } from './FormChannelCta';
import { FormChannelSelection } from './FormChannelSelection';

export const FormChannel = (): JSX.Element => {
  return (
    <>
      <FormChannelSelection />
      <FormChannelCta />
    </>
  );
};
