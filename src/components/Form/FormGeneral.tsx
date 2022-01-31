import { Box } from '@components/Box';
import { Textfield } from '@components/Form/elements/Textfield';
import { useTheme } from '@emotion/react';
import { Baseline } from '@interface/index';
import React, { useEffect } from 'react';

export const FormGeneral = () => {
  const [title, setTitle] = React.useState('');
  const [isTitle, setIsTitle] = React.useState(false);
  const [type, setType] = React.useState('');

  const [startDate, setStartDate] = React.useState('');
  const [isStartDate, setIsStartDate] = React.useState(false);

  const [endDate, setEndDate] = React.useState('');
  const [isEndDate, setIsEndDate] = React.useState(false);
  const [dateError, setDateError] = React.useState(false);

  const { baseline }: Baseline = useTheme();

  // DEBOUNCE
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTitle(!!title);
      setIsStartDate(!!startDate);
      setIsEndDate(!!endDate);
    }, 1000);

    return () => clearTimeout(timer);
  }, [title, startDate, endDate]);

  // VALIDATE DATE
  useEffect(() => {
    const timer = setTimeout(() => {
      if (startDate && endDate) {
        setDateError(Date.parse(startDate) > Date.parse(endDate));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [startDate, endDate]);

  const onHandleChange = (
    event: any,
    type: 'title' | 'startDate' | 'endDate'
  ) => {
    const { value } = event.target;

    setType(type);

    switch (type) {
      case 'title':
        setTitle(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);
        break;
    }
  };

  return (
    <>
      <Textfield
        value={title}
        isValue={isTitle}
        helperText={'Enter max. 32 characters'}
        placeholder={'Title'}
        isCounter
        handleChange={(event) => onHandleChange(event, 'title')}
      />

      <Box display={'flex'} justifyContent={'space-between'}>
        <Textfield
          value={startDate}
          isValue={isStartDate}
          type={'date'}
          helperText={
            dateError && type === 'startDate'
              ? 'Start date can not start later'
              : 'Enter starting date'
          }
          isError={dateError && type === 'startDate'}
          width={`calc(50% - ${baseline.b2}px)`}
          handleChange={(event) => onHandleChange(event, 'startDate')}
        />

        <Textfield
          value={endDate}
          isValue={isEndDate}
          type={'date'}
          helperText={
            dateError && type === 'endDate'
              ? 'Finish date can not start earlier'
              : 'Enter finish date'
          }
          isError={dateError && type === 'endDate'}
          width={`calc(50% - ${baseline.b2}px)`}
          handleChange={(event) => onHandleChange(event, 'endDate')}
        />
      </Box>
    </>
  );
};
