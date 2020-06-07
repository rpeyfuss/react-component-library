import * as React from 'react'

interface ExampleComponentProps {
    name: string
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({ name }) => (
    <div role='heading' aria-level={1}>My First Example Component: {name}</div>
)
