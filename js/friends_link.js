var sites = [
    'https://wuwenw.github.io/',
    'https://jw-liu.xyz/',
    'https://xzhu27.me/',
    'https://vic0428.github.io/',
    'https://waterpine.github.io/'
    // 'https://niceirene.github.io/',
    // 'https://web.eecs.umich.edu/~chshibo/',
    // 'https://shengpu1126.github.io/',
    // 'https://yifanguan.github.io/',
    // 'https://xingjunjie.me/blog/',
    // 'http://www-personal.umich.edu/~pujat/',
    // 'https://pyjhzwh.github.io/',
    // 'https://ddshan.github.io/'
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    window.location.href = sites[i];
}