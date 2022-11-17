// import all the images
function preload() {
    screen = loadImage('./assets/save_Project.png');
    button = loadImage('./assets/Input.png');
    
      
    }
  function setup() {
    createCanvas(386, 1295);
    // create a link
    link = createA('./save-report1.html', '');
    
    
  }
  
  function draw() {
     // call image and logo on screen
     image (screen, 0, 0, 386, 1295);

      // save button
      img = createImg('./assets/Input.png').parent(link);
      img.position(74,390);
      img.size(255,56);
    }