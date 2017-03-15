import {API_URL} from './constants'
import axios from 'axios'

export default class Api {
  static get(route){
      axios.get(`${API_URL}${route}`);
  }
}
