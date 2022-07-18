const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    alert('clicked!!');
});

btn.addEventListener('click', function(){
    console.log('second thing!!');
});

btn.addEventListener('mouseover', function(){
    btn.innerText = 'Stop tpuching';
});

btn.addEventListener('mouseout', function(){
    btn.innerText = 'click me';
});

window.addEventListener('scroll', function(){
    console.log('stop scrolling!!!');
})