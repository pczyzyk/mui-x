import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';

export default function LifeCycleDateRangeField() {
  const [value, setValue] = React.useState([dayjs('2022-04-17'), null]);

  return (
    <Stack spacing={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['SingleInputDateRangeField']}>
          <SingleInputDateRangeField
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Typography>
        Value:{' '}
        {value.map((date) => (date == null ? 'null' : date.format('L'))).join(' – ')}
      </Typography>
    </Stack>
  );
}
