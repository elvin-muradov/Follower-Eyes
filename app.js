let blacks = document.querySelectorAll('.black');

document.addEventListener('mousemove',function(event){
  let x = event.clientX*100/window.innerWidth + '%';
  let y = event.clientY*100/window.innerHeight + '%';

  blacks.forEach(black => {
    black.style.left = x;
    black.style.top = y;
    black.style.transform = `translate(-${x},-${y})`;
  })
})
