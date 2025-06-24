const newsRouter =  require('./news.routes')
const siteRouter =  require('./site.routes')

function route(app){

    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
}

module.exports = route;