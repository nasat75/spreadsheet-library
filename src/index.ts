import {getUpdatedCalander} from './app'

declare const global: {
  [x: string]: any ;
}

global.getUpdatedCalander = function(e: any) {
  return getUpdatedCalander(e)
}
