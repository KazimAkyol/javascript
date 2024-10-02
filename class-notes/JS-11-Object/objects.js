





//* Diziler : index numaralari ile erisim saglaniyor. 0'dan baslayarak artan bir siralama.

//! Diziler sirali belleklerdir ve sirali bir sekilde ulasilabilir. Ama daha karmasik veriler icin Object(nesne) kullanilir.

const dizi = [1,2,3,4,5,6];
//console.log(dizi[0]);

//! 



//? 1.Object() class'indan türetme:

const car = new Object() //Bos bir obje ürettik
console.log(car);
car.brand = "BMW";
car.model = "2000";
car.isCrashed = true;

console.log(car);

const car1 = new Object()

car1.brand = "Volvo";
car1.brand ="2005";
car1.isCrashed = false;

console.log(car1);

//? 2.Constructor metodu ile object olusturma:

//* Sanki bir kalip olusturmus olduk
function personelList (id,ad,maas) {
    this.id = id;
    this.ad = ad;
    this.maas = maas;
}

const personal1 = new personelList(1001,"Ali",10000);
console.log(personal1);

const personal2 = new personelList(1002,"Veli",20000);
console.log(personal2);