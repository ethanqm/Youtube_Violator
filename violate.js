//stock embed at 100% size, with current url
let embed = `<iframe width=100% height=100% src="${window.location.href}" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; 
autoplay; 
clipboard-write; 
encrypted-media; 
gyroscope; 
picture-in-picture; 
web-share" 
allowfullscreen>
</iframe>`


//embed video over movie_player
document.querySelector("[id=movie_player]").replaceWith(embed):

//remove error-screen
document.querySelector("id=error-screen").remove():
