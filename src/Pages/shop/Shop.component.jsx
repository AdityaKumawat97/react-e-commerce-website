import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../../components/collection-preview/Collection-preview.component'



const Shop = ({ collections }) => {
    return (<div className="shop-page">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>)
}

const mapStatetoProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStatetoProps)(Shop)