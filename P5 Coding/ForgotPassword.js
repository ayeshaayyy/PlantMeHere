
// import all the images
function preload() {
    screen = loadImage('./assets/Forgot Password.png');
    button = loadImage('./assets/Send Code (Button).png');
    back = loadImage('./assets/back.png');
    text = loadImage('./assets/Remember Password_ Login.svg');
    
      
    }
  function setup() {
    createCanvas(375, 812);
    // create a link
    link = createA('./Login.html', '');
    linkotp = createA('./OTP Verification.html', '');
    
    
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
    img = createImg('./assets/Send Code (Button).png').parent(linkotp);
     img.position(22,526);
     img.size(331,56);
  
     // text link
     img = createImg('./assets/Remember Password_ Login.svg').parent(link);
     img.position(81,765);
     img.size(212,23);
  }