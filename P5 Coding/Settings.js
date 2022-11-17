
// import all the images
function preload() {
    screen = loadImage('./assets/Settings-2.png');
    
      
    }
  function setup() {
    createCanvas(375, 812);
    // create a link
    link = createA('./Login.html', '');
    linkU = createA('./Units.html', '');
    linkH = createA('./Home.html', '')
    linkPr = createA('./Projects.html', '')
    linkP = createA('./Profile.html', '')
    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 375, 812);
     // calling button image and setting up link, size and position
     // save button
     img = createImg('./assets/back-2.png').parent(linkU);
     img.position(311,323);
     img.size(33,33);

     //Bottom nav
     img = createImg('./assets/Homedis.png').parent(linkH);
     img.position(59,753);
     img.size(24,24);
     img = createImg('./assets/project_icon.png').parent(linkPr);
     img.position(140,753);
     img.size(22,22);
     img = createImg('./assets/profile.png').parent(linkP);
     img.position(209,753);
     img.size(24,24);
     img = createImg('./assets/ensettings.png');
     img.position(271,753);
     img.size(40,38);
  }