import React from 'react'
import styled from 'styled-components'

const Aside = styled.aside`
    grid-area: aside;
    background-color: lightgoldenrodyellow;
`

export default function index() {
    return (
        <Aside>
            Aside
        </Aside>
    )
}
