// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Forms from './Forms'

const meta: Meta<typeof Forms> = {
  component: Forms,
}

export default meta

type Story = StoryObj<typeof Forms>

export const Primary: Story = {}
