import React from 'react'
import styled from 'styled-components'

const MainTweets = styled.section`
    grid-area: main;
    background-color: lightcoral;
`

export default function index() {
    return (
        <MainTweets>
            Main
        </MainTweets>
    )
}
