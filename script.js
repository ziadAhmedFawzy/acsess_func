// funct to acsess

let focus = (string , index) => {
    return string[index];
};

console.log(focus('ziad' , 2));



let btn = document.getElementById('go');

btn.onclick = function() {
    window.location.href = "https://ziadahmedfawzy.github.io/slice_func/";
}