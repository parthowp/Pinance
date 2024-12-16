function ioi() {
    let content =document.querySelector('#dawn').innerHTML;
   console.log(`tttt${content}`);
   
    let gg = '';
    if (content == gg) {
       
  
    let ttty = document.querySelector('#taka').value;
    let month = document.querySelector('#month').value;
    let per = document.querySelector('#parsentis').value;
  
    let yy = ''
if (ttty==yy || month==yy || per==yy) {
    alert('please enter number')
} else {
document.querySelector('#pp').style.display ="flex";
    let rer = document.querySelector('#dawn');
    let rtr = document.createElement('h1');
rer.appendChild(rtr)
rtr.setAttribute('id','p')


    let rtra = document.createElement('div');
rer.appendChild(rtra)
rtra.setAttribute('id','fulll')

   let full = document.createElement('div');
   let fd = document.querySelector('#fulll');
   fd.appendChild(full);
   full.setAttribute('id','fill')
   let fullo = document.createElement('div');
   fd.appendChild(fullo);
   fullo.setAttribute('id','youo')

   let fulla = document.createElement('div');
   fd.appendChild(fulla);
   fulla.setAttribute('id','you')
   let ttt = document.querySelector('#taka').value;
let mot=eval(ttt);
        let pp =[]
       pp.push(mot)
let oo=[]
let month = document.querySelector('#month').value;
for (let index = 0; index < month; index++) {
   
    

let io =pp[pp.length-1];
let ooo;
let cpp;

nameo()
function nameo() {
    let per = document.querySelector('#parsentis').value;
    io=io/100;
    io=io*per
    
    
    oo.push(io)
    ooo=pp[pp.length-1];
    
    
    cpp=oo[oo.length-1];
   
    
    pp.push(eval(ooo+cpp))

   

   
   
}

}
let uuu=0;
let uuuo=0;
let uu=1;
for (let i = 1; i < pp.length; i++) {
   
    

let creat= document.createElement('h4')
   creat.innerHTML=Math.round(pp[i]);
   let hh=document.querySelector('#fill');
   hh.appendChild(creat)
   creat.setAttribute('id','iii')
 
 if (uuu<12) {
    uuu++
 } else {
    uuu=1;
 }
   

    name(uuu)
  function name(o) {
    
    
   

   let create= document.createElement('h3');
   create.innerHTML=o;
   fulla.appendChild(create);
   create.setAttribute('id','yearh')
   
 
}
if (uuuo<12) {
  
  console.log('uuu');
  uuuo++
  
} else {
    uu++;
    uuuo=0;
   
}
namen(uu)
function namen(po) {
    let create= document.createElement('h3');
   create.innerHTML=po;
   fullo.appendChild(create);
   create.setAttribute('id','month')
}

}
let ioo =Math.round(pp[pp.length-1]);

console.log(ioo);
let year= month/12;
let pera = document.querySelector('#parsentis').value;
document.querySelector('#p').innerHTML= `Money is ${ttt}, Month is  ${month}, Year is ${year} and Persentis is ${pera}. Total amounte is ${ioo}`;

let ttta = document.querySelector('#taka');
ttta.value='';
let montha = document.querySelector('#month');
montha.value='';
let per = document.querySelector('#parsentis');
per.value='';

const download_button =
                 document.getElementById('download');
             const content =
                 document.getElementById('dawn');
     
             download_button.addEventListener
                 ('click', async function () {

                     
                        
                             
                        
                     
                     const filename = 'table_data.pdf';
     
                     try {
                         const opt = {
                             margin: 1,
                             filename: filename,
                             image: { type: 'jpeg', quality: 0.98 },
                             html2canvas: { scale: 2 },
                             jsPDF: {
                                 unit: 'in', format: 'letter',
                                 orientation: 'portrait'
                             }
                         };
                         await html2pdf().set(opt).
                             from(content).save();
                     } catch (error) {
                         console.error('Error:', error.message);
                     }
                    
                });

let vvv = document.querySelector('#dawn');
vvv.style. border= "2px solid";




            }
        } else {
        alert('please clear')
    } 
        }
function uu() {
    document.querySelector('#dawn').innerHTML='';
    document.querySelector('#pp').style.display ="none";
    
            };
   
   

	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
    	// ]]>