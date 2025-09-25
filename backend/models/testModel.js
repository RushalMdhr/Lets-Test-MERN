import mongoose from "mongoose";

const TestSchema = mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String
    },
    array : [{
        "name":{
            type:String
        },
        'marks':{
            type:Number
        }
    }]
})

const testModel = mongoose.model('Test', TestSchema);

export default testModel;