import "./App.css";
import Contacts from "./Contacts";
import React, {Component} from "react";

class App extends Component {

  constructor(props){
    super(props);
    this.addContact=this.addContact.bind(this)
  }

  state = {
    contacts: [
      {
        key:1,
        name: 'Furkan',
        phone: '89798798',
      },
      {
        key:2,
        name: 'Hakan',
        phone: '123123',
      },
    ]
  };


  addContact(contact){

    const{contacts}=this.state;
    contacts.push(contact)

    this.setState({
      contacts:contacts
    });
  }



  render() {
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;
