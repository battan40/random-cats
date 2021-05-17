import { cleanApiData } from './Utils.js'

export const fetchKitties = () => {
  return fetch('https://thatcopy.pw/catapi/rest/')
         .then(response => response.json())
         .then(data => cleanApiData(data))
         .catch(err => err.message)
}
