import React from 'react'
import { Route } from "react-router-dom";
import CollectionPage from '../collection/collection.component'

import CollectionOverview from '../../components/collections-overview/collections-overview.component'


const Shop = ({ match }) => {
    console.log(match)
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>)
}


export default Shop