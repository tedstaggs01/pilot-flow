function mb() {
    var bem; // -> change with A/C
    var bemcg; 
    var bemmo; 
    var crew = document.getElementById("crew").value;
    var crewcg; // -> change with A/C
    var crewmo; 
    var pax = document.getElementById("pax").value;
    var paxcg; // -> change with A/C
    var paxmo; 
    var bag = document.getElementById("bag").value;
    var bagcg; // -> change with A/C
    var bagmo; 
    var zfm = bem + crew + pax + bag;
    var zfmcg; 
    var zfmmo;
    var totfuel = document.getElementById("totfuel").value;
    var totfuelcg; // -> change with A/C
    var totfuelmo; 
    var ramp = zfm + totfuel;
    var rampcg; 
    var rampmo; 
    var taxfuel = document.getElementById("taxfuel").value;
    var taxfuelcg; 
    var taxfuelmo; 
    var tom = ramp - taxfuel; 
    var tomcg; 
    var tommo; 
    var trpfuel = document.getElementById("trpfuel").value;
    var trpfuelcg; 
    var trpfuelmo; 
    var ldg = tom - trpfuel; 
    var ldgcg;
    var ldgmo; 
}