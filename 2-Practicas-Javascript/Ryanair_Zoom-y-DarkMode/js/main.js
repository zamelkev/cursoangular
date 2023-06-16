function darkMode(){
    document.getElementById('estilo').href = 'css/dark-style.css';
    document.getElementById('btnDarkMode').style = 'display: none';
    document.getElementById('btnLightMode').style = 'display: block';
    document.getElementById('logotipo').src = 'img/Ryanair-emblema.png';
    if (agrandar = true) {document.getElementById('estilo').href = 'css/dark-zoom.css';} else {document.getElementById('estilo').href = 'css/dark-style.css';}
}
function lightMode(){
    document.getElementById('estilo').href = 'css/style.css';
    document.getElementById('btnDarkMode').style = 'display: block';
    document.getElementById('btnLightMode').style = 'display: none';
    if (agrandar = true) {document.getElementById('estilo').href = 'css/zoom.css';};
}   

function agrandar(){
    document.getElementById('estilo').href = 'css/zoom.css';
    document.getElementById('btnAgrandar').style = 'display: none';
    document.getElementById('btnReducir').style = 'display: block';
}   
function reducir(){
    document.getElementById('estilo').href = 'css/style.css';
    document.getElementById('btnAgrandar').style = 'display: block';
    document.getElementById('btnReducir').style = 'display: none';
}