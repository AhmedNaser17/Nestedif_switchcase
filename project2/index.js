let degree = prompt("Enter the degree:");
switch (true){
    case (degree >= 0 && degree < 50):
        document.write("you are failed");
        break;
        case (degree >= 50 && degree < 65):
        document.write("you are passed");
        break;
    case (degree >= 65 && degree < 75):
        document.write("you are good");
        break;
    case (degree >= 75 && degree < 85): 
        document.write("you are very good");
        break;  
    case (degree >= 85 && degree <= 100):
        document.write("you are excellent");
        break;
    default:
        document.write("Invalid degree");
        break;
}