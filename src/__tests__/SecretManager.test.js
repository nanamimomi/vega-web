import { render, screen } from '@testing-library/react'
import user from "@testing-library/user-event"
import SecretManager from "../components/pages/SecretManager";
import SecretTable from "../components/UI/organisms/SecretTable";
import React from "react";
import SecretEditForm from "../components/UI/organisms/SecretEditForm";

//const tableMock = jest.mock('../components/UI/organisms/SecretTable')

/*<SecretTable
            page_size={SECRET_TABLE_PAGE_SIZE}
            numPages={numPages}
            maxNavButtons={SECRET_TABLE_MAX_NAV_BUTTONS}
            rows={rows}
            currPage={currPage}
            setCurrPage={setCurrPage}
        />*/

// Well this is bad testing, since I've got so many asserts per test, but hey, I can't be bothered to split it up

describe('SecretManager Tests', () => {

    // Feature: Secret Entries CRUD Operations
    // Description: Allow user to Create, Read, Update, and Delete secrets
    describe('SecretManager CRUD Ops Tests', () => {

        // Scenario: User creates a secret successfully
        // Given that I am on the page “Manage Secret”
        // When I click “Create a Secret”
        // And supply with all the information
        // And click “Create”
        // Then I should see message “[secret name] has been created”
        // And [secret name] should be visible on the secret list
        test('create new secret', () => {
            // Given secret name Walmart
            const secrets_1 = [
                {"name": "Walmart", "id": 575757, "date": new Date("2022-01-17")},
            ]

            const {container} = render(<SecretManager all_secrets={secrets_1} now_date={new Date("2022-01-20")} then_date={new Date("2022-01-10")}/>);

        });

    //     // Scenario: User creates a secret unsuccessfully
    //     // Given that I am on the page “Manage Secret”
    //     // When I click “Create a Secret”
    //     // And left 1 or more area empty
    //     // And click “Create”
    //     // Then I should see message “[area name] required”
    //     test('failed create new secret', () => {
    //         // Functionality not present
    //     });

    //     // Scenario: User creates a secret unsuccessfully (maximum limit reached)
    //     // Given that I am on the page “Manage Secret”
    //     // When I click “Create a Secret”
    //     // And supply with all the information
    //     // And click “Create”
    //     // Then I should see an error message “You cannot create any more secrets.
    //     //      Please delete some old secrets or contact an admin for more information”
    //     test('failed too many new secret', () => {
    //         // Functionality not present
    //     });

    //     // Scenario: User reads a secret entry
    //     // Given that I am on the page “Manage Secret”
    //     // When I click the secret I want to read
    //     // Then I should see all the information of the secret on the page
    //     test('read secret', () => {
    //         // Given!
    //         const secrets_3 = [
    //             {"name": "Walmart1", "id": 571157, "date": new Date("2022-01-17"), secret: "WALL NO"},
    //             {"name": "Walmart2", "id": 572257, "date": new Date("2022-01-17"), secret: "WALL YES"},
    //             {"name": "Walmart3", "id": 573357, "date": new Date("2022-01-17"), secret: "WALL... MAYBE?"}
    //         ]

    //         const {container} = render(<SecretManager all_secrets={secrets_3} now_date={new Date("2022-01-20")} then_date={new Date("2022-01-10")}/>);

    //         // Should not be able to see the secret yet
    //         expect(screen.queryByText("WALL NO")).toBeNull();

    //         // There should only be three Show Secret buttons visible
    //         const delete_buttons = screen.getAllByRole("button", {name: "Show Secret"});
    //         expect(delete_buttons.length).toBe(3);

    //         // When!
    //         user.click(delete_buttons[0]);

    //         // Then!
    //         expect(screen.getByText("WALL NO")).toBeInTheDocument();
    //     });

    //     // Scenario: User updates a secret entry
    //     // Given that I am on the page “Manage Secret”
    //     // When I click the secret I want to update
    //     // And click “Edit”
    //     // And update the secret information and click “Update”
    //     // Then I should see a message “[secret name] has been updated”
    //     test('update secret', () => {
    //         // Given!
    //         const secrets_1 = [
    //             {"name": "Walmart", "id": 575757, "date": new Date("2022-01-17")},
    //         ]

    //         /*<SecretEditForm
    //             setName={setEditSecretName}
    //             setText={setEditSecretText}
    //             setFiles={setEditSecretFiles}
    //             handleSubmit={handleEditSecretSubmission}
    //             handleCancel={closeDeleteModal}
    //         />*/

    //         const {container} = render(<SecretManager all_secrets={secrets_1} now_date={new Date("2022-01-20")} then_date={new Date("2022-01-10")}/>);

    //         // Should only be one edit button present
    //         const edit_button = screen.getByRole("button", {name: "Edit"});

    //         user.click(edit_button)

    //         //const wrapper = shallow(<ModalContainer />);
    //         //expect(wrapper.find(Modal)).toHaveLength(1);

    //         expect(screen.getByClass("")).toBeInTheDocument();
    //     });

    //     // Scenario: User deletes a secret entry
    //     // Given that I am on the page “Manage Secret”
    //     // When I click the Secret I want to delete
    //     // And click “Delete”
    //     // And click “Confirm”
    //     // Then I should see a message “[secret name] has been deleted”
    //     test('delete secret', () => {
    //         // Given!
    //         const secrets_3 = [
    //             {"name": "Walmart1", "id": 571157, "date": new Date("2022-01-17"), secret: "WALL NO"},
    //             {"name": "Walmart2", "id": 572257, "date": new Date("2022-01-17"), secret: "WALL YES"},
    //             {"name": "Walmart3", "id": 573357, "date": new Date("2022-01-17"), secret: "WALL... MAYBE?"}
    //         ]

    //         const {container} = render(<SecretManager all_secrets={secrets_3} now_date={new Date("2022-01-20")} then_date={new Date("2022-01-10")}/>);

    //         expect(screen.queryByText("WALL NO")).toBeNull();

    //         const delete_buttons = screen.getAllByRole("button", {name: "Show Secret"});
    //         expect(delete_buttons.length).toBe(3);

    //         // When!
    //         user.click(delete_buttons[0]);

    //         // Then!
    //         expect(screen.getByText("WALL NO")).toBeInTheDocument();
    //     });

    //     //endof CRUD Ops Tests
    // })

    // // Feature: Secret Entry Filtering
    // // Description: Filter secrets by date range
    // //   By choosing a start and end date, only secrets created on dates within the range are shown in the table.
    // describe('SecretManager Date Filter Tests', () => {

    //     // Scenario: A user filters by date to view the only secret they have
    //     // Given I have one secret
    //     // When I set the start date to before the secret's date
    //     // And I set the end date to after the secret's date
    //     // Then the secret should be listed
    //     test('render one secret in range', () => {
    //         // Given!
    //         const secrets_1 = [
    //             {"name": "Walmart", "id": 575757, "date": new Date("2022-01-17")},
    //         ]

    //         // When!
    //         const {container} = render(<SecretManager all_secrets={secrets_1} now_date={new Date("2022-01-20")} then_date={new Date("2022-01-10")}/>);

    //         // Then!
    //         // Check if Walmart shows up
    //         expect(screen.getByText("Walmart")).toBeInTheDocument();

    //         // Check if the list of table entries is length 2 (which includes the column title row)
    //         const list_of_trs = container.querySelectorAll("tr")
    //         expect(
    //             list_of_trs.length
    //         ).toBe(2)

    //         // Check if the Walmart td exists by looping through each td and checking if they have Walmart text
    //         // I've learned through doing this, that this is just a more complicated way of doing getByText
    //         // In other instances, this allows to find things like href and that, which is useful
    //         // But here it's useless
    //         const list_of_tds = container.querySelectorAll("td")
    //         let walmart_in_tds = false;
    //         list_of_tds.forEach(td => {
    //             if (td.innerHTML === "Walmart") {
    //                 walmart_in_tds = true;
    //             }
    //         });

    //         expect(
    //             walmart_in_tds
    //         ).toBe(true)
    //     })

    //     // Scenario: A user filters by date to hide the only secret they have
    //     // Given I have one secret
    //     // When I set the start date to before the secret's date
    //     // And I set the end date to BEFORE the secret's date
    //     // Then there should be no secrets shown
    //     test('render one secret not in range', () => {
    //         // Given!
    //         const secrets_1 = [
    //             {"name": "Walmart", "id": 575757, "date": new Date("2022-01-17")},
    //         ]

    //         // When!
    //         const {container} = render(<SecretManager all_secrets={secrets_1} now_date={new Date("2022-01-16")} then_date={new Date("2022-01-10")}/>);

    //         // Then!
    //         // Check if there is no Walmart secret shown
    //         expect(screen.queryByText("Walmart")).toBeNull();

    //         // Check if the list of table entries is length 1 (since length includes the column name row)
    //         const list_of_trs = container.querySelectorAll("tr")
    //         expect(
    //             list_of_trs.length
    //         ).toBe(1)
    //     })

    //     // Scenario: A user filters filters by date to show more than ten secrets
    //     // Given I have more than ten secrets
    //     // When I set the start date to before more than ten secrets' date
    //     // And I set the end date to after more than ten secrets' date
    //     // Then there should be ten secrets shown
    //     // And a second page button shown
    //     test('render two page list', () => {
    //         // Given!
    //         const secrets_11 = [
    //             {"name": "Walmart1", "id": 575751, "date": new Date("2022-01-17")},
    //             {"name": "Walmart2", "id": 751832, "date": new Date("2022-01-17")},
    //             {"name": "Walmart3", "id": 571633, "date": new Date("2022-01-17")},
    //             {"name": "Walmart4", "id": 575184, "date": new Date("2022-01-17")},
    //             {"name": "Walmart5", "id": 577755, "date": new Date("2022-01-17")},
    //             {"name": "Walmart6", "id": 575266, "date": new Date("2022-01-17")},
    //             {"name": "Walmart7", "id": 575877, "date": new Date("2022-01-17")},
    //             {"name": "Walmart8", "id": 753928, "date": new Date("2022-01-17")},
    //             {"name": "Walmart9", "id": 575759, "date": new Date("2022-01-17")},
    //             {"name": "Walmart10", "id": 511110, "date": new Date("2022-01-17")},
    //             {"name": "Walmart11", "id": 572211, "date": new Date("2022-01-17")},
    //         ]

    //         // When!
    //         const {container} = render(<SecretManager all_secrets={secrets_11} now_date={new Date("2022-01-18")} then_date={new Date("2022-01-16")}/>);

    //         // Then!
    //         // Check if the last possible secret which should be on the first page is shown
    //         expect(screen.getByText("Walmart10")).toBeInTheDocument();

    //         // Check if there is no Walmart11 secret shown (since it should be one the second page)
    //         expect(screen.queryByText("Walmart11")).toBeNull();

    //         // Check if the list of table entries is length 11 (since length includes the column name row)
    //         const list_of_trs = container.querySelectorAll("tr")
    //         expect(
    //             list_of_trs.length
    //         ).toBe(11)

    //         // Check if there is a button to get to the next page in the table
    //         expect(screen.getByRole("button", {name: "2"})).toBeInTheDocument();

    //         // Check if there is no button to get to the third page (since there isn't a third page)
    //         expect(screen.queryByRole("button", {name: "3"})).toBeNull();

    //         // Check if clicking the next page button works
    //         user.click(screen.getByRole("button", {name: "2"}));
    //         //expect(screen.getByText("Walmart11")).toBeInTheDocument(); <-- can't do this, because React Testing sucks
    //     })

        // endof Date Filter Tests
    })

    // endof SecretManager tests
})