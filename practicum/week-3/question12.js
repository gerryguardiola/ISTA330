/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
    let grid = [];
    let coord = "";
    x = 0;
    y = 0;
    
    for(i = 0; i < s.length; i++){
        if (s.charAt(i) == "N"){
            x = x - 1;
        }
        if (s.charAt(i) == "E"){
            y = y + 1;
        }
        if (s.charAt(i) == "S"){
            x = x + 1;
        }
        if (s.charAt(i) == "W"){
            y = y - 1;
        }
        coord = x+""+y;
        
        if(grid.includes(coord)){
            return true;
        }
        grid.push(coord);
    }
    return false;
};
