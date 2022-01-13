// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

const typeOfTriangle = (a,b,c) => {
    a = Number(a);
    b = Number(b);
    c = Number(c);

    if ((a+b+c) != 180) {
        console.log("Not a triangle")
    }

    else {
        if (a === b && b === c) {
            console.log("Equilateral triangle")
        }

        else if (a === b || a === c || b === c) {
            console.log("Isosceles Triangle")
        }

        else {
            console.log("Scalen Triangle")
        }
    }


}

typeOfTriangle(30,60,90)