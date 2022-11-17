
// import all the images
function preload() {
    screen = loadImage('./assets/Create new password.png');
    button = loadImage('./assets/Reset Password (Button).png');
    back = loadImage('./assets/back.png');
    
      
    }
  function setup() {
    createCanvas(375, 812);
    // create a link
    link = createA('./Login.html', '');
    linkotp = createA('./OTP Verification.html', '');
    linkpc = createA('./Password_Changed.html', '');
    
    
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
     img = createImg('./assets/Reset Password (Button).png').parent(linkpc);
     img.position(22,419);
     img.size(331,56);
  
  }