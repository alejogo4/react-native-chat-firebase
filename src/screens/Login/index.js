import React, { Component } from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native';
import firebaseSDK from '../../firebase/firebaseSDK';
import { Container, Text, Body, Button, Icon, H1, Form, Item, Input, Content } from 'native-base';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login'
    };

    state = {
        name: 'Alice',
        email: 'test@live.com',
        password: '123456',
        avatar: ''
    };

    onPressLogin = async () => {
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            avatar: this.state.avatar
        };

        const response = firebaseSDK.login(
            user,
            this.loginSuccess,
            this.loginFailed
        );
    };

    loginSuccess = () => {
        console.log('login successful, navigate to chat.');
        this.props.navigation.navigate('Chat', {
            name: this.state.name,
            email: this.state.email,
            avatar: this.state.avatar
        });
    };

    loginFailed = () => {
        alert('Error al entrar, usuarios incorrectos');
    };



    render() {
        return (
            <Container>
                <Content padder>
                    <H1 style={styles.title}>Iniciar Sesión</H1>
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

                            <Button iconRight rounded block success style={styles.my_s} onPress={this.onPressLogin}>
                                <Text>Ingresar</Text>
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