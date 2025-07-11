let degree = prompt("Enter the degree :");
if (degree >= 0 && degree <= 100) {
    if (degree < 50) {
        document.write("You are failed.");
    } else {
        if (degree <= 65) {
            document.write("You are passed.");
        } else {
            if (degree <= 75) {
                document.write("You are good.");
            } else {
                if (degree <= 85) {
                    document.write("You are very good.");
                } else {
                    document.write("You are excellent.");
                }
            }
        }
    }
}else {
    document.write("Please enter a valid degree between 0 and 100.");
}
