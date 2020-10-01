import { delay } from "../util/util";
import { sampleData } from "./sampleData";

export function fetchSampleData(){
    return delay(4000).then(function(){
        return Promise.resolve(sampleData);
    })
}