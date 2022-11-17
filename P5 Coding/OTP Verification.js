
// import all the images
function preload() {
    screen = loadImage('./assets/OTP Verification.png');
    button = loadImage('./assets/Verify (Button).png');
    back = loadImage('./assets/back.png');
    text = loadImage('./assets/Didnt received code_ Resend.svg');
    
      
    }
  function setup() {
    createCanvas(375, 812);
    // create a link
    link = createA('./Login.html', '');
    linknp = createA('./NewPassword.html', '');
    
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
     img = createImg('./assets/Verify (Button).png').parent(linknp);
     img.position(22,526);
     img.size(331,56);
  
     // text link
     img = createImg('./assets/Didnt received code_ Resend.svg').parent(link);
     img.position(81,765);
     img.size(212,23);
  }