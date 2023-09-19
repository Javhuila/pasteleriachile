import React from 'react';

function Carousel() {
    return (
        <div>
            <div class="carousel_wrapper">
                <div class="carousel">
                    <div class="slide one">
                        <img src="http://nasa-images.com/wp-content/uploads/2011/05/392.jpg" />
                    </div>
                    <div class="slide two">
                        <img src="https://images.unsplash.com/photo-1487235829740-e0ac5a286e1c" />
                    </div>
                    <div class="slide three">
                        <img src="https://images.unsplash.com/photo-1473813585561-ec87eac91e39" />
                    </div>
                    <div class="slide four">
                        <img src="http://nasa-images.com/wp-content/uploads/2011/05/261.jpg" />
                    </div>
                    <div class="slide five">
                        <img src="http://hdwallpaperfun.com/wp-content/uploads/2014/08/Outer-Space-Wallpaper-Background-HQ.jpg" />
                    </div>
                    <div class="slide six">
                        <img src="https://images.unsplash.com/photo-1479409286066-c0b2f4f4a332" />
                    </div>
                    <div class="slide seven">
                        <img src="http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/space-wallpaper-4.jpg" />
                    </div>
                    <div class="slide eight">
                        <img src="http://shareyourwallpapers.com/upload/wallpaper/3d-and-digital-art/3d-space/3d-space_f48db6ca.jpg" />
                    </div>
                    <div class="slide nine">
                        <img src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel

// .carousel_wrapper {
//     position: relative;
//     width: 320px;
//     margin: 100px auto 0 auto;
//     perspective: 1000px;
//   }
  
//   .carousel {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     transform-style: preserve-3d;
//     transform: rotateY(-360deg) translateZ(-412px); /* add reverse transformation from the slides */
//     animation: swirl 40s steps(10000, end) infinite; /* run `swirl` animation (defined at end of CSS) infitely, with animation lasting 40 seconds, and 10,000 steps between the FROM and TO values in the animation for a smooth rotation */
//   }
  
//   .slide {
//     position: absolute;
//     top: 10px;
//     left: 10px;
//     width: 300px;
//     height: 187px;
//   }
  
//   .slide img {
//     width: 280px;
//     height: 175px;
//     border: 3px inset rgba(47, 115, 201, 0.75);
//     box-shadow: 0 0 15px 3px rgba(110, 72, 221, 0.9);
//   }
  
  
  /*
  9 Slides total: 360 Degrees (full circle) --> 360/9 = 40 --> our increment for rotation
  
  Some math. Consider how the carousel will be set up. It's going to be a 3D circle, like an orbit. The orientation will be such that it would be like setting a ring down on a table, then bending down and looking at the ring head on from the edge of the table. The main "front" image will be entirely front-facing. The other images will be rotated slightly to make a full circle. You could sketch this out in 2D from a bird's eye view, and you'd end up with a picture like the following:
  
  https://cl.ly/image/2P3E1U0W0c29
  
  Each triangle/piece would be a slide, hence 9 pieces. That being said, let's do some calculations, but we'll use the dimensions of our elements rather than those in the picture.
  
  So, we're rotating all the slides in 40º increments relative to each other, because 360º makes a full circle, and we have 9 elements: 360/9 = 40
  
  In the picture above, we want to find the radius of the circle (which isn't exactly a circle because it's made up of triangles). So we can cut each triangle in half and solve for `r` (radius). We can solve for `r` using some geometry and our own elements' dimensions. 
  
  The width of the slides is 300px. We're going to split those triangles in half and use the TANGENT function in geometry/trigonemty to solve for `r`. And since we're splitting each of the 9 triangles (the slides) in half for this, we need to account for the fact that our key angle is now going to be 20º and not 40º. We can solve for `r` by taking our smaller triangles' width (150px) and dividing by the tangent of 20º (in degrees, not radians). So:
  
              150
     r =  -----------
            tan(20º)
  
  Here's a screenshot of me doing the calculations in JavaScript, right in the browser console!
  
  Math things: https://cl.ly/image/1t0j1V2Y2l2Z
  
  So, `r` is (about) 412px long! This means we need to TRANSLATE the slides in the Z 3-dimensional plane by 412px. This should be done AFTER the rotateY transformation.
  */
  
//   .slide.one {
//     transform: rotateY(0deg) translateZ(412px);
//   }
//   .slide.two {
//     transform: rotateY(40deg) translateZ(412px);
//   }
//   .slide.three {
//     transform: rotateY(80deg) translateZ(412px);
//   }
//   .slide.four {
//     transform: rotateY(120deg) translateZ(412px);
//   }
//   .slide.five {
//     transform: rotateY(160deg) translateZ(412px);
//   }
//   .slide.six {
//     transform: rotateY(200deg) translateZ(412px);
//   }
//   .slide.seven {
//     transform: rotateY(240deg) translateZ(412px);
//   }
//   .slide.eight {
//     transform: rotateY(280deg) translateZ(412px);
//   }
//   .slide.nine {
//     transform: rotateY(320deg) translateZ(412px);
//   }
  
  /*
  CSS3 ANIMATION
  -------------------
  Simply rotates the carousel around the Y axis by using rotateY and starting at initial value, -360º, and going to final value 0º, then resetting.
  */
  
//   @keyframes swirl {   
//     from {
//       transform: rotateY(-360deg);
//     }
//     to {
//       transform: rotateY(0deg);
//     }
//   } 