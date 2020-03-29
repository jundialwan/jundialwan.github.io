export function formatDate(date: Date): string {
  const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ]

  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  // return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes()}`
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