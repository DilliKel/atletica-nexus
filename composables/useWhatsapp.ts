import { whatsappNumber } from '~/utils/siteContent'

export function useWhatsapp() {
  const url = `https://wa.me/${whatsappNumber}`

  const openChat = (message?: string) => {
    const href = message ? `${url}?text=${encodeURIComponent(message)}` : url
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return { url, openChat }
}
