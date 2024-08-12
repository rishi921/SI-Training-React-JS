import { useContext, useEffect, useState } from "react";
import { getBooks } from "../../../../assets/data/books";
import { BooksContext } from "../../../../store/contextStore";

const readerBooks = (books) => {
    return books.map((book) => {
        return (
            <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.rating}</td>
            </tr>
        );
    });
};

const BooksList = () => {
    const [books, setBooks] = useContext(BooksContext);

    useEffect(() => {
        getBooks()
            .then((data) => setBooks(data))
            .catch((error) => console.error(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>Books</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>{readerBooks(books)}</tbody>
            </table>
        </>
    );
};

export default BooksList;