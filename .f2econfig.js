module.exports = {
    port: 80,
    host: 'exam2.webfuture.cn',
    livereload: false,
    onRoute: pathname => pathname || 'index.html',
    middlewares: [
        {
            middleware: 'template'
        }
    ]
}