import React from 'react'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './collections-overview.styles.scss'
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/Collection-preview.component";

function CollectionsOverview({ collections }) {
    return (
        <div className="collection-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}


const mapStatetoProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStatetoProps)(CollectionsOverview)