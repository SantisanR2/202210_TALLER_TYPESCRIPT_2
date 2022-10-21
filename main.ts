function cargar() {
    let cont: number[] = [];
    let promedio: number = 0;
    series.forEach(function (serie) {
        document.getElementById(serie.id+"-1")!.innerHTML = String(serie.id);
        document.getElementById(serie.id+"-2")!.innerHTML = serie.name;
        document.getElementById(serie.id+"-3")!.innerHTML = serie.channel;
        document.getElementById(serie.id+"-4")!.innerHTML = String(serie.seasons);
        cont.push(serie.seasons);
    });
    cont.forEach(function (cont) {
        promedio += cont;
    });
    promedio = promedio / cont.length;
    document.getElementById("promedio")!.innerHTML = "Seasons average: " + String(promedio);
}

function change(i: number) {
    let img = document.getElementById("imagen")
    if (img instanceof HTMLImageElement) img.src = series[i-1].image;
    document.getElementById("titulo")!.innerHTML = series[i-1].name;
    document.getElementById("descripcion")!.textContent = series[i-1].description;
    let link = document.getElementById("link");
    link!.textContent = series[i-1].link;
    if (link instanceof HTMLAnchorElement) link.href = series[i-1].link;
}

window.onload = cargar;
