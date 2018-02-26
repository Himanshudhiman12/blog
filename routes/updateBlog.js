var Controller = require('../controllers');
const Joi = require('joi');
const validator = {
    topic1 : Joi.string().required(),
    topic : Joi.string().required(),
    content : Joi.string().required(),
};

module.exports = function(app){
    app.route('/updateBlog').patch((req,res)=>{
        const bodyValidation = Joi.validate(req.body, validator);
                  if (bodyValidation.error){
                    console.log("inside validation");
                res.status(400).send({"Message":bodyValidation.error.message});
                return;
                  }
           //////////////Finds the existing topic which needs to be updated       
                Controller.blogcontroller.findBlog(req.body.topic1 ,function(err, data){
                    console.log(err,data);
                    if (err){
                        res.status(400).send({"Message":err});
                        return;
                    }
                    if(data && data.length != '0'){
                        res.status(401).send({"Message":"Already Exists"})
                        return;
                    }
                    else{
                        Controller.blogcontroller.updateBlog(req.body.topic ,{"topic":req.body.topic1,"content":req.body.content},function(err, data){
                            console.log(err,data);
                            if (err){
                                res.status(400).send({"Message":err});
                                return;
                            }
                            else{
                        res.status(200).send({"Message":"Updated Succesfully","data": data});
                    }
                         });
            }
                 });
            });
        }
        
    