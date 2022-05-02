import $ from "jquery";
import * as d3 from "d3";

//储存注册信息
const PageSize = function(){    //在渲染<App/>前定义，否则mounted无法获得PageSize
    let width = document.documentElement.clientWidth;
    let height = Math.min( document.body.clientHeight, width * 9 / 16);
    width = height * 16 / 9;
    let size = {width:width, height:height};
    return size;
}

// 设定全局常量
const color = "red"

export default {
    PageSize,
    color,
}