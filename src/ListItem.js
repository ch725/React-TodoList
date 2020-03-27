import React, { Component } from 'react'
import './ListItem.css'

class ListItem extends Component {
  deleteTask(name) {
    this.props.deleteItem(name)
  }
  completeTask(name) {
    this.props.completeTask(name)
  }
  render() {
    return (
      <ul>
        {
          this.props.data.map(element => {
            return (
              <li className="listItem" key={element.name}>
                <input type="checkbox"
                  checked={element.done === true}
                  onChange={this.completeTask.bind(this, element.name)}/>
                <span style={{color: element.done === false ? "black" : "gray"}}>{element.name}</span>
                <button className="delete" onClick={this.deleteTask.bind(this, element.name)}>Delete</button>
              </li>)
        })
      }
      </ul>
    )
  }
}

export default ListItem