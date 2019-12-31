import {endpoint} from './config';

export const APIpost = async()=>{
    let request = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

   return await fetch(`${endpoint}posts`, request)
  .then(response => response.json())
} 