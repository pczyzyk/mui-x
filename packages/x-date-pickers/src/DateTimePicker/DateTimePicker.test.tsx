import * as React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { screen } from '@mui/monorepo/test/utils/createRenderer';
import { expect } from 'chai';
import { createPickerRenderer, stubMatchMedia } from 'test/utils/pickers-utils';
import { describeValidation } from '@mui/x-date-pickers/tests/describeValidation';

describe('<DateTimePicker />', () => {
  const { render, clock } = createPickerRenderer({ clock: 'fake' });

  describeValidation(DateTimePicker, () => ({
    render,
    clock,
    views: ['year', 'month', 'day', 'hours', 'minutes'],
    componentFamily: 'picker',
  }));

  it('should render in mobile mode when `useMediaQuery` returns `false`', () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = stubMatchMedia(false);

    render(<DateTimePicker />);

    expect(screen.getByLabelText(/Choose date/)).to.have.tagName('input');

    window.matchMedia = originalMatchMedia;
  });
});
