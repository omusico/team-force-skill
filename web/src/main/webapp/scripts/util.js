var utils=function(){

    return{
        activeMenuById : function(id_menu){
            $("li.main_menu.active").removeClass("active");
            $("#"+id_menu).addClass("active");
        }
    }

}($);