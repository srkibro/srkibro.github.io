window.onload = function() {
document.getElementById("izracunaj").addEventListener("click", IZRACUNAJ);
  function IZRACUNAJ(){
      
    let e1d = parseFloat(document.getElementById("e1din").value);
    let e1w = parseFloat(document.getElementById("e1win").value);
    let e1h = parseFloat(document.getElementById("e1hin").value);

    let e2d = parseFloat(document.getElementById("e2din").value);
    let e2w = parseFloat(document.getElementById("e2win").value);
    let e2h = parseFloat(document.getElementById("e2hin").value);

    let ratio1 = e1w / e1h;
    let ratio_diameter1 = Math.sqrt(e1w*e1w+e1h*e1h);

    let ratio2 = e2w / e2h;
    let ratio_diameter2 = Math.sqrt(e2w*e2w+e2h*e2h);

    let f1 = e1d / ratio_diameter1;
    let w1 = e1w * f1;
    let h1 = e1h *f1;
    let a1 = w1 * h1;

    let f2 = e2d / ratio_diameter2;
    let w2 = e2w * f2;
    let h2 = e2h *f2;
    let a2 = w2 * h2;

    let iznos, iznoscm;
    document.getElementById("vearea").value = "";
    
    iznos = "Ekran 1 - širina " + w1.toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 });
    iznos += " inča, visina " + h1.toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 });
    iznos += " inča, površina " + a1.toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 });
    iznos += " inča². \nEkran 2 - širina " + w2.toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 });
    iznos += " inča, visina " + h2.toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 });
    iznos += " inča, površina " + a2.toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 }) + " inča².";
   
    iznoscm = "\nEkran 1 - širina " + (w1 * 2.54).toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 });
    iznoscm += " cm,  visina  " + (h1 * 2.54).toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 });
    iznoscm += " cm, površina " + (a1 * 2.54).toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 });
    iznoscm += " cm². \nEkran 2 - širina " + (w2 * 2.54).toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 });
    iznoscm += " cm, visina " + (h2 * 2.54).toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 });
    iznoscm += " cm, površina " + (a2 * 2.54).toLocaleString(undefined, { 'minimumFractionDigits':0, 'maximumFractionDigits':2 }) + " cm².";
    
    document.getElementById("vearea").value = iznos + " " + iznoscm;
    
  }

  document.getElementById("kopirajbtn").addEventListener("click", kopiraj);
  function kopiraj(){
      let copyText = document.getElementById("vearea");
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(copyText.value);
  }
}
