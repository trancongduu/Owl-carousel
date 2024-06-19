function slider2() {

    let splides = $('.slider2');
    for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
        new Splide( splides[ i ], {

        perPage: 5,
        perMove: 1,
      focus: 'center',
      type: 'loop', 
      gap: '4em', 
      arrows: 'slider', 
      pagination: 'slider', 
      speed : 550, 
      dragAngleThreshold: 80, 
      autoWidth: false, 
      rewind : false, 
      rewindSpeed : 800,
      waitForTransition : false,
      updateOnMove : true,
      trimSpace: false,
      breakpoints: {
            991: {
            
                perPage: 3,
          gap: '4vw',
            },
        767: {
            
                perPage: 1,
          gap: '4vw',
            },
        479: {
            
                perPage: 1,
          gap: '4vw',
            }
        }
    } ).mount();
    }
    
    }
    slider2();
    