/*
  Collection of books
*/

import React from 'react';
import Book from './Book'

class Books extends React.Component {
  render() {
    return this.props.bookInfo.map((book, index) => (
      <Book
        key={index + book.title}
        title={book.title}
        description={book.description}
        categories={book.categories}
        image={book.imageLinks && book.imageLinks.thumbnail}
        site={book.canonicalVolumeLink}
      ></Book>
    ));
  }
}

export default Books;
