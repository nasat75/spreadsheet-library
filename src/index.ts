// import './app'
import {getUpdatedCalander, getTitleName, getISBN, generateURL, throwAPI} from './app'

declare const global: {
  [x: string]: any
}

global.getUpdatedCalander = (e: any) => {
  return getUpdatedCalander(e)
}

global.getTitleName = () => {
  return getTitleName()
}

global.getISBN = (title: string) => {
  return getISBN()
}

global.generateURL = (searchType: string, args: string) => {
  return generateURL()
}

global.throwAPI(apiUrl: string) => {
  return throwAPI()
}


