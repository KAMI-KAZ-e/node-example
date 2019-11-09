var rect = {
    perimeter : (x,y) => (2*(x+y)),
    area : (x,y) => (x*y)
};
function solveRect(l,b){
    if(l<=0||b<=0)
      {
          console.log("dimensions are not correct");
      }
    else{
        console.log("perimeter is" + rect.perimeter(l,b));
        console.log("area is" + rect.area(l,b));
    }
}
solveRect(2,3);
solveRect(3,4);
solveRect(-1,2);