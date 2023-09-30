var tl=gsap.timeline()
tl.from("nav h1,h4,p",{
    y:-100,
    opacity:0,
    duration:0.8,
    stagger:0.3
})
tl.from(".main .left h1",{
    x:-200,
    duration:0.4,
    opacity:0,
    stagger:1
})
tl.from(".main .right img",{
    scale:0,
    rotate:360,
    duration:0.9,
    opacity:0,
    stagger:1
})
gsap.from(" .main1 .box1",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".box1",
        scroller:"body",
        
        
    }
})

