const React = require('react');

class CoordinatesButton extends React.Component{
  constructor(props){
    super()
    this.handleReceiveCoordinates = this.handleReceiveCoordinates.bind(this)
  }

  handleReceiveCoordinates(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return (
      <button onClick={this.handleReceiveCoordinates} />
    )
  }
}


module.exports = CoordinatesButton
