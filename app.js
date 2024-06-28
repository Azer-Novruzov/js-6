let number = prompt("Ders qiymetini (0-100 arasında bir ədəd) daxil edin");
number = Number(number);
if (number >= 90 && number <= 100) {
    console.log("İstifadəçinin aldığı qiymət " + number + " - A");
} else if (number >= 80 && number < 90) {
    console.log("İstifadəçinin aldığı qiymət " + number + " - B");
} else if (number >= 70 && number < 80) {
    console.log("İstifadəçinin aldığı qiymət " + number + " - C");
} else if (number >= 60 && number < 70) {
    console.log("İstifadəçinin aldığı qiymət " + number + " - D");
} else if (number >= 0 && number < 60) {
    console.log("İstifadəçinin aldığı qiymət " + number + " - F");
} else {
    console.log("Yanlış qiymət daxil etdiniz.");
}
