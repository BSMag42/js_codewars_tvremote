//Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36
//         c   o   d   e   w   a   r   s
function tvremote( word ) {
    const keyboard = [
        ['a','b','c','d','e','1','2','3'],
        ['f','g','h','i','j','4','5','6'],
        ['k','l','m','n','o','7','8','9'],
        ['p','q','r','s','t','.','@','0'],
        ['u','v','w','x','y','z','-','/']
    ];
    
    let clicks = 0;
    let x = 0;
    let y = 0;
    
    [...word].forEach(l => {
      const row = keyboard.find(r => r.includes(l));
      const activerow = keyboard.indexOf(row);
      const activecol = row.indexOf(l);
      
      clicks += Math.abs(x - activecol) + Math.abs(y - activerow) + 1;
      y = activerow;
      x = activecol;
    });
    
    return clicks;
}

function tvremoteIsJustString(word){

}

module.exports = {
    tvremote
  };
  
