/* Perspective HQ loader – keep this file stable. It pulls the latest app.html from GitHub Pages and mounts it. */
(function(){
  var BASE="https://perspectivefilm.github.io/perspective-system/";
  var host=document.getElementById("pf-host");if(!host){host=document.createElement("div");host.id="pf-host";(document.currentScript&&document.currentScript.parentNode||document.body).appendChild(host)}
  host.innerHTML='<div style="min-height:60vh;display:flex;align-items:center;justify-content:center;background:#0E0F10;color:#8D8E89;font:600 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase">Perspective Film HQ</div>';
  function mount(html){
    var doc=new DOMParser().parseFromString(html,"text/html");
    [].forEach.call(doc.head.children,function(n){if(/^(STYLE|LINK)$/.test(n.tagName))document.head.appendChild(document.importNode(n,true))});
    host.innerHTML="";
    [].forEach.call(doc.body.childNodes,function(n){
      if(n.tagName==="SCRIPT"){var s=document.createElement("script");[].forEach.call(n.attributes,function(a){s.setAttribute(a.name,a.value)});s.textContent=n.textContent;host.appendChild(s)}
      else host.appendChild(document.importNode(n,true));
    });
  }
  function fail(){host.innerHTML='<div style="min-height:60vh;display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center;background:#0E0F10;color:#ECECE6;font:15px system-ui,sans-serif">Couldn\'t load. Check your internet.<button onclick="location.reload()" style="font:inherit;font-weight:600;border:0;border-radius:999px;padding:10px 18px;cursor:pointer">Try again</button></div>'}
  fetch(BASE+"app.html?v="+Math.floor(Date.now()/60000),{cache:"no-cache"}).then(function(r){if(!r.ok)throw 0;return r.text()}).then(mount).catch(fail);
})();
