import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import { Container} from "../components/Layout";
import SavedResult from "../components/SavedResult"

class SavedBooks extends Component {
    state = {
        savedBooks: []
    };

    componentMounted() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    deleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentMounted())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                <Header />
                <Container>
                    <SavedResult savedBooks={this.state.savedBooks} deleteButton={this.deleteButton} />
                </Container>
            </Container>
        )
    }
}

export default SavedBooks; 