const stories: Story[] = [
  {
    title: 'Welcome to this blog',
    description: 'Warm welcome from me. New blogging platform, a fresh start.',
    url: 'welcome-to-this-blog',
    createdAt: new Date('2020-03-28'),
    updatedAt: new Date('2020-03-28'),
    tags: [
      'welcome',
      'story'
    ],
    md: require('../stories-md/welcome.md').default
  },
  {
    title: 'Apa yang Harus Disiapin Kalau Mau Jadi Software Engineer?',
    description: 'Perkembangan dunia software engineering berimbas pada kriteria software engineer yang dibutuhkan. Apa saja yang dibutuhkan untuk jadi software engineer saat ini?',
    url: 'persiapan-jadi-software-engineer',
    createdAt: new Date('2017-01-18'),
    updatedAt: new Date('2017-01-18'),
    tags: ['software engineer'],
    md: require('../stories-md/persiapan-jadi-software-engineer.md').default
  },
  {
    title: 'Apa Lagi yang Harus Disiapin Kalau Mau Jadi Software Engineer?',
    description: 'Diperlukan beberapa persiapan dalam memulai karir sebagai software engineer. Berdasarkan pengalaman saya, berikut adalah beberapa diantaranya.',
    url: 'persiapan-jadi-software-engineer-2',
    createdAt: new Date('2019-10-17'),
    updatedAt: new Date('2019-10-17'),
    tags: ['software engineer'],
    md: require('../stories-md/persiapan-jadi-software-engineer-2.md').default
  },
  {
    title: 'Berapa Waktu Kosong Yang Sebetulnya Kita Punya Dalam Satu Minggu?',
    description: 'Waktu memang terasa cepat kalau dilalui dengan hal yang tidak penting. Dalam satu minggu banyak waktu yang sebetulnya dapat kita manfaatkan dengan baik untuk berkembang.',
    url: 'berapa-waktu-kosong-dalam-satu-minggu',
    createdAt: new Date('2017-03-06'),
    updatedAt: new Date('2017-03-06'),
    tags: ['life', 'time'],
    md: require('../stories-md/berapa-waktu-kosong-dalam-seminggu.md').default
  },
  {
    title: `Me and Rubik's Cube`,
    description: 'Me with the most popular puzzles of all time',
    url: 'me-and-rubiks-cube',
    createdAt: new Date('2020-04-02'),
    updatedAt: new Date('2020-04-02'),
    tags: ['life', 'rubiks'],
    md: require('../stories-md/me-and-rubiks-cube.md').default
  },
  {
    title: `Pahlawan Kertas 📜`,
    description: 'Sebuah puisi. Pahlawan kertas.',
    url: 'pahlawan-kertas',
    createdAt: new Date('2017-06-13'),
    updatedAt: new Date('2017-06-13'),
    tags: ['life', 'poems', 'poetry'],
    md: require('../stories-md/pahlawan-kertas.md').default
  },
  {
    title: `Mesin Waktu 📜`,
    description: 'Sebuah puisi. Mesin Waktu',
    url: 'mesin-waktu',
    createdAt: new Date('2017-07-15'),
    updatedAt: new Date('2017-07-15'),
    tags: ['life', 'poems', 'poetry'],
    md: require('../stories-md/mesin-waktu.md').default
  }
]

export default stories

export type Story = {
  title: string,
  description: string,
  url: string,
  createdAt: Date,
  updatedAt: Date,
  tags: string[],
  md: string
}