import { BookModel } from "../../DB/model/Book.model.js";

export const AddUser = async (inputs) => {
  const data = await BookModel.insertOne({});
  return data;
};

export const CreateIndex = async (inputs) => {
  const data = await BookModel.createIndex(inputs);
  return data;
};
export const InsertAuthor = async (inputs) => {
  const data = await BookModel.insertOne(inputs);
  return data;
};

export const InsertAuthors = async (inputs) => {
  const data = await BookModel.insertMany(inputs);
  return data;
};
export const UpdateBookYear = async (inputs) => {
  const { year } = inputs;
  const data = await BookModel.updateOne(
    { title: "Future" },
    { $set: { year: year } },
  );
  return data;
};

export const GetBook = async (inputs) => {
  const { title } = inputs;
  const data = await BookModel.findOne({ title: title });
  return data;
};

export const GetAllbooksBtw = async (inputs) => {
  const { from, to } = inputs;
  const data = await BookModel.find({
    year: { $gte: Number(from), $lte: Number(to) },
  }).toArray();
  return data;
};

export const FindGenre = async (inputs) => {
  const { genres } = inputs;
  const data = await BookModel.find({ genres: genres }).toArray();
  return data;
};

export const Findlimit = async (inputs) => {
  const data = await BookModel.find({}).skip(2).limit(3).sort({year:-1}).toArray();
  return data;
};

export const FindInteger = async (inputs) => {

  const data = await BookModel.find({year:{$type:"int"}}).toArray();
  return data;
};

export const FindAllexecpt = async (inputs) => {

  const data = await BookModel.find({genres:{$nin:["Horror","Science Fiction"]}}).toArray();
  return data;
};
export const DeleteAllBooksExcept = async (inputs)=>{
    const {year} = inputs;
     const data = await BookModel.deleteMany({year:{$lt:2000}})
     return data;
}

export const Aggregate1 = async(inputs)=>{
    const data = await BookModel.aggregate([{$match:{year:{$gt:2000}}},{$sort:{year:-1}}]).toArray()
    return data;
}

export const Aggregate2 = async(inputs)=>{
    const data = await BookModel.aggregate([{$match:{year:{$gt:2000}}},{$project:{_id:0,title:1,author:1,year:1}}]).toArray()
    return data;
}

export const Aggregate3 = async(inputs)=>{
    const data = await BookModel.aggregate([{$unwind:"$genres"}]).toArray()
    return data;
}

export const Aggregate4 = async(inputs)=>{
    const data = await BookModel.aggregate([{$lookup:{
          from: "logs",
           localField: "_id",
           foreignField: "bookId",
           as: "bookLogs"
    }}]).toArray()
    return data;
}
