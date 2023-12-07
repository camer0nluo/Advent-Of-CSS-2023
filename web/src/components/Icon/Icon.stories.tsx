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

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
}

export default meta

type Story = StoryObj<typeof Icon>

export const User: Story = {
  args: {
    id: 'user',
  },
}

export const Upload: Story = {
  args: {
    id: 'upload',
  },
}

export const ThumbsUp: Story = {
  args: {
    id: 'thumbsUp',
  },
}
export const ThumbsDown: Story = {
  args: {
    id: 'thumbsDown',
  },
}
export const Question: Story = {
  args: {
    id: 'question',
  },
}

export const Plus: Story = {
  args: {
    id: 'plus',
  },
}

export const Minus: Story = {
  args: {
    id: 'minus',
  },
}

export const Logout: Story = {
  args: {
    id: 'logout',
  },
}

export const EyeOpened: Story = {
  args: {
    id: 'eyeOpened',
  },
}

export const EyeClosed: Story = {
  args: {
    id: 'eyeClosed',
  },
}
export const Close: Story = {
  args: {
    id: 'close',
  },
}

export const Chevron: Story = {
  args: {
    id: 'chevron',
  },
}
export const Check: Story = {
  args: {
    id: 'check',
  },
}

export const Calendar: Story = {
  args: {
    id: 'calendar',
  },
}
