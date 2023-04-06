let capture
let detector
let mySound
let angle = 0

let camice









let s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s37, s38, s39, s40;
let gravityT = 9.0;
let gravityS = -9.0;
let mass = 2.0;

 function preload () {
	 myCry = loadSound ("audio/whistle.mp4")
	 myScream = loadSound ("audio/scream.mp4")
	 glassesSx = loadImage("img/occhiali_sx.png")
	 glassesDx = loadImage("img/occhiali_dx.png")
	 mustache = loadImage("img/baffi.png")
	 mouth = loadImage("img/mouth.png")
	 pupilla = loadImage("img/pupilla.png")
	 glassesSxRif = loadImage("img/occhiali_sx_riflesso.png")
	 glassesDxRif = loadImage("img/occhiali_dx_riflesso.png")
	 glassesSxRot = loadImage("img/occhiali_sx_rotti.png")
	 glassesDxRot = loadImage("img/occhiali_dx_rotti.png")
	 camice = loadImage("img/face2.png")
	 mustache2 = loadImage("img/baffo2.png")
	 pizzetto = loadImage("img/pizzetto.png")
}

async function setup() {
	// mySound = loadSound ("car-pass-by-9111.mp3")
	// mySound = loadSound ("car-pass-by-9111.mp3")
	//createCanvas(640*3, 480*2, WEBGL)
	createCanvas(windowWidth, windowHeight, WEBGL)
	capture = createCapture(VIDEO)
	capture.size(640, 480)
	capture.hide()
	//mySound.play()
	console.log("Carico modello...")
	detector = await createDetector()
	console.log("Modello caricato.")
	//angoli calcolati in gradi
	angleMode(DEGREES)

	 s1 = new Spring3D(0.0, width / 2, mass, gravityT);
  	 s2 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s3 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s4 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s5 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s6 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s7 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s8 = new Spring3D(0.0, width / 2, mass, gravityT);
	 s9 = new Spring3D(0.0, width / 2, mass, gravityT);
  	 s10 = new Spring3D(0.0, width / 2, mass, gravityT);
	 s11 = new Spring3D(0.0, width / 2, mass, gravityT);
  	 s12 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s13 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s14 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s15 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s16 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s17 = new Spring3D(0.0, width / 2, mass, gravityT);
 	 s18 = new Spring3D(0.0, width / 2, mass, gravityT);
	 s19 = new Spring3D(0.0, width / 2, mass, gravityT);
  	 s20 = new Spring3D(0.0, width / 2, mass, gravityT);

	 s21 = new Spring2D(0.0, width / 2, mass, gravityS);
  	 s22 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s23 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s24 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s25 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s26 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s27 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s28 = new Spring2D(0.0, width / 2, mass, gravityS);
	 s29 = new Spring2D(0.0, width / 2, mass, gravityS);
  	 s30 = new Spring2D(0.0, width / 2, mass, gravityS);
	 s31 = new Spring2D(0.0, width / 2, mass, gravityS);
  	 s32 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s33 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s34 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s35 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s36 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s37 = new Spring2D(0.0, width / 2, mass, gravityS);
 	 s38 = new Spring2D(0.0, width / 2, mass, gravityS);
	 s39 = new Spring2D(0.0, width / 2, mass, gravityS);
  	 s40 = new Spring2D(0.0, width / 2, mass, gravityS);
}

function windowResized(){ 
	resizeCanvas(windowWidth, windowHeight)
}

function colore() {
	fill(0)
}

function Spring2D(xpos, ypos, m, g) {
  this.x = xpos;// The x- and y-coordinates
  this.y = ypos;
  this.vx = 0; // The x- and y-axis velocities
  this.vy = 0;
  this.mass = m;
  this.gravity = g;
  this.radius = 30;
  this.stiffness = 0.2;
  this.damping = 0.7;

  this.update = function(targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  }

  this.display = function(nx, ny) {
    noStroke();
    //ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
	fill(0)
	stroke(0)
    strokeWeight(random(1, 25))
    line(this.x, this.y, nx, ny);
  }
}

