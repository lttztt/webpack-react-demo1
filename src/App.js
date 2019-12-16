import React from 'react'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: 'app 组件'
    }
  }

  render(){
    return <div>
  <h1>{this.state.name}</h1>
    </div>
  }
}