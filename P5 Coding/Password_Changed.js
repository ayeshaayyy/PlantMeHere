
// import all the images
function preload() {
    screen = loadImage('./assets/Password Changed!.png');
    button = loadImage('./assets/Reset Password (Button).png');
    back = loadImage('./assets/back.png');
    
      
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
     img = createImg('./assets/Back to Login (Button).png').parent(linkotp);
     img.position(22,508);
     img.size(331,56);
  
  }