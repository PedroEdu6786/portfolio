import Prismic from 'prismic-javascript'

const API_ENDPOINT = process.env.PRISMIC_API_ENDPOINT
const accessToken = ''

const createClientOptions = (req, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}

  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const Client = (req = null) => {
  return Prismic.client(API_ENDPOINT, createClientOptions(req, accessToken))
}
