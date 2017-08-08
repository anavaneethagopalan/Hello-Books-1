import express from 'express';
import Authorization from '../middleware/Authorization';
import BookController from '../controllers/Book';
import Validation from '../middleware/Validation';

const app = express.Router();

// Add a new book
app.route('/')
  .post(Authorization.isLoggedIn,
    Authorization.isAdmin,
    Validation.checkUserInput,
    BookController.create)
  .get(Authorization.isLoggedIn, BookController.getBooks);

// Modify Book Information
app.route('/:bookId')
  .put(Authorization.isLoggedIn,
    Authorization.isAdmin,
    Authorization.validBook,
    BookController.modifyBook);

export default app;
