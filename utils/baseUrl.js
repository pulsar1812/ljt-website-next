const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://ljt-website-next.vercel.app'
    : 'http://localhost:3000'

export default baseUrl
