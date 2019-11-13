const routesNotFound = (req, res, next) => {
    console.log('Handling 404 error');   // Log statement to indicate that this function is running 
    const err = new Error('err');
    err.status = 404;
    err.message = 'OOPS! Looks like this page doesn\'t exist.';
    next(err);
}

const globalError = (err, req, res, next) => {
    console.log('Handling a global error');  // Log statement to indicate that this function is running
    console.log(err);  

    res.locals.mesage = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    // res.send(err.message);
    res.render('error');
}


module.exports = { routesNotFound, globalError }