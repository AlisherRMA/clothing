import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = () => {
  const params = useParams();
  const collection = useSelector((state) => selectCollection(params?.collectionId)(state));
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
