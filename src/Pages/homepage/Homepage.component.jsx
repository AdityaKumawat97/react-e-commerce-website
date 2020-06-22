import React from 'react';
import Directory from '../../components/directory/Directory.component'
import './homepage.styles.scss'
export default function Homepage({ history }) {
    return (
        <div className="homepage">
            <Directory />
        </div>
    )
}
