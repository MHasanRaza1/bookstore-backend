import express from 'express';
import { getBook } from '../controller/bookController.js';

const bookRoutes = express.Router();

bookRoutes.get('/', getBook);

export default bookRoutes;