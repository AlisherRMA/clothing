import React from "react";
import { Routes, Route } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
// import { fetchCollectionsStart } from "../../redux/shop/shop.sagas";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Routes>
          <Route path="" element={<CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} />} />
          <Route path=":collectionId" element={<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded,
  });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
