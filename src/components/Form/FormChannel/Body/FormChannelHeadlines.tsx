import { Typography } from '@components/Typography';
import { FormChannelRow } from '@components/Form/FormChannel/Grid';

export const FormChannelHeadlines = (): JSX.Element => {
  return (
    <FormChannelRow
      component={[
        <Typography
          variant={'body1'}
          color={'#28abe2'}
          children={'channelBody.channel'}
        />,

        <Typography
          variant={'body1'}
          color={'#28abe2'}
          children={'channelBody.budget'}
        />,

        <Typography
          variant={'body1'}
          color={'#28abe2'}
          children={'channelBody.constant'}
        />,

        <Typography
          variant={'body1'}
          color={'#28abe2'}
          children={'channelBody.exclude'}
        />,
      ]}
    />
  );
};
