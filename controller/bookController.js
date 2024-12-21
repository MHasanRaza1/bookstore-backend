import Book from '../model/bookModel.js';

export const getBook = async (req,res)=>{
    try{
        const book = await Book.find();
        res.status(200).json(book);
    }
    catch(err){
        res.status(500).send({status:500, message:"Something went wrong"});
    }
}