import React, { Component } from 'react';
import { BookBar } from '../Components/BookBar';

import Books from '../LoginSignUP/Books';
class BookPage extends Component {
    render() {
        return (
            <div>
                 <BookBar/>
                <Books/>
            </div>
        );
    }
}

export default BookPage;