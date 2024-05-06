import React from 'react';

import './account-overview.css';
import SupportContactCard from './support-contact-card';

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className="account-overview">
      <h1>Account Overview</h1>
      <SupportContactCard data={data} />
    </div>
  )
}

export default AccountOverview;