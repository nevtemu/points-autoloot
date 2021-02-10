function redeem () {let now = new Date()
    if( document.querySelector('.tw-button--success')){document.querySelector('.tw-button--success').click();}
    console.log(document.querySelector('.tw-button--success') !== null, `${now.getHours()}:${now.getMinutes()}` );
    setTimeout(function(){ redeem(); }, 60000);}
redeem();