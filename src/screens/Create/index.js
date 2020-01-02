import React, { Component } from "react";
import { Container, Content, Button, Icon, Text, ListItem, List, Left, Right } from 'native-base';
import { FlatList,View,ActivityIndicator  } from 'react-native';

import { connect } from 'react-redux';


class Create extends Component {

    componentDidMount() {
    
    }

   


    render() {
        return (

            <Container>
                <Content>
                    <Button onPress={() => this.props.navigation.openDrawer()} info>
                        <Icon name="ios-arrow-back" />
                    </Button>
                    {
                        this.props.loading ? 
                        <View>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View> :
                            <List>
                                <FlatList data={this.props.posts}
                                    renderItem={({ item }) =>
                                        <ListItem>
                                            <Left>
                                                <Text>{item.title}</Text>
                                            </Left>
                                            <Right>
                                                <Icon name="arrow-forward" />
                                            </Right>
                                        </ListItem>
                                    }
                                    keyExtractor={item => item.id}
                                />
                            </List>
                    }
                </Content>
            </Container>
        );
    }
}


const mapStateProps = state => {
    return {
        posts: state.posts.posts,
        error: state.posts.error,
        loading: state.posts.loading
    }
}

const mapDispatchToProps = dispatch => {return{}}
export default connect(mapStateProps, mapDispatchToProps)(Create);