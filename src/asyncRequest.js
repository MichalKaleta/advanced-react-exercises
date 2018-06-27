
export function asyncRequest(url){
  
  return  fetch(url)
    .then( response => response.json()  )
    .catch( error => console.error('Error:', error) )
}



