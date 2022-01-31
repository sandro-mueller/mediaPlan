import styled from '@emotion/styled';
import { TypographyVariants, ColorsVariants } from '@interface/index';
import { typography } from './TypographyVariants';

interface Props {
  variant: TypographyVariants;
  color?: ColorsVariants;
}

//@ts-ignore - Note: emotion does not know css property 'textTransform'
const StyledTypography = styled.div<Props>(
  {
    whiteSpace: 'break-spaces',
  },
  (props) => ({
    ...typography[props.variant],
    color: props.color ? props.color : typography[props.variant].color,
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
