import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
});

test('button has correct initial text', () => {

});

test('button turns blue when clicked', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  expect(colorButton.textContent).toBe('Change to red');

});

test ('initial conditions', ()=> {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();
  
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});


test ('button enabled or disabled when checkbox is clicked', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

