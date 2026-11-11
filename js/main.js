(function(){
  var t=document.getElementById("mob-toggle"),d=document.getElementById("mob-drawer"),o=document.getElementById("mob-overlay"),c=document.getElementById("drawer-close");
  function openD(){d.classList.add("open");d.removeAttribute("aria-hidden");o.classList.add("visible");t.setAttribute("aria-expanded","true");t.setAttribute("aria-label","Close navigation menu");document.documentElement.style.overflow="hidden";}
  function closeD(){d.classList.remove("open");d.setAttribute("aria-hidden","true");o.classList.remove("visible");t.setAttribute("aria-expanded","false");t.setAttribute("aria-label","Open navigation menu");document.documentElement.style.overflow="";}
  if(t&&d&&o){
    t.addEventListener("click",function(){t.getAttribute("aria-expanded")==="true"?closeD():openD();});
    if(c)c.addEventListener("click",closeD);
    o.addEventListener("click",closeD);
    d.querySelectorAll("a").forEach(function(a){a.addEventListener("click",closeD);});
    document.addEventListener("keydown",function(e){if(e.key==="Escape")closeD();});
    window.addEventListener("resize",function(){if(window.innerWidth>768)closeD();});
  }
  document.querySelectorAll(".faq-q").forEach(function(b){
    b.addEventListener("click",function(){
      var item=b.parentNode,isOpen=item.classList.contains("open");
      item.classList.toggle("open");
      b.setAttribute("aria-expanded",isOpen?"false":"true");
    });
  });
})();