function Spring3D(xpos, ypos, m, g) {
	this.x = xpos;// The x- and y-coordinates
	this.y = ypos;
	this.vx = 0; // The x- and y-axis velocities
	this.vy = 0;
	this.mass = m;
	this.gravity = g;
	this.radius = 30;
	this.stiffness = 0.2;
	this.damping = 0.7;
  
	this.update = function(targetX, targetY) {
	  let forceX = (targetX - this.x) * this.stiffness;
	  let ax = forceX / this.mass;
	  this.vx = this.damping * (this.vx + ax);
	  this.x += this.vx;
	  let forceY = (targetY - this.y) * this.stiffness;
	  forceY += this.gravity;
	  let ay = forceY / this.mass;
	  this.vy = this.damping * (this.vy + ay);
	  this.y += this.vy;
	}
  
	this.display = function(nx, ny) {
	  noStroke();
	  //ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
	  stroke(0)
  
	  strokeWeight(2)
	  line(this.x, this.y, nx, ny);
	}
  }


function eyeDx(sx, sy) {
	 image(glassesDx, sx-70, sy-70, 140, 140);
	 // image( glassesDxRif, sx-70, sy-70, 140, 140);
}

function eyeSx(sx, sy) {
	image(glassesSx, sx-70, sy-70, 140, 140);
	// image( glassesSxRif, sx-70, sy-70, 140, 140);
}
function eyeRottiDx(sx, sy) {
	//image(glassesDx, sx-70, sy-70, 140, 140);
	 image( glassesDxRot, sx-70, sy-70, 140, 140);
}

function eyeRottiSx(sx, sy) {
	//image(glassesSx, sx-70, sy-70, 140, 140);
	image( glassesSxRot, sx-70, sy-70, 140, 140);
}

function pupillaFermaSx(pfSxX, pfSxY) {
	let varX = map (pfSxX, 0, 640, -20, +50)
    let varY = map (pfSxY, 0, 480, -20, +20)


	noStroke()
	fill(0)
	ellipse (pfSxX + varX, pfSxY + varY, 45, 45)

}

function pupillaFermaDx(pfDxX, pfDxY){
	let varX = map (pfDxX, 0, 640, -50, +20)
    let varY = map (pfDxY, 0, 480, -20, +20)
	noStroke()
	fill(0)
	ellipse (pfDxX + varX, pfDxY + varY, 45, 45)
}

function pupillePazze (ppSxX, ppSxY, ppDxX, ppDxY) {
	push()
	translate(ppSxX, ppSxY)
	fill(0)
	rotate (angle)
	ellipse(20, 0, 30, 30)
	pop()
	push()
	translate(ppDxX, ppDxY)
	fill(0)
	rotate (-angle)
	ellipse(20, 0, 30, 30)
	pop()
	angle = angle + 40
}

