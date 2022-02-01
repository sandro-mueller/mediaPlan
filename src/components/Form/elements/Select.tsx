import styled from '@emotion/styled';
import { Box } from '@components/Box';
import { Icon } from '@components/Icon';
import { Channels, ChannelOptions } from '@type/index';

interface Props {
  value: Channels;
  options: ChannelOptions;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface SelectProps {}

export const StyledSelect = styled.select<SelectProps>(
  {
    height: 56,
    width: '100%',
    border: '1px solid',
    borderRadius: 4,
    outline: 'none',
    fontSize: 16,
    fontFamily: 'inherit',
    cursor: 'pointer',
    appearance: 'none',

    '&:focus': {
      outline: 'none',
    },
  },

  (props) => ({
    color: props.theme.colors.text,
    padding: `${props.theme.baseline.b3}px`,
    borderColor: props.theme.colors.text,
    transitionProperty: 'border-color',
    transitionDuration: `${props.theme.duration.shorter}ms`,
    transitionTimingFunction: `${props.theme.easing.easeOut}`,
    backgroundColor: props.theme.colors.white,

    '&:focus': {
      borderColor: props.theme.colors.secondary,
    },
  })
);

export const Select = ({ value, options, handleChange }: Props) => {
  return (
    <Box position={'relative'}>
      <Box
        position={'absolute'}
        top={'16px'}
        right={'16px'}
        pointerEvents={'none'}
      >
        <Icon type={'expandMore'} />
      </Box>
      <StyledSelect value={value} onChange={handleChange}>
        {options.map((option: string) => {
          return <option key={option}>{option}</option>;
        })}
      </StyledSelect>
    </Box>
  );
};
