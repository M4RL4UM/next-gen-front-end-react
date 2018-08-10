import React from 'react';
import PropTypes from 'prop-types';
import MultiMetadata from './MultiMetadata';
import SingleMetadata from './SingleMetadata';

const FindThisItem = props => {
  if (!props.item) {
    return [];
  }

  const {
    accession = null,
    box_name = null,
    box_number = null,
    folder_name = null,
    folder_number = null,
    call_number = null,
    catalog_key = null,
    citation = null
  } = props.item;

  return (
    <div aria-labelledby="tab-find-item" id="tab-panel2" role="tabpanel">
      <SingleMetadata title="Accession Number" item={accession} />
      <MultiMetadata title="Box Name" items={box_name} />
      <MultiMetadata title="Box Number" items={box_number} />
      <MultiMetadata title="Folder Name" items={folder_name} />
      <MultiMetadata title="Folder Number" items={folder_number} />
      <SingleMetadata title="Call Number" item={call_number} />
      <SingleMetadata title="Catalog Key" item={catalog_key} />
      <SingleMetadata title="Citation" item={citation} />
    </div>
  );
};

FindThisItem.propTypes = {
  item: PropTypes.object
};

export default FindThisItem;
