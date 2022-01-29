import { Typography } from '@components/Typography';
import styled from '@emotion/styled';
import { ColorsVariants, ButtonVariants, ButtonSize } from '@interface/index';
import React from 'react';

interface Props {
  variant: ButtonVariants;
  color: ColorsVariants;
  size: ButtonSize;
  onHandleClick?: () => void;
}

const StyledButton = styled.button<Props>(
  {
    border: 'none',
    borderRadius: 2,
    cursor: 'pointer',
  },
  (props) => ({
    height: props.size === 'large' ? 42 : 36,
    padding: `${props.theme.baseline.b2}px ${props.theme.baseline.b4}px`,
    outline:
      props.variant === 'outlined' ? `1px solid ${props.color}` : 'transparent',
    transitionProperty: 'transform',
    transitionDuration: `${props.theme.duration.short}ms`,
    transitionTimingFunction: `${props.theme.easing.sharp}`,
    backgroundColor: props.variant === 'outlined' ? 'transparent' : props.color,

    '&:hover': {
      transform: `translateY(-4px)`,
    },
  })
);

export const Button: React.FC<Props> = ({
  variant,
  color,
  size,
  onHandleClick,
  children,
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      size={size}
      onClick={onHandleClick}
    >
      <Typography
        variant={'buttonLarge'}
        color={variant === 'outlined' ? color : '#fff'}
      >
        {children}
      </Typography>
    </StyledButton>
  );
};
