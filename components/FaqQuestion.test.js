/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import FaqQuestion from './FaqQuestion';
import Country from './Country';
import SelectElement from './buildingBlocks/SelectElement';
import useGlobalContext from '../context.tsx';

// jest.mock('./buildingBlocks/SelectElement', () => 'SelectElement');

test('if select box is shown correctly', () => {
  //   render(<Country />);
  const { getByTestId, getAllByTestId } = render(<SelectElement />);

  screen.getByRole('');
  //   expect(screen.getByTestId('selectElement'));

  //   fireEvent.change(getByTestId('selectElement'), { target: { value: 2 } });
});

// test('if the initial state is false', () => {
//   render(<FaqQuestion />);
//   expect(showAnswer.toBe(false));
// });
