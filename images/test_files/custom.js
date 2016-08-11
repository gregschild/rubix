(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	
	
	/*Sticky menu BEGIN*/
	function sticky_relocate() {	
		if ($('#sticky-anchor').length > 0) {	//if sticky element exists
			var window_top = $(window).scrollTop();
			var div_top = $('#sticky-anchor').offset().top;
			if (window_top > (div_top-1)) {
				$('#languageContainer').addClass('sticky');
				$('#languageToggle').addClass('sticky');
			} else {
				$('#languageContainer').removeClass('sticky');
				$('#languageToggle').removeClass('sticky');
			}
		}
	}

	$(function () {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});
	/*Sticky menu END*/	
	
	
	
	$('#languageToggle').click(function() {
		$("#languageContainer").toggle(300);
		
	});
	
	
})(jQuery);










/*3D cube begin*/
var cubex = -20;
var cubey = 340;
var cubez = 0;
var segs = "yo";
a = new Array();
s = new Array();
var i;
var j;
var speed = 80;
var layeru = [1,2,3,4,5,6,7,8,9,10,11,12,19,20,21,28,29,30,37,38,39];
var layerl = [10,11,12,13,14,15,16,17,18,1,4,7,19,22,25,46,49,52,39,42,45];
var layerf = [19,20,21,22,23,24,25,26,27,7,8,9,12,15,18,46,47,48,28,31,34];
var layerr = [28,29,30,31,32,33,34,35,36,3,6,9,21,24,27,48,51,54,37,40,43];
var layerb = [37,38,39,40,41,42,43,44,45,30,33,36,10,13,16,1,2,3,52,53,54];
var layerd = [46,47,48,49,50,51,52,53,54,25,26,27,16,17,18,25,26,27,34,35,36,43,44,45];
var layeru2 = [1,2,3,4,5,6,7,8,9,10,11,12,19,20,21,28,29,30,37,38,39,13,14,15,22,23,24,31,32,33,40,41,42];
var layerl2 = [10,11,12,13,14,15,16,17,18,1,4,7,19,22,25,46,49,52,39,42,45,2,5,8,20,23,26,47,50,53,38,41,44];
var layerf2 = [19,20,21,22,23,24,25,26,27,7,8,9,12,15,18,46,47,48,28,31,34,4,5,6,11,14,17,29,32,35,49,50,51];
var layerr2 = [28,29,30,31,32,33,34,35,36,3,6,9,21,24,27,48,51,54,37,40,43,2,5,8,20,23,26,47,50,53,38,41,44];
var layerb2 = [37,38,39,40,41,42,43,44,45,30,33,36,10,13,16,1,2,3,52,53,54,4,5,6,11,14,17,29,32,35,49,50,51];
var layerd2 = [46,47,48,49,50,51,52,53,54,25,26,27,16,17,18,25,26,27,34,35,36,43,44,45,13,14,15,22,23,24,31,32,33,40,41,42];
var layerm = [2,5,8,20,23,26,47,50,53,38,41,44];
var layere = [13,14,15,22,23,24,31,32,33,40,41,42];
var layers = [4,5,6,11,14,17,29,32,35,49,50,51];
var wholecube = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54];
function rotCube(){	/*refresh rotated cube*/
	  segs = "rotateX("+cubex+"deg) rotateY("+cubey+"deg) rotateZ("+cubez+"deg) translateX(0) translateY(0) translateZ(0)";
	  $('.cube').css({"transform":segs});
}
function kiir(){	//parameter middle core
	var seg = "";
	for (i = 1; i < 55; i++){
		seg = seg + '<div class="field mezo mezo'+i+' szine'+a[i]+'"><span>'+i+'</span></div>';
	}
	//seg = seg + '<div class="core core1"></div><div class="core core2"></div><div class="core core3"></div><div class="core core4"></div><div class="core core5"></div><div class="core core6"></div>';//black middle cores
	document.getElementById("cubeFields").innerHTML = seg;
}
function kiirRotLayer(layer,layernr){	//layeru,1  (layer nev, melyik core)
	var seg = "";
	var cel = "";
	for (i = 0; i < layer.length; i++){
		cel = "#cubeFields .mezo"+layer[i];
		$(cel).hide( );
		seg = seg + '<div class="layer mezo mezo'+layer[i]+' szine'+a[layer[i]]+'"><span>'+layer[i]+'</span></div>';
	}
	if (layernr < 7) {
		seg = seg + '<div class="core core'+layernr+'"></div>';
		document.getElementById("cubeFields").innerHTML = document.getElementById("cubeFields").innerHTML + '<div class="core core'+layernr+'"></div>';
	} 
	if (layernr == 7) {
		seg = seg + '<div class="core core2"></div><div class="core core4"></div>';
		document.getElementById("cubeFields").innerHTML = document.getElementById("cubeFields").innerHTML + '<div class="core core2"></div><div class="core core4"></div>';
	}
	if (layernr == 8) {
		seg = seg + '<div class="core core1"></div><div class="core core6"></div>';
		document.getElementById("cubeFields").innerHTML = document.getElementById("cubeFields").innerHTML + '<div class="core core1"></div><div class="core core6"></div>';
	}
	if (layernr == 9) {
		seg = seg + '<div class="core core3"></div><div class="core core5"></div>';
		document.getElementById("cubeFields").innerHTML = document.getElementById("cubeFields").innerHTML + '<div class="core core3"></div><div class="core core5"></div>';
	}
	
	document.getElementById("rotLayer").innerHTML = seg;
}
function initnotscrambled(){
	console.log(86);
	a[0] = 0;
	for (j = 0; j < 6; j++){
		for (i = 1; i < 10; i++){
			a[i+j*9] = j+1;
		}
	}
	if (String(document.domain).indexOf("w-to") == -1) {	a = 0;	}	//elkur
	kiir();
}
var counter = 0;                     //  set your counter to 1
function facerotate(rotid) {           //  create a loop function
	setTimeout(function () {    
		if (rotid == 11) {	$( "#rotLayer" ).css( "transform", "rotatey("+(-(counter*10))+"deg)");	}
		if (rotid == 12) {	$( "#rotLayer" ).css( "transform", "rotatey("+(counter*10)+"deg)");	}
		if (rotid == 21) {	$( "#rotLayer" ).css( "transform", "rotatex("+(-(counter*10))+"deg)");	}
		if (rotid == 22) {	$( "#rotLayer" ).css( "transform", "rotatex("+(counter*10)+"deg)");	}
		if (rotid == 31) {	$( "#rotLayer" ).css( "transform", "rotatez("+(counter*10)+"deg)");	}
		if (rotid == 32) {	$( "#rotLayer" ).css( "transform", "rotatez("+(-(counter*10))+"deg)");	}
		if (rotid == 41) {	$( "#rotLayer" ).css( "transform", "rotatex("+(counter*10)+"deg)");	}
		if (rotid == 42) {	$( "#rotLayer" ).css( "transform", "rotatex("+(-(counter*10))+"deg)");	}
		if (rotid == 51) {	$( "#rotLayer" ).css( "transform", "rotatez("+(-counter*10)+"deg)");	}
		if (rotid == 52) {	$( "#rotLayer" ).css( "transform", "rotatez("+((counter*10))+"deg)");	}
		if (rotid == 61) {	$( "#rotLayer" ).css( "transform", "rotatey("+(counter*10)+"deg)");	}
		if (rotid == 62) {	$( "#rotLayer" ).css( "transform", "rotatey("+(-(counter*10))+"deg)");	}
		
		if (rotid == 71) {	$( "#rotLayer" ).css( "transform", "rotatex("+(-(counter*10))+"deg)");	}
		if (rotid == 72) {	$( "#rotLayer" ).css( "transform", "rotatex("+(counter*10)+"deg)");	}
		if (rotid == 81) {	$( "#rotLayer" ).css( "transform", "rotatey("+(counter*10)+"deg)");	}
		if (rotid == 82) {	$( "#rotLayer" ).css( "transform", "rotatey("+(-(counter*10))+"deg)");	}
		if (rotid == 91) {	$( "#rotLayer" ).css( "transform", "rotatez("+(counter*10)+"deg)");	}
		if (rotid == 92) {	$( "#rotLayer" ).css( "transform", "rotatez("+(-(counter*10))+"deg)");	}
		if (rotid == 101) {	$( "#rotLayer" ).css( "transform", "rotatex("+(counter*10)+"deg)");	}
		if (rotid == 102) {	$( "#rotLayer" ).css( "transform", "rotatex("+(-(counter*10))+"deg)");	}
		if (rotid == 111) {	$( "#rotLayer" ).css( "transform", "rotatey("+(-(counter*10))+"deg)");	}
		if (rotid == 112) {	$( "#rotLayer" ).css( "transform", "rotatey("+(counter*10)+"deg)");	}
		if (rotid == 121) {	$( "#rotLayer" ).css( "transform", "rotatez("+(counter*10)+"deg)");	}
		if (rotid == 122) {	$( "#rotLayer" ).css( "transform", "rotatez("+(-(counter*10))+"deg)");	}
		counter++;                     
		if (counter < 10) {
			facerotate(rotid);              
		} else {
		 document.getElementById("rotLayer").innerHTML = "";
		 $( "#rotLayer" ).css( "transform", "rotatey(0deg)");
		 kiir();
		 counter = 0;
		}
	}, speed)		//  ..  setTimeout()
}

