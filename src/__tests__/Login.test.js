import { render, screen } from '@testing-library/react'
import user from "@testing-library/user-event"
import Login from '../components/pages/Login'

describe('UI-test tutorial', () => {
  test('test3', () => {
    render(<Login />);

    const usernameInput = screen.getByLabelText("USERNAME", {selector: "input"});
    const passwordInput = screen.getByLabelText("PASSWORD", {selector: "input"});
    const submitButton = screen.getByRole("button", {name: "Submit"});

    user.type(usernameInput, "admin@venus.com");
    user.type(passwordInput, "pass");
    user.click(submitButton);
    // const admin_navbar = screen.getByRole("navbar", {name: "Submit"});
    // expect(admin_navbar).toHaveTextContent("Admin");
  })
})