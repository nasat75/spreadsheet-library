// import './app'
import {getBookInfo} from './Main'

declare const global: {
  [x: string]: any
}

global.getBookInfo = () => {
  return getBookInfo();
}