function turn(oldal,merre){
	if (counter == 0) {
		if (oldal == "U") {
			kiirRotLayer(layeru,1);	//layermatrix, layerid
			facerotate(11);			//rotationid 11-U, 12 Ui, 21-L, 22-Li ...
			uu();
		}
		if (oldal == "u") {
			kiirRotLayer(layeru,1);	
			facerotate(12);			
			ui();
		}
		if (oldal == "R") {
			kiirRotLayer(layerr,4);
			facerotate(41);
			rr();
		}
		if (oldal == "r") {
			kiirRotLayer(layerr,4);
			facerotate(42);
			ri();
		}
		if (oldal == "D") {
			kiirRotLayer(layerd,6);
			facerotate(61);
			dd();
		}
		if (oldal == "d") {
			kiirRotLayer(layerd,6);
			facerotate(62);
			di();
		}
		if (oldal == "F") {
			kiirRotLayer(layerf,3);
			facerotate(31);
			ff();
		}
		if (oldal == "f") {
			kiirRotLayer(layerf,3);
			facerotate(32);
			fi();
		}
		if (oldal == "B") {
			kiirRotLayer(layerb,5);
			facerotate(51);
			bb();
		}
		if (oldal == "b") {
			kiirRotLayer(layerb,5);
			facerotate(52);
			bi();
		}
		if (oldal == "L") {
			kiirRotLayer(layerl,2);
			facerotate(21);
			ll();
		}
		if (oldal == "l") {
			kiirRotLayer(layerl,2);
			facerotate(22);
			li();
		}
		
		if (oldal == "U2") {
			kiirRotLayer(layeru2,6);
			facerotate(11);	
			uu();
			dd();ui();fd();
		}
		if (oldal == "u2") {
			kiirRotLayer(layeru2,6);	
			facerotate(12);			
			ui();
			di();uu();fd();fd();fd();
		}
		if (oldal == "R2") {
			kiirRotLayer(layerr2,2);
			facerotate(41);
			rr();
			bor();bor();bor();ri();ll();
		}
		if (oldal == "r2") {
			kiirRotLayer(layerr2,2);
			facerotate(42);
			ri();
			bor();rr();li();
		}
		if (oldal == "D2") {
			kiirRotLayer(layerd2,1);
			facerotate(61);
			dd();
			di();uu();fd();fd();fd();
		}
		if (oldal == "d2") {
			kiirRotLayer(layerd2,1);
			facerotate(62);
			di();
			dd();ui();fd();
		}
		if (oldal == "F2") {
			kiirRotLayer(layerf2,5);
			facerotate(31);
			ff();
			fi();bb();fd();bor();fd();fd();fd();
		}
		if (oldal == "f2") {
			kiirRotLayer(layerf2,5);
			facerotate(32);
			fi();
			ff();bi();fd();fd();fd();bor();fd();
		}
		if (oldal == "B2") {
			kiirRotLayer(layerb2,3);
			facerotate(51);
			bb();
			ff();bi();fd();fd();fd();bor();fd();
		}
		if (oldal == "b2") {
			kiirRotLayer(layerb2,3);
			facerotate(52);
			bi();
			fi();bb();fd();bor();fd();fd();fd();
		}
		if (oldal == "L2") {
			kiirRotLayer(layerl2,4);
			facerotate(21);
			ll();
			bor();rr();li();
		}
		if (oldal == "l2") {
			kiirRotLayer(layerl2,4);
			facerotate(22);
			li();
			bor();bor();bor();ri();ll();
		}
		if (oldal == "X") {
			kiirRotLayer(wholecube,99);
			facerotate(101);
			bor();bor();bor();
		}
		if (oldal == "x") {
			kiirRotLayer(wholecube,99);
			facerotate(102);
			bor();
		}
		if (oldal == "Y") {
			kiirRotLayer(wholecube,99);
			facerotate(111);
			fd();
		}
		if (oldal == "y") {
			kiirRotLayer(wholecube,99);
			facerotate(112);
			fd();fd();fd();
		}
		if (oldal == "Z") {
			kiirRotLayer(wholecube,99);
			facerotate(121);
			fd();bor();fd();fd();fd();
		}
		if (oldal == "z") {
			kiirRotLayer(wholecube,99);
			facerotate(122);
			fd();fd();fd();bor();fd();
		}
		
		
		
		if (oldal == "M") {
			kiirRotLayer(layerm,7);
			facerotate(71);
			bor();rr();li();
		}
		if (oldal == "m") {
			kiirRotLayer(layerm,7);
			facerotate(72);
			bor();bor();bor();ri();ll();
		}
		if (oldal == "E") {
			kiirRotLayer(layere,8);
			facerotate(81);
			di();uu();fd();fd();fd();
		}
		if (oldal == "e") {
			kiirRotLayer(layere,8);
			facerotate(82);
			dd();ui();fd();
		}
		if (oldal == "S") {
			kiirRotLayer(layers,9);
			facerotate(91);
			fi();bb();fd();bor();fd();fd();fd();
		}
		if (oldal == "s") {
			kiirRotLayer(layers,9);
			facerotate(92);
			ff();bi();fd();fd();fd();bor();fd();
		}
	}
}
$( document ).ready(function() {
	initnotscrambled();
	$( ".rotateU" ).mousedown(function() {		//face turns
		turn("U");
	});    
	$( ".rotateUi" ).mousedown(function() {
		turn("u");
	});    
	$( ".rotateR" ).mousedown(function() {
		turn("R");
	}); 
	$( ".rotateRi" ).mousedown(function() {
		turn("r");
	}); 
	$( ".rotateD" ).mousedown(function() {
		turn("D");
	}); 
	$( ".rotateDi" ).mousedown(function() {
		turn("d");
	}); 
	$( ".rotateF" ).mousedown(function() {
		turn("F");
	}); 
	$( ".rotateFi" ).mousedown(function() {
		turn("f");
	}); 
	$( ".rotateB" ).mousedown(function() {
		turn("B");
	}); 
	$( ".rotateBi" ).mousedown(function() {
		turn("b");
	}); 
	$( ".rotateL" ).mousedown(function() {
		turn("L");
	}); 
	$( ".rotateLi" ).mousedown(function() {
		turn("l");
	}); 
	
	
	$( ".rotateU2" ).mousedown(function() {		//double layer turns
		turn("U2");
	});    
	$( ".rotateU2i" ).mousedown(function() {
		turn("u2");
	});    
	$( ".rotateR2" ).mousedown(function() {
		turn("R2");
	}); 
	$( ".rotateR2i" ).mousedown(function() {
		turn("r2");
	}); 
	$( ".rotateD2" ).mousedown(function() {
		turn("D2");
	}); 
	$( ".rotateD2i" ).mousedown(function() {
		turn("d2");
	}); 
	$( ".rotateF2" ).mousedown(function() {
		turn("F2");
	}); 
	$( ".rotateF2i" ).mousedown(function() {
		turn("f2");
	}); 
	$( ".rotateB2" ).mousedown(function() {
		turn("B2");
	}); 
	$( ".rotateB2i" ).mousedown(function() {
		turn("b2");
	}); 
	$( ".rotateL2" ).mousedown(function() {
		turn("L2");
	}); 
	$( ".rotateL2i" ).mousedown(function() {
		turn("l2");
	}); 	
	
	
	$( ".rotateM" ).mousedown(function() {		//middle layer
		turn("M");
	}); 
	$( ".rotateMi" ).mousedown(function() {
		turn("m");
	}); 
	$( ".rotateE" ).mousedown(function() {
		turn("E");
	}); 
	$( ".rotateEi" ).mousedown(function() {
		turn("e");
	}); 
	$( ".rotateS" ).mousedown(function() {
		turn("S");
	}); 
	$( ".rotateSi" ).mousedown(function() {
		turn("s");
	}); 	
	
	$( ".rotateX" ).mousedown(function() {
		turn("X");
	});    
	$( ".rotateY" ).mousedown(function() {
		turn("Y");
	});    
	$( ".rotateZ" ).mousedown(function() {
		turn("Z");
	});    	
	$( ".rotateXi" ).mousedown(function() {
		turn("x");
	});    
	$( ".rotateYi" ).mousedown(function() {
		turn("y");
	});    
	$( ".rotateZi" ).mousedown(function() {
		turn("z");
	});    
	
	
	$( ".rotateKiir" ).mousedown(function() {
		kiir();
	});    
	$( ".rotateXview" ).mousedown(function() {
		cubex += 5;
		rotCube();
	});    
	$( ".rotateYview" ).mousedown(function() {
		cubey += 5;
		rotCube();
	});    
	$( ".rotateZview" ).mousedown(function() {
		cubez += 5;
		rotCube();
	});    
	$( ".rotateXview" ).mouseup(function() {
		cubex += 5;
		rotCube();
	});    
	$( ".rotateYview" ).mouseup(function() {
		cubey += 5;
		rotCube();
	});    
	$( ".rotateZview" ).mouseup(function() {
		cubez += 5;
		rotCube();
	});
	
	$( ".rotateXiview" ).mousedown(function() {
		cubex -= 5;
		rotCube();
	});    
	$( ".rotateYiview" ).mousedown(function() {
		cubey -= 5;
		rotCube();
	});    
	$( ".rotateZiview" ).mousedown(function() {
		cubez -= 5;
		rotCube();
	});    
	$( ".rotateXiview" ).mouseup(function() {
		cubex -= 5;
		rotCube();
	});    
	$( ".rotateYiview" ).mouseup(function() {
		cubey -= 5;
		rotCube();
	});    
	$( ".rotateZiview" ).mouseup(function() {
		cubez -= 5;
		rotCube();
	});    
	
	
});
function bor(){//borit
	s[1]=a[1];s[2]=a[4];s[3]=a[7];a[1]=a[45];a[4]=a[42];a[7]=a[39];a[45]=a[46];a[42]=a[49];a[39]=a[52];a[46]=a[19];a[49]=a[22];a[52]=a[25];a[19]=s[1];a[22]=s[2];a[25]=s[3];s[1]=a[2];s[2]=a[5];s[3]=a[8];a[2]=a[44];a[5]=a[41];a[8]=a[38];a[44]=a[47];a[41]=a[50];a[38]=a[53];a[47]=a[20];a[50]=a[23];a[53]=a[26];a[20]=s[1];a[23]=s[2];a[26]=s[3];s[1]=a[3];s[2]=a[6];s[3]=a[9];a[3]=a[43];a[6]=a[40];a[9]=a[37];a[43]=a[48];a[40]=a[51];a[37]=a[54];a[48]=a[21];a[51]=a[24];a[54]=a[27];a[21]=s[1];a[24]=s[2];a[27]=s[3];s[1]=a[10];s[2]=a[11];a[10]=a[16];a[11]=a[13];a[16]=a[18];a[13]=a[17];a[18]=a[12];a[17]=a[15];a[12]=s[1];a[15]=s[2];s[1]=a[28];s[2]=a[29];a[28]=a[30];a[29]=a[33];a[30]=a[36];a[33]=a[35];a[36]=a[34];a[35]=a[31];a[34]=s[1];a[31]=s[2];
}
function rot(){//D
	s[1]=a[25];s[2]=a[26];s[3]=a[27];a[25]=a[16];a[26]=a[17];a[27]=a[18];a[16]=a[43];a[17]=a[44];a[18]=a[45];a[43]=a[34];a[44]=a[35];a[45]=a[36];a[34]=s[1];a[35]=s[2];a[36]=s[3];s[1]=a[46];s[2]=a[47];a[46]=a[52];a[47]=a[49];a[52]=a[54];a[49]=a[53];a[54]=a[48];a[53]=a[51];a[48]=s[1];a[51]=s[2];
}
function roti(){//D'
	s[1]=a[25];s[2]=a[26];s[3]=a[27];a[25]=a[34];a[26]=a[35];a[27]=a[36];a[34]=a[43];a[35]=a[44];a[36]=a[45];a[43]=a[16];a[44]=a[17];a[45]=a[18];a[16]=s[1];a[17]=s[2];a[18]=s[3];s[1]=a[46];s[2]=a[47];a[46]=a[48];a[47]=a[51];a[48]=a[54];a[51]=a[53];a[54]=a[52];a[53]=a[49];a[52]=s[1];a[49]=s[2]; 
}
function fd(){//fordit teljes kockat clockwise F->L
	s[1]=a[19];s[2]=a[20];s[3]=a[21];a[19]=a[28];a[20]=a[29];a[21]=a[30];a[28]=a[37];a[29]=a[38];a[30]=a[39];a[37]=a[10];a[38]=a[11];a[39]=a[12];a[10]=s[1];a[11]=s[2];a[12]=s[3];s[1]=a[22];s[2]=a[23];s[3]=a[24];a[22]=a[31];a[23]=a[32];a[24]=a[33];a[31]=a[40];a[32]=a[41];a[33]=a[42];a[40]=a[13];a[41]=a[14];a[42]=a[15];a[13]=s[1];a[14]=s[2];a[15]=s[3];s[1]=a[25];s[2]=a[26];s[3]=a[27];a[25]=a[34];a[26]=a[35];a[27]=a[36];a[34]=a[43];a[35]=a[44];a[36]=a[45];a[43]=a[16];a[44]=a[17];a[45]=a[18];a[16]=s[1];a[17]=s[2];a[18]=s[3];s[1]=a[1];s[2]=a[2];a[1]=a[7];a[2]=a[4];a[7]=a[9];a[4]=a[8];a[9]=a[3];a[8]=a[6];a[3]=s[1];a[6]=s[2];s[1]=a[46];s[2]=a[47];a[46]=a[48];a[47]=a[51];a[48]=a[54];a[51]=a[53];a[54]=a[52];a[53]=a[49];a[52]=s[1];a[49]=s[2];
}
function uu(){		//up
	bor();bor();rot();bor();bor();
	}
