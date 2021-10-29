const homeController=require('../controller/homeController');

function routes(app){

    app.get('/',homeController().main);
}

module.exports=routes