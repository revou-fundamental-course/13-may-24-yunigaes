// ini js


    document.getElementById('count').addEventListener('click', function (event)
    {
        event.preventDefault () ;

        let s1 = parseFloat(document.getElementById('s1').value) ;
        let s2 = parseFloat(document.getElementById('s2').value) ;
        let s3 = parseFloat(document.getElementById('s3').value) ;
 
        if (s1 > 0 && s2 > 0 && s3 > 0) {
            let keliling = s1 + s2 + s3;

    document.getElementById('result').innerHTML = ("K=S1 + S2 + S3" + "<br>" + "K = "+ s1 +" + " + s2 + "+" + s3 + "<br>" + 
    "K = " + Keliling);
         } else {
            document.getElementById('result').innerText ='Mohon Masukkan Angka Positif yang Valid' ;
        }
    });