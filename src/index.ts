// import './app'
import {getBookInfo} from './app'

declare const global: {
  [x: string]: any
}

global.getBookInfo = () => {
  return getBookInfo();
}
