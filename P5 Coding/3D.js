
// import all the images
function preload() {
    screen = loadImage('./assets/3D.png');
    search = loadImage('./assets/search.png');
    but1 = loadImage('./assets/Group 2.png');
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
    linkS = createA('./Settings.html', '');
    del = createA('./delete.html', '');
    map = createA('./mapscreen.html', '');
    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 375, 812);
     // calling button image and setting up link, size and position
     // search icon
     img = createImg('./assets/search.png').parent(link);
     img.position(18,56);
     img.size(339,41);
  
     // 3D icon
     img = createImg('./assets/Group 2.png').parent(linkH);
     img.position(316,122);
     img.size(40,40);
  
     // Map icon
     img = createImg('./assets/Map.png').parent(map);
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