
// import all the images
function preload() {
    screen = loadImage('./assets/mapscreen.png');
    search = loadImage('./assets/Address.png');
    but1 = loadImage('./assets/3Ddis.png');
    but2 = loadImage('./assets/Map.png');
    but3 = loadImage('./assets/Delete.png');
    
      
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
    search = createA('./searchsrn.html', '');
    del = createA('./delete.html', '');
    report = createA('./report.html', '');
    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 375, 812);
     // calling button image and setting up link, size and position
     img = createImg('./assets/report-btn.png').parent(report);
     img.position(18,123);
     img.size(88,34);
     // search icon
     img = createImg('./assets/Address.png').parent(search);
     img.position(18,56);
     img.size(339,41);
  
     // 3D icon
     img = createImg('./assets/3Ddis.png').parent(link3);
     img.position(316,122);
     img.size(40,40);
  
     // Map icon
     img = createImg('./assets/Map.png').parent(link);
     img.position(316,173);
     img.size(40,40);

     // Delete icon
     img = createImg('./assets/Delete.png').parent(del);
     img.position(316,224);
     img.size(40,40);

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