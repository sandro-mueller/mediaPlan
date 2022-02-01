import styled from '@emotion/styled';
import { ColorsVariants, TypographyVariants } from '@type/index';
import { typography } from './TypographyVariants';

interface Props {
  variant: TypographyVariants;
  color?: ColorsVariants;
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

export const Typography: React.FC<{
  variant: TypographyVariants;
  color?: ColorsVariants;
}> = ({ variant, color, children }): JSX.Element => {
  return (
    <StyledTypography variant={variant} color={color}>
      {children}
    </StyledTypography>
  );
};
