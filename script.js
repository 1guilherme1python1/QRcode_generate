const GerarQRcode = document.querySelector('.gerarQRcode');

GerarQRcode.addEventListener('click', ()=>{
    let inputUsuario = document.querySelector('textarea').value;
    // cht=qr = define que quer um qr code;
    // chs=500x500 = define um tamanho;
    // chl= não preencher pois será de forma dinâmica  = conteudo
    // chld = configurar perca de dados

    let GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=';

    let conteudoQRcode = GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRcodeImage').src = conteudoQRcode;
})