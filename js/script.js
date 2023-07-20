// Fungsi Kalkulasi BMI
function hitungBMI() {
    event.preventDefault(); // Mencegah form reset setelah dihitung

    // Mengambil data user
    let inputBeratBadan = document.getElementById("berat-badan").value;
    let inputTinggiBadan = document.getElementById("tinggi-badan").value;
    let usia = document.getElementById("usia").value;

    // Mengkonversi data user
    let beratBadan = parseFloat(inputBeratBadan);
    let tinggiBadan =  parseFloat(inputTinggiBadan) / 100; // Konversi tinggi(cm) ke meter

    // Rumus BMI
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);

    // Status Berat Badan User
    let statusBeratBadan;
    if (bmi < 18.5 && usia >= 18) {
        statusBeratBadan = "Kamu kekurangan berat badan. Ayo perbaiki pola makan kamu, jangan nunda-nunda makan! Kamu pasti bisa!! :>";
    } else if (bmi >= 18.5 && bmi<= 24.9 && usia >= 18) {
        statusBeratBadan = "Selamat! Kamu memiliki berat badan yang ideal. Tetap jaga berat badan kamu dengan mengatur keseimbangan antara pola makan dan aktivitas fisik. :>";
    } else if (bmi >= 25 && bmi <= 29.9 && usia >= 18) {
        statusBeratBadan = "Kamu memiliki berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga! :>";
    } else if (bmi >= 30 && usia >= 18) {
        statusBeratBadan = "Kamu mengalami obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Kamu pasti bisa!! :>";
    } 

    // Untuk Output Hasilnya dan Form Validation
    let statusBBOutput = document.getElementById("status-bb-output");
    let hasilOutput = document.getElementById("hasil-output");

    if (usia < 18 || inputTinggiBadan == "" || inputBeratBadan == "" || beratBadan <= 0 || tinggiBadan <= 0) {
        alert("Kamu belum masukkin berat/tinggi badan nih... pastiin juga usia kamu sudah 18 tahun yaa!")
    } 
    else if (usia >= 18) {
        alert("Jeng jeng...");
        hasilOutput.textContent = bmi.toFixed(1);
        statusBBOutput.textContent = statusBeratBadan;
    }
}

