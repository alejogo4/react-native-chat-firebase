import React, { Component } from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native';
import firebaseSDK from '../../firebase/firebaseSDK';
import { Container, Text, Body, Button, Icon, H1, Form, Item, Input, Content } from 'native-base';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Registro'
    };

    state = {
        name: '',
        email: '',
        password: '',
        avatar: ''
    };

    clearForm(){
        this.setState({
            name:'',
            email : '',
            password : ''
        })
    }

    onPressCreate =async()=>{
        try {
            const user ={
                name : this.state.name,
                email : this.state.email,
                password : this.state.password
            }

            await firebaseSDK.createAccount(user);
            this.clearForm();
            
        } catch (error) {
            
        }
    }



    render() {
        return (
            <Container>
                <Content padder>
                    <H1 style={styles.title}>Crear Usuario</H1>
                    <KeyboardAvoidingView behavior="padding" enabled>
                        <Form>
                            <Item rounded style={styles.my_s}
                            >
                                <Icon active name="mail" style={{ color: "gray" }} />
                                <Input autoCapitalize="none" value={this.state.email} onChangeText={(email) => this.setState({ email })} placeholder="Correo" placeholderTextColor="gray" />
                            </Item>
                            <Item rounded style={styles.my_s}>
                                <Icon active name="lock" style={{ color: "gray" }} />
                                <Input autoCapitalize="none" value={this.state.password} onChangeText={(password) => { this.setState({ password }) }} placeholder="Contraseña" placeholderTextColor="gray" />
                            </Item>
                            <Item rounded style={styles.my_s}>
                                <Icon active name="person" style={{ color: "gray" }} />
                                <Input autoCapitalize="none" value={this.state.name} onChangeText={(name) => { this.setState({ name }) }} placeholder="Usuario" placeholderTextColor="gray" />
                            </Item>
                            <Button iconRight rounded block success style={styles.my_s} onPress={this.onPressCreate}>
                                <Text>Create</Text>
                                <Icon name='arrow-forward' />
                            </Button>
                        </Form>
                    </KeyboardAvoidingView>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    title: {
        marginVertical: 20,
        fontSize: 32
    },
    my_s: {
        marginVertical: 10
    }
});