function getUrlVars(){{var i={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,r,a){i[r]=a})}return i}function getUrlParam(i,e){var r="rubiks3x3";return r=e,window.location.href.indexOf(i)>-1&&(r=getUrlVars()[i]),r}function volumotfeketit(e){for(i=0;7>i;i++)document.getElementById("vbar"+i).style.backgroundColor=e>i?"#333":"#888"}function volumecontrolchanged(i){0==i&&(speed=1,volumotfeketit(0)),1==i&&(speed=2,volumotfeketit(1)),2==i&&(speed=3,volumotfeketit(2)),3==i&&(speed=5,volumotfeketit(3)),4==i&&(speed=7,volumotfeketit(4)),5==i&&(speed=10,volumotfeketit(5)),6==i&&(speed=15,volumotfeketit(6))}function algertek(i){return"F"==i?"F":"f"==i?"F'":"B"==i?"B":"b"==i?"B'":"L"==i?"L":"l"==i?"L'":"R"==i?"R":"r"==i?"R'":"U"==i?"U":"u"==i?"U'":"D"==i?"D":"d"==i?"D'":"M"==i?"M":"m"==i?"M'":"E"==i?"E":"e"==i?"E'":"S"==i?"S":"s"==i?"S'":"X"==i?"X":"x"==i?"X'":"Y"==i?"Y":"y"==i?"Y'":"Z"==i?"Z":"z"==i?"Z'":"0"==i?"F2":"1"==i?"B2":"2"==i?"L2":"3"==i?"R2":"4"==i?"U2":"5"==i?"D2":"6"==i?"M2":"7"==i?"E2":"8"==i?"S2":"9"==i?"X2":"q"==i?"Y2":"w"==i?"Z2":"o"==i?"(":"i"==i?"-":"p"==i?")":"T"==i?"u":"A"==i?"d":"G"==i?"l":"H"==i?"r":"J"==i?"f":"K"==i?"b":"t"==i?"u'":"a"==i?"d'":"g"==i?"l'":"h"==i?"r'":"j"==i?"f'":"k"==i?"b'":"c"==i?"u2":"v"==i?"d2":"n"==i?"l2":"C"==i?"r2":"V"==i?"f2":"N"==i?"b2":void 0}function initvariables(){for(-1==String(window.location.pathname).indexOf("algorithm")&&alert("You are not allowed to use this copyrighted material!"),hatterszin=getUrlParam("bg","DDD"),document.body.style.backgroundColor="#"+hatterszin,speed=getUrlParam("speed",5),speed>=1&&volumotfeketit(0),speed>=2&&volumotfeketit(1),speed>=3&&volumotfeketit(2),speed>=5&&volumotfeketit(3),speed>=7&&volumotfeketit(4),speed>=10&&volumotfeketit(5),speed>=15&&volumotfeketit(6),szinsema=getUrlParam("scheme","632541"),szinek=szinsema.split(""),i=0;9>i;i++)for(j=0;6>j;j++)a[i+9*j]=szinek[j];mezok=getUrlParam("fields","notgiven"),"notgiven"!=mezok&&(a=mezok.split(""));var e=getUrlParam("moves","noalgorithm");if("noalgorithm"!=e){alg=e.split("");var r="<div id='rotacio0' onClick='eddigkiir(0)'>&raquo;</div>";for(hanylepes=e.length,i=0;i<e.length;i++)r=r+"<div id='rotacio"+(i+1)+"' onClick='eddigkiir("+(i+1)+")'>"+algertek(alg[i])+"</div>";document.getElementById("algoritmus").innerHTML=r}if(initmozdulatok=getUrlParam("initmove","notgiven"),"notgiven"!=initmozdulatok)for(initmoves=initmozdulatok.split(""),hanyinitmove=initmozdulatok.length,i=0;hanyinitmove>i;i++)"u"==initmoves[i]&&ui(),"U"==initmoves[i]&&uu(),"d"==initmoves[i]&&di(),"D"==initmoves[i]&&dd(),"l"==initmoves[i]&&li(),"L"==initmoves[i]&&ll(),"r"==initmoves[i]&&ri(),"R"==initmoves[i]&&rr(),"f"==initmoves[i]&&fi(),"F"==initmoves[i]&&ff(),"b"==initmoves[i]&&bi(),"B"==initmoves[i]&&bb(),"M"==initmoves[i]&&(li(),rr(),bor()),"m"==initmoves[i]&&(ll(),ri(),bor(),bor(),bor()),"E"==initmoves[i]&&(uu(),di(),fd(),fd(),fd()),"e"==initmoves[i]&&(ui(),dd(),fd()),"S"==initmoves[i]&&(fi(),bb(),fd(),bor(),fd(),fd(),fd()),"s"==initmoves[i]&&(ff(),bi(),bor(),fd(),fd(),fd(),bor(),fd(),fd()),"X"==initmoves[i]&&(bor(),bor(),bor()),"x"==initmoves[i]&&bor(),"Y"==initmoves[i]&&fd(),"y"==initmoves[i]&&(fd(),fd(),fd()),"Z"==initmoves[i]&&(fd(),bor(),fd(),fd(),fd()),"z"==initmoves[i]&&(fd(),fd(),fd(),bor(),fd()),"0"==initmoves[i]&&(ff(),ff()),"1"==initmoves[i]&&(bb(),bb()),"2"==initmoves[i]&&(ll(),ll()),"3"==initmoves[i]&&(rr(),rr()),"4"==initmoves[i]&&(uu(),uu()),"5"==initmoves[i]&&(dd(),dd()),"6"==initmoves[i]&&(li(),rr(),bor(),li(),rr(),bor()),"7"==initmoves[i]&&(uu(),di(),fd(),fd(),fd(),uu(),di(),fd(),fd(),fd()),"8"==initmoves[i]&&(fi(),bb(),fd(),bor(),fd(),fd(),fd(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"9"==initmoves[i]&&(bor(),bor()),"q"==initmoves[i]&&(fd(),fd()),"w"==initmoves[i]&&(fd(),fd(),fd(),bor(),fd(),fd(),fd(),fd(),bor(),fd()),"T"==initmoves[i]&&(uu(),dd(),ui(),fd()),"t"==initmoves[i]&&(ui(),di(),uu(),fd(),fd(),fd()),"c"==initmoves[i]&&(ui(),di(),uu(),fd(),fd(),fd(),ui(),di(),uu(),fd(),fd(),fd()),"H"==initmoves[i]&&(rr(),bor(),bor(),bor(),ri(),ll()),"h"==initmoves[i]&&(ri(),bor(),rr(),li()),"C"==initmoves[i]&&(ri(),bor(),rr(),li(),ri(),bor(),rr(),li()),"A"==initmoves[i]&&(dd(),di(),uu(),fd(),fd(),fd()),"a"==initmoves[i]&&(di(),dd(),ui(),fd()),"v"==initmoves[i]&&(di(),dd(),ui(),fd(),di(),dd(),ui(),fd()),"J"==initmoves[i]&&(ff(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"j"==initmoves[i]&&(fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"V"==initmoves[i]&&(fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd(),fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"K"==initmoves[i]&&(bb(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"k"==initmoves[i]&&(bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"N"==initmoves[i]&&(bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd(),bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"G"==initmoves[i]&&(ll(),bor(),rr(),li()),"g"==initmoves[i]&&(li(),bor(),bor(),bor(),ri(),ll()),"n"==initmoves[i]&&(ll(),bor(),rr(),li(),ll(),bor(),rr(),li());if(initrevmozdulatok=getUrlParam("initrevmove","notgiven"),"notgiven"!=initrevmozdulatok)for(initrevmoves=initrevmozdulatok.split(""),hanyinitrevmove=initrevmozdulatok.length,i=hanyinitrevmove;i>=0;i--)"U"==initrevmoves[i]&&ui(),"u"==initrevmoves[i]&&uu(),"D"==initrevmoves[i]&&di(),"d"==initrevmoves[i]&&dd(),"L"==initrevmoves[i]&&li(),"l"==initrevmoves[i]&&ll(),"R"==initrevmoves[i]&&ri(),"r"==initrevmoves[i]&&rr(),"F"==initrevmoves[i]&&fi(),"f"==initrevmoves[i]&&ff(),"B"==initrevmoves[i]&&bi(),"b"==initrevmoves[i]&&bb(),"m"==initrevmoves[i]&&(li(),rr(),bor()),"M"==initrevmoves[i]&&(ll(),ri(),bor(),bor(),bor()),"e"==initrevmoves[i]&&(uu(),di(),fd(),fd(),fd()),"E"==initrevmoves[i]&&(ui(),dd(),fd()),"s"==initrevmoves[i]&&(fi(),bb(),fd(),bor(),fd(),fd(),fd()),"S"==initrevmoves[i]&&(ff(),bi(),bor(),fd(),fd(),fd(),bor(),fd(),fd()),"x"==initrevmoves[i]&&(bor(),bor(),bor()),"X"==initrevmoves[i]&&bor(),"y"==initrevmoves[i]&&fd(),"Y"==initrevmoves[i]&&(fd(),fd(),fd()),"z"==initrevmoves[i]&&(fd(),bor(),fd(),fd(),fd()),"Z"==initrevmoves[i]&&(fd(),fd(),fd(),bor(),fd()),"0"==initrevmoves[i]&&(ff(),ff()),"1"==initrevmoves[i]&&(bb(),bb()),"2"==initrevmoves[i]&&(ll(),ll()),"3"==initrevmoves[i]&&(rr(),rr()),"4"==initrevmoves[i]&&(uu(),uu()),"5"==initrevmoves[i]&&(dd(),dd()),"6"==initrevmoves[i]&&(li(),rr(),bor(),li(),rr(),bor()),"7"==initrevmoves[i]&&(uu(),di(),fd(),fd(),fd(),uu(),di(),fd(),fd(),fd()),"8"==initrevmoves[i]&&(fi(),bb(),fd(),bor(),fd(),fd(),fd(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"9"==initrevmoves[i]&&(bor(),bor()),"q"==initrevmoves[i]&&(fd(),fd()),"w"==initrevmoves[i]&&(fd(),fd(),fd(),bor(),fd(),fd(),fd(),fd(),bor(),fd()),"t"==initrevmoves[i]&&(uu(),dd(),ui(),fd()),"T"==initrevmoves[i]&&(ui(),di(),uu(),fd(),fd(),fd()),"c"==initrevmoves[i]&&(ui(),di(),uu(),fd(),fd(),fd(),ui(),di(),uu(),fd(),fd(),fd()),"h"==initrevmoves[i]&&(rr(),bor(),bor(),bor(),ri(),ll()),"H"==initrevmoves[i]&&(ri(),bor(),rr(),li()),"C"==initrevmoves[i]&&(ri(),bor(),rr(),li(),ri(),bor(),rr(),li()),"a"==initrevmoves[i]&&(dd(),di(),uu(),fd(),fd(),fd()),"A"==initrevmoves[i]&&(di(),dd(),ui(),fd()),"v"==initrevmoves[i]&&(di(),dd(),ui(),fd(),di(),dd(),ui(),fd()),"j"==initrevmoves[i]&&(ff(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"J"==initrevmoves[i]&&(fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"V"==initrevmoves[i]&&(fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd(),fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"k"==initrevmoves[i]&&(bb(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"K"==initrevmoves[i]&&(bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"N"==initrevmoves[i]&&(bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd(),bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"g"==initrevmoves[i]&&(ll(),bor(),rr(),li()),"G"==initrevmoves[i]&&(li(),bor(),bor(),bor(),ri(),ll()),"n"==initrevmoves[i]&&(ll(),bor(),rr(),li(),ll(),bor(),rr(),li());var o=getUrlParam("sett","0111101111");for(settings=o.split(""),1==settings[0]&&(autoplay=1),0==settings[1]&&(wholecuberotations=0),0==settings[2]&&(showbuttons=0),0==settings[3]&&(showrotations=0),0==settings[4]&&(darkbuttons=0),1==settings[5]&&(loopplayback=1),1==wholecuberotations&&(document.getElementById("rotation3d").style.display="block"),1==showbuttons&&(document.getElementById("kontrollerek").style.display="block"),1==showrotations&&(document.getElementById("algoritmus").style.display="block"),0==darkbuttons&&$("#wrapWidget").addClass("lightTheme"),editlinketgeneral(),kiir(),i=0;54>i;i++)sega[i]=a[i];1==autoplay&&setTimeout("playbackAlg()",2e3)}function playbackAlg(){0==playingBack&&hanylepes>0&&(playingBack=1,document.getElementById("playButton").style.backgroundPosition="-5px -187px",doPlayBack())}function doPlayBack(){var i,e=0;aktstep==hanylepes&&(1==loopplayback?(aktstep=-1,e=1):playingBack=0),1==playingBack&&(hanylepes>aktstep&&(aktstep+=1),eddigkiir(aktstep),i=0==e?setTimeout("doPlayBack()",200*speed):setTimeout("doPlayBack()",500*speed))}function pausePlayBack(){playingBack=0,document.getElementById("playButton").style.backgroundPosition="-5px -4px"}function eddigkiirPrev(){aktstep>0&&(playingBack=0,hanylepes>0&&(document.getElementById("playButton").style.backgroundPosition="-5px -4px"),aktstep-=1,eddigkiir(aktstep))}function eddigkiirNext(){hanylepes>aktstep&&(playingBack=0,hanylepes>0&&(document.getElementById("playButton").style.backgroundPosition="-5px -4px"),aktstep+=1,eddigkiir(aktstep))}function stopPlayback(){playingBack=0,document.getElementById("playButton").style.backgroundPosition="-5px -4px",aktstep=0,eddigkiir(aktstep)}function eddigkiir(i){eddigkiirja(i-1),hanylepes>0&&(document.getElementById("rotacio"+i).style.backgroundColor=1==darkbuttons?"#FFF":"#000",document.getElementById("rotacio"+elozostep).style.backgroundColor="#"+hatterszin),elozostep=i,aktstep=i,sztep=i,segednyilatkiir(i-1)}function segednyilatkiir(i){"U"==alg[i]&&(kiirRotLayer(layeru,1),facerotate(11,1),uu()),"u"==alg[i]&&(kiirRotLayer(layeru,1),facerotate(12,1),ui()),"D"==alg[i]&&(kiirRotLayer(layerd,6),facerotate(61,1),dd()),"d"==alg[i]&&(kiirRotLayer(layerd,6),facerotate(62,1),di()),"L"==alg[i]&&(kiirRotLayer(layerl,2),facerotate(21,1),ll()),"l"==alg[i]&&(kiirRotLayer(layerl,2),facerotate(22,1),li()),"R"==alg[i]&&(kiirRotLayer(layerr,4),facerotate(41,1),rr()),"r"==alg[i]&&(kiirRotLayer(layerr,4),facerotate(42,1),ri()),"F"==alg[i]&&(kiirRotLayer(layerf,3),facerotate(31,1),ff()),"f"==alg[i]&&(kiirRotLayer(layerf,3),facerotate(32,1),fi()),"B"==alg[i]&&(kiirRotLayer(layerb,5),facerotate(51,1),bb()),"b"==alg[i]&&(kiirRotLayer(layerb,5),facerotate(52,1),bi()),"M"==alg[i]&&(kiirRotLayer(layerm,7),facerotate(71,1),bor(),rr(),li()),"m"==alg[i]&&(kiirRotLayer(layerm,7),facerotate(72,1),bor(),bor(),bor(),ri(),ll()),"E"==alg[i]&&(kiirRotLayer(layere,8),facerotate(81,1),di(),uu(),fd(),fd(),fd()),"e"==alg[i]&&(kiirRotLayer(layere,8),facerotate(82,1),dd(),ui(),fd()),"S"==alg[i]&&(kiirRotLayer(layers,9),facerotate(91,1),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"s"==alg[i]&&(kiirRotLayer(layers,9),facerotate(92,1),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"4"==alg[i]&&(kiirRotLayer(layeru,1),facerotate(11,2),uu(),uu()),"5"==alg[i]&&(kiirRotLayer(layerd,6),facerotate(61,2),dd(),dd()),"2"==alg[i]&&(kiirRotLayer(layerl,2),facerotate(21,2),ll(),ll()),"3"==alg[i]&&(kiirRotLayer(layerr,4),facerotate(41,2),rr(),rr()),"0"==alg[i]&&(kiirRotLayer(layerf,3),facerotate(31,2),ff(),ff()),"1"==alg[i]&&(kiirRotLayer(layerb,5),facerotate(51,2),bb(),bb()),"6"==alg[i]&&(kiirRotLayer(layerm,7),facerotate(71,2),bor(),rr(),li(),bor(),rr(),li()),"7"==alg[i]&&(kiirRotLayer(layere,8),facerotate(81,2),di(),uu(),fd(),fd(),fd(),di(),uu(),fd(),fd(),fd()),"8"==alg[i]&&(kiirRotLayer(layers,9),facerotate(91,2),fi(),bb(),fd(),bor(),fd(),fd(),fd(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"X"==alg[i]&&(kiirRotLayer(wholecube,99),facerotate(101,1),bor(),bor(),bor()),"Y"==alg[i]&&(kiirRotLayer(wholecube,99),facerotate(111,1),fd()),"Z"==alg[i]&&(kiirRotLayer(wholecube,99),facerotate(121,1),fd(),bor(),fd(),fd(),fd()),"x"==alg[i]&&(kiirRotLayer(wholecube,99),facerotate(102,1),bor()),"y"==alg[i]&&(kiirRotLayer(wholecube,99),facerotate(112,1),fd(),fd(),fd()),"z"==alg[i]&&(kiirRotLayer(wholecube,99),facerotate(122,1),fd(),fd(),fd(),bor(),fd()),"9"==alg[i]&&(kiirRotLayer(wholecube,99),facerotate(101,2),bor(),bor(),bor(),bor(),bor(),bor()),"q"==alg[i]&&(kiirRotLayer(wholecube,99),facerotate(111,2),fd(),fd()),"w"==alg[i]&&(kiirRotLayer(wholecube,99),facerotate(121,2),fd(),bor(),fd(),fd(),fd(),fd(),bor(),fd(),fd(),fd()),"T"==alg[i]&&(kiirRotLayer(layeru2,6),facerotate(11,1),uu(),dd(),ui(),fd()),"t"==alg[i]&&(kiirRotLayer(layeru2,6),facerotate(12,1),ui(),di(),uu(),fd(),fd(),fd()),"c"==alg[i]&&(kiirRotLayer(layeru2,6),facerotate(12,2),ui(),di(),uu(),fd(),fd(),fd(),ui(),di(),uu(),fd(),fd(),fd()),"A"==alg[i]&&(kiirRotLayer(layerd2,1),facerotate(61,1),dd(),di(),uu(),fd(),fd(),fd()),"a"==alg[i]&&(kiirRotLayer(layerd2,1),facerotate(62,1),di(),dd(),ui(),fd()),"v"==alg[i]&&(kiirRotLayer(layerd2,1),facerotate(62,2),di(),dd(),ui(),fd(),di(),dd(),ui(),fd()),"G"==alg[i]&&(kiirRotLayer(layerl2,4),facerotate(21,1),ll(),bor(),rr(),li()),"g"==alg[i]&&(kiirRotLayer(layerl2,4),facerotate(22,1),li(),bor(),bor(),bor(),ri(),ll()),"n"==alg[i]&&(kiirRotLayer(layerl2,4),facerotate(21,2),ll(),bor(),rr(),li(),ll(),bor(),rr(),li()),"H"==alg[i]&&(kiirRotLayer(layerr2,2),facerotate(41,1),rr(),bor(),bor(),bor(),ri(),ll()),"h"==alg[i]&&(kiirRotLayer(layerr2,2),facerotate(42,1),ri(),bor(),rr(),li()),"C"==alg[i]&&(kiirRotLayer(layerr2,2),facerotate(42,2),ri(),bor(),rr(),li(),ri(),bor(),rr(),li()),"J"==alg[i]&&(kiirRotLayer(layerf2,5),facerotate(31,1),ff(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"j"==alg[i]&&(kiirRotLayer(layerf2,5),facerotate(32,1),fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"V"==alg[i]&&(kiirRotLayer(layerf2,5),facerotate(32,2),fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd(),fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"K"==alg[i]&&(kiirRotLayer(layerb2,3),facerotate(51,1),bb(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"k"==alg[i]&&(kiirRotLayer(layerb2,3),facerotate(52,1),bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"N"==alg[i]&&(kiirRotLayer(layerb2,3),facerotate(52,2),bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd(),bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd())}function eddigkiirja(e){for(i=0;54>i;i++)a[i]=sega[i];for(ii=0;ii<e;ii++)"U"==alg[ii]&&uu(),"u"==alg[ii]&&ui(),"D"==alg[ii]&&dd(),"d"==alg[ii]&&di(),"L"==alg[ii]&&ll(),"l"==alg[ii]&&li(),"R"==alg[ii]&&rr(),"r"==alg[ii]&&ri(),"F"==alg[ii]&&ff(),"f"==alg[ii]&&fi(),"B"==alg[ii]&&bb(),"b"==alg[ii]&&bi(),"M"==alg[ii]&&(li(),rr(),bor()),"m"==alg[ii]&&(ll(),ri(),bor(),bor(),bor()),"E"==alg[ii]&&(uu(),di(),fd(),fd(),fd()),"e"==alg[ii]&&(ui(),dd(),fd()),"S"==alg[ii]&&(fi(),bb(),fd(),bor(),fd(),fd(),fd()),"s"==alg[ii]&&(ff(),bi(),bor(),fd(),fd(),fd(),bor(),fd(),fd()),"X"==alg[ii]&&(bor(),bor(),bor()),"x"==alg[ii]&&bor(),"Y"==alg[ii]&&fd(),"y"==alg[ii]&&(fd(),fd(),fd()),"Z"==alg[ii]&&(fd(),bor(),fd(),fd(),fd()),"z"==alg[ii]&&(fd(),fd(),fd(),bor(),fd()),"0"==alg[ii]&&(ff(),ff()),"1"==alg[ii]&&(bb(),bb()),"2"==alg[ii]&&(ll(),ll()),"3"==alg[ii]&&(rr(),rr()),"4"==alg[ii]&&(uu(),uu()),"5"==alg[ii]&&(dd(),dd()),"6"==alg[ii]&&(li(),rr(),bor(),li(),rr(),bor()),"7"==alg[ii]&&(uu(),di(),fd(),fd(),fd(),uu(),di(),fd(),fd(),fd()),"8"==alg[ii]&&(fi(),bb(),fd(),bor(),fd(),fd(),fd(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"9"==alg[ii]&&(bor(),bor()),"q"==alg[ii]&&(fd(),fd()),"w"==alg[ii]&&(fd(),fd(),fd(),bor(),fd(),fd(),fd(),fd(),bor(),fd()),"T"==alg[ii]&&(uu(),dd(),ui(),fd()),"t"==alg[ii]&&(ui(),di(),uu(),fd(),fd(),fd()),"c"==alg[ii]&&(ui(),di(),uu(),fd(),fd(),fd(),ui(),di(),uu(),fd(),fd(),fd()),"H"==alg[ii]&&(rr(),bor(),bor(),bor(),ri(),ll()),"h"==alg[ii]&&(ri(),bor(),rr(),li()),"C"==alg[ii]&&(ri(),bor(),rr(),li(),ri(),bor(),rr(),li()),"A"==alg[ii]&&(dd(),di(),uu(),fd(),fd(),fd()),"a"==alg[ii]&&(di(),dd(),ui(),fd()),"v"==alg[ii]&&(di(),dd(),ui(),fd(),di(),dd(),ui(),fd()),"J"==alg[ii]&&(ff(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"j"==alg[ii]&&(fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"V"==alg[ii]&&(fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd(),fi(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"K"==alg[ii]&&(bb(),ff(),bi(),fd(),fd(),fd(),bor(),fd()),"k"==alg[ii]&&(bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"N"==alg[ii]&&(bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd(),bi(),fi(),bb(),fd(),bor(),fd(),fd(),fd()),"G"==alg[ii]&&(ll(),bor(),rr(),li()),"g"==alg[ii]&&(li(),bor(),bor(),bor(),ri(),ll()),"n"==alg[ii]&&(ll(),bor(),rr(),li(),ll(),bor(),rr(),li());kiir()}function bor(){s[0]=a[0],s[1]=a[3],s[2]=a[6],a[0]=a[44],a[3]=a[41],a[6]=a[38],a[44]=a[45],a[41]=a[48],a[38]=a[51],a[45]=a[18],a[48]=a[21],a[51]=a[24],a[18]=s[0],a[21]=s[1],a[24]=s[2],s[0]=a[1],s[1]=a[4],s[2]=a[7],a[1]=a[43],a[4]=a[40],a[7]=a[37],a[43]=a[46],a[40]=a[49],a[37]=a[52],a[46]=a[19],a[49]=a[22],a[52]=a[25],a[19]=s[0],a[22]=s[1],a[25]=s[2],s[0]=a[2],s[1]=a[5],s[2]=a[8],a[2]=a[42],a[5]=a[39],a[8]=a[36],a[42]=a[47],a[39]=a[50],a[36]=a[53],a[47]=a[20],a[50]=a[23],a[53]=a[26],a[20]=s[0],a[23]=s[1],a[26]=s[2],s[0]=a[9],s[1]=a[10],a[9]=a[15],a[10]=a[12],a[15]=a[17],a[12]=a[16],a[17]=a[11],a[16]=a[14],a[11]=s[0],a[14]=s[1],s[0]=a[27],s[1]=a[28],a[27]=a[29],a[28]=a[32],a[29]=a[35],a[32]=a[34],a[35]=a[33],a[34]=a[30],a[33]=s[0],a[30]=s[1]}function rot(){s[0]=a[24],s[1]=a[25],s[2]=a[26],a[24]=a[15],a[25]=a[16],a[26]=a[17],a[15]=a[42],a[16]=a[43],a[17]=a[44],a[42]=a[33],a[43]=a[34],a[44]=a[35],a[33]=s[0],a[34]=s[1],a[35]=s[2],s[0]=a[45],s[1]=a[46],a[45]=a[51],a[46]=a[48],a[51]=a[53],a[48]=a[52],a[53]=a[47],a[52]=a[50],a[47]=s[0],a[50]=s[1]}function roti(){s[0]=a[24],s[1]=a[25],s[2]=a[26],a[24]=a[33],a[25]=a[34],a[26]=a[35],a[33]=a[42],a[34]=a[43],a[35]=a[44],a[42]=a[15],a[43]=a[16],a[44]=a[17],a[15]=s[0],a[16]=s[1],a[17]=s[2],s[0]=a[45],s[1]=a[46],a[45]=a[47],a[46]=a[50],a[47]=a[53],a[50]=a[52],a[53]=a[51],a[52]=a[48],a[51]=s[0],a[48]=s[1]}function fd(){s[0]=a[18],s[1]=a[19],s[2]=a[20],a[18]=a[27],a[19]=a[28],a[20]=a[29],a[27]=a[36],a[28]=a[37],a[29]=a[38],a[36]=a[9],a[37]=a[10],a[38]=a[11],a[9]=s[0],a[10]=s[1],a[11]=s[2],s[0]=a[21],s[1]=a[22],s[2]=a[23],a[21]=a[30],a[22]=a[31],a[23]=a[32],a[30]=a[39],a[31]=a[40],a[32]=a[41],a[39]=a[12],a[40]=a[13],a[41]=a[14],a[12]=s[0],a[13]=s[1],a[14]=s[2],s[0]=a[24],s[1]=a[25],s[2]=a[26],a[24]=a[33],a[25]=a[34],a[26]=a[35],a[33]=a[42],a[34]=a[43],a[35]=a[44],a[42]=a[15],a[43]=a[16],a[44]=a[17],a[15]=s[0],a[16]=s[1],a[17]=s[2],s[0]=a[0],s[1]=a[1],a[0]=a[6],a[1]=a[3],a[6]=a[8],a[3]=a[7],a[8]=a[2],a[7]=a[5],a[2]=s[0],a[5]=s[1],s[0]=a[45],s[1]=a[46],a[45]=a[47],a[46]=a[50],a[47]=a[53],a[50]=a[52],a[53]=a[51],a[52]=a[48],a[51]=s[0],a[48]=s[1]}function uu(){bor(),bor(),rot(),bor(),bor()}function ui(){bor(),bor(),roti(),bor(),bor()}function ff(){bor(),rot(),bor(),bor(),bor()}function fi(){bor(),roti(),bor(),bor(),bor()}function rr(){fd(),bor(),rot(),bor(),bor(),bor(),fd(),fd(),fd()}function ri(){fd(),bor(),roti(),bor(),bor(),bor(),fd(),fd(),fd()}function ll(){fd(),fd(),fd(),bor(),rot(),bor(),bor(),bor(),fd()}function li(){fd(),fd(),fd(),bor(),roti(),bor(),bor(),bor(),fd()}function dd(){rot()}function di(){roti()}function bb(){bor(),bor(),bor(),rot(),bor()}function bi(){bor(),bor(),bor(),roti(),bor()}function kiir(){var e="";for(i=1;55>i;i++)e=e+'<div class="field mezo mezo'+i+" szine"+a[i-1]+'"><span>'+i+"</span></div>";-1==String(document.domain).indexOf("ks3x")&&(e=" "),document.getElementById("cubeFields").innerHTML=e}function linketgeneral(){var e="sss",r="seg";r="",e="";var o=1;for(i=0;hanylepes>i;i++)r+=alg[i];if(hanylepes>0&&(1==o?(e=e+"?moves="+r,o=0):e=e+"&moves="+r),"632541"!=szinsema&&(1==o?(r="?",o=0):r="&",e=e+r+"scheme="+szinsema),"notgiven"!=mezok){for(1==o?(r="?",o=0):r="&",r+="fields=",i=0;54>i;i++)r+=a[i];e+=r}if("notgiven"!=initmozdulatok){for(1==o?(r="?",o=0):r="&",r+="initmove=",i=0;hanyinitmove>i;i++)r+=initmoves[i];e+=r}if("notgiven"!=initrevmozdulatok){for(1==o?(r="?",o=0):r="&",r+="initrevmove=",i=0;hanyinitrevmove>i;i++)r+=initrevmoves[i];e+=r}return r="sett="+autoplay+wholecuberotations+showbuttons+showrotations+darkbuttons+loopplayback,"sett=011110"!=r&&(1==o?(r="?"+r,o=0):r="&"+r,e+=r),5!=speed&&(1==o?(r="?",o=0):r="&",e=e+r+"speed="+speed),"DDD"!=hatterszin&&(1==o?(r="?",o=0):r="&",e=e+r+"bg="+hatterszin),e}function editlinketgeneral(){var i='<a target="_blank" title="Edit" href="https://rubiks3x3.com/algorithm/edit.html'+linketgeneral()+'">&lowast;</a>';document.getElementById("editPencil").innerHTML=i}function rotCube(){segs="rotateX("+cubex+"deg) rotateY("+cubey+"deg) rotateZ("+cubez+"deg) translateX(0) translateY(0) translateZ(0)",$(".cube").css({transform:segs})}function kiirRotLayer(e,r){var o="",t="";for(i=0;i<e.length;i++)t="#cubeFields .mezo"+e[i],$(t).hide(),o=o+'<div class="layer mezo mezo'+e[i]+" szine"+a[e[i]-1]+'"><span>'+e[i]+"</span></div>";7>r&&(o=o+'<div class="core core'+r+'"></div>',document.getElementById("cubeFields").innerHTML=document.getElementById("cubeFields").innerHTML+'<div class="core core'+r+'"></div>'),7==r&&(o+='<div class="core core2"></div><div class="core core4"></div>',document.getElementById("cubeFields").innerHTML=document.getElementById("cubeFields").innerHTML+'<div class="core core2"></div><div class="core core4"></div>'),8==r&&(o+='<div class="core core1"></div><div class="core core6"></div>',document.getElementById("cubeFields").innerHTML=document.getElementById("cubeFields").innerHTML+'<div class="core core1"></div><div class="core core6"></div>'),9==r&&(o+='<div class="core core3"></div><div class="core core5"></div>',document.getElementById("cubeFields").innerHTML=document.getElementById("cubeFields").innerHTML+'<div class="core core3"></div><div class="core core5"></div>'),document.getElementById("rotLayer").innerHTML=o}function facerotate(i,e){setTimeout(function(){11==i&&$("#rotLayer").css("transform","rotatey("+-(10*counter*e)+"deg)"),12==i&&$("#rotLayer").css("transform","rotatey("+10*counter*e+"deg)"),21==i&&$("#rotLayer").css("transform","rotatex("+-(10*counter*e)+"deg)"),22==i&&$("#rotLayer").css("transform","rotatex("+10*counter*e+"deg)"),31==i&&$("#rotLayer").css("transform","rotatez("+10*counter*e+"deg)"),32==i&&$("#rotLayer").css("transform","rotatez("+-(10*counter*e)+"deg)"),41==i&&$("#rotLayer").css("transform","rotatex("+10*counter*e+"deg)"),42==i&&$("#rotLayer").css("transform","rotatex("+-(10*counter*e)+"deg)"),51==i&&$("#rotLayer").css("transform","rotatez("+10*-counter*e+"deg)"),52==i&&$("#rotLayer").css("transform","rotatez("+10*counter*e+"deg)"),61==i&&$("#rotLayer").css("transform","rotatey("+10*counter*e+"deg)"),62==i&&$("#rotLayer").css("transform","rotatey("+-(10*counter*e)+"deg)"),71==i&&$("#rotLayer").css("transform","rotatex("+-(10*counter*e)+"deg)"),72==i&&$("#rotLayer").css("transform","rotatex("+10*counter*e+"deg)"),81==i&&$("#rotLayer").css("transform","rotatey("+10*counter*e+"deg)"),82==i&&$("#rotLayer").css("transform","rotatey("+-(10*counter*e)+"deg)"),91==i&&$("#rotLayer").css("transform","rotatez("+10*counter*e+"deg)"),92==i&&$("#rotLayer").css("transform","rotatez("+-(10*counter*e)+"deg)"),101==i&&$("#rotLayer").css("transform","rotatex("+10*counter*e+"deg)"),102==i&&$("#rotLayer").css("transform","rotatex("+-(10*counter*e)+"deg)"),111==i&&$("#rotLayer").css("transform","rotatey("+-(10*counter*e)+"deg)"),112==i&&$("#rotLayer").css("transform","rotatey("+10*counter*e+"deg)"),121==i&&$("#rotLayer").css("transform","rotatez("+10*counter*e+"deg)"),122==i&&$("#rotLayer").css("transform","rotatez("+-(10*counter*e)+"deg)"),counter++,10>counter?facerotate(i,e):(document.getElementById("rotLayer").innerHTML="",$("#rotLayer").css("transform","rotatey(0deg)"),kiir(),counter=0)},15*speed)}function tulcsordul(i){return(i%360+360)%360}function test(){1==rotlenyom&&(cubex+=2,rotCube(),cubex=tulcsordul(cubex)),2==rotlenyom&&(cubey+=2,rotCube(),cubey=tulcsordul(cubey)),3==rotlenyom&&(cubez+=2,rotCube(),cubez=tulcsordul(cubez)),11==rotlenyom&&(cubex-=2,rotCube(),cubex=tulcsordul(cubex)),12==rotlenyom&&(cubey-=2,rotCube(),cubey=tulcsordul(cubey)),13==rotlenyom&&(cubez-=2,rotCube(),cubez=tulcsordul(cubez)),0==rotlenyom&&((cubex>=0&&150>cubex||cubex>335)&&(cubex-=5),cubex>=150&&336>cubex&&(cubex+=5),(cubey>=0&&150>cubey||cubey>335)&&(cubey-=5),cubey>=150&&336>cubey&&(cubey+=5),cubez>0&&160>cubez&&(cubez-=5),cubez>=160&&(cubez+=5),cubex=tulcsordul(cubex),cubey=tulcsordul(cubey),cubez=tulcsordul(cubez),cubex>335&&345>cubex&&(cubex=340),cubey>335&&345>cubey&&(cubey=340),(5>cubez||cubez>355)&&(cubez=0),340==cubex&&340==cubey&&0==cubez&&(rotlenyom=99)),rotCube()}var a=new Array,sega=new Array,s=new Array,settings=new Array,alg=new Array,hanylepes=0,szinek=new Array,initmoves=new Array,initrevmoves=new Array,hanyinitmove=0,hanyinitrevmove=0,initrevmove="x",colorscheme="x",moves="x",speed=5,hatterszin="x",i=0,j=0,sztep=0,elozostep=0,aktstep=0,playingBack=0,szinsema="632541",mezok="notgiven",initmozdulatok="nincs",initrevmozdulatok="nincs",autoplay=0,wholecuberotations=1,showbuttons=1,showrotations=1,darkbuttons=1,loopplayback=0,cubex=340,cubey=340,cubez=0,segs="yo";a=new Array,s=new Array;var i,j,layeru=[1,2,3,4,5,6,7,8,9,10,11,12,19,20,21,28,29,30,37,38,39],layerl=[10,11,12,13,14,15,16,17,18,1,4,7,19,22,25,46,49,52,39,42,45],layerf=[19,20,21,22,23,24,25,26,27,7,8,9,12,15,18,46,47,48,28,31,34],layerr=[28,29,30,31,32,33,34,35,36,3,6,9,21,24,27,48,51,54,37,40,43],layerb=[37,38,39,40,41,42,43,44,45,30,33,36,10,13,16,1,2,3,52,53,54],layerd=[46,47,48,49,50,51,52,53,54,25,26,27,16,17,18,25,26,27,34,35,36,43,44,45],layeru2=[1,2,3,4,5,6,7,8,9,10,11,12,19,20,21,28,29,30,37,38,39,13,14,15,22,23,24,31,32,33,40,41,42],layerl2=[10,11,12,13,14,15,16,17,18,1,4,7,19,22,25,46,49,52,39,42,45,2,5,8,20,23,26,47,50,53,38,41,44],layerf2=[19,20,21,22,23,24,25,26,27,7,8,9,12,15,18,46,47,48,28,31,34,4,5,6,11,14,17,29,32,35,49,50,51],layerr2=[28,29,30,31,32,33,34,35,36,3,6,9,21,24,27,48,51,54,37,40,43,2,5,8,20,23,26,47,50,53,38,41,44],layerb2=[37,38,39,40,41,42,43,44,45,30,33,36,10,13,16,1,2,3,52,53,54,4,5,6,11,14,17,29,32,35,49,50,51],layerd2=[46,47,48,49,50,51,52,53,54,25,26,27,16,17,18,25,26,27,34,35,36,43,44,45,13,14,15,22,23,24,31,32,33,40,41,42],layerm=[2,5,8,20,23,26,47,50,53,38,41,44],layere=[13,14,15,22,23,24,31,32,33,40,41,42],layers=[4,5,6,11,14,17,29,32,35,49,50,51],wholecube=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],counter=0,rotlenyom=99,interval=setInterval(test,50);$(document).ready(function(){$(".rotateStop").mouseup(function(){rotlenyom=99}),$(".resetXYZ").mouseup(function(){rotlenyom=0}),$(".rotateXview").click(function(){rotlenyom=1}),$(".rotateYview").click(function(){rotlenyom=2}),$(".rotateZview").click(function(){rotlenyom=3}),$(".rotateXiview").click(function(){rotlenyom=11}),$(".rotateYiview").click(function(){rotlenyom=12}),$(".rotateZiview").click(function(){rotlenyom=13})});