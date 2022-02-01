import styled from '@emotion/styled/macro';
import { Channels } from '@type/index';

interface Props {
  name: Channels;
  value: 'constant' | 'exclude';
  id: string;
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
  name,
  value,
  id,
  handleChange,
}: Props): JSX.Element => {
  return (
    <>
      <StyledLabel htmlFor={id}>
        <StyledRadio
          id={id}
          name={name}
          value={value}
          type={'radio'}
          onChange={handleChange}
        />
        <StyledRadioReplacement />
      </StyledLabel>
    </>
  );
};
