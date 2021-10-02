
function Jquery_script() {
    let src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
    if(document.querySelector("script[src='" + src + "']")){ return; }
    let script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute('integrity',"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo");
    script.setAttribute('crossorigin',"anonymous");
    script.setAttribute('type', 'text/javascript');
    document.head.appendChild(script)
}

function Popper_script() {
    let src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
    if(document.querySelector("script[src='" + src + "']")){ return; }
    let script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute('integrity',"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1");
    script.setAttribute('crossorigin',"anonymous");
    script.setAttribute('type', 'text/javascript');
    document.body.appendChild(script)
}

function Boostrap_script() {
    let src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
    if(document.querySelector("script[src='" + src + "']")){ return; }
    let script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute('integrity',"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM");
    script.setAttribute('crossorigin',"anonymous");
    //script.setAttribute('type', 'text/javascript');
    document.body.appendChild(script)
}


function del_script(src) {
    let el = document.querySelector("script[src='" + src + "']");
    if(el){ el.remove(); }
}

function head_link1() {
    let href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"; 
    if(document.querySelector("link[href='" + href + "']")){ return; }
    let link = document.createElement('link');
    link.setAttribute('href', href);
    link.setAttribute('rel', "stylesheet");
    link.setAttribute('type', "text/css");
    link.setAttribute('integrity',"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T");
    link.setAttribute('crossorigin',"anonymous");
    document.head.appendChild(link)
}

function head_link2() {
    let href="/my-login.css"; 
    if(document.querySelector("link[href='" + href + "']")){ return; }
    let link = document.createElement('link');
    link.setAttribute('href', href);
    link.setAttribute('rel', "stylesheet");
    link.setAttribute('type', "text/css");
    document.head.appendChild(link)
}


function del_link(href) {
    let el = document.querySelector("link[href='" + href + "']");
    if(el){ el.remove(); }
}

export {
    Jquery_script,
    Popper_script,
    del_script,
    head_link1,
    head_link2,
    Boostrap_script,
    del_link,
}

