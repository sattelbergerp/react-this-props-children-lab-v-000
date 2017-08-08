// Code ThemedDecoration Component Here
import React from 'react'

export default class ThemedDecorations extends React.Component{
  render(){
    var theme = this.props.theme;
    return (<div>{React.Children.map(this.props.children, function(child){
      return React.cloneElement(child, {className: theme});
    })}</div>)
    //return (<div></div>);
  }
}
