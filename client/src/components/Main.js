import axios from 'axios';
import PsychonautsData from './PsychonautsData'

import React, { Component } from 'react';


export class Main extends Component {
  constructor(props){
    super(props);

    this.state= {
      url: process.env.REACT_APP_SERVER_URL,
      psychonautsAPIData: [],
      showPsychonautsAPIData: false,
      showCreateFavoriteMessage: false,
      message: '',
    }
  }

  componentDidMount = async () => {

    const getRequest = await axios.get(`${this.state.url}/get-characters`);
   
    this.setState ({
      psychonautsAPIData: getRequest.data,
      showPsychonautsAPIData: true
    })
  }

  createFavoriteItem = async (data) => {
    const postRequest = await axios.get(`${this.state.url}/favorite`, data);

    this.setState ({
      showCreateFavoriteMessage: true,
      message: postRequest.data
    })
  }

  render() {
    alert('sad');
    console.log(this.state.psychonautsAPIData);
    return (
      <>
      {this.state.showCreateFavoriteMessage &&
        <h2>{this.state.message}</h2>
      }
       {this.state.showPsychonautsAPIData &&
        <PsychonautsData 
        psychonautsAPIData = {this.state.psychonautsAPIData}
        createFavoriteItem = {this.createFavoriteItem}
        />
       }

       <p>sdasdasda</p>
      </>
    )
  }
}

export default Main