async function draw() {
	translate(-width/2+width/10, -height/2)
	scale(min(windowWidth/640, windowHeight/480))
	//mostra la webcam
	// push()
	// scale(-1, 1)
	// image(capture, -640, 0)
	// pop()

	background(255)
	//translate(-320, -240)
	// noStroke()
	// fill(255, 10)
	// rect(0, 0, width, height) 

	// Disegna la webcam sullo stage, a specchio
	// push()
	// scale(-1, 1)
	// image(capture, -640, 0)
	// pop()

	if (detector && capture.loadedmetadata) {
		const hands = await detector.estimateHands(capture.elt, { flipHorizontal: true })
		// se ci sono due mani allora ...
		// if (hands.length ==2) {} 

		// decidi se destra o sinistra
		// const mano A = hands [0]
		// const mano B = hands [1]

		// per iniziare una forma che collega le dita
		// beginShape()
		// dopo si indicano i vertici collegati alle dita con vertex
		// poi si chiude con endShape() o qualcos del genere
		// si può applicare una texture alla shape 

		for (let j=0; j<hands.length; j++) {
			const hand = hands[j]
			const handedness = hand.handedness // Left : Right
			// for (let i=0; i<hand.keypoints.length; i++) {
			// 	const k = hand.keypoints[i]
			// 	// const name = k.name.split('_')[0].toString().toLowerCase()				
			// 	noStroke()
			// 	fill(random(255), random(255), random(255))
			// 	ellipse(k.x, k.y, 12)
			// }

			// noStroke()
			// fill(255,0,0) 
			// for (let i=0; i<5; i++) {
			// 	const k = hand.keypoints[i * 4 + 4]
			// 	ellipse(k.x, k.y, 20, 20)
			// }

			// noStroke()
			// fill(255,255,0) 
			// for (let i=0; i<5; i++) {
			// 	const k = hand.keypoints[i * 4 + 4]
			// 	ellipse(k.x, k.y, 20, 20)
			// }



//-------------- contatto due dita ------------------//
			// noStroke()
			// fill(255,255,0) 
			for (let i=0; i<2; i++) {
				const p = hand.keypoints[4]
				const k = hand.keypoints[20]
				
				// ellipse(k.x, k.y, 20, 20)
				// ellipse(p.x, p.y, 20, 20)

				if (((((k.x - p.x) < 100) && (k.x - p.x) > -100) && ((k.y - p.y) < 100) && (k.y - p.y) > -100)) {
					

					
					const l = hand.keypoints[5]
					const r = hand.keypoints[17]
					const f = hand.keypoints[9]
					const j = hand.keypoints[13]

					for (let i=0; i<1; i++) {
						// push()
						// 	noFill()
						// 	texture(camice);
						// 	textureMode(NORMAL);
						// 	noStroke()
						// 	ellipse (f.x+20, f.y+50, 350, 350)
						// 	// beginShape()
						// 	// vertex(m.x, m.y, 0, 0)
						// 	// vertex(z.x, z.y, 1, 0)
						// 	// vertex(p.x, p.y, 1, 1)
						// 	// vertex(po.x, po.y, 0, 1)
						// 	// endShape(CLOSE);
						// 	pop()

						strokeWeight(min(windowWidth/25, windowHeight/25))
						stroke(0)
						line(l.x+17, l.y, r.x-17, r.y)

						eyeSx(l.x - 50, l.y)
						eyeDx(r.x + 50, r.y)

						

						pupillaFermaSx(l.x - 50, l.y)
						pupillaFermaDx(r.x + 50, r.y)
						


						image(pizzetto, l.x+10, l.y+120, 112/2, 304/2)
						image(mustache, l.x-60, l.y+50, 792/4, 242/4)
						//image(mustache2, l.x-60, l.y+50, 383, 115)
						
						// strokeWeight(5)
						// line(l.x-75, l.y+150, r.x-75, r.y+125)
						// line(l.x+75, l.y+125, r.x+75, r.y+150)
						
						// strokeWeight(2)
						// line(f.x, f.y+160, j.x, j.y+160)

						//lunghezza capelli

						const v = 30
						
						translate (-28, -100) 
						colore()
						s1.update(f.x, f.y-v);
						s1.display(f.x, f.y);
						s2.update(s1.x, s1.y-v);
						s2.display(s1.x, s1.y);
						s3.update(f.x+10, f.y-v);
						s3.display(f.x+10, f.y);
						s4.update(s3.x, s3.y-v);
						s4.display(s3.x, s3.y);
						s5.update(f.x+20, f.y-v);
						s5.display(f.x+20, f.y);
						s6.update(s5.x, s5.y-v);
						s6.display(s5.x, s5.y);
						s7.update(f.x+30, f.y-v);
						s7.display(f.x+30, f.y);
						s8.update(s7.x, s7.y-v);
						s8.display(s7.x, s7.y);
						s9.update(f.x+40, f.y-v);
						s9.display(f.x+40, f.y);
						s10.update(s9.x, s9.y-v);
						s10.display(s9.x, s9.y);

						s11.update(f.x+50, f.y-v);
						s11.display(f.x+50, f.y);
						s12.update(s11.x, s1.y-v);
						s12.display(s11.x, s1.y);
						s13.update(f.x+60, f.y-v);
						s13.display(f.x+60, f.y);
						s14.update(s13.x, s3.y-v);
						s14.display(s13.x, s3.y);
						s15.update(f.x+70, f.y-v);
						s15.display(f.x+70, f.y);
						s16.update(s15.x, s5.y-v);
						s16.display(s15.x, s5.y);
						s17.update(f.x+80, f.y-v);
						s17.display(f.x+80, f.y);
						s18.update(s17.x, s7.y-v);
						s18.display(s17.x, s7.y);
						s19.update(f.x+90, f.y-v);
						s19.display(f.x+90, f.y);
						s20.update(s19.x, s9.y-v);
						s20.display(s19.x, s9.y);
						} 
						
						translate (28, 100) 

						
						
						
					myScream.stop()
					// if (myCry.isPlaying()) {
					// 		// .isPlaying() returns a boolean
					// 		playMode(sustain)
					// 	  } else {
					// 		myCry.play();
					// 	  }

						
				// 	for (let i=0; i<1; i++) {
				// 	line (20, 40, 20, 50)
				}
				else{ 
					//background (255, 255, 0)
					myCry.stop()
					
					
					const l = hand.keypoints[5]
					const r = hand.keypoints[17]
					const f = hand.keypoints[9]
					const m = hand.keypoints[20]
					const z = hand.keypoints[8]
					const p = hand.keypoints[4]
					const po = hand.keypoints[0]
					const me = hand.keypoints[12]
					const an = hand.keypoints[16]
				

					for (let i=0; i<1; i++) {
						
							background(random(230, 255))
							
							// push()
							// noFill()
							// texture(camice);
							// textureMode(NORMAL);
							// noStroke()
							// ellipse (f.x+20, f.y+50, 350, 350)
							// // beginShape()
							// // vertex(m.x, m.y, 0, 0)
							// // vertex(z.x, z.y, 1, 0)
							// // vertex(p.x, p.y, 1, 1)
							// // vertex(po.x, po.y, 0, 1)
							// // endShape(CLOSE);
							// pop()

							strokeWeight(min(windowWidth/25, windowHeight/25))
							stroke(0)
							line(l.x+17, l.y, r.x-17, r.y)
							eyeRottiSx(l.x - 50, l.y)
							eyeRottiDx(r.x + 50, r.y)
							
							pupillePazze (l.x- 40, l.y, r.x+ 40, r.y)

							image(pizzetto, l.x+10, l.y+160, 112/2, 304/2)
							image(mouth, l.x-30, l.y+80, 150, 150)
							image(mustache, l.x-60, l.y+50, 792/4, 242/4)

						
							
	
							const v = 35
						
						translate (-28, -75)
						s21.update(f.x-30, f.y-v+10);
						s21.display(f.x, f.y);
						s22.update(s21.x-30, s21.y-v+10);
						s22.display(s21.x, s21.y);
						s23.update(f.x+10-20, f.y-v-10);
						s23.display(f.x+10, f.y);
						s24.update(s23.x-5-20, s23.y-v-10);
						s24.display(s23.x, s23.y);
						s25.update(f.x+20-15, f.y-v+10);
						s25.display(f.x+20, f.y);
						s26.update(s25.x-15, s25.y-v+10);
						s26.display(s25.x, s25.y);
						s27.update(f.x+30-13, f.y-v-20);
						s27.display(f.x+30, f.y);
						s28.update(s27.x-13, s27.y-v-20);
						s28.display(s27.x, s27.y);
						s29.update(f.x+40-7, f.y-v+12);
						s29.display(f.x+40, f.y);
						s30.update(s29.x-7, s29.y-v+12);
						s30.display(s29.x, s29.y);

						s31.update(f.x+50-3, f.y-v-25);
						s31.display(f.x+50, f.y);
						s32.update(s31.x-3, s31.y-v-25);
						s32.display(s31.x, s31.y);
						s33.update(f.x+60+2, f.y-v+5);
						s33.display(f.x+60, f.y);
						s34.update(s33.x+2, s33.y-v+5);
						s34.display(s33.x, s33.y);
						s35.update(f.x+70+8, f.y-v-20);
						s35.display(f.x+70, f.y);
						s36.update(s35.x+8, s35.y-v-20);
						s36.display(s35.x, s35.y);
						s37.update(f.x+80+18, f.y-v+3);
						s37.display(f.x+80, f.y);
						s38.update(s37.x+18, s37.y-v+3);
						s38.display(s37.x, s37.y);
						s39.update(f.x+90+30, f.y-v-10);
						s39.display(f.x+90, f.y);
						s40.update(s39.x+30, s39.y-v-10);
						s40.display(s39.x, s39.y);
						}
						translate (28, 75)

						
					

					if (myScream.isPlaying()) {
						// .isPlaying() returns a boolean
						playMode(sustain)
					  } else {
						myScream.play();
					  }
				}
				
				}
			}
//----------------------------------------------------//



			
		}		
	}


async function createDetector() {
	// Configurazione Media Pipe
	// https://google.github.io/mediapipe/solutions/hands
	const mediaPipeConfig = {
		runtime: "mediapipe",
		modelType: "full",
		maxHands: 1,
		solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands`,
	}
	return window.handPoseDetection.createDetector( window.handPoseDetection.SupportedModels.MediaPipeHands, mediaPipeConfig )
}
