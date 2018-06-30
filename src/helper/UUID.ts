import * as uuidv4 from 'uuid/v4'

export default class UUID {
  static random (): string {
    return uuidv4()
  }
}
