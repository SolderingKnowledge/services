const myFunc =  () => {
    console.log(`App listening in ${process.env.NODE_ENV} mode on port:${process.env.PORT || 5000}`); 
}


exports.myFunc = myFunc;