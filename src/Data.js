import React  from 'react';

function Data( props ) {
  
    function show(){
        console.log(props.jsonData)
        if(props.jsonData){
        console.log("sdsdsd",props.jsonData)
         var data = props.jsonData.name;
        return data
      }
    }
 
    return (
      <div> dfdfdf { show()  } </div>
      )
}



export default Data;