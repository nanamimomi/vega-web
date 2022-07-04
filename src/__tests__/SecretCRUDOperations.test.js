import { render, screen } from '@testing-library/react'
import user from "@testing-library/user-event"
import DeleteSecretModal from '../components/UI/organisms/DeleteSecretModal'
import SecretManager from '../components/pages/SecretManager'

describe('CRUD on secrets', () => {
    test('delete', () => {
        render(
            < SecretManager />
        );

    })
})