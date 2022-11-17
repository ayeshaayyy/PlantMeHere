
// import all the images
function preload() {
    screen = loadImage('./assets/Units.png');
    
      
    }
  function setup() {
    createCanvas(375, 812);
    // create a link
    link = createA('./Login.html', '');
    linkdet = createA('./ProjectDet.html', '');
    linkH = createA('./Home.html', '')
    linkPr = createA('./Projects.html', '')
    linkS = createA('./Settings.html', '')
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 375, 812);
     // calling button image and setting up link, size and position
     // save button
     img = createImg('./assets/Save (Button)-2.png').parent(linkS);
     img.position(22,525);
     img.size(331,56);

     //Bottom nav
     img = createImg('./assets/Homedis.png').parent(linkH);
     img.position(59,753);
     img.size(24,24);
     img = createImg('./assets/project_icon.png').parent(linkPr);
     img.position(140,753);
     img.size(22,22);
     img = createImg('./assets/profile.png').parent(link);
     img.position(218,753);
     img.size(22,22);
     img = createImg('./assets/ensettings.png');
     img.position(282,753);
     img.size(40,38);
  }