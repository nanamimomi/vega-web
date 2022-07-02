import { render, screen } from '@testing-library/react'
import user from "@testing-library/user-event"
import Login from '../components/pages/Login'

// Feature: Login Functionality
// Description: As a user, I want to login to the system using my email address and password, so I can access restricted features.
describe('UI-test tutorial', () => {

  // Scenario: User provides correct credentials.
  // Given I am on the “login” page
  // When I give the correct username password combination
  // Then I am taken to the “home” page
  // And I am logged in
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

  //Scenario: User provides incorrect credentials.
  //Given I am on the “login” page
  //When I type in the wrong username password combination
  //Then I see an error message “Invalid username or password.”
})