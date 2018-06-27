import React ,{Component} from 'react';
import { Link } from 'react-router-dom';

import { asyncRequest } from './asyncRequest';
import requireAuth from './requireAuth';

class People extends Component{


  constructor(props){
    super(props)

    this.state= { people: "nikt" }
    }
  
  componentDidMount(){
    this.getData()
  }
 
  getData(){

    asyncRequest('../../db.json').then( response =>{ 
          this.setState( { people: response } )
        })
  }

  render(){
      const { id,name, surname } =this.state.people[ this.props.match.params.id] || '';

      return ( 
        <div>
          <nav>
            <Link to="/people/1"><button>Michal</button></Link>
            <Link to="/people/2"><button>Malwina</button></Link>
            <Link to="/people/3"><button>Zionek</button></Link>
            
          </nav>
          <table>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{surname}</td>
            </tr>
          </table>
        </div>
      )
  }
}
export default    requireAuth(People)