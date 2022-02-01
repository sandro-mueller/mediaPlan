import { Typography } from '@components/Typography';
import { FormChannelRow } from '@components/Form/FormChannel/Grid';

export const FormChannelHeadlines = () => {
  return (
    <FormChannelRow
      component={[
        <Typography variant={'body1'} color={'#28abe2'} children={'Channel'} />,

        <Typography variant={'body1'} color={'#28abe2'} children={'Budget'} />,

        <Typography
          variant={'body1'}
          color={'#28abe2'}
          children={'Constant'}
        />,

        <Typography variant={'body1'} color={'#28abe2'} children={'Exclude'} />,
      ]}
    />
  );
};
