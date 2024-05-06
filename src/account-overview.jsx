import React from 'react';
import SupportContactCard from './support-contact-card';
import SalesOverview from './sales-overview';

import './account-overview.css';

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className="account-overview">
      <h1>Account Overview</h1>
      <SupportContactCard data={data.supportContact} />
      <SalesOverview data={data.salesOverview} />
    </div>
  )
}

export default AccountOverview;