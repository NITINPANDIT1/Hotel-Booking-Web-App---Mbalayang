import { getDetailsPageData } from "./actionTypes";
export const getDetailsData=(ele)=>{
    return{
        type:getDetailsPageData,
        payload:ele
    }
}