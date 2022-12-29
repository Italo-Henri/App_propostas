function somar() {
    let jan = parseInt(document.getElementById('jan').value, 10);
    let fev = parseInt(document.getElementById('fev').value, 10);
    let mar = parseInt(document.getElementById('mar').value, 10);
    let abr = parseInt(document.getElementById('abr').value, 10);
    let mai = parseInt(document.getElementById('mai').value, 10);
    let jun = parseInt(document.getElementById('jun').value, 10);
    let jul = parseInt(document.getElementById('jul').value, 10);
    let ago = parseInt(document.getElementById('ago').value, 10);
    let set = parseInt(document.getElementById('set').value, 10);
    let out = parseInt(document.getElementById('out').value, 10);
    let nov = parseInt(document.getElementById('nov').value, 10);
    let dez = parseInt(document.getElementById('dez').value, 10);

    let totalSoma = jan + fev + mar + abr + mai + jun + jul + ago + set + out + nov + dez;
    
    media = totalSoma / 12;
    console.log(media);

    document.getElementById("resultado").setAttribute("value", media.toFixed(2));
}