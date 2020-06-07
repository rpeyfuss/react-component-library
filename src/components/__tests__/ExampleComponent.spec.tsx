import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ExampleComponent } from '../../index'

test('Renders', async () => {
    const { getByRole } = render(<ExampleComponent name='Test' />)
    expect(getByRole('heading')).toHaveTextContent('My First Example Component: Test')
})
