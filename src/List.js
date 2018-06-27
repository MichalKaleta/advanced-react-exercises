import React ,{Component} from 'react';
import { asyncRequest } from './asyncRequest';
import Data from './Data'

 class List extends Component {
  constructor(props){
    super(props)

    this.state={ jsonData: null };
  }

  componentDidMount(){

    asyncRequest('manifest.json').then( res =>{
      
      console.log(res)
      this.setState( { jsonData : res } )  
    
    })
  }

  _setData(){
    
    this.refs.input.value ='manifest.json' ;  
 }

  _getData(url){

   asyncRequest( url )
      .then(res => {  this.setState( { jsonData: res } )  });

  }

  render() {
      return  <div>
                <p>test</p>
                <input type="text" ref="input" val='manifest.json' />
                <button onClick= {  ()=> {this._setData()}  } >SET DATA</button>
                <button onClick= {  ()=> {this._getData('manifest.json' )}  } >GET DATA</button>
                <Data jsonData = { this.state.jsonData  } />

                <div className ='container'>
                  <nav></nav>
                </div>
              </div>
  }
}

export default List;