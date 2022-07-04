import { render, screen } from '@testing-library/react'
import user from "@testing-library/user-event"
import SecretManager from "../components/pages/SecretManager";

// Well this is bad testing, since I've got so many asserts per test, but hey, I can't be bothered to split it up

describe('SecretManager Tests', () => {

    // Feature: Filter Secrets By Date Range
    // Description: By choosing a start and end date, only secrets created on dates within the range are shown in the table.
    describe('SecretManager Date Filter Tests', () => {

        // Scenario: A user filters by date to view the only secret they have
        // Given I have one secret
        // When I set the start date to before the secret's date
        // And I set the end date to after the secret's date
        // Then the secret should be listed
        test('render one secret in range', () => {
            // Given!
            const secrets_1 = [
                {"name": "Walmart", "id": 575757, "date": new Date("2022-01-17")},
            ]

            // When!
            const {container} = render(<SecretManager all_secrets={secrets_1} now_date={new Date("2022-01-20")} then_date={new Date("2022-01-10")}/>);

            // Then!
            // Check if Walmart shows up
            expect(screen.getByText("Walmart")).toBeInTheDocument();

            // Check if the list of table entries is length 2 (which includes the column title row)
            const list_of_trs = container.querySelectorAll("tr")
            expect(
                list_of_trs.length
            ).toBe(2)

            // Check if the Walmart td exists
            // I've learned through doing this, that this is just a more complicated way of doing getByText
            // In other instances, this allows to find things like href and that, which is useful
            // But here it's useless
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

        // Scenario: A user filters by date to hide the only secret they have
        // Given I have one secret
        // When I set the start date to before the secret's date
        // And I set the end date to BEFORE the secret's date
        // Then there should be no secrets shown
        test('render one secret not in range', () => {
            // Given!
            const secrets_1 = [
                {"name": "Walmart", "id": 575757, "date": new Date("2022-01-17")},
            ]

            // When!
            const {container} = render(<SecretManager all_secrets={secrets_1} now_date={new Date("2022-01-16")} then_date={new Date("2022-01-10")}/>);

            // Then!
            // Check if there is no Walmart secret shown
            expect(screen.queryByText("Walmart")).toBeNull();

            // Check if the list of table entries is length 1 (since length includes the column name row)
            const list_of_trs = container.querySelectorAll("tr")
            expect(
                list_of_trs.length
            ).toBe(1)
        })

        // Scenario: A user filters filters by date to show more than ten secrets
        // Given I have more than ten secrets
        // When I set the start date to before more than ten secrets' date
        // And I set the end date to after more than ten secrets' date
        // Then there should be ten secrets shown
        // And a second page button shown
        test('render two page list', () => {
            // Given!
            const secrets_11 = [
                {"name": "Walmart1", "id": 575751, "date": new Date("2022-01-17")},
                {"name": "Walmart2", "id": 751832, "date": new Date("2022-01-17")},
                {"name": "Walmart3", "id": 571633, "date": new Date("2022-01-17")},
                {"name": "Walmart4", "id": 575184, "date": new Date("2022-01-17")},
                {"name": "Walmart5", "id": 577755, "date": new Date("2022-01-17")},
                {"name": "Walmart6", "id": 575266, "date": new Date("2022-01-17")},
                {"name": "Walmart7", "id": 575877, "date": new Date("2022-01-17")},
                {"name": "Walmart8", "id": 753928, "date": new Date("2022-01-17")},
                {"name": "Walmart9", "id": 575759, "date": new Date("2022-01-17")},
                {"name": "Walmart10", "id": 511110, "date": new Date("2022-01-17")},
                {"name": "Walmart11", "id": 572211, "date": new Date("2022-01-17")},
            ]

            // When!
            const {container} = render(<SecretManager all_secrets={secrets_11} now_date={new Date("2022-01-18")} then_date={new Date("2022-01-16")}/>);

            // Then!
            // Check if the last possible secret which should be on the first page is shown
            expect(screen.getByText("Walmart10")).toBeInTheDocument();

            // Check if there is no Walmart secret shown
            expect(screen.queryByText("Walmart11")).toBeNull();

            // Check if the list of table entries is length 11 (since length includes the column name row)
            const list_of_trs = container.querySelectorAll("tr")
            expect(
                list_of_trs.length
            ).toBe(11)

            // Check if there is a button to get to the next page in the table
            expect(screen.getByRole("button", {name: "2"})).toBeInTheDocument();

            // Check if there is no button to get to the third page (since there isn't a third page)
            expect(screen.queryByRole("button", {name: "3"})).toBeNull();

            // Check if clicking the next page button works
            user.click(screen.getByRole("button", {name: "2"}));
            expect(screen.getByText("Walmart11")).toBeInTheDocument();
        })

    })

})