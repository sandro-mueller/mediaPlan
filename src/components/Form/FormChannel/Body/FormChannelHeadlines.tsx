import { Typography } from '@components/Typography';
import { FormChannelRow } from '@components/Form/FormChannel/Grid';
import { useTranslation } from 'react-i18next';

export const FormChannelHeadlines = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <FormChannelRow
      component={[
        <Typography
          variant={'body1'}
          color={'#28abe2'}
          children={t('channelBody.channel')}
        />,

        <Typography
          variant={'body1'}
          color={'#28abe2'}
          children={t('channelBody.budget')}
        />,

        <Typography
          variant={'body1'}
          color={'#28abe2'}
          children={t('channelBody.constant')}
        />,

        <Typography
          variant={'body1'}
          color={'#28abe2'}
          children={t('channelBody.exclude')}
        />,
      ]}
    />
  );
};
