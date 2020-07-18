const stories: Story[] = [
  {
    title: 'V60 Pour-over Iced Coffee: My Recipe',
    description: 'My version of iced coffee',
    url: 'iced-coffee-pour-over-my-recipe.md',
    createdAt: '2020-07-18',
    updatedAt: '2020-07-18',
    tags: [
      'coffee',
      'life',
      'experiment'
    ],
    md: require('../stories-md/iced-coffee-pour-over-my-recipe.md').default,
    priority: 0.6
  },
  {
    title: 'Welcome to this blog',
    description: 'New blogging platform, a fresh start.',
    url: 'welcome-to-this-blog',
    createdAt: '2020-03-28',
    updatedAt: '2020-03-28',
    tags: [
      'welcome',
      'story'
    ],
    md: require('../stories-md/welcome.md').default,
    priority: 0.6
  },
  {
    title: `It Is How Good You Want To Be`,
    description: 'It is not how good you are',
    url: 'it-is-how-good-you-want-to-be',
    createdAt: '2020-07-11',
    updatedAt: '2020-07-11',
    tags: ['life', 'reflection', 'quotes'],
    md: require('../stories-md/it-is-how-good-you-want-to-be.md').default
  },
  {
    title: `A Technique for Producing Ideas`,
    description: 'A principle and method of producing ideas',
    url: 'a-technique-for-producing-ideas',
    createdAt: '2020-07-12',
    updatedAt: '2020-07-12',
    tags: ['book', 'ideas'],
    md: require('../stories-md/a-technique-for-producing-ideas.md').default,
    priority: 0.6
  },
  {
    title: 'Apa yang Harus Disiapin Kalau Mau Jadi Software Engineer?',
    description: 'Kriteria dasar yang dibutuhkan software engineer saat ini.',
    url: 'persiapan-jadi-software-engineer',
    createdAt: '2017-01-18',
    updatedAt: '2017-01-18',
    tags: ['software engineer'],
    md: require('../stories-md/persiapan-jadi-software-engineer.md').default
  },
  {
    title: 'Apa Lagi yang Harus Disiapin Kalau Mau Jadi Software Engineer?',
    description: 'Persiapan karir sebagai software engineer.',
    url: 'persiapan-jadi-software-engineer-2',
    createdAt: '2019-10-17',
    updatedAt: '2019-10-17',
    tags: ['software engineer'],
    md: require('../stories-md/persiapan-jadi-software-engineer-2.md').default
  },
  {
    title: `Me and Rubik's Cube`,
    description: 'Me with the most popular puzzles of all time',
    url: 'me-and-rubiks-cube',
    createdAt: '2020-04-02',
    updatedAt: '2020-04-02',
    tags: ['life', 'rubiks'],
    md: require('../stories-md/me-and-rubiks-cube.md').default
  },
  {
    title: `Pahlawan Kertas 📜`,
    description: 'Berpakaian elok. Bersematkan ijab di punggungnya.',
    url: 'pahlawan-kertas',
    createdAt: '2017-06-13',
    updatedAt: '2017-06-13',
    tags: ['life', 'poems', 'poetry'],
    md: require('../stories-md/pahlawan-kertas.md').default
  },
  {
    title: `Mesin Waktu 📜`,
    description: 'Andai waktu pandai bicara.',
    url: 'mesin-waktu',
    createdAt: '2017-07-15',
    updatedAt: '2017-07-15',
    tags: ['life', 'poems', 'poetry'],
    md: require('../stories-md/mesin-waktu.md').default
  },
  {
    title: `Run Alone or Run Together?`,
    description: 'A famous Zambian Provers make me thinking',
    url: 'run-alone-or-run-together',
    createdAt: '2020-04-26',
    updatedAt: '2020-04-26',
    tags: ['life', 'reflection', 'proverb'],
    md: require('../stories-md/run-alone-or-run-together.md').default,
    priority: 0.6
  },
  {
    title: `Kala Langit Masih Tidur 📜`,
    description: 'Pukul sembilan. Langit masih tidur.',
    url: 'kala-langit-masih-tidur',
    createdAt: '2020-05-04',
    updatedAt: '2020-05-04',
    tags: ['life', 'poems', 'poetry'],
    md: require('../stories-md/kala-langit-masih-tidur.md').default,
    priority: 0.6
  },
]

export default stories

export type Story = {
  title: string,
  description: string,
  url: string,
  createdAt: string,
  updatedAt: string,
  tags: string[],
  md: string,
  priority?: number
}