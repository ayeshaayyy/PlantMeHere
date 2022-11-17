
// import all the images
function preload() {
    screen = loadImage('./assets/My Profile.png');
    
      
    }
  function setup() {
    createCanvas(375, 812);
    // create a link
    link = createA('./Login.html', '');
    linkdet = createA('./ProjectDet.html', '');
    linkH = createA('./Home.html','');
    linkPr = createA('./Projects.html', '');
    linkS = createA('./Settings.html', '');

    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 375, 812);
     // calling button image and setting up link, size and position
     // search icon

     //Bottom nav
     img = createImg('./assets/Homedis.png').parent(linkH);
     img.position(59,753);
     img.size(24,24);
     img = createImg('./assets/project_icon.png').parent(linkPr);
     img.position(140,753);
     img.size(22,22);
     img = createImg('./assets/enprofile.png').parent(link);
     img.position(206,753);
     img.size(40,38);
     img = createImg('./assets/Settings.png').parent(linkS);
     img.position(288,753);
     img.size(20,20);
  }