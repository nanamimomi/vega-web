import { render, screen } from '@testing-library/react'
import user from "@testing-library/user-event"
import VenusNavBar from "../components/UI/molecules/VenusNavBar";
import {UserProvider} from "../auth/UserProvider";

const VISITOR_USER = {
  username: "user",
  jwt: "blah",
  role: "ROLE_USER",
};

const VISITOR_STAFF = {
  username: "user",
  jwt: "blah",
  role: "ROLE_STAFF",
};

// General structure for modifying a component on render
function RenderWrapper(children, user) {
  return render(
      <UserProvider user={user}>{children}</UserProvider>
  );
}

// Render VenusNavBar with a specific user logged in already
function renderNavBar(user) {
  return render(
      <UserProvider the_user={user}>
        <VenusNavBar />
      </UserProvider>
  );
}

// Feature: Navigation Bar Element
// Description: Allows user to navigate to the "Manage Secrets" page by clicking it
describe('Venus Navigation Bar Tests', () => {

  // Scenario: A user logs in and the element appears
  // Given I have a registered user account
  // And I have logged in as a "user"
  // When I visit a page
  // Then a "Manage secrets" navigation bar element should appear
  test('renders manage secrets element', () => {
    //const {container} = RenderWrapper(<Leadership />, VISITOR_USER)
    const {container} = renderNavBar(VISITOR_USER)

    expect(screen.getByText("Manage secrets")).toBeInTheDocument();
    expect(
        container.querySelector("a[href='/managesecrets']")
    ).toBeInTheDocument();
  })

  // Scenario: A user clicks the "Manage secrets" navbar element to go to the "Manage secrets" page
  // Given I have logged into an account with the "user" role
  // When I click on the "Manage secrets" navigation bar element
  // Then I should be taken to the "Manage secrets" page
  // ACTUALLY NOT STRICTLY POSSIBLE: https://stackoverflow.com/questions/57827126/how-to-test-anchors-href-with-react-testing-library
  // SO THIS JUST TESTS WHETHER THERE'S A LINK THAT YOU COULD FOLLOW
  test('navigate to secret manage page', () => {
    renderNavBar(VISITOR_USER)

    const href_link = screen.getByText("Manage secrets");
    expect(href_link.closest('a')).toHaveAttribute('href', '/managesecrets')
  })

  // Scenario: A user is logged into an account whose role is not 'user'
  // Given I am logged into an account with the "Staff" role
  // When I visit any page
  // Then the "Manage secrets"
  test('logged in but not user', () => {
    const {container} = renderNavBar(VISITOR_STAFF)

    expect(screen.queryByText("Manage secrets")).toBeNull()
    expect(
        container.querySelector("a[href='/managesecrets']")
    ).not.toBeInTheDocument();
  })

  // Scenario: Any regular site visitor who is not logged in cannot see the navigation bar element
  // Given I am not logged in
  // When I visit the any page of the site
  // Then the "Manage secrets" navigation bar element is not present
  test('not logged in', () => {
    const {container} = render(<VenusNavBar />);

    expect(screen.queryByText("Manage secrets")).toBeNull()
    expect(
        container.querySelector("a[href='/managesecrets']")
    ).not.toBeInTheDocument();
  })
})