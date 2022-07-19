import {render, screen} from '@testing-library/react'

import BlockFee from './index'

describe('BLOCK FEE TEST', () => {
    test('BlockFee renders without props',
        () => {
            render(<BlockFee
                className={null}
                c14Fee={null}
                networkFee={null}
                totalFee={null}
            >
                Fees
            </BlockFee>)
            const el = screen.getByTestId('block-fee')
            expect(el).toBeInTheDocument()
        })
    test('BlockFee snapshot',
        () => {
            // eslint-disable-next-line testing-library/render-result-naming-convention
            const component = render(<BlockFee
                className={null}
                c14Fee={null}
                networkFee={null}
                totalFee={null}
            >
                Fees
            </BlockFee>)
            expect(component).toMatchSnapshot()
        })
})
