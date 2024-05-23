// ini js


const s1Input = document.getElementById("s1");
const s2Input = document.getElementById("s2");
const s3Input = document.getElementById("s3");
const resultDiv = document.getElementById("result");


document.getElementById("count").addEventListener("click", function() {
    
    const s1 = parseFloat(s1Input.value);
    const s2 = parseFloat(s2Input.value);
    const s3 = parseFloat(s3Input.value);

    
    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || s1 <= 0 || s2 <= 0 || s3 <= 0) {
        resultDiv.textContent = "Invalid input. Please enter valid side lengths.";
    } else {
        
        const perimeter = s1 + s2 + s3;
        
        resultDiv.textContent = "Keliling segitiga: " + perimeter.toFixed(2);
    }
});
        
        
        
