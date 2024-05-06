import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import './sales-overview.css';

export const SalesOverview = ({ data }) => {
  return (
    <div className="sales-overview">
      <div className='sales-overview-main'>
        <div className='sales-data'>
          <FontAwesomeIcon icon={faUpload} /><h3>Sales</h3>
        </div>
        <div className='sales-info'>
          <span style={{ cursor: 'pointer' }} title={`Last upload date: ${new Date(data.lastUploadDate)}`}><FontAwesomeIcon icon={faInfoCircle} /></span>
        </div>
        <p>You had <strong>{data.uploads} uploads</strong> and <strong>{data.linesSaved}</strong> lines added.</p>
      </div>
      <div className='sales-overview-percentage'>
        <p className='percentage-number'>{(data.successfulUploads / data.uploads * 100).toFixed(2)}%</p>
        <p className='percentage-description'>UPLOAD SUCCESS</p>
      </div>
      <div className='sales-overview-percentage'>
        <p className='percentage-number'>{(data.linesSaved / data.linesAttempted * 100).toFixed(2)}%</p>
        <p className='percentage-description'>LINES SAVED</p>
      </div>
    </div>
  )
}

export default SalesOverview;