!function(){var e=document.querySelector(".menu"),t=document.querySelector("#mobileMenu"),n=document.querySelector(".mobile-menu-overlay"),d=document.body;e.addEventListener("click",(function(){t.classList.toggle("is-hidden"),n.classList.toggle("is-hidden"),d.classList.toggle("overflow-hidden")})),n.addEventListener("click",(function(i){t.contains(i.target)||e.contains(i.target)||(t.classList.add("is-hidden"),n.classList.add("is-hidden"),d.classList.remove("overflow-hidden"))}));var i=document.querySelector(".modal"),o=document.getElementById("openModalButton"),s=document.getElementById("closeModalButton");o.addEventListener("click",(function(){i.classList.remove("is-hidden")})),s.addEventListener("click",(function(){i.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.ac52b9f6.js.map
