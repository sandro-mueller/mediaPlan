import React from 'react';
import Lottie from 'react-lottie';
import checkmark from '@assets/images/checkmark.json';
import styled from '@emotion/styled';
import { Box } from '@components/Box';
import { LOTTIE_OPTIONS } from '@constants/lottie';

interface Props {
  isError: boolean;
}

interface HelperProps {
  isError: boolean;
}

interface TextfieldProps {
  isError?: boolean;
  type?: 'text' | 'date';
  value: string;
  isValue?: boolean;
  helperText?: string;
  placeholder?: string;
  isCounter?: boolean;
  width?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const options = {
  ...LOTTIE_OPTIONS,
  loop: false,
  animationData: checkmark,
};

const StyledTextfield = styled.input<Props>(
  {
    height: 56,
    width: '100%',
    border: '1px solid',
    borderRadius: 4,
    outline: 'none',
    fontSize: 16,
    fontFamily: 'inherit',

    '&:focus': {
      outline: 'none',
    },

    '&::-webkit-calendar-picker-indicator': {
      display: 'none',
    },
  },

  (props) => ({
    color: props.isError ? props.theme.colors.error : props.theme.colors.text,
    padding: `${props.theme.baseline.b3}px`,
    borderColor: props.isError
      ? props.theme.colors.error
      : props.theme.colors.text,
    transitionProperty: 'border-color',
    transitionDuration: `${props.theme.duration.shorter}ms`,
    transitionTimingFunction: `${props.theme.easing.easeOut}`,
    backgroundColor: props.theme.colors.white,

    '&:focus': {
      borderColor: props.isError
        ? props.theme.colors.error
        : props.theme.colors.secondary,
    },

    '&::placeholder': {
      color: `${props.theme.colors.text}`,
    },
  })
);

const StyledHelperText = styled.span<HelperProps>(
  {
    height: 32,
    lineHeight: 2.4,
    display: 'block',
  },

  (props) => ({
    width: `calc(100% - ${props.theme.baseline.b3}px)`,
    color: props.isError ? props.theme.colors.error : props.theme.colors.text,
    fontSize: 14,
    marginLeft: props.theme.baseline.b3,
  })
);

export const Textfield = ({
  isError = false,
  type = 'text',
  value,
  isValue = false,
  helperText,
  placeholder,
  isCounter = false,
  width = '100%',
  handleChange,
}: TextfieldProps): JSX.Element => {
  return (
    <Box position={'relative'} width={width}>
      <StyledTextfield
        placeholder={placeholder}
        maxLength={32}
        isError={isError}
        value={value}
        type={type}
        onChange={handleChange}
      />

      {isValue && !isError && (
        <Box position={'absolute'} top={'13px'} right={'10px'}>
          <Lottie options={options} width={32} />
        </Box>
      )}

      <StyledHelperText isError={isError}>
        <Box display={'flex'} justifyContent={'space-between'}>
          {helperText}
          <Box>{isCounter && `(${value.length} / 32)`}</Box>
        </Box>
      </StyledHelperText>
    </Box>
  );
};
