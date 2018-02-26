var Controller = require('../controllers');
const Joi = require('joi');

module.exports = function(app){
    app.route('/viewBlog').get(function (req,res){
            Controller.blogcontroller.viewBlog(function(err, data){
                console.log(err,data)
                if (err){
                    res.status(400).send({"Message":err})
                    return;
                }
                else{
            res.status(200).send(data)
        }
             });
            });
        }
    