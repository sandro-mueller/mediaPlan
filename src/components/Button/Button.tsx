import { Typography } from '@components/Typography';
import styled from '@emotion/styled';
import { ColorsVariants, ButtonVariants, ButtonSize } from '@interface/index';
import React from 'react';

interface Props {
  variant: ButtonVariants;
  color: ColorsVariants;
  size: ButtonSize;
  width?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  handleClick?: () => void;
}

const StyledButton = styled.button<Props>(
  {
    border: 'none',
    borderRadius: 2,
    cursor: 'pointer',
  },
  (props) => ({
    height: props.size === 'large' ? 42 : 36,
    width: props.fullWidth ? '100%' : props.width ? props.width : 'auto',
    padding: `${props.theme.baseline.b2}px ${props.theme.baseline.b4}px`,
    outline:
      props.variant === 'outlined' ? `1px solid ${props.color}` : 'transparent',
    backgroundColor: props.variant === 'outlined' ? 'transparent' : props.color,
    opacity: props.disabled ? 0.5 : 1,
    pointerEvents: props.disabled ? 'none' : 'initial',
  })
);

export const Button: React.FC<Props> = ({
  variant,
  color,
  size,
  width,
  fullWidth = false,
  disabled,
  handleClick,
  children,
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      size={size}
      width={width}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={handleClick}
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
