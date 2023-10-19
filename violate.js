

let window_url = window.location.href
let video_code = /watch\?v=(.*)&?/.exec(window_url)[1]

//stock embed at 100% size, with current url
let v_iframe = document.createElement('iframe')
v_iframe.width = '100%'
v_iframe.height = '100%'
v_iframe.src = 'https://www.youtube.com/embed/'+video_code
v_iframe.title = 'Youtube video player'
v_iframe.frameborder='0'
v_iframe.allowfullscreen = ''


function waitForElementToExist(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}


waitForElementToExist("[id=movie_player]").then(e => e.replaceWith(v_iframe))
waitForElementToExist("[id=error-screen]").then(e => e.remove())

