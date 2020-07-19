const dayNames = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const monthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
]

export function formatDate(date: Date): string {

  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  // return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes()}`
}

export function formatRFC822Date(date: Date): string {
  return `${dayNames[date.getDay()]}, ${date.getDate().toString().length === 1 ? '0'+date.getDate() : date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} ${date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes()} +0700`
}

const GA_TRACKING_ID = 'UA-162003791-1'
export const GoogleAnalytics = {
  TRACKING_ID: GA_TRACKING_ID,
  
  pageView: (url: string) => {
    // @ts-ignore
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url
    })
  }
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const MediaQuery = {
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  }
}