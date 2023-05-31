let initialdata={
    detailsPageData:{}
    }
    
    let reducer=(store = initialdata,action)=>{
        if(action.type==="getDetailsPageData"){
            return{
                ...store,detailsPageData:action.payload
            }
        }
    
        return store;
    }
    export {reducer}