import React ,{Component} from  'react'

export default ( ChildComponent ) => {
  
  class ComposedComponent extends Component {

    componentDidMount(){
      
          if(!this.props.isLoged){
            this.props.history.push('/')
          }
      }
    componentDidUpdate(){
        console.log(this.props.isLoged)
        if(!this.props.isLoged){
          this.props.history.push('/')
        }
    }

      render(){
        return <ChildComponent {...this.props} />
      }
  }

  return ComposedComponent;
}