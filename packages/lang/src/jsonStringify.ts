import { JSON as __JSON__ } from './JSON'

export const jsonStringify = __JSON__.stringify as typeof JSON.stringify
export default jsonStringify
