import React from 'react';
import { render } from '@testing-library/react';
import Borrower from './borrower';

describe('Borrower test suite', () => {
    it('should match snopshot', () => {
        const { container } = render(<Borrower />);
        expect(container).toMatchSnapshot();
    });
});
