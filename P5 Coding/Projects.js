
// import all the images
function preload() {
    screen = loadImage('./assets/My Projects.png');
    
      
    }
  function setup() {
    createCanvas(375, 812);
    // create a link
    link = createA('./Login.html', '');
    linkdet = createA('./ProjectDet.html', '');
    linkH = createA('./Home.html', '')
    linkP = createA('./Profile.html', '')
    linkS = createA('./Settings.html', '')
    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 375, 812);
     // calling button image and setting up link, size and position
     // search icon
     img = createImg('./assets/project1.png').parent(linkdet);
     img.position(32,300);
     img.size(311,40);

     //Bottom nav
     img = createImg('./assets/Homedis.png').parent(linkH);
     img.position(59,753);
     img.size(24,24);
     img = createImg('./assets/enproject.png').parent(link);
     img.position(127,753);
     img.size(40,38);
     img = createImg('./assets/Profile.png').parent(linkP);
     img.position(209,753);
     img.size(22,22);
     img = createImg('./assets/Settings.png').parent(linkS);
     img.position(282,755);
     img.size(19,20);
  }