import React from 'react';
import Directory from '../../components/directory/Directory.component'
import { HomePageContainer } from './homepage.styles'

export default function Homepage({ history }) {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}
