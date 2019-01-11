const apiMiddleware = (store) => (next) => (action) => {
    if (!action.meta || action.meta.type !== 'api'){
        return next(action);
    }
    
    //find the url..
    const {url} = action.meta;
    const fetchOptions = Object.assign({}, action.meta);

    //api request
    fetch(url, fetchOptions)
        //convert the response to json
        .then(resp => resp.json())
        .then(json =>{            
            //respond backc to the user..
            //by dispatching the original action without
            //the meta object
            let newAction = Object.assign({}, action, {
                payload: json.dateString
            });
            delete newAction.meta;
            store.dispatch(newAction);
        });
}

export default apiMiddleware;