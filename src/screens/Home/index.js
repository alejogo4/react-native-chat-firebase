import React, { Component } from "react";
import { Container, Content, Button, Icon, Text, ListItem, List, Left, Right } from 'native-base';
import { FlatList,View,ActivityIndicator, StatusBar} from 'react-native';

import { connect } from 'react-redux';
import { getPosts } from './../../redux/actions/posts';


class Home extends Component {

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        this.props.getAllPosts();
    }


    render() {
        const navigate = this.props.navigation;
        return (
            <Container>
                <StatusBar backgroundColor="red" barStyle="light-content" />
                <Content>
                    <Button onPress={() => navigate.openDrawer()} info>
                        <Icon name="ios-arrow-back" />
                    </Button>


                    <Button onPress={() => this.props.navigation.navigate('Chat')}>
                        <Text>Chat</Text>
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

const mapDispatchToProps = dispatch => {
    return {
        getAllPosts: () => dispatch(getPosts())
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Home);