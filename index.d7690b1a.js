const e=document.querySelector(".menu"),t=document.querySelector("#mobileMenu"),d=document.querySelector(".mobile-menu-overlay"),n=document.body;e.addEventListener("click",(function(){t.classList.toggle("is-hidden"),d.classList.toggle("is-hidden"),n.classList.toggle("overflow-hidden")})),d.addEventListener("click",(function(o){t.contains(o.target)||e.contains(o.target)||(t.classList.add("is-hidden"),d.classList.add("is-hidden"),n.classList.remove("overflow-hidden"),isClosingFromOverlay=!0,setTimeout((()=>{isClosingFromOverlay&&(e.classList.remove("opened"),e.setAttribute("aria-expanded","false"),isClosingFromOverlay=!1)})))}));const o=document.querySelector(".modal"),c=document.getElementById("openModalButton"),s=document.getElementById("openModalButton1"),i=document.getElementById("openModalButton2"),l=document.getElementById("openModalButton3"),a=document.getElementById("closeModalButton"),m=document.querySelector(".modal-menu-overlay"),r=document.getElementById("checkbox"),u=document.getElementById("checkbox1"),y=document.getElementById("checkbox2"),L=document.getElementById("checkbox3"),g=document.getElementById("additionalWindow"),E=document.getElementById("additionalWindow1"),h=document.getElementById("additionalWindow2"),v=document.getElementById("additionalWindow3"),k=document.getElementById("my-success-Modal"),B=document.getElementById("continue"),I=document.getElementById("success_close");document.querySelector(".card-item");function b(){window.scrollTo(0,0),document.body.classList.add("modal-open"),m.classList.remove("is-hidden"),o.classList.remove("is-hidden")}function p(){k.classList.remove("is-hidden"),o.classList.add("is-hidden"),setTimeout((()=>{location.reload()}),3e3)}c.addEventListener("click",b),s.addEventListener("click",b),i.addEventListener("click",b),l.addEventListener("click",b),a.addEventListener("click",(function(){document.body.classList.remove("modal-open"),o.classList.add("is-hidden"),m.classList.add("is-hidden")})),m.addEventListener("click",(function(e){o.contains(e.target)||c.contains(e.target)||(document.body.classList.remove("modal-open"),o.classList.add("is-hidden"),m.classList.add("is-hidden"))})),r.addEventListener("change",(()=>{r.checked?g.style.display="block":g.style.display="none"})),u.addEventListener("change",(()=>{E.style.display=u.checked?"block":"none"})),y.addEventListener("change",(()=>{h.style.display=y.checked?"block":"none"})),L.addEventListener("change",(()=>{v.style.display=L.checked?"block":"none"})),B.addEventListener("click",p),I.addEventListener("click",(function(){k.classList.add("is-hidden"),m.classList.add("is-hidden"),location.reload()})),document.querySelectorAll("#continue").forEach((e=>{e.addEventListener("click",p)}));
//# sourceMappingURL=index.d7690b1a.js.map