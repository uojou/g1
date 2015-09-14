GM.upload = function (cfg) {
	var _fn = {
		extend : Manifold.F.extend,
		$ : function(id) {
			return document.getElementById(id);
		},
		on:function(tgt, eventType, eventFn){
			if(tgt.addEventListener){
				tgt.addEventListener(eventType, eventFn, false);
			}else if(tgt.attachEvent){
				tgt.attachEvent("on" + eventType, eventFn);
			}else{
				tgt["on" + eventType] = eventFn;
			}
			
			switch(eventType){
				case "submit":
					if(window.addEventListener){
						tgt.submit = eventFn;
					}else if(window.attachEvent){
						tgt.onsubmit = eventFn;
					}
				break;
			}
			
		},
		trim:function(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
	}
    var Self = this;
    var _cfg = {
        file_inputID: '',
        preview_boxID: '',
        data_lst: null,
        page_wrap: '.j_page_wrap',
        modelLst_reset: 1
    }
	
    var outer = {
        create_html : null,
        success:null,
        onchange:null,
        onchangeBefore:null,
        finishCallback:null,
        finishCallbackBefore:null
    }
    
    _fn.extend(_cfg, outer, cfg);
    
    return outer;
}