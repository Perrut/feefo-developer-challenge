import { render, screen } from '@testing-library/react';
import SalesOverview from './sales-overview';

const salesOverviewStub = {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
};

test('SalesOverview test', () => {
    const { container } = render(<SalesOverview data={salesOverviewStub} />);
    expect(container.getElementsByClassName('sales-summary')).toBeDefined();
    expect(container.getElementsByClassName('sales-summary')[0].textContent).toEqual('You had 8 uploads and 4 lines added.');
    expect(container.getElementsByClassName('sales-overview-percentage').length).toEqual(2);
});
