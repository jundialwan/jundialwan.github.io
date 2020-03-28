const stories: Story[] = [
  {
    title: 'Welcome to this blog',
    url: 'welcome-to-this-blog',
    createdAt: new Date('2020-03-28'),
    tags: [
      'welcome',
      'story'
    ],
    md: require('../stories-md/welcome.md').default
  },
  {
    title: 'Apa yang Harus Disiapin Kalau Mau Jadi Software Engineer?',
    url: 'persiapan-jadi-software-engineer',
    createdAt: new Date('2017-01-18'),
    tags: ['software engineer'],
    md: require('../stories-md/persiapan-jadi-software-engineer.md').default
  },
  {
    title: 'Apa Lagi yang Harus Disiapin Kalau Mau Jadi Software Engineer?',
    url: 'persiapan-jadi-software-engineer-2',
    createdAt: new Date('2019-10-17'),
    tags: ['software engineer'],
    md: require('../stories-md/persiapan-jadi-software-engineer-2.md').default
  },
  {
    title: 'Berapa Waktu Kosong Yang Sebetulnya Kita Punya Dalam Satu Minggu?',
    url: 'berapa-waktu-kosong-dalam-satu-minggu',
    createdAt: new Date('2017-03-06'),
    tags: ['life', 'time'],
    md: require('../stories-md/berapa-waktu-kosong-dalam-seminggu.md').default
  }
]

export default stories

export type Story = {
  title: string,
  url: string,
  createdAt: Date,
  tags: string[],
  md: string
}