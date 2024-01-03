import { render } from '@redwoodjs/testing/web'

import Forms from './Forms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Forms', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Forms />)
    }).not.toThrow()
  })
  it('renders a form field successfully', () => {
    expect(() => {
      render(<Forms label="test" name="test" />)
    }).not.toThrow()
  })
})
