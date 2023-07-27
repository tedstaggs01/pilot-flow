function calculateResult() {
    var selectedOption = document.getElementById("airplanes").value;
    switch (selectedOption) {
        case "lxaib":
            var resultlxaib = function lxaib() {
                var bem = 647; 
                var bemcg = 2.112; 
                var bemmo = bem * bemcg; 
                console.log(bem);
                var crew = parseFloat(document.getElementById("crew").value);
                var crewcg = 2.05; 
                var crewmo = crew * crewcg; 
                var pax = parseFloat(document.getElementById("pax").value);
                var paxcg = 2.993; 
                var paxmo = pax * paxcg; 
                var bag = parseFloat(document.getElementById("bag").value);
                var bagcg = 3.627; 
                var bagmo = bag * bagcg; 
                var zfm = bem + crew + pax + bag;
                var zfmmo = bemmo + crewmo + paxmo + bagmo;
                var zfmcg = zfmmo / zfm; 
                document.getElementById("zfm").innerHTML = "Ramp mass =" + zfm +" | Ramp CG = " + zfmcg;
                var totfuel = parseFloat(document.getElementById("totfuel").value);
                var totfuelcg = 2.413; 
                var totfuelmo = totfuel * totfuelcg; 
                var ramp = zfm + totfuel;
                var rampmo = zfmmo + totfuelmo;
                var rampcg = rampmo / ramp;  
                var taxfuel = parseFloat(document.getElementById("taxfuel").value);
                var taxfuelcg = totfuelcg; 
                var taxfuelmo = taxfuel * taxfuelcg; 
                var tom = ramp - taxfuel; 
                var tommo = rampmo - taxfuelmo;
                var tomcg = tommo / tom;  
                var trpfuel = parseFloat(document.getElementById("trpfuel").value);
                var trpfuelcg = totfuelcg; 
                var trpfuelmo = trpfuel * trpfuelcg; 
                var ldg = tom - trpfuel; 
                var ldgmo = tommo - trpfuelmo;
                var ldgcg = ldgmo / ldg;  
            }
            lxaib();  
            break;

        case "lxaif":
            var resultlxaif = function lxaif() {
                var bem = 653; 
                var bemcg = 2.1278; 
                var bemmo = bem * bemcg; 
                var crew = document.getElementById("crew").value;
                var crewcg = 2.05; 
                var crewmo = crew * crewcg; 
                var pax = document.getElementById("pax").value;
                var paxcg = 2.993; 
                var paxmo = pax * paxcg; 
                var bag = document.getElementById("bag").value;
                var bagcg = 3.627; 
                var bagmo = bag * bagcg; 
                var zfm = bem + crew + pax + bag;
                var zfmmo = bemmo + crewmo + paxmo + bagmo;
                var zfmcg = zfmmo / zfm; 
                var totfuel = document.getElementById("totfuel").value;
                var totfuelcg = 2.413; 
                var totfuelmo = totfuel * totfuelcg; 
                var ramp = zfm + totfuel;
                var rampmo = zfmmo + totfuelmo;
                var rampcg = rampmo / ramp;  
                var taxfuel = document.getElementById("taxfuel").value;
                var taxfuelcg = totfuelcg; 
                var taxfuelmo = taxfuel * taxfuelcg; 
                var tom = ramp - taxfuel; 
                var tommo = rampmo - taxfuelmo;
                var tomcg = tommo / tom;  
                var trpfuel = document.getElementById("trpfuel").value;
                var trpfuelcg = totfuelcg; 
                var trpfuelmo = trpfuel * trpfuelcg; 
                var ldg = tom - trpfuel; 
                var ldgmo = tommo - trpfuelmo;
                var ldgcg = ldgmo / ldg;  
            }
            break;

        case "lxaig":
            var resultlxaig = function lxaig() {
                var bem = 683; 
                var bemcg = 2.168; 
                var bemmo = bem * bemcg; 
                var crew = document.getElementById("crew").value;
                var crewcg = 2.05; 
                var crewmo = crew * crewcg; 
                var pax = document.getElementById("pax").value;
                var paxcg = 2.993; 
                var paxmo = pax * paxcg; 
                var bag = document.getElementById("bag").value;
                var bagcg = 3.627; 
                var bagmo = bag * bagcg; 
                var zfm = bem + crew + pax + bag;
                var zfmmo = bemmo + crewmo + paxmo + bagmo;
                var zfmcg = zfmmo / zfm; 
                var totfuel = document.getElementById("totfuel").value;
                var totfuelcg = 2.413; 
                var totfuelmo = totfuel * totfuelcg; 
                var ramp = zfm + totfuel;
                var rampmo = zfmmo + totfuelmo;
                var rampcg = rampmo / ramp;  
                var taxfuel = document.getElementById("taxfuel").value;
                var taxfuelcg = totfuelcg; 
                var taxfuelmo = taxfuel * taxfuelcg; 
                var tom = ramp - taxfuel; 
                var tommo = rampmo - taxfuelmo;
                var tomcg = tommo / tom;  
                var trpfuel = document.getElementById("trpfuel").value;
                var trpfuelcg = totfuelcg; 
                var trpfuelmo = trpfuel * trpfuelcg; 
                var ldg = tom - trpfuel; 
                var ldgmo = tommo - trpfuelmo;
                var ldgcg = ldgmo / ldg;  
            }
            break;

        case "lxaiw":
            var resultlxaiw = function lxaiw() {
                var bem = 706; 
                var bemcg = 2.191; 
                var bemmo = bem * bemcg; 
                var crew = document.getElementById("crew").value;
                var crewcg = 2.05; 
                var crewmo = crew * crewcg; 
                var pax = document.getElementById("pax").value;
                var paxcg = 2.993; 
                var paxmo = pax * paxcg; 
                var bag = document.getElementById("bag").value;
                var bagcg = 3.627; 
                var bagmo = bag * bagcg; 
                var zfm = bem + crew + pax + bag;
                var zfmmo = bemmo + crewmo + paxmo + bagmo;
                var zfmcg = zfmmo / zfm; 
                var totfuel = document.getElementById("totfuel").value;
                var totfuelcg = 2.413; 
                var totfuelmo = totfuel * totfuelcg; 
                var ramp = zfm + totfuel;
                var rampmo = zfmmo + totfuelmo;
                var rampcg = rampmo / ramp;  
                var taxfuel = document.getElementById("taxfuel").value;
                var taxfuelcg = totfuelcg; 
                var taxfuelmo = taxfuel * taxfuelcg; 
                var tom = ramp - taxfuel; 
                var tommo = rampmo - taxfuelmo;
                var tomcg = tommo / tom;  
                var trpfuel = document.getElementById("trpfuel").value;
                var trpfuelcg = totfuelcg; 
                var trpfuelmo = trpfuel * trpfuelcg; 
                var ldg = tom - trpfuel; 
                var ldgmo = tommo - trpfuelmo;
                var ldgcg = ldgmo / ldg;  
            }
            break;

        default:
            resultElement.textContent = "Please select an option.";
            break;
    }
}