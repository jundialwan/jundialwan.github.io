const stories: Story[] = [
  {
    title: 'Welcome Post',
    url: 'welcome-post',
    createdAt: new Date('2020-03-25'),
    featured: false,
    tags: [
      'welcome',
      'story'
    ],
    md: require('../stories-md/welcome.md').default
  },
  {
    title: 'My Own Version of Generated Function Redux Reducer',
    url: 'redux-reducer',
    createdAt: new Date('2018-05-05'),
    featured: true,
    tags: [
      'react',
      'redux',
      'story'
    ],
    md: require('../stories-md/redux-reducer.md').default
  }
]

export default stories

export type Story = {
  title: string,
  url: string,
  createdAt: Date,
  featured: boolean,
  tags: string[],
  md: string
}