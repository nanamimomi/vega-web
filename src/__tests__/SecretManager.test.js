import { render, screen } from '@testing-library/react'
import SecretManager from "../components/pages/SecretManager";
import {UserProvider} from "../auth/UserProvider";
import VenusNavBar from "../components/UI/molecules/VenusNavBar";

// Render VenusNavBar with a specific user logged in already
function renderNavBar(user) {
  return render(
      <UserProvider the_user={user}>
        <VenusNavBar />
      </UserProvider>
  );
}

// Feature:
// Description:
describe('UI-test tutorial', () => {

  // Scenario:
  // Given
  // When
  // Then

    test('render one secret', () => {
        const secrets_1 = [
            {"name": "Walmart", "id": 575757, "date": new Date("2022-01-17")},
        ]

        const {container} = render(<SecretManager all_secrets={secrets_1} now_date={new Date("2022-01-20")} then_date={new Date("2022-01-10")}/>);

        expect(screen.getByText("Wallmart")).toBeInTheDocument();
        //expect(
        //    container.querySelector("a[href='/managesecrets']")
        //).toBeInTheDocument();
  })
})