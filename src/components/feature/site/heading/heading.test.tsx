import React from 'react';
import { render } from '@testing-library/react';
import Heading from './heading';

describe('Heading test suite', () => {
    it('should match snopshot', () => {
        const { container } = render(<Heading />);
        expect(container).toMatchSnapshot();
    });
});
