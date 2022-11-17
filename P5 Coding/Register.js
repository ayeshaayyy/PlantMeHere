
// import all the images
function preload() {
    screen = loadImage('./assets/Register.png');
    button = loadImage('./assets/Register (Button).png');
    back = loadImage('./assets/back.png');
    text = loadImage('./assets/Already have an account_ Login Now.svg');
    
      
    }
  function setup() {
    createCanvas(375, 812);
    // create a link
    link = createA('./Login.html', '');
    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 375, 812);
     // calling button image and setting up link, size and position
     // back button
     img = createImg('./assets/back.png').parent(link);
     img.position(22,56);
     img.size(41,41);
  
     // CTA
    img = createImg('./assets/Register (Button).png').parent(link);
     img.position(22,526);
     img.size(331,56);
  
     // text link
     img = createImg('./assets/Already have an account_ Login Now.svg').parent(link);
     img.position(48,765);
     img.size(278,23);
  }