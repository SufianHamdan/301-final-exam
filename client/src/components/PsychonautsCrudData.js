import React, { Component } from 'react'

export class PsychonautsCrudData extends Component {
  render() {
    return (
      this.props.psychonautsAPIData.map((obj, idx) => {
        return (
          <div key={idx}>
            <button onClick={e => this.props.deleteItem(obj.slug)}>Delete</button>
            <button onClick={e => this.props.showUpdateForm(obj.name, obj.gender, obj.slug)}>Update</button>
            <h3>{obj.name}</h3>
            <p>{obj.gender}</p>
            <>
              {obj.psiPowers.data.map((data, idx) => {
                return(

                  <p key={idx}>{data.name}</p>
                )
              })

            }
            </>

          </div>
        )
      })
    )
  }
}

export default PsychonautsCrudData;
