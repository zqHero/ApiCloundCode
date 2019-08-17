let resultData = [
    {text: "item", index: "0"},
    {text: "item", index: "1"},
    {text: "item", index: "2"},
    {text: "item", index: "3"},
    {text: "item", index: "4"},
    {text: "item", index: "5"},
    {text: "item", index: "6"},
    {text: "item", index: "7"},
    {text: "item", index: "8"},
    {text: "item", index: "9"},
    {text: "item", index: "10"},
    {text: "item", index: "11"},
    {text: "item", index: "12"},
    {text: "item", index: "13"},
    {text: "item", index: "14"},
    {text: "item", index: "15"},
    {text: "item", index: "16"},
    {text: "item", index: "17"},
    {text: "item", index: "18"},
    {text: "item", index: "18"},
    {text: "item", index: "20"},
    {text: "item", index: "21"},
    {text: "item", index: "22"},
    {text: "item", index: "23"},
    {text: "item", index: "24"},
];

function getListData(pageNum,callBack) {
    setTimeout(function () {
        let response = {
            code:505,
            data:[],
            msg:""
        };
        //返回数据：
        let data = resultData.slice(pageNum * 5, pageNum * 5 + 5);
        if (data.length > 0){
            response.code = 200;
            response.data = data;
            response.msg = "获取数据成功";
        }else{
            response.code = 500;
            response.data = data;
            response.msg = "已无数据";
        }
        callBack(response)//一次  取五条数据
    },2000);
}