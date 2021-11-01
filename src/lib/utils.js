import { decode as udecode, encode as uencode } from "universal-base64url"

export function encode(string) {
  return uencode(string)
}

export function decode(base64) {
  return udecode(base64)
}
