var ws = new WebSocket('ws://192.168.1.120:8083/app'); 
// var ws = new WebSocket('ws://192.168.1.10:8181'); 
ws.onopen = function(){
    ws.send('已打开');
};
ws.onmessage = function(evt){
    if(evt.data != '1'){
        var index = top.layer.open({
        type: 2,
        area: ['90%', '86%'],
        title: '答题页',
        fixed: false, //不固定
        maxmin: true,
        content: evt.data,
        cancel:function(){
        if(!confirm('您确定要关闭此页面吗')){
            return false;
        }
        }
    });
    }
    if(evt.data == '1'){
        layer.close(layer.index)
    }    
};