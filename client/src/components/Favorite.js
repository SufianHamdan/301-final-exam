import React, { Component } from 'react';
import axios from 'axios';
import PsychonautsCrudData from './PsychonautsCrudData';
import updateItemForm from './updateItemForm';

export class Favorite extends Component {

  constructor(props){
    super(props);

    this.state= {
      url: process.env.REACT_APP_SERVER_URL,
      psychonautsCrudData: [],
      showPsychonautsCrudData: false,
      showUpdateFormComponent: false,
      charName: '',
      charGender: '',
      slug: ''

    }
  }

  componentDidMount = async () => {

    const getRequest = await axios.get(`${this.state.url}/favorite`);
   
    this.setState ({
      psychonautsCrudData: getRequest.data,
      showPsychonautsCrudData: true
    })
  }

  showUpdateForm = (name, gender, slug) => {
    this.setState ({
      showUpdateFormComponent: true,
      charName: name,
      charGender: gender,
      slug: slug
    })
  }

  updateNameState = (e) => this.setState({name: e.target.value});
  updategenderState = (e) => this.setState({gender: e.target.value});

  updateItem = async (e) => {
    const body ={
      name: this.state.charName,
      gender: this.state.charGender
    }
    const updateRequest = await axios.put(`${this.state.url}/favorite/${this.state.slug}`, body);

    this.setState({
      psychonautsCrudData: updateRequest.data
    })
  }

  deleteItem = async (slug) => {
    const deleteRequest = await axios.delete(`${this.state.url}/favorite/${slug}`);

    this.setState ({
      psychonautsCrudData: deleteRequest.data
    })
  }


  render() {
    return (
      <>
      {this.state.showUpdateFormComponent &&
        <updateItemForm 
        updateItem = {this.updateItem}
        name={this.state.charName}
        gender={this.state.charGender}
        updateNameState ={this.updateNameState}
        updategenderState ={this.updategenderState}
        
        />
      }
        {this.state.showPsychonautsCrudData &&
          <PsychonautsCrudData 
          psychonautsCrudData = {this.state.psychonautsCrudData}
          showUpdateForm = {this.showUpdateForm}
          deleteItem = {this.deleteItem}
          />
        }
      </>
    )
  }
}

export default Favorite
