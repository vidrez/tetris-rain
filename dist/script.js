var cube = [];
var doodle = ['5,7,8,9','1,4,7','1,4,7,8','1,4,5,8','1,2,4,5'];
var rot = ['0','90','180','270','360'];
max_cubes = 30;
counter = 0;


setInterval(()=>{
  if(counter < max_cubes){
    let h = rand(20);
    let time = (new Date()).getTime();
    remove_after(time);
    //console.log(time);
    let el = $('<css-doodle> :doodle{@grid:3 / 40px;grid-gap: 1.5px;} @nth('+doodle[rand(5)]+'){ background:'+chroma.random()+'; }</css-doodle>');
    el.attr('id',time).addClass('cube');
    el.css({'top': h+'vh','right':rand(100)+'vw','transform':'rotate('+rot[rand(5)]+'deg)'});
    el.animate({'top':h+60+"vh"},1990);
    el.appendTo($('body'));
    cube.push(el);
    counter++;
    //console.log(counter);
  }
},100);

function remove_after(t){
  setTimeout(()=>{
    //console.log('removed ' + t);
      $('#'+t).remove();
      counter--;
  },1900);
  
}

function rand(n){
  return Math.round(Math.random()*n);
}