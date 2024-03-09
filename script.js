const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });


  function firstPageAnim(){
    var tl= gsap.timeline();

    tl.from('#nav',{
        y:'-100',
        opacity:0,
        duration:1.5,
    })
      
    .to(".boundingelem",{
        y:0,
        duration:1.5,
        Stagger:.3

    })
  }

  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {

      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) `;
    });
  }


  document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffrot=0;


    elem.addEventListener("mousemove",function(dets){
        // console.log(elem.getBoundingClientRect().top);   used for getting details about position of an element

        var diff=dets.clientY - elem.getBoundingClientRect().top;

        diffrot=dets.clientX-rotate;
        rotate= dets.clientX;

        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease: Power3,
            top:diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-15,15,diffrot)  //clamp defines min and max value for diffrot
        })
    })
    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power3,
            duration:.5
        })
    })
    
  })

  


  firstPageAnim();
  circleMouseFollower();