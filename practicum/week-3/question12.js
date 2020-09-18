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
    let grid = ["00"];
    let coord = "";
    let x = 0;
    let y = 0;
    
    for(i = 0; i < s.length; i++){
        if (s.charAt(i) == "N"){  
            y = y + 1;
        }
        if (s.charAt(i) == "E"){   
            x = x + 1;
        }
        if (s.charAt(i) == "S"){
            y = y - 1;
        }
        if (s.charAt(i) == "W"){
            x = x - 1;
        }
        coord = "["+ x + ", " + y + "]";
        
        if(grid.includes(coord)){
            return true;
        }
        grid.push(coord);
    }
    return false;
};
