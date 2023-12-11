//let window_url = window.location.href
//let video_code = /watch\?v=([a-zA-Z0-9\_-]*)/.exec(window_url)[1]
//let tss = /\&t=([0-9]*)s/.exec(window_url)

//stock embed at 100% size, with current url
//let v_iframe = document.createElement('iframe')
//v_iframe.width = '100%'
//v_iframe.height = '800'
//v_iframe.src = 'https://www.youtube.com/embed/'+video_code
//if (tss !== null && tss.length > 1) {v_iframe.src += "&amp; start="+tss[1]}
//v_iframe.title = 'Youtube video player'
//v_iframe.frameborder='0'
//v_iframe.allowfullscreen = ''


//
//!!VIDEO REPLACEMENT
//


function waitForElementToExist(selector) {
  return new Promise(resolve => {
    console.log("observing for "+selector)
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

waitForElementToExist("[id=error-screen]").then(e => {console.log("removing error-screen");e.remove()})
//waitForElementToExist("[id=player-container-outer]").then(e => {console.log("replacing player-container-outer");e.replaceWith(v_iframe)})
