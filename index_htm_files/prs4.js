var xr_oldwarning="This website works best with any of the latest web browsers such as Internet Explorer 11, or the latest Firefox, Chrome or Edge.\nPlease update to a newer browser version to see smooth transition effects in this website.\n\nIf you are using an up to date browser and still see this message, make sure you don't have the browser in a compatibility mode.";var xr_opera=navigator.userAgent.indexOf('Opera')!=-1;var xr_webkit=navigator.userAgent.indexOf('AppleWebKit')!=-1;var xr_trident=navigator.userAgent.indexOf('Trident')!=-1;var xr_sslock=0;var xr_scale=1;var xr_scalex=0;var xr_scaley=0;var xr_ox=0;var xr_oy=0;var xr_scof=0;var xr_spapn=0;var xr_curp = 0;var xr_spatrs = new Array();var xr_spax1 = [ 0,0,1,1,0, 1,0,1,0,0, -1,0,1,0,0, -1,0,1,0,0, 1,0,1,0,0, 1,-1,1,0,0, 0,-1,1,0,0, -1,1,1,0,0, 0,-1,1,0,0, 0,1,1,0,0, 0,0,1,0,0, 0,0,1,0,0, -1,-1,1,0,0, 1,1,1,0,0, -1,1,1,0,0, 0,0,0.2,0,0, 0,1,1,0,0, 1,1,1,0,0, -1,-1,1,0,0, 1,-1,1,0,0, 0,0,1,2,179, 0,0,1,1,0, 0,0,1,4,179, 1,0,1,20,90, 0,-1,1,18,90, 1,0,1,20,-90, 0,-1,1,18,-90, 1,1,1,8,60, 0,0,1,12,179, 0,0,0.1,0,0 ];var xr_spax2 = [ 0,0,1,1,0, -1,0,1,0,0, 1,0,1,0,0, 1,0,1,0,0, -1,0,1,0,0, -1,1,1,0,0, 0,1,1,0,0, 1,-1,1,0,0, 0,1,1,0,0, 0,-1,1,0,0, -1,1,1,12,-180, 0,0,1,0,0, 1,1,1,0,0, -1,-1,1,0,0, 1,-1,1,0,0, 0,0,16,0,0, 0,-1,1,0,0, -1,-1,1,0,0, 1,1,1,0,0, -1,1,1,0,0, 0,0,1,2,-179, 0,0,1,1,0, 0,0,1,4,-179, -1,0,1,20,-90, 0,1,1,18,-90, -1,0,1,20,90, 0,1,1,18,90, -1,1,1,8,-60, 0,0,1,12,-179, 0,0,0.1,0,0 ];var xr_spax3 = [ 0,0,1,1,0, 1,0,1,0,0, -1,0,1,0,0, 0,-1,1,0,0, 0,1,1,0,0, 1,-1,1,0,0, -1,-1,1,0,0, 1,1,1,0,0, -1,1,1,0,0, 0,0,1,0,0];var xr_xlat = [0,1,2,0,0,5,0,0,3,4,0,10,6,7,8,0,0,0,0,0,0];var xr_spaxani = ['','slideInRight','slideInLeft','slideInDown','slideInUp','slideInDownRight','slideInDownLeft','slideInUpRight','slideInUpLeft', 'rollIn','fadeIn','fadeInDown','fadeInLeft','fadeInRight','fadeInUp','bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp','zoomIn','zoomInDown','zoomInLeft', 'zoomInRight','zoomInUp','rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','flipInX','flipInY','lightSpeedIn', 'slideExpandUp','hatch','expandOpen','bigEntrance', 'bounce','flash','pulse','rubberBand','shake','headShake','swing','tada','wobble','jello','pullUp', 'pullDown','stretchLeft','stretchRight'];var xr_spaxanii = ['','slideInRight','slideInLeft','slideInDown','slideInUp','slideInDownRight','slideInDownLeft','slideInUpRight','slideInUpLeft', 'rollIn','fadeIn','fadeInDown','fadeInLeft','fadeInRight','fadeInUp','bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp','zoomIn','zoomInDownI','zoomInLeftI', 'zoomInRightI','zoomInUpI','rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','flipInX','flipInY','lightSpeedIn', 'slideExpandUp','hatch','expandOpen','bigEntrance', 'bounce','flash','pulse','rubberBand','shake','headShake','swing','tada','wobble','jello','pullUp', 'pullDown','stretchLeft','stretchRight'];var xr_spaxanir = ['','slideOutRight','slideOutLeft','slideOutDown','slideOutUp', 'slideOutDownRight','slideOutDownLeft','slideOutUpRight','slideOutUpLeft', 'rollOut','fadeOut', 'fadeOutDown','fadeOutLeft','fadeOutRight','fadeOutUp','bounceOut','bounceOutDown','bounceOutLeft','bounceOutRight','bounceOutUp', 'zoomOut', 'zoomOutDown','zoomOutLeft', 'zoomOutRight','zoomOutUp','rotateOut','rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight', 'flipOutX','flipOutY','lightSpeedOut', 'fadeOut','fadeOut','fadeOut','fadeOut', 'fadeOut','fadeOut','fadeOut','fadeOut','fadeOut','fadeOut', 'fadeOut','fadeOut','fadeOut','fadeOut','fadeOut', 'fadeOut','fadeOut','fadeOut'];var xr_spaxanip0 = ["","pageIR","pageIL","pageIL","pageIR","pageITR","pageIT","pageIBL","pageIT","pageIB","pageRotateFI","pageFadeI","pageITL","pageIBR","pageIBL","pageZoomInI","pageIB","pageIBR", "pageITL","pageITR","pageFlipVFI","","pageFlipHFI","pageCubeHFI","pageCubeVFI","pageConcaveHFI","pageConcaveVFI","pageRotateFadeFI","pageRotateFlipFI","pageZoomOutI"];var xr_spaxanip1 = ["","pageIL","pageIR","pageIR","pageIL","pageIBL","pageIB","pageITR","pageIB","pageIT","pageRotateBI","pageFadeI","pageIBR","pageITL","pageITR","pageZoomOutI","pageIT","pageITL", "pageIBR","pageIBL","pageFlipVBI","","pageFlipHBI","pageCubeHBI","pageCubeVBI","pageConcaveHBI","pageConcaveVBI","pageRotateFadeBI","pageRotateFlipBI","pageZoomInI"];var xr_spaxanip2 = ["","pageOR","pageOL","pageOL","pageOR","pageOTR","pageOT","pageOBL","pageOT","pageOB","pageRotateFO","pageFadeO","pageOTL","pageOBR","pageOBL","pageZoomInO","pageOB","pageOBR", "pageOTL","pageOTR","pageFlipVFO","","pageFlipHFO","pageCubeHFO","pageCubeVFO","pageConcaveHFO","pageConcaveVFO","pageRotateFadeFO","pageRotateFlipFO","pageZoomOutO"];var xr_spaxanip3 = ["","pageOL","pageOR","pageOR","pageOL","pageOBL","pageOB","pageOTR","pageOB","pageOT","pageRotateBO","pageFadeO","pageOBR","pageOTL","pageOTR","pageZoomOutO","pageOT","pageOTL", "pageOBR","pageOBL","pageFlipVBO","","pageFlipHBO","pageCubeHBO","pageCubeVBO","pageConcaveHBO","pageConcaveVBO","pageRotateFadeBO","pageRotateFlipBO","pageZoomInO"];function xr_sst0(o){o.style.OTransition="";o.style.webkitTransition="";o.style.MozTransition="";o.style.transition="";};function xr_sst1(o,l){var t = "opacity "+l+"ms";if(xr_ffox) o.style.MozTransition=t+", -moz-transform "+l+"ms";else if(xr_webkit) o.style.webkitTransition=t+", -webkit-transform "+l+"ms";else if(xr_opera) o.style.OTransition=t+", -o-transform "+l+"ms";else o.style.transition=t+", transform "+l+"ms";};function xr_qset1(n,s,pn){if(n<100) n=xr_xlat[n];else n-=100;if(n>=xr_spaxani.length) n=0;if(n>0){if(s<50) s=50;if(s>4950) s=4950;var o=document.getElementById(pn);if(1||navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)||xr_ipod||navigator.userAgent.match(/Mac OS/)){if(o.className.indexOf("xr_scrnd_")==-1){o.className+=(' xr_scrnd_'+n+'_'+s);var opc=100;if(o.style.opacity){opc=parseInt(parseFloat(o.style.opacity)*100)};o.className+=(' xr_scropc_'+opc);};}else{var o=document.getElementById(pn);if(xr_ipod) o.className+=(' animated '+xr_spaxanii[n]);else o.className+=(' animated '+xr_spaxani[n]);o.style.animationPlayState="paused";o.style.animationDuration=(s*100)+"s";o.style.animationDelay="0ms";};};};function xr_qsetscrollani(t,s,pn){if(xr_autoscale) return;o=document.getElementById(pn);if(o.style.width==''){var ll=o.getElementsByTagName('*');for (var i=0;i<ll.length;i++){if(ll[i].style.width!=''||ll[i].tagName=="IMG"){if(ll[i].id==''){ll[i].id='xr_uid'+xr_uid;xr_uid++;};xr_qset1(t,s,ll[i].id);ll[i].className+=' xr_scrani ';};};}else{xr_qset1(t,s,pn);o.className+=' xr_scrani ';};};function xr_scranijs(oo,n,x,opc){if(oo.xr_trmtr&&oo.xr_trmtr==x+1) return;oo.xr_trmtr=x+1;switch (n){case 1: oo.style.transform="translate3d("+(1000*(1-x))+"px, 0, 0)";break;case 2: oo.style.transform="translate3d("+(-1000*(1-x))+"px, 0, 0)";break;case 9:{oo.style.opacity=x*opc;oo.style.transform="translate3d("+(-100*(1-x))+"%, 0, 0) rotate3d(0, 0, 1, "+(-120*(1-x))+"deg)";};break;case 11:{oo.style.opacity=x*opc;oo.style.transform="translate3d(0, "+(-100*(1-x))+"%, 0)";};break;case 12:{oo.style.opacity=x*opc;oo.style.transform="translate3d("+(-100*(1-x))+"%, 0, 0)";};break;case 13:{oo.style.opacity=x*opc;oo.style.transform="translate3d("+(100*(1-x))+"%, 0, 0)";};break;case 14:{oo.style.opacity=x*opc;oo.style.transform="translate3d(0, "+(100*(1-x))+"%, 0)";};break;case 15:{if(x<0.6) oo.style.opacity=(opc*x*10)/6;else oo.style.opacity=opc;var z=0.3;if(x<=0.2) z=x*4+0.3;else if(x<=0.4) z=1.3-x;else if(x<=0.6) z=(x-0.4)*0.65+0.9;else if(x<=0.8) z=(0.8-x)*0.3+0.97;else z=(x-0.8)*0.15+0.97;oo.style.transform="scale3d("+z+","+z+","+z+")";};break;case 16: case 17: case 18: case 19:{if(x<0.6) oo.style.opacity=(opc*x*10)/6;else oo.style.opacity=opc;oo.style.transformOrigin="0 0";if(x<=0.6) x=-1025*(0.6-x)/0.6+25;else if(x<=0.75) x=((0.75-x)*35/0.15)-10;else if(x<=0.9) x=x*100-85;else x= 50*(1-x);switch (n){case 16: oo.style.transform="translate3d(0, "+x+"px, 0)";break;case 19: oo.style.transform="translate3d(0, "+(-x)+"px, 0)";break;case 17: oo.style.transform="translate3d("+x+"px, 0, 0)";break;case 18: oo.style.transform="translate3d("+(-x)+"px, 0, 0)";break;};};break;case 20:{if(x<0.5) oo.style.opacity=opc*x*2;else oo.style.opacity=opc;x=x*0.7+0.3;oo.style.transform="scale3d("+x+","+x+","+x+")";};break;case 21: case 22: case 23: case 24:{var z=x;oo.style.opacity=x*opc;x=200*(1-x);switch (n){case 21: oo.style.transform="translate3d(0, "+(-x)+"%, 0) scale3d("+z+","+z+","+z+")";break;case 22: oo.style.transform="translate3d("+(-x)+"%, 0, 0) scale3d("+z+","+z+","+z+")";break;case 23: oo.style.transform="translate3d("+x+"%, 0, 0) scale3d("+z+","+z+","+z+")";break;case 24: oo.style.transform="translate3d(0, "+x+"%, 0) scale3d("+z+","+z+","+z+")";break;};};break;case -1:{var z=1;if(x<=0.6){x=(x*10)/6;oo.style.opacity=x*opc;z=((x*0.9)+0.1)*0.475;x=(1060*(1-x))-60;}else{oo.style.opacity=opc;x=(x-0.6)*2.5;z=0.525*x+0.475;x=-60*(1-x);};switch (n){case 21: oo.style.transform="scale3d("+z+","+z+","+z+") translate3d(0, "+(-x)+"px, 0)";break;case 22: oo.style.transform="scale3d("+z+","+z+","+z+") translate3d("+(-x)+"px, 0, 0)";break;case 23: oo.style.transform="scale3d("+z+","+z+","+z+") translate3d("+x+"px, 0, 0)";break;case 24: oo.style.transform="scale3d("+z+","+z+","+z+") translate3d(0, "+x+"px, 0)";break;};};break;case 25:{oo.style.opacity=x*opc;oo.style.transformOrigin="50% 50%";oo.style.transform="rotate3d(0, 0, 1, "+(-179*(1-x))+"deg)";};break;case 26:{oo.style.opacity=x*opc;oo.style.transformOrigin="0 100%";oo.style.transform="rotate3d(0, 0, 1, "+(-45*(1-x))+"deg)";};break;case 27:{oo.style.opacity=x*opc;oo.style.transformOrigin="100% 100%";oo.style.transform="rotate3d(0, 0, 1, "+(45*(1-x))+"deg)";};break;case 28:{oo.style.opacity=x*opc;oo.style.transformOrigin="0 100%";oo.style.transform="rotate3d(0, 0, 1, "+(45*(1-x))+"deg)";};break;case 29:{oo.style.opacity=x*opc;oo.style.transformOrigin="100% 100%";oo.style.transform="rotate3d(0, 0, 1, "+(-45*(1-x))+"deg)";};break;case 30: case 31:{if(x<0.6) oo.style.opacity=(x*opc*10)/6;else oo.style.opacity=opc;if(x<=0.4) x=(1-(x/0.4))*110-20;else if(x<=0.6) x=(x-0.4)*150-20;else if(x<=0.8) x=(0.8-x)*75-5;else x=(x-0.8)*25-5;if(n==30) oo.style.transform="perspective(400px) rotate3d(1, 0, 0, "+x+"deg)";else oo.style.transform="perspective(400px) rotate3d(0, 1, 0, "+x+"deg)";};break;case 35:{if(x<=0.5) x=(0.5-x)*1.7+0.95;else if(x<=0.8) x=(x-0.5)/3+0.95;else if(x<=0.9) x=(0.9-x)*0.7+0.98;else x=(x-0.9)*0.2+0.98;oo.style.transform="scale("+x+")";};break;case 47: case 49: case 50:{if(x<=0.4) x=x*2.3+0.1;else if(x<=0.6) x=(0.6-x)*0.2+0.98;else if(x<=0.8) x=(x-0.6)*0.15+0.98;else x=(1-x)*0.05+1;switch (n){case 47:{oo.style.transformOrigin="50% 100%";oo.style.transform="scaleY("+x+")";};break;case 49:{oo.style.transformOrigin="100% 0";oo.style.transform="scaleX("+x+")";};break;case 50:{oo.style.transformOrigin="0 0";oo.style.transform="scaleX("+x+")";};break;};};break;case 10: default: oo.style.opacity=x*opc;break;};};var xr_anitime = 0;function xr_timeclass(t){var sc="xr_ad";if(t<100)t=100;if(t<950){sc+="0"+parseInt((t+50)/100);}else if(t<1900){sc+="1"+(parseInt((t-900)/200)*2);}else if(t<2850){sc+="2"+(parseInt((t-1850)/300)*3);}else if(t<3800){sc+="3"+(parseInt((t-2800)/400)*4);}else if(t<4750){sc+="4"+(parseInt((t-3750)/500)*5);}else sc+="50";return sc;};function xr_spatr(pn,x,y,dx,op,r,n){if(n<100) n=xr_xlat[n];else n-=100;if(n>=xr_spaxani.length) n=0;if(n>0){var o=document.getElementById(pn);var s=o.className;var i=s.indexOf(" animated ");if(i>=0) s=s.substr(0,i);o.className=s;if(xr_ipod) o.className+=(' animated '+xr_spaxanii[n]);else o.className+=(' animated '+xr_spaxani[n]);if(xr_anitime>0){if(xr_ipod||navigator.userAgent.match(/Mac OS/)){o.className+=(' '+xr_timeclass(xr_anitime));void o.offsetWidth;  }else o.style.animationDuration = xr_anitime+"ms";};};};function xr_spatrr(pn,n,l){if(n<100) n=xr_xlat[n];else n-=100;if(n>=xr_spaxanir.length) n=0;if(n>0){var o=document.getElementById(pn);var s=o.className;var i=s.indexOf(" animated ");if(i>=0) s=s.substr(0,i);o.className=s;o.className+=(' animated '+xr_spaxanir[n]);if(l>0){if(xr_ipod||navigator.userAgent.match(/Mac OS/)){o.className+=(' '+xr_timeclass(l));}else o.style.animationDuration = l+"ms";};};};function xr_spatrp(pn,x,y,dx,op,r,n){xr_spatrpa(pn,n,0,0);};function xr_spatrpa(pn,n,l,d){var o=document.getElementById(pn);if(o.style.display!='block') return;o.style.visibility='visible';var ss=xr_scale;var sx=xr_scalex;var sy=xr_scaley;if(o.xr_scale){ss=o.xr_scale;sx=o.xr_scalex;sy=o.xr_scaley;};if(xr_chrome){xr_xr.style.zoom=ss;ss=1;sx=0;sy=0;};xr_scalex=sx;xr_scaley=sy;if(ss==1||xr_chrome) o.parentNode.style.transform="";else o.parentNode.style.transform="scale("+ss+")";if (xr_ipod && xr_getScreenWidth() == window.innerWidth) {window.scrollTo(0,0);}if(ss!=1) o.style.marginLeft=sx/ss+"px";var s=o.className;var i=s.indexOf(" animated ");if(i>=0) s=s.substr(0,i);o.className=s;if(n&&l){var an="";if(d==0) an=xr_spaxanip0[n];else if(d==1) an=xr_spaxanip1[n];else if(d==2) an=xr_spaxanip2[n];else if(d==3) an=xr_spaxanip3[n];o.className+=" animated "+an;if(xr_ipod||navigator.userAgent.match(/Mac OS/)) o.className+=(' '+xr_timeclass(l));else{o.style.animationDuration = l+"ms";o.style.animationDelay="0ms";};};};xr_uid=0;function xr_spatrll(pn,x,y,dx,op,r,n){var o=document.getElementById("xr_page"+xr_curp);if(!o) o=document.getElementById("xr_xr");var w=xr_gow(o);var h=xr_goh(o);w=w*x;h=h*y;o=document.getElementById(pn);if(o.style.width==''){var oc=o.children;var f=0;if(oc.length==1&&oc[0].tagName=="A"&&oc[0].className.indexOf("highslide")==-1){oc=oc[0].children;f=1;};if((f||oc.length==1)&&oc[0].style.width!=''){o.style.left=oc[0].style.left;o.style.top=oc[0].style.top;o.style.width=oc[0].style.width;o.style.height=oc[0].style.height;var l=parseInt(o.style.left);var t=parseInt(o.style.top);for(var i=0;i<oc.length;i++){oc[i].style.left=(parseInt(oc[i].style.left)-l)+"px";oc[i].style.top=(parseInt(oc[i].style.top)-t)+"px";};xr_spatr(pn,w,h,dx,op,r,n);}else{var lo=o.getElementsByTagName('*');var ll=[];for (var i=0;i<lo.length;i++){if(lo[i].className.indexOf("xwidget")!=-1)ll.push(lo[i]);if(lo[i].style.width!=''||lo[i].tagName=="IMG"){if(lo[i].className.indexOf("xr_annt")==-1)ll.push(lo[i]);};};for (var i=0;i<ll.length;i++){var sp=document.createElement("SPAN");sp.id=xr_guid();sp.style.position=window.getComputedStyle(ll[i],null).getPropertyValue("position");ll[i].style.position="absolute";if(ll[i].style.width=="")sp.style.width=ll[i].offsetWidth+"px";else sp.style.width=ll[i].style.width;if(ll[i].style.height=="")sp.style.height=ll[i].offsetHeight+"px";else sp.style.height=ll[i].style.height;var p=String(ll[i].className).indexOf("xr_w_");if(p!=-1) sp.style.width=parseInt(ll[i].className.substr(p+5))+"px";p=String(ll[i].className).indexOf("xr_h_");if(p!=-1) sp.style.height=parseInt(ll[i].className.substr(p+5))+"px";sp.style.top=ll[i].style.top;sp.style.left=ll[i].style.left;sp.className+=" xr_annt";ll[i].style.top="0px";ll[i].style.left="0px";var p=ll[i].parentNode;p.insertBefore(sp,ll[i]);var e=p.removeChild(ll[i]);sp.appendChild(e);e.className+=" xr_annt";xr_spatr(sp.id,w,h,dx,op,r,n);};};}else xr_spatr(pn,w,h,dx,op,r,n);};function xr_spatrx(pn,d,n){n=n*5;if(d==0) xr_spatrp(pn,xr_spax1[n],xr_spax1[n+1],xr_spax1[n+2],xr_spax1[n+3],xr_spax1[n+4],n/5);else if(d==1) xr_spatrp(pn,xr_spax2[n],xr_spax2[n+1],xr_spax2[n+2],xr_spax2[n+3],xr_spax2[n+4],n/5);else if(d==2) xr_spatrll(pn,xr_spax3[n],xr_spax3[n+1],xr_spax3[n+2],xr_spax3[n+3],xr_spax3[n+4],n/5);};function xr_spaoint(o){var r=-1;if(typeof(o.xr_qint)=='number')r=o.xr_qint;return r;};var xr_spart0cntr=0;function xr_spatr0(pn){var o=document.getElementById(pn);if(xr_spaoint(o)!=-1){clearInterval(o.xr_qint);o.xr_qint=-1;if(pn.indexOf("xr_page")==0 && xr_spart0cntr>0) xr_spart0cntr--;};if(pn.indexOf("xr_page")==0){var j=o.getElementsByTagName('DIV');for (var i=0;i<j.length;i++){if(j[i].className.indexOf("xr_prs")!=-1){if(xr_spaoint(j[i])!=-1){clearInterval(j[i].xr_qint);j[i].style.visibility='hidden';j[i].style.display='none';};};};xr_allvids();};if(o.style.position!="fixed"){o.style.marginTop=0;};o.style.visibility='hidden';o.style.display='none';xr_rld(o);if(pn.indexOf("xr_page")==0){var l=document.location.hash;if(!(l&&l.substr(1).indexOf("#")!=-1)) document.location.hash="#xl_"+xr_ghn("xr_page"+xr_curp);if(!xr_spart0cntr) xr_rx();};if(o.style.position!="fixed"){o.style.marginTop=0;o.style.marginLeft=0;};xr_triglock=0;};function xr_ghn(pn){var o=document.getElementById(pn);if(o&&o.firstElementChild&&o.firstElementChild.id)return o.firstElementChild.id;else return '';};function xr_spatr1(n,l,p,cln,cll){if(p==xr_curp) return;var pn="xr_page"+p;var o=document.getElementById(pn);if(xr_spaoint(o)!=-1){clearInterval(o.xr_qint);o.xr_qint=-1;if(xr_spart0cntr>0) xr_spart0cntr--;};if(o.style.display!='block'){o.style.display='block';o.style.visibility='hidden';xr_rld(o);};xr_spabgres(o);if(p>xr_curp) setTimeout("xr_spatrpa('"+pn+"',"+n+","+l+",0)",20);else setTimeout("xr_spatrpa('"+pn+"',"+n+","+l+",1)",20);var nw=o.offsetWidth;var od=(nw-document.getElementById('xr_xr').offsetWidth)/2;document.getElementById('xr_xr').style.width=nw+'px';document.getElementById('xr_page'+xr_curp).style.marginLeft=od+'px';pn="xr_page"+xr_curp;if(p>xr_curp) xr_spatrpa(pn,n,l,2);else xr_spatrpa(pn,n,l,3);o=document.getElementById(pn);xr_spart0cntr++;o.xr_qint=setInterval('xr_spatr0("'+pn+'")',20+l);xr_curp=p;if(cll!='') xr_spappsl(cln,cll);xr_sslock=0;};function xr_qstartspa(n,l,p,cln,cll){if(p==xr_curp){xr_sslock=0;return;};var pb=document.getElementById('xr_bph');if(pb){var f=0;var bn="xr_page_"+p+"_";var bb=pb.getElementsByTagName('DIV');for (var i=0;i<bb.length;i++){if(bb[i].className.indexOf('xr_page')!=-1){if(f<2 && bb[i].className.indexOf(bn)!=-1){f=1;bb[i].style.visibility='visible';}else{bb[i].style.visibility='hidden';if(f)f=2;};};};};{var bn="xr_page_"+p+"_";var bb=document.getElementsByTagName('DIV');for (var i=0;i<bb.length;i++){if(bb[i].className.indexOf('xr_page_')!=-1){if(bb[i].className.indexOf(bn)!=-1){bb[i].style.visibility='visible';}else{bb[i].style.visibility='hidden';};};};};if(xr_spaold){if(!xr_autoscale){var ss=document.getElementById('xr_xrii');ss.scrollTop=0;ss.scrollLeft=0;window.scrollTo(0,0);};var pn="xr_page"+p;var o=document.getElementById(pn);o.style.display='block';o.style.visibility='visible';xr_rld(o);document.getElementById('xr_xr').style.width=o.offsetWidth+"px";pn="xr_page"+xr_curp;o=document.getElementById(pn);o.style.display='none';o.style.visibility='hidden';xr_rld(o);xr_curp=p;xr_trgrs0(p);document.location.hash="#xl_"+xr_ghn("xr_page"+p);xr_sslock=0;xr_rx();xr_allvids();return;};if(!xr_autoscale){var ss=document.getElementById('xr_xrii');document.getElementById("xr_page"+xr_curp).style.marginTop = (-ss.scrollTop)+'px';ss.scrollTop=0;ss.scrollLeft=0;window.scrollTo(0,0);};if(l==0) l=500;if(n==0) l=20;xr_anitime=l;var pn="xr_page"+p;var o=document.getElementById(pn);xr_spaprsc(o);if(xr_spaoint(o)!=-1){clearInterval(o.xr_qint);o.xr_qint=-1;if(xr_spart0cntr>0) xr_spart0cntr--;}else{xr_sst0(o);if(p>xr_curp) xr_spatrx(pn,0,n);else xr_spatrx(pn,1,n);};if(o.style.position!="fixed"){o.style.marginTop=0;o.style.marginLeft=0;};setTimeout("xr_spatr1("+n+","+l+","+p+","+cln+",'"+cll+"')", 20);xr_trgrs0(p);xr_triglock=1;};function xr_spatrl1(n,l,layer){var o=document.getElementById(layer);if (o.style.display!='block'){o.style.display='block';o.style.visibility='visible';xr_rld(o);};setTimeout("xr_spatrx('"+layer+"',2,0)", 20);xr_sslock=0;};function xr_spatrl1b(n,l,layer,d){var o=document.getElementById(layer);d=0;xr_spatrx(layer,2,n);var ll=l;if(d)xr_spatrr(layer,n,l);else ll=0;if(xr_spaoint(o)==-1) o.xr_qint=setInterval('xr_spatr0("'+layer+'")',20+ll-ll);xr_sslock=0;};function xr_qstartll(n,l,layer,d){if(xr_sslock) setTimeout("xr_qstartll("+n+","+l+",'"+layer+"'"+","+d+")",20);xr_sslock=1;xr_qstartl(n,l,layer,d)};function xr_qstartl(n,l,layer,d){if(xr_spaold){var o=document.getElementById(layer);o.style.display='block';o.style.visibility='visible';xr_spapwr(layer);xr_rld(o);xr_sslock=0;return;};if(l==0) l=500;if(n==0) l=20;xr_anitime=l;var o=document.getElementById(layer);if(xr_spaoint(o)!=-1){clearInterval(o.xr_qint);o.xr_qint=-1;};if(o.style.display!='block') xr_sst0(o);xr_spatrx(layer,2,n);setTimeout("xr_spatrl1("+n+","+l+",'"+layer+"')", 20);};function xr_qstartlbl(n,l,layer,d){if(xr_sslock) setTimeout("xr_qstartlbl("+n+","+l+",'"+layer+"',"+d+")",20);xr_sslock=1;xr_qstartlb(n,l,layer,d)};function xr_qstartlb(n,l,layer,d){if(xr_spaold){var o=document.getElementById(layer);o.style.display='none';o.style.visibility='hidden';xr_rld(o);xr_sslock=0;return;};if(l==0) l=500;if(n==0) l=20;xr_anitime=l;var o=document.getElementById(layer);setTimeout("xr_spatrl1b("+n+","+l+",'"+layer+"',"+d+")", 20);};function xr_donext(){if(xr_sslock) return 1;xr_sslock=1;var oo=document.getElementById("xr_page"+xr_curp);if(typeof(oo.xr_curprl)!='number')oo.xr_curprl=0;if(xr_spaoint(oo)==-1){var i;var j=0;var o=0;var jj=oo.getElementsByTagName('DIV');for (i=0;i<jj.length && o==0;i++){if(jj[i].className.indexOf("xr_prs")!=-1){if(j==oo.xr_curprl){o=jj[i];};j++;};};if(o!=0){var s=xr_spappsls(xr_curp);s=s.substr(0,oo.xr_curprl)+'1'+s.substr(oo.xr_curprl+1);xr_sslock=0;if(top.isRemotePresenter){var cmd = 'xr_spapps('+xr_curp+','+(oo.xr_curprl+1)+',"'+s+'")';run_presenter_command(cmd);}else xr_spapps(xr_curp,oo.xr_curprl+1,s);}else{xr_sslock=0;return 0;};}else xr_sslock=0;return 1;};function xr_doprev(){if(xr_sslock) return 1;xr_sslock=1;var oo=document.getElementById("xr_page"+xr_curp);if(typeof(oo.xr_curprl)!='number')oo.xr_curprl=0;if (!oo.xr_curprl){xr_sslock=0;return 0;};if(xr_spaoint(oo)==-1){var s=xr_spappsls(xr_curp);s=s.substr(0,oo.xr_curprl-1)+'0'+s.substr(oo.xr_curprl);xr_sslock=0;if(top.isRemotePresenter){var cmd = 'xr_spapps('+xr_curp+','+(oo.xr_curprl-1)+',"'+s+'")';run_presenter_command(cmd);}else xr_spapps(xr_curp,oo.xr_curprl-1,s);}else xr_sslock=0;return 1;};function xr_spappsls(n){var o=document.getElementById("xr_page"+n);var r='';var j=o.getElementsByTagName('DIV');for (var i=0;i<j.length;i++){if(j[i].className.indexOf("xr_prs")!=-1){var v='0';if(j[i].style.display=='block'&&xr_spaoint(j[i])==-1)v='1';r=r+v;};};return r;};function xr_spappsl(xr_spasln,xr_spasll){var lck=1;if(xr_spasll!=''){var oo=document.getElementById("xr_page"+xr_curp);if(typeof(oo.xr_curprl)!='number')oo.xr_curprl=0;if(xr_spaoint(oo)==-1){var i;var j=0;var o=0;var jj=oo.getElementsByTagName('DIV');if(xr_spasln!=-1) oo.xr_curprl=xr_spasln;for (i=0;i<jj.length;i++){if(jj[i].className.indexOf("xr_prs")!=-1){o=jj[i];var v='0';if(o.style.display=='block'&&xr_spaoint(o)==-1)v='1';if(v!=xr_spasll.charAt(j)){if(xr_spaoint(o)!=-1){clearInterval(o.xr_qint);o.xr_qint=-1;};var t = parseInt(o.className.substr(o.className.indexOf("xr_prl")+9,2));if(t>0 && t<100){t*=100}else{t=500};v=xr_spasll.charAt(j);var arg0 = parseInt(o.className.substr(o.className.indexOf("xr_prl")+6,3));if(v=='1') xr_qstartl(arg0, t, o.id);else xr_qstartlb(arg0, t, o.id);lck=0;};j++;};};};xr_spasll='';xr_spasln=-1;};if(lck) xr_sslock=0;};function xr_spapps(n,l,ls){if(xr_sslock){setTimeout("xr_sslock=0;xr_spapps("+n+","+l+",'"+ls+"');", 100);}else{xr_sslock=1;if(n!=-1 && n!=xr_curp) xr_qstartspa(xr_spatrs[n*2],xr_spatrs[n*2+1],n,l,ls);else xr_spappsl(l,ls);};};function xr_spapp(n){if(xr_sslock) return;var oo=document.getElementById("xr_page"+n);if(typeof(oo.xr_curprl)!='number')oo.xr_curprl=0;if(top.isRemotePresenter){var cmd = 'xr_spapps('+n+','+oo.xr_curprl+',"'+xr_spappsls(n)+'")';run_presenter_command(cmd);}else xr_spapps(n,oo.xr_curprl,xr_spappsls(n));};function xr_nextp(){var n=xr_curp+1;if(n<xr_spapn) xr_spapp(n);};function xr_prevp(){var n=xr_curp-1;if(xr_curp>0) xr_spapp(n);};xr_trid=0;function xr_next(){if(!xr_donext()) xr_nextp();};function xr_prev(){if(!xr_doprev()) xr_prevp();};var xr_d_old_onkeydown=0;function xr_prku(e){var key;if(window.event){key = window.event.keyCode;}else if(e.which){key = e.which;};if((key==37 || key==38) && xr_autoscale){xr_prev();}else if ((key==39 || key==40 || key==32) && xr_autoscale){xr_next();}else if (key==33){xr_prevp();}else if (key==34){xr_nextp();}else{if(xr_d_old_onkeydown){return xr_d_old_onkeydown(ev);}else return key;};if(!xr_ie||xr_ie>8)e.preventDefault();};function xr_hashini(tr){var l=location.hash;l=xr_reurl(l);if(l!=''){var al="";var n=0;if(l.indexOf("xl_xr_page_")==1){var pl=l.substr(4).indexOf("#");if(pl!=-1){pl+=4;al=l.substr(pl+1);l=l.substr(0,pl);};var so=document.getElementById(l.substr(4));if(so&&so.parentElement&&so.parentElement.id){n=parseInt(so.parentElement.id.substr(7))+1;};}else if(!tr) n=parseInt(l.substring(1));n--;if(al) setTimeout("xr_too('"+al+"');",500);if(n>=0 && n<xr_spapn && n!=xr_curp) xr_spapp(n);}else if(!tr) location.hash="#xl_"+xr_ghn("xr_page0");};function xr_hashch(){xr_hashini(1);};function xr_nmopen(){if(document.getElementById("xr_pnavm")) return (window.getComputedStyle(document.getElementById("xr_pnavm"),null).getPropertyValue("visibility")=="visible");else return 0;};function xr_prinit4(){if(xr_spaold) alert(xr_oldwarning);if(!top.isRemotePresenter && xr_spapn){xr_d_old_onkeydown = document.onkeydown;document.onkeydown=xr_prku;};var i;if(xr_spapn) for(i=0;i<xr_spapn;i++){var o=document.getElementById("xr_page"+i);o.xr_qint=-1;o.xr_curprl=0;};xr_hashini(0);if(document.cookie.indexOf("nohint=1")==-1){var o=document.getElementById('xr_palrt');if(o){o.style.visibility='visible';o.style.bottom="8px";setTimeout("xr_palrt00()", 10000);};};if(xr_autoscale&&!xr_spaold){if(navigator.userAgent.indexOf('Trident')!=-1){if(typeof(MSGesture)!='undefined'){xr_swipex=0;xr_xr.style.touchAction='none';var xr_gesture = new MSGesture();xr_gesture.target = xr_xr;xr_xr.addEventListener("pointerdown", function (evt){xr_gesture.addPointer(evt.pointerId);});xr_xr.addEventListener("MSGestureChange", xr_manipulateElement);function xr_manipulateElement(e){if(xr_swipex) return;xr_swipex=1;setTimeout("xr_swipex=0",1000);var dx=e.translationX;var dy=e.translationY;if(Math.max(Math.abs(dx),Math.abs(dy))>10){if(Math.abs(dx)>Math.abs(dy)){if(dx>0){xr_prev();}else{xr_next();};}else{if(dy>0){xr_prev();}else{xr_next();};};};};};}else{document.addEventListener('touchstart', function(event){if(!xr_nmopen()){if(event.touches.length==1){xr_swipex = event.touches[0].pageX;xr_swipey = event.touches[0].pageY;xr_swipedx=xr_swipex;xr_swipedy=xr_swipey;}else{xr_swipex=-1;if(event.touches.length>2){var o=document.getElementById('xr_pnavh');o.style.visibility='visible';o.style.bottom=0;};};};}, false);document.addEventListener('touchmove', function(event){if(!xr_nmopen()){if(xr_autoscale&&event.touches.length==1&&((window.outerWidth/window.innerWidth)<=1))event.preventDefault();if(xr_swipex!=-1){if(event.touches.length!=1){xr_swipex=-1;}else{xr_swipedx = event.touches[0].pageX;xr_swipedy = event.touches[0].pageY;};};};}, false);document.addEventListener('touchend', function(event){if(!xr_nmopen()){if(xr_swipex!=-1){var dx = xr_swipedx-xr_swipex;var dy = xr_swipedy-xr_swipey;if(dx==0) dx=1;if(dy==0) dy=1;if(Math.max(Math.abs(dx),Math.abs(dy))>50){if(Math.abs(dx)>Math.abs(dy)){if(dx>0){xr_prev();}else{xr_next();};}else{if(dy>0){xr_prev();}else{xr_next();};};xr_swipex=-1;};};}}, false);document.addEventListener('touchcancel', function(event){xr_swipex=-1;}, false);};};window.onhashchange = xr_hashch;};function xr_palrt00(){document.getElementById('xr_palrt').style.bottom='-300px';setTimeout("document.getElementById('xr_palrt').style.visibility='hidden'", 500);};function xr_palrt0(){xr_palrt00();var exdate=new Date();exdate.setDate(exdate.getDate()+30);document.cookie="nohint=1; expires="+exdate.toUTCString();};var xr_iosoldscale=1;function xr_spaprsc(o){var ot=document.getElementById('xr_xr').offsetTop;var ov=o;var ol=o.getElementsByTagName('DIV');var i;if(!xr_spaold) for (i=0;i<ol.length;i++){if(ol[i].id.indexOf("xr_mvp_")==0 && window.getComputedStyle(ol[i],null).getPropertyValue("display")=="block"){ov=ol[i];break;};};var x;var y;if(ov.id.indexOf("xr_mvp_")==0){x=parseInt(ov.style.width);y=parseInt(ov.style.height);o.style.width=x+"px";o.style.height=y+"px";}else{x=xr_gow(o);y=xr_goh(o);};var wx=xr_wx;var wy=xr_wy-ot;var dx=wx/x;var dy=wy/y;var s=1;if(dx<dy){xr_scof=1;s=dx;}else{s=dy;xr_scof=0;};if(xr_ipod){var z=1;var w=xr_getScreenWidth();z=w/window.innerWidth;if(z!=1) s=xr_iosoldscale;};if(!xr_autoscale) s=1;xr_iosoldscale=s;xr_scale=s;o.xr_scale=s;var ox=0;xr_ox=(wx/2)-((wx-x)/2);if(wx<x)ox=((wx-x)/2);var oy=(parseInt(o.style.height)*(s-1)/2);xr_scalex=ox;xr_scaley=oy;o.xr_scalex=ox;o.xr_scaley=oy;var po=document.getElementById('xr_xr');var px=x;if(wx<x) px=wx;var py=y;if(wy<y) py=wy;xr_oy=0;if(wy>y*s && xr_autoscale){xr_oy=(wy-(y*s))/2;o.style.top=xr_oy+"px";}else o.style.top="0px";};function xr_spabgres(op){if(xr_autoscale && !xr_spaold){var o=document.getElementById('xr_bph');if(o){o.style.height=op.offsetHeight+'px';o.xr_scale=op.xr_scale;o.xr_scalex=op.xr_scalex;o.xr_scaley=op.xr_scaley;xr_spatrx('xr_bph',0,0);};};};function xr_spaprres(){if(!xr_spaold){var pn="xr_page"+xr_curp;var o=document.getElementById(pn);xr_spaprsc(o);xr_spatrx(pn,0,0);xr_spabgres(o);xr_xr.style.zIndex=2;};};var xr_iosoldscreenw=1;var xr_iosoldwinw=1;function xr_ioszoom(){var scrw=xr_getScreenWidth();var winw=window.innerWidth;if((xr_iosoldscreenw!=scrw||xr_iosoldwinw!=winw)&&(scrw==winw||xr_iosoldscreenw==xr_iosoldwinw))xr_rx();xr_iosoldscreenw=scrw;xr_iosoldwinw=winw;}if(xr_ipod) setInterval('xr_ioszoom()',500);function xr_spaprres1(){setTimeout("xr_spaprres()",20);};function xr_getScreenWidth(){return screen[Math.abs(window.orientation)==90?'height':'width'];}