if('serviceWorker' in navigator){
    navigator
        .serviceWorker
            .register('serviceworker.js').then(res => {
                console.log('sucesos completed' , res)
            }).catch(err =>{
                console.log('ridim' , err)
            })
}else{
    console.log('Service worker is not supported !')
}