
var Controller = require('../controllers');
const Joi = require('joi');
const validator = {
    first_name : Joi.string().optional(),
    email : Joi.string().required(),
    topic : Joi.string().required(),
    content:Joi.string().required(),
    comments:Joi.array().optional()

};

module.exports = function(app){
    app.route('/createBlog').post(function (req,res){
        ////////////Validations that input value must be there for required field, if not it throws error//////////////
                const bodyValidation = Joi.validate(req.body, validator);
                  if (bodyValidation.error){
                    console.log("inside validation");
                res.status(400).send({"Message":bodyValidation.error.message});
                return;
            }
    //////////Finds a particular blog on the basis of topic///////////////
            Controller.blogcontroller.findBlog(req.body.topic,function(err, data){
                console.log(err,data)
                if (err){
                    res.status(400).send({"Message":err})
                    return;
                } 
                ///////////Unique Check///////////////////
    /////////if topic exists it will throw response and return////////////
                if(data && data.length != '0'){
                    res.status(401).send({"Message":"Already Exists"})
                    return;
                }
    //////////////if not exists it will save the entry to DB//////////////////
                else{
                    Controller.blogcontroller.createBlog(req.body,function(err, data){
                        console.log(err,data)
                        if (err){
                            res.status(400).send({"Message":err})
                            return;
                        }
                        else{
                    res.status(200).send({"Message":"Blog Saved Successfuly","data":data})
                }
                     });
        }
             });
            });
        }
        