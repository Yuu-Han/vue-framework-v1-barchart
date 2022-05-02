import * as d3 from "d3"

let Data = null // 初始加载进来的数据

export function deepcopy(obj) {
    let obj_ = JSON.stringify(obj)
    return JSON.parse(obj_);
}

export async function loadData(){
    let data = await d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv").then()
    Data = data
}

export function get_data() {
    return Data;
}