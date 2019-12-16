import React from 'react'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: 'app 组件'
    }
  }

  render(){
    let children = [];
    for(let i = 0; i < 3; i++){
      children.push(<li key={i}>{i}</li>)
    }

    let trs = [];

    for(let i = 1; i < 10; i++){
      let child = [];
      for(let j = i; j < 10; j++){
        child.push(<td key={Math.random()}>{i} * {j} = {i * j}</td>)
      }
      trs.push(<tr key={i*i}>{child}</tr>)
    }

    return <div>
      <h1>{this.state.name}</h1>
      <div className="box">
        <ul>
          {children}
        </ul>
        <div>
          <h3>99乘法表</h3>
          <table className="myTable" border="1">
            <tbody>{trs}</tbody>
          </table>
        </div>
      </div>
    </div>
  }
}