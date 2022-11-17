
// import all the images
function preload() {
  screen = loadImage('./assets/Login.png');
  button = loadImage('./assets/Login (Button).png');
  password = loadImage('./assets/Forgot Password_.svg');
  back = loadImage('./assets/back.png');
  text = loadImage('./assets/Dont have an account_ Register Now.svg');
  
    
  }
function setup() {
  createCanvas(375, 812);
  // create a link
  link = createA('./Login.html', '');
  linkReg = createA('./Register.html', '');
  linkFP = createA('./ForgotPassword.html', '');
  linkH = createA('./Home.html', '');
  
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
  img = createImg('./assets/Login (Button).png').parent(linkH);
   img.position(22,424);
   img.size(331,56);

   // Forgot password
   img = createImg('./assets/Forgot Password_.svg').parent(linkFP);
   img.position(221,372);
   img.size(132,23);

   // text link
   img = createImg('./assets/Dont have an account_ Register Now.svg').parent(linkReg);
   img.position(48,765);
   img.size(280,23);
}