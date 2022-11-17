
// import all the images
function preload() {
    screen = loadImage('./assets/Project Details.png');
    
      
    }
  function setup() {
    createCanvas(385, 1295);
    // create a link
    link = createA('./Login.html', '');
    linknp = createA('./NewPassword.html', '');
    linkH = createA('./Home.html')
    linkPr = createA('./Projects.html')
    linkP = createA('./Profile.html')
    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 385, 1295);

     

     //Bottom nav
     img = createImg('./assets/Homedis.png').parent(linkH);
     img.position(67,1147);
     img.size(24,24);
     img = createImg('./assets/enproject.png').parent(linkPr);
     img.position(131,1149);
     img.size(40,38);
     img = createImg('./assets/Profile.png').parent(linkP);
     img.position(209,1147);
     img.size(22,22);
     img = createImg('./assets/Settings.png').parent(link);
     img.position(282,1149);
     img.size(19,20);
  }