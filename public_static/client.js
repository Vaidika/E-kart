/**
 * Created by Vaidika Tibrewal on 4/22/2017.
 */
function change(element){


    $.post('/addto',{id:element.id},function(data){
    })
}
function remove(element){
    $.post('/remove',{id:element.id},function(data){

    })
}
$.get('/fetchbrand',{id:id},function(data){

})