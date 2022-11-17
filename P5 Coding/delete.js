// import all the images
function preload() {
    screen = loadImage('./assets/del-popup.png');
    button = loadImage('./assets/Delete-btn.png');
    
      
    }
  function setup() {
    createCanvas(375, 812);
    // create a link
    link = createA('./delscreen.html', '');
    
    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 375, 812);

      // del button
      img = createImg('./assets/Delete-btn.png').parent(link);
      img.position(98,435);
      img.size(183,51);
    }