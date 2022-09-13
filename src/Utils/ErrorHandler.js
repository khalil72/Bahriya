import { toast } from "./Toast";

export const ErrorHandler = (data)=>{
    if(!data)return
    for (const key in data) {
        const child = data[key];
        console.log(child);
        if(child.length>1){
  child.map(c=>{
    toast(c,"error");
  })
        }else{
        toast(child[0],"error");
  
        }
    }
}