import {render, screen} from '@testing-library/react'

 import Calculator from './index'


 describe('CALCULATOR TEST', () => {
     test('Section Calculator renders', () => {
         render(<Calculator/>)
         expect(screen.getByText(/Select your Amount/i)).toBeInTheDocument()
     })
 })
