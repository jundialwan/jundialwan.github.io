

const stories: Story = {
  'welcome-post': {
    title: 'Welcome Post',
    url: 'welcome-post',
    createdAt: new Date('2020-03-25'),
    tags: [
      'welcome',
      'story'
    ],
    md: require('../stories-md/welcome.md').default
  },
  'redux-reducer': {
    title: 'My Own Version of Generated Function Redux Reducer',
    url: 'redux-reducer',
    createdAt: new Date('2018-05-05'),
    tags: [
      'react',
      'redux',
      'story'
    ],
    md: require('../stories-md/redux-reducer.md').default
  }
}

export default stories

type Story = {
  [url: string]: {
    title: string,
    url: string,
    createdAt: Date,
    tags: string[],
    md: string
  }
}