import styled from '@emotion/styled/macro';
import { Channels, RadioType } from '@type/index';

interface Props {
  id: string;
  name: Channels;
  value: RadioType;
  checked?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledRadioReplacement = styled.div(
  {
    height: 20,
    width: 20,
    padding: 3,
    border: '1px solid',
    borderRadius: '50%',

    '&::after': {
      content: '""',
      display: 'block',
      height: '100%',
      width: '100%',
      borderRadius: '50%',
      transform: 'scale(0)',
    },
  },
  (props) => ({
    borderColor: props.theme.colors.secondary,

    '&::after': {
      backgroundColor: props.theme.colors.secondary,
      transitionProperty: 'transform',
      transitionDuration: `${props.theme.duration.shortest}ms`,
      transitionTimingFunction: props.theme.easing.sharp,
    },
  })
);

const StyledRadio = styled.input({
  display: 'none',
});

const StyledLabel = styled.label({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',

  [`${StyledRadio}:checked + ${StyledRadioReplacement}::after`]: {
    transform: 'scale(1)',
  },
});

export const Radio = ({
  id,
  name,
  value,
  checked = false,
  handleChange,
}: Props): JSX.Element => {
  return (
    <StyledLabel htmlFor={id}>
      <StyledRadio
        id={id}
        name={name}
        value={value}
        type={'radio'}
        checked={checked}
        onChange={handleChange}
      />
      <StyledRadioReplacement />
    </StyledLabel>
  );
};
