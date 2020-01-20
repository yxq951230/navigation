var jCate = byId("J_cate"),
    menuItems = jCate.getElementsByClassName("cate_menu_item"),
    jpoctn =byId("J_popCtn"),
    cate_part =document.getElementsByClassName("cate_part"),
    banner = byId("banner");



function addHandler(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, true);
    }
    else if (element.attachEvent) {
        element.attachEvent('on' + type, handler);
    }
    else {
        element['on' + type] = handler;
    }
}
function byId(id){
    return typeof (id)==="string" ? document.getElementById(id):id;
}

//鼠标滑过主菜单
for (var m = 0,idx,mlen =menuItems.length;m<mlen;m++){
    //给所有主菜单定义属性，标明它的索引
    menuItems[m].setAttribute("data-index",m)
    addHandler(menuItems[m],"mouseover",function () {
        //显示主菜单所在背景
        jpoctn.className ="Js_popCtn cate_pop";
        //获取当前主菜单的索引
        idx = this.getAttribute("data-index");
        for (var j =0;j<menuItems.length;j++){
            cate_part[j].style.display="none";
            menuItems[j].style.background="none";
        }
        //J_popCtn.style.display="block";
        cate_part[idx].style.display="block";
        menuItems[idx].style.background="rgba(0,0,0,0.1)";
    });
}
//鼠标离开banner，隐藏子菜单
addHandler(banner,"mouseout",function () {
    jpoctn.className="J_popCtn hide";
})
addHandler(jpoctn,"mouseout",function () {
    jpoctn.className="J_popCtn hide"
})
addHandler(jpoctn,"mouseover",function () {
    jpoctn.className="J_popCtn hide"
})
//鼠标滑入二级菜单时，二级菜单隐藏
addHandler(jpoctn,"mouseover",function () {
    this.className = "J_popCtn";
    jpoctn.className ="Js_popCtn cate_pop";
})
//鼠标离开二级菜单时，二级菜单隐藏
addHandler(jpoctn,"mouseout",function () {
    this.className = "J_popCtn hide";
})
