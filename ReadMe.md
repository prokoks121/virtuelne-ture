# Virtuelne Ture 360

Sajt je napravljen za privatne potrebe.

## Ideja
Ideja sajta je da prikaze objekte u 360 prikazu. Kako bi takav prikaz bio moguc
koristio sam plugin sa kojim jednostavno moze da se ucita slika i prikaze u 360 obliku.

## POKRETANJE

Potrebno je pokenuti Apache server i MySql server.
Ukoliko je promenjen username ili password za PHPMySqlAdmin, potrebno je unutar config.php fajla izmeniti vrednosti za pristup.
Aplikacija ce sada da kreira potrebnu bazu i tabelu za rad, tako da ukoliko vec postoji baza sa imenom `kzs`, potrebno je promeniti unutar config.php fajla.
Sve ostalo je automatizovano.

## Github

Projekat mozete naci na [GitHub](https://github.com/prokoks121/virtuelne-ture/tree/php) na PHP grani.

## Pisanje u fajl

Logika za pisanje u fajl je napisana, ali meni ne radi iz razloga sto ne mogu da dam permisiju da se na lokaciji xampp-a menjaju fajlovi.
