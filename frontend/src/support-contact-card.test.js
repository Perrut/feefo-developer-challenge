import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';
import SupportContactCard from './support-contact-card';

const accountOverviewStub = {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    phone: '020 3362 4208'
};

test('SupportContactCard test', () => {
    render(<SupportContactCard data={accountOverviewStub} />);
    const emailElement = screen.getByText(/john.smith@feefo.com/i);
    expect(emailElement).toBeInTheDocument();
    const nameElement = screen.getByText(/John Smith/i);
    expect(nameElement).toBeInTheDocument();
    const phoneElement = screen.getByText(/020 3362 4208/i);
    expect(phoneElement).toBeInTheDocument();
});
