const React = require('react');

class DelayedButton extends React.Component{
  constructor(){
    super()
    this.handleOnDelayedClick = this.handleOnDelayedClick.bind(this)
  }

  handleOnDelayedClick(event){
    event.persist()
    setTimeout(function(){this.props.onDelayedClick(event)}.bind(this), this.props.delay)
  }

  render(){
    return (
      <button onClick={this.handleOnDelayedClick} />
    )
  }

}


module.exports = DelayedButton;
