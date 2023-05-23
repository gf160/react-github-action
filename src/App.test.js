import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("0");
});

test('minus button has correct text', () => {
  render(<App />);
  const buttonEl = screen.getByTestId("minus-btn");
  expect(buttonEl).toHaveTextContent("-");
});

test('plus button has correct text', () => {
  render(<App />);
  const buttonEl = screen.getByTestId("plus-btn");
  expect(buttonEl).toHaveTextContent("+");
});

test('when the + button is pressed, the counter changes to 1 ', () => {
  render(<App />);
  const buttonEl = screen.getByTestId('plus-btn');
  fireEvent.click(buttonEl);
  const counterEl = screen.getByTestId('counter');
  expect(counterEl).toHaveTextContent("1");

})
test('when the - button is pressed, the counter changes to 0 ', () => {
  render(<App />);
  const buttonEl = screen.getByTestId('minus-btn');
  fireEvent.click(buttonEl);
  const counterEl = screen.getByTestId('counter');
  expect(counterEl).toHaveTextContent("0");
})

test('on/off button has blue color', () => {
  render(<App />);
  const buttonEl = screen.getByTestId("on/off-btn");
  expect(buttonEl).toHaveStyle('background-color:blue');
})

test('prevent the +,- button from being pressed when the on/off button click', () => {
  render(<App />);
  const buttonEl = screen.getByTestId('on/off-btn');
  fireEvent.click(buttonEl);
  const plusBtn = screen.getByTestId('plus-btn');
  expect(plusBtn).toBeDisabled(true);
})