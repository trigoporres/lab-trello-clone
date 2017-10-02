// 'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
tittle : String ,
position: {type:Number,default:0},
cards:{type:Schema.Types.ObjectId,require:true, default:[]}
},
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

module.exports = mongoose.model('List', listSchema);
