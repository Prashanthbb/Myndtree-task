var mammoth = require("mammoth");

exports.dashboard=function(req,res){
  if(req.files.upfile){
    var file = req.files.upfile,
      name = file.name,
      type = file.mimetype;
    let insert_data = {
      Name:req.body.Name,
      Experience:req.body.Experience,
      Adress:req.body.Adress,
      Email:req.body.Email,
      Description:req.body.Description

    }
    var uploadpath = __dirname + '/uploads/' + name;
    file.mv(uploadpath,function(err){
      if(err){
        console.log("File Upload Failed",name,err);
        res.send("Error Occured!")
      }
      else {
        console.log("File Uploaded",name);
        mammoth.convertToHtml({path: uploadpath})
        .then(function(result){
            var html = result.value; // The generated HTML
            var messages = result.messages; // Any messages, such as warnings during conversion
            console.log(html)
            console.log(messages)
            res.render(__dirname + "/../views/dashboard.ejs",{result : insert_data,html:html});
        })
        .done();
      }
    });
  }
  else {
    res.send("No File selected !");
    res.end();
  };
}
