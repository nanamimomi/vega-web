import { render, screen } from '@testing-library/react';
import App from './App';
import {UserContext} from "./auth/UserProvider";
import UserAccount from "./components/pages/UserAccount";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Dummy Test', () => {
  const x = 0;
  expect(0);
})
