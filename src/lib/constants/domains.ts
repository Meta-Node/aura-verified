// export const IS_PRODUCTION = import.meta.env.PROD
export const IS_PRODUCTION = false

export const __DEV__ = import.meta.env.DEV

export const AURA_NODE_URL_PROXY = `/auranode${IS_PRODUCTION ? '' : '-test'}`

export const AURA_NODE_URL = IS_PRODUCTION
  ? 'https://aura-node.brightid.org'
  : 'https://aura-test.brightid.org'
