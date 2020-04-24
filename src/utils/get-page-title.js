import defaultSettings from '@/settings'

const title = defaultSettings.title || 'FWork'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
