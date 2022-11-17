
// import all the images
function preload() {
    screen = loadImage('./assets/Search-4.png');
    search = loadImage('./assets/Group 1.png');
    rec = loadImage('./assets/Rectangle.png');
 
    
      
    }
  function setup() {
    createCanvas(375, 812);
    // create a link
    link = createA('./Login.html', '');
    linknp = createA('./NewPassword.html', '');
    linkpr = createA('./Projects.html', '');
    linkH = createA('./Home.html', '')
    linkP = createA('./Profile.html', '')
    linkS = createA('./Settings.html', '')
    link3 = createA('./3D.html', '');
    address = createA('./Home1.html', '')
    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 375, 812);
     // calling button image and setting up link, size and position
     // search icon
     img = createImg('./assets/Group 1.png');
     img.position(18,56);
     img.size(339,41);
  
     img = createImg('./assets/Rectangle.png').parent(address);
     img.position(68,122);
     img.size(292,33);

     //Bottom nav
     img = createImg('./assets/Home_icon.png').parent(linkH);
     img.position(59,753);
     img.size(40,38);
     img = createImg('./assets/Project_icon.png').parent(linkpr);
     img.position(140,755);
     img.size(22,22);
     img = createImg('./assets/Profile.png').parent(linkP);
     img.position(209,753);
     img.size(22,22);
     img = createImg('./assets/Settings.png').parent(linkS);
     img.position(282,755);
     img.size(19,20);
  }