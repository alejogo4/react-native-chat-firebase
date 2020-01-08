import React,{Component} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

import firebaseSDK from './../../firebase/firebaseSDK';

export default class Chat extends Component{

    state = {
        messages:[],
        uid:''
    }

    get user() {
        return {
          name: this.props.navigation.state.params.name,
          email: this.props.navigation.state.params.email,
          avatar: this.props.navigation.state.params.avatar,
          id: this.state.uid,
          _id: this.state.uid
        };
      }



      async componentDidMount() {
         this.setState({
            uid: await firebaseSDK.uid()
         })
         setInterval(async()=>{
            this.setState({
              messages: await firebaseSDK.getData()
          })
         },4000);
      }

      

      async onSend(messages = []) {
        let message = {
            _id:messages[0].user._id+Math.random()*10000,
            text : messages[0].text,
            user :messages[0].user,
            createdAt:new Date()
        }
        
        firebaseSDK.send(message);
       
        this.getDataChats();
        /*this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))*/
      }

    render(){
        return <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)} 
        user = {this.user}></GiftedChat>
    }
}