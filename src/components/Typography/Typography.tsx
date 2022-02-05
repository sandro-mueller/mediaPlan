import styled from '@emotion/styled';
import { ColorsVariants, TypographyVariants } from '@type/index';
import { useTranslation } from 'react-i18next';
import { typography } from './TypographyVariants';

interface Props {
  variant: TypographyVariants;
  color?: ColorsVariants;
  children?: string | React.ReactNode;
}

//@ts-ignore - Note: emotion does not know css property 'textTransform'
const StyledTypography = styled.div<Props>(
  {
    whiteSpace: 'pre',
  },

  // CONSIDER DARK MODE
  (props) => ({
    ...typography[props.variant],
    color: props.color
      ? props.color
      : props.variant === 'body1' || props.variant === 'body2'
      ? props.theme.colors.text
      : typography[props.variant].color,
  })
);

export const Typography = ({
  variant,
  color,
  children,
}: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledTypography variant={variant} color={color}>
      {t(children as string)}
    </StyledTypography>
  );
};
