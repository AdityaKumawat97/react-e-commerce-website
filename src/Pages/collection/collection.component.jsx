import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection.styles.scss'

function CollectionPage({ match, collection }) {
    console.log(collection)
    return (
        <div className="collectionPage">
            <h2>CategoryPage</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)