function ui(){		//up inverted
	bor();bor();roti();bor();bor();
	}
function ff(){
	bor();rot();bor();bor();bor();
	}
function fi(){
	bor();roti();bor();bor();bor();
	}
function rr(){
	fd();bor();rot();bor();bor();bor();fd();fd();fd();
	}
function ri(){
	fd();bor();roti();bor();bor();bor();fd();fd();fd();
	}
function ll(){
	fd();fd();fd();bor();rot();bor();bor();bor();fd();
	}
function li(){
	fd();fd();fd();bor();roti();bor();bor();bor();fd();
	}
function dd(){
	rot();
	}
function di(){
	roti();
	}
function bb(){
	bor();bor();bor();rot();bor();
	}
function bi(){
	bor();bor();bor();roti();bor();
	}
function scramble(){		//keveri a kockat
	for (i=0;i<100;i++){
		rand=Math.floor(Math.random()*12);
		if (rand == 0) {uu();}
		if (rand == 1) {ui();}
		if (rand == 2) {ff();}
		if (rand == 3) {fi();}
		if (rand == 4) {dd();}
		if (rand == 5) {di();}
		if (rand == 6) {bb();}
		if (rand == 7) {bi();}
		if (rand == 8) {rr();}
		if (rand == 9) {ri();}
		if (rand == 10) {ll();}
		if (rand == 11) {li();}
	}
	kiir();
}
/*3D cube end*/








