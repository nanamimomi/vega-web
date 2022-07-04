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
describe('SecretManager Tests', () => {

  // Scenario:
  // Given
  // When
  // Then
    describe('SecretManager Date Filter Tests', () => {
        test('render one secret', () => {
            const secrets_1 = [
                {"name": "Walmart", "id": 575757, "date": new Date("2022-01-17")},
            ]

            const {container} = render(<SecretManager all_secrets={secrets_1} now_date={new Date("2022-01-20")} then_date={new Date("2022-01-10")}/>);

            expect(screen.getByText("Walmart")).toBeInTheDocument();

            const list_of_tds = container.querySelectorAll("td")
            let walmart_in_tds = false;
            list_of_tds.forEach(td => {
                if (td.innerHTML === "Walmart") {
                    walmart_in_tds = true;
                }
            });

            expect(
                walmart_in_tds
            ).toBe(true)
        })

        test('render one secret', () => {
            const secrets_1 = [
                {"name": "Walmart", "id": 575757, "date": new Date("2022-01-17")},
            ]

            const {container} = render(<SecretManager all_secrets={secrets_1} now_date={new Date("2022-01-20")} then_date={new Date("2022-01-10")}/>);

            expect(screen.getByText("Walmart")).toBeInTheDocument();

            const list_of_tds = container.querySelectorAll("td")
            let walmart_in_tds = false;
            list_of_tds.forEach(td => {
                if (td.innerHTML === "Walmart") {
                    walmart_in_tds = true;
                }
            });

            expect(
                walmart_in_tds
            ).toBe(true)
        })
    })


})