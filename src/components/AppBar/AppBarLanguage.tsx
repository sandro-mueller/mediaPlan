import i18next from 'i18next';
import { LanguageType } from '@type/index';
import { useEffect } from 'react';
import { Box } from '@components/Box';
import { Icon } from '@components/Icon';
import { Typography } from '@components/Typography';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import { useDispatch, useSelector } from 'react-redux';
import { mediaPlanActions } from '@store/feature/mediaPlan';
import { showToast } from '@utils/showToast';
import { State } from '@store/interface';

export const AppBarLanguage = (): JSX.Element => {
  const dispatch = useDispatch();

  const { baseline }: Baseline = useTheme();
  const { language } = useSelector((state: State) => state.mediaPlan);

  const onHandleLanguage = () => {
    const updateLanguage: LanguageType = language === 'en' ? 'de' : 'en';
    dispatch(mediaPlanActions.handleLanguage(updateLanguage));

    showToast('Changed language');
  };

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      ml={'auto'}
      mr={`${baseline.b3}px`}
      cursor={'pointer'}
      onClick={onHandleLanguage}
    >
      <Typography variant={'body1'} color={'#fff'}>
        {language === 'de' ? 'de' : 'en'}
      </Typography>
      <Box width={'32px'} ml={`${baseline.b2}px`}>
        <Icon type={language === 'de' ? 'germanFlag' : 'englishFlag'} />
      </Box>
    </Box>
  );
};
