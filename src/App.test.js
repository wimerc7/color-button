import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
});

test('button turns blue when clicked', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');

});

test ('initial conditions', ()=> {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(colorButton).toBeEnabled();
  
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});


test ('button enabled or disabled when checkbox is clicked', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test ('button turns gray when is disabled', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});

});

test ('button keeps color after getting enabled', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});

});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letter', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', ()=> {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})

