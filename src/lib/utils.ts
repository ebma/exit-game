import { decode as udecode, encode as uencode } from "universal-base64url"

export function encode(string: string) {
  return uencode(string)
}

export function decode(base64: string) {
  return udecode(base64)
}
