function redeem () {
    let now = new Date()
    if( document.querySelector('.tw-button--success')){
        document.querySelector('.tw-button--success').click();
        console.log(`Redeemed at ${now.getHours() >9 ? now.getHours() : "0"+now.getHours()}:${now.getMinutes() >9 ? now.getMinutes() : "0"+now.getMinutes()}`);
        setTimeout(function(){ redeem(); }, 910000);}
    else {
        setTimeout(function(){ redeem(); }, 60000)
    }
}
redeem();