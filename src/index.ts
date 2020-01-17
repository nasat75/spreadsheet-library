// import './app'
import {getTitleName, getISBN, generateURL, throwAPI} from './app'

declare const global: {
  [x: string]: any
}

global.getTitleName = () => {
  return getTitleName()
}

global.getISBN = (title: string) => {
  return getISBN(title)
}

global.generateURL = (searchType: string, args: string) => {
  return generateURL(searchType, args)
}

global.throwAPI = (apiUrl: string) => {
  return throwAPI(apiUrl)
}


