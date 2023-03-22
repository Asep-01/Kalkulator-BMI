let button = document.getElementById('hitung');
button.addEventListener('click', () => {
    var tinggi, berat, keterangan, keterangan2, keterangan_hasil, saran, bmi;
            tinggi = parseFloat(document.getElementById("ipt_t").value);
            tinggi /= 100 ;
            berat = parseFloat(document.getElementById("ipt_b").value);
            bmi = berat / (tinggi * tinggi) ;
            if (bmi > 30) {
                keterangan = "Kegemukan (Obesitas)";
                keterangan2 = "Anda Memiliki Berat Badan Berlebihan";
                keterangan_hasil = "Hasil BMI Diantara 30 dan 1000";
                saran = "Anda ada berada dalam kategori overwight atau berat badan berlebihan. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka dianjurkan menurunkan berat badan hingga normal.";
            }else if ((bmi >= 25.0) & (bmi <= 29.9)){
                keterangan = "Kelebihan Berat Badan";
                keterangan2 = "Anda Memiliki Berat Badan Berlebihan";
                keterangan_hasil = "Hasil BMI Diantara 25.0 dan 29.9";
                saran = "Anda ada berada dalam kategori overwight atau berat badan berlebihan. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka dianjurkan menurunkan berat badan hingga normal.";
            }else if ((bmi >= 18.5) & (bmi <= 24.9)){
                keterangan = "Normal (Ideal)";
                keterangan2 = "Anda Memiliki Berat Badan Cukup";
                keterangan_hasil = "Hasil BMI Diantara 18.5 dan 24.9";
                saran = "Anda ada berada dalam kategori Normal maka jagalah berat badan anda jangan sampai berkurang atau berlebih.";
            }else {
                keterangan = "Kekurangan Berat Badan";
                keterangan2 = "Anda Kekurangan Berat Badan";
                keterangan_hasil = "Hasil BMI Diantara 0 dan 18.4";
                saran = "Anda ada berada dalam kategori Kurangan berat badan maka cara terbaik untuk menaikan berat badan adalah dengan mengkonsumsi obat penambah rasa nafsu makan dan banyak mengkonsumsi makanan.";
            }
            document.getElementById('bmi').innerHTML = +bmi.toFixed(1);
            document.getElementById('keterangan').innerHTML= "Hasil : "+ keterangan;
            document.getElementById('keterangan2').innerHTML = "Keterangan : "+ keterangan2;
            document.getElementById('keterangan_hasil').innerHTML = "Keterangan : "+keterangan_hasil;
            document.getElementById('saran').innerHTML = "Saran : "+saran;
});