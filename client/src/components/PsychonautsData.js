import React, { Component } from 'react'

export class PsychonautsData extends Component {
  render() {
    return (
      this.props.psychonautsAPIData.map((obj, idx) => {
        return (
          <div key={idx}>
            <button onClick={e => this.props.createFavoriteItem(obj)}>save to favorites</button>
            <h3>{obj.name}</h3>
            <p>{obj.gender}</p>
            <img src={obj.img} alt=""/>
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

export default PsychonautsData;
