var Models = require('../models');


var createNewBlog = function(objToSave,callback) {
    new Models.Blog (objToSave).save(callback);
};
var viewBlog = function(callback) {
    Models.Blog.find({},{_id:0,__v:0},{},callback);
};
var findBlog = function(criteria, projection, options, callback) {
    Models.Blog.findOne(criteria, projection, options, callback);
};
var viewOneBlog = function(criteria, projection, options, callback) {
    Models.Blog.findOne(criteria, projection, options, callback);
};
var updateBlog = function (criteria, dataToSet, options, callback) {
    console.log(criteria,dataToSet,"criteria,dataToSet");
    Models.Blog.findOneAndUpdate(criteria, dataToSet, options, callback);
};
var deleteBlog = function (criteria, callback) {
    Models.Blog.findOneAndRemove(criteria, callback);
};
module.exports = {
createNewBlog : createNewBlog,
viewBlog : viewBlog,
viewOneBlog :viewOneBlog,
updateBlog :updateBlog,
deleteBlog :deleteBlog,
findBlog : findBlog,
}