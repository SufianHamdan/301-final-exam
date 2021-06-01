import React, { Component } from 'react'

export class updateItemForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.updateItem}>
        <input  type="text" value={this.props.name} onChange={this.props.updateNameState}/>
        <input  type="text" value={this.props.gender} onChange={this.props.updategenderState}/>
        <input  type="submit" value="Submit"/>
      </form>
    )
  }
}

export default updateItemForm;
