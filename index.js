import {getRandomCar} from './random.js';


let add = document.querySelector('.add');
let list = document.querySelector('ul');
let meme = document.querySelector('.meme');
let buy = document.querySelector('.buy');
let save  = document.querySelector('.save');
let savedCars = document.querySelector('.savedCars');
let savedCars2 = document.querySelector('.savedCars2');
let savedCars3 = document.querySelector('.savedCars3');
let savedCars4 = document.querySelector('.savedCars4');
let savedCars5 = document.querySelector('.savedCars5');
let savedCars6 = document.querySelector('.savedCars6');
let savedCars7 = document.querySelector('.savedCars7');
let savedCars8 = document.querySelector('.savedCars8');
let savedCars9 = document.querySelector('.savedCars9');
let savedCars10 = document.querySelector('.savedCars10');
let savedCars11 = document.querySelector('.savedCars11');
let savedCars12 = document.querySelector('.savedCars12');
let savedCars13 = document.querySelector('.savedCars13');
let savedCars14 = document.querySelector('.savedCars14');
let savedCars15 = document.querySelector('.savedCars15');
let savedCars16 = document.querySelector('.savedCars16');
let savedCars17 = document.querySelector('.savedCars17');
let savedCars18 = document.querySelector('.savedCars18');

save.disabled = true;

add.disabled = true;
let li2 = document.createElement('p');
let submit = document.querySelector('#submit');
let makeCars = document.querySelector('.cars');
let photos = document.querySelector('.photos');
let car = getRandomCar();

  submit.addEventListener('click', (e) =>  {
  
  let bmw = document.querySelector('.BMW');
  let merc = document.querySelector('.merc');
  let audi = document.querySelector('.audi');
  let honda = document.querySelector('.honda');
  let toyota = document.querySelector('.toyota');
  let nissan = document.querySelector('.nissan');
  let mazda = document.querySelector('.mazda');
  let ford = document.querySelector('.ford');
  let porshe = document.querySelector('.porshe');
  let ferrari = document.querySelector('.ferrari');
  let bugatti = document.querySelector('.bugatti');
  let lamborghini = document.querySelector('.lamborghini');
  let bentley = document.querySelector('.bentley');
  let mclaren = document.querySelector('.mclaren');
  let rolls = document.querySelector('.rolls');
  let maybach = document.querySelector('.maybach');
  let koenigsegg = document.querySelector('.koenigsegg');
  let pagani = document.querySelector('.pagani');

  let car = getRandomCar();
  let image = document.createElement('img');
  let savedImage = document.querySelector('.img');

  li2.innerHTML = `${car.name} - ${car.price}`;
  makeCars.appendChild(li2);
    if(car.name === 'BMW'){
      image.src = '//carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2020-BMW-M8-Coupe-Blue-1001x565.jpg';
      bmw.style.display = 'block';
    }
    else if(car.name !== 'BMW'){
      bmw.style.display = 'none';
    }

     save.addEventListener('click', (e) => {
      if(car.name === 'BMW'){
        let bmw2 = document.createElement('div');
        savedCars.style.display = 'block';
        savedCars.innerHTML += `<img class="bmw2">`;
        let bmw3 = document.querySelector('.bmw2');
        bmw3.src = '//carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2020-BMW-M8-Coupe-Blue-1001x565.jpg';
        bmw3.style.width = '440px';
        bmw3.style.height = '300px';
        bmw3.style.margin = '-5em';
        bmw3.style.resize = 'both';
        }
        else if (car.name !== 'BMW') {
          savedCars.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});
     
 if (car.name === 'Mercedes'){
   image.src = 'https://www.mercedes-benz.pl/passengercars/mercedes-benz-cars/models/c-class/coupe-c205/amg/equipment/_jcr_content/swipeableteaserbox/par/swipeableteaser/asset.MQ6.12.20191119203244.jpeg';
   merc.style.display = 'block';
 }
 else if(car.name !== 'Mercedes'){
  merc.style.display = 'none';
}

save.addEventListener('click', (e) => {
  if(car.name === 'Mercedes'){
    let merc2 = document.createElement('div');
    savedCars2.style.display = 'block';
    savedCars2.innerHTML += `<img class="merc2">`;
    let merc3 = document.querySelector('.merc2');
    merc3.src = 'https://www.mercedes-benz.pl/passengercars/mercedes-benz-cars/models/c-class/coupe-c205/amg/equipment/_jcr_content/swipeableteaserbox/par/swipeableteaser/asset.MQ6.12.20191119203244.jpeg';
    merc3.style.width = '440px';
    merc3.style.height = '300px';
    merc3.style.margin = '-5em';
    merc3.style.resize = 'both';
    }
    else if (car.name !== 'Mercedes') {
      savedCars2.style.display = 'none';
      save.removeEventListener('click', (e) => {
    })};
  },{once: true});
  
    
  if (car.name === 'Audi'){
    image.src = 'https://f.magazynauto.pl/magazynauto_prod_2021_06/16244494329ee9bc.jpg';
    audi.style.display = 'block';
  }
    else if(car.name !== 'Audi'){
      audi.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Audi'){
        let audi2 = document.createElement('div');
        savedCars3.style.display = 'block';
        savedCars3.innerHTML += `<img class="audi2">`;
        let audi3 = document.querySelector('.audi2');
        audi3.src = 'https://f.magazynauto.pl/magazynauto_prod_2021_06/16244494329ee9bc.jpg';
        audi3.style.width = '440px';
        audi3.style.height = '300px';
        audi3.style.margin = '-5em';
        audi3.style.resize = 'both';
        }
        else if (car.name !== 'Audi') {
          savedCars3.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Honda'){
      image.src = 'https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:FE1E5NJW$EC:R-513$HC:undefined$IC:BR$O:$F:FIFS$ECC:RE$ECX:&width=1400';
      honda.style.display = 'block';
    }
    else if(car.name !== 'Honda'){
        honda.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Honda'){
        let honda2 = document.createElement('div');
        savedCars4.style.display = 'block';
        savedCars4.innerHTML += `<img class="honda2">`;
        let honda3 = document.querySelector('.honda2');
        honda3.src = 'https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:FE1E5NJW$EC:R-513$HC:undefined$IC:BR$O:$F:FIFS$ECC:RE$ECX:&width=1400';
        honda3.style.width = '440px';
        honda3.style.height = '300px';
        honda3.style.margin = '-5em';
        honda3.style.resize = 'both';
        }
        else if (car.name !== 'Honda') {
          savedCars4.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Toyota'){
      image.src = 'https://motofilm.pl/wp-content/uploads/2022/04/2023-Toyota-GR-Supra.jpg';
      toyota.style.display = 'block';
    }
    else if(car.name !== 'Toyota'){
        toyota.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Toyota'){
        let toyota2 = document.createElement('div');
        savedCars5.style.display = 'block';
        savedCars5.innerHTML += `<img class="toyota2">`;
        let toyota3 = document.querySelector('.toyota2');
        toyota3.src = 'https://motofilm.pl/wp-content/uploads/2022/04/2023-Toyota-GR-Supra.jpg';
        toyota3.style.width = '440px';
        toyota3.style.height = '300px';
        toyota3.style.margin = '-5em';
        toyota3.style.resize = 'both';
        }
        else if (car.name !== 'Toyota') {
          savedCars5.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Nissan'){
      image.src = 'https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/gt-r/r35/2_minor_change/overview/19TDIEULHD_GT-R_002.jpg.ximg.l_full_m.smart.jpg';
      nissan.style.display = 'block';
    }
    else if(car.name !== 'Nissan'){
        nissan.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Nissan'){
        let nissan2 = document.createElement('div');
        savedCars6.style.display = 'block';
        savedCars6.innerHTML += `<img class="nissan2">`;
        let nissan3 = document.querySelector('.nissan2');
        nissan3.src = 'https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/gt-r/r35/2_minor_change/overview/19TDIEULHD_GT-R_002.jpg.ximg.l_full_m.smart.jpg';
        nissan3.style.width = '440px';
        nissan3.style.height = '300px';
        nissan3.style.margin = '-5em';
        nissan3.style.resize = 'both';
        }
        else if (car.name !== 'Nissan') {
          savedCars6.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Mazda'){
      image.src = 'https://cgi.cdn.mazda.media/compressed/ce3790f9b9be99896c9d34de2ee3a81459b8419ab7eecfeffbf8060a064f185a/MERGED/13/36.jpg';
      mazda.style.display = 'block';
    }
    else if(car.name !== 'Mazda'){
        mazda.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Mazda'){
        let mazda2 = document.createElement('div');
        savedCars7.style.display = 'block';
        savedCars7.innerHTML += `<img class="mazda2">`;
        let mazda3 = document.querySelector('.mazda2');
        mazda3.src = 'https://cgi.cdn.mazda.media/compressed/ce3790f9b9be99896c9d34de2ee3a81459b8419ab7eecfeffbf8060a064f185a/MERGED/13/36.jpg';
        mazda3.style.width = '440px';
        mazda3.style.height = '300px';
        mazda3.style.margin = '-5em';
        mazda3.style.resize = 'both';
        }
        else if (car.name !== 'Mazda') {
          savedCars7.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Ford'){
      image.src = '//build.ford.com/dig/Ford/Mustang/2022/HD-TILE/Image%5B%7CFord%7CMustang%7C2022%7C1%7C1.%7C200A.P8T..PB3..88E.891.~3ES00_BCMAC.DSS.SED.574.~BCMAC.13K.COU.59C.51H.PDS.LRS.LTS.646.T3H.RWD.453.99H.AFP.50B.77R.SSR.58E.SY3.AML.44X.EBST.PRE.ACT.%5D/EXT/1/vehicle.png';
      ford.style.display = 'block';
    }
    else if(car.name !== 'Ford'){
        ford.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Ford'){
        let ford2 = document.createElement('div');
        savedCars8.style.display = 'block';
        savedCars8.innerHTML += `<img class="ford2">`;
        let ford3 = document.querySelector('.ford2');
        ford3.src = '//build.ford.com/dig/Ford/Mustang/2022/HD-TILE/Image%5B%7CFord%7CMustang%7C2022%7C1%7C1.%7C200A.P8T..PB3..88E.891.~3ES00_BCMAC.DSS.SED.574.~BCMAC.13K.COU.59C.51H.PDS.LRS.LTS.646.T3H.RWD.453.99H.AFP.50B.77R.SSR.58E.SY3.AML.44X.EBST.PRE.ACT.%5D/EXT/1/vehicle.png';
        ford3.style.width = '440px';
        ford3.style.height = '300px';
        ford3.style.margin = '-5em';
        ford3.style.resize = 'both';
        }
        else if (car.name !== 'Ford') {
          savedCars8.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Porsche'){
      image.src = 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_a9d1e0bd88d849eab172f394e0c35ace.jpg';
      porshe.style.display = 'block';
    }
    else if(car.name !== 'Porsche'){
        porshe.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Porsche'){
        let porsche2 = document.createElement('div');
        savedCars9.style.display = 'block';
        savedCars9.innerHTML += `<img class="porsche2">`;
        let porsche3 = document.querySelector('.porsche2');
        porsche3.src = 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_a9d1e0bd88d849eab172f394e0c35ace.jpg';
        porsche3.style.width = '440px';
        porsche3.style.height = '300px';
        porsche3.style.margin = '-5em';
        porsche3.style.resize = 'both';
        }
        else if (car.name !== 'Porsche') {
          savedCars9.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Ferrari'){
      image.src = 'https://www.wyborkierowcow.pl/wp-content/uploads/2022/03/modele-ferrari-1-f8-tributo.jpg';
      ferrari.style.display = 'block';
    
    }
    else if(car.name !== 'Ferrari'){
        ferrari.style.display = 'none';
    }
   
    save.addEventListener('click', (e) => {
      if(car.name === 'Ferrari'){
        let ferrari2 = document.createElement('div');
        savedCars10.style.display = 'block';
        savedCars10.innerHTML += `<img class="ferrari2">`;
        let ferrari3 = document.querySelector('.ferrari2');
        ferrari3.src = 'https://www.wyborkierowcow.pl/wp-content/uploads/2022/03/modele-ferrari-1-f8-tributo.jpg';
        ferrari3.style.width = '440px';
        ferrari3.style.height = '300px';
        ferrari3.style.margin = '-5em';
        ferrari3.style.resize = 'both';
        }
        else if (car.name !== 'Ferrari') {
          savedCars10.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Bugatti'){
      image.src = 'https://motopedia.otomoto.pl/wp-content/uploads/2020/11/bugatti-chiron-5.1200-1013x760.jpg';
      bugatti.style.display = 'block';
    }
    else if(car.name !== 'Bugatti'){
        bugatti.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Bugatti'){
        let bugatti2 = document.createElement('div');
        savedCars11.style.display = 'block';
        savedCars11.innerHTML += `<img class="bugatti2">`;
        let bugatti3 = document.querySelector('.bugatti2');
        bugatti3.src = 'https://motopedia.otomoto.pl/wp-content/uploads/2020/11/bugatti-chiron-5.1200-1013x760.jpg';
        bugatti3.style.width = '440px';
        bugatti3.style.height = '300px';
        bugatti3.style.margin = '-5em';
        bugatti3.style.resize = 'both';
        }
        else if (car.name !== 'Bugatti') {
          savedCars11.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Lamborghini'){
      image.src = 'https://www.tabletowo.pl/wp-content/uploads/2021/05/lamborghini-518305-1350x900.jpg';
      lamborghini.style.display = 'block';
    }
    else if(car.name !== 'Lamborghini'){
        lamborghini.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Lamborghini'){
        let lamborghini2 = document.createElement('div');
        savedCars12.style.display = 'block';
        savedCars12.innerHTML += `<img class="lamborghini2">`;
        let lamborghini3 = document.querySelector('.lamborghini2');
        lamborghini3.src = 'https://www.tabletowo.pl/wp-content/uploads/2021/05/lamborghini-518305-1350x900.jpg';
        lamborghini3.style.width = '440px';
        lamborghini3.style.height = '300px';
        lamborghini3.style.margin = '-5em';
        lamborghini3.style.resize = 'both';
        }
        else if (car.name !== 'Lamborghini') {
          savedCars12.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'McLaren'){
      image.src = 'https://autofusgroup.pl/img/otomoto/mclaren/o_mclaren_GT.jpg';
      mclaren.style.display = 'block';
    }
    else if(car.name !== 'McLaren'){
        mclaren.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'McLaren'){
        let mclaren2 = document.createElement('div');
        savedCars13.style.display = 'block';
        savedCars13.innerHTML += `<img class="mclaren2">`;
        let mclaren3 = document.querySelector('.mclaren2');
        mclaren3.src = 'https://autofusgroup.pl/img/otomoto/mclaren/o_mclaren_GT.jpg';
        mclaren3.style.width = '440px';
        mclaren3.style.height = '300px';
        mclaren3.style.margin = '-5em';
        mclaren3.style.resize = 'both';
        }
        else if (car.name !== 'McLaren') {
          savedCars13.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Rolls Royce'){
      image.src = 'https://sznyt.pl/wp-content/uploads/2022/01/one-off-rolls-royce-phantom-orchid-1.jpg';
      rolls.style.display = 'block';
    }
    else if(car.name !== 'Rolls Royce'){
        rolls.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Rolls Royce'){
        let rolls2 = document.createElement('div');
        savedCars14.style.display = 'block';
        savedCars14.innerHTML += `<img class="rolls2">`;
        let rolls3 = document.querySelector('.rolls2');
        rolls3.src = 'https://sznyt.pl/wp-content/uploads/2022/01/one-off-rolls-royce-phantom-orchid-1.jpg';
        rolls3.style.width = '440px';
        rolls3.style.height = '300px';
        rolls3.style.margin = '-5em';
        rolls3.style.resize = 'both';
        }
        else if (car.name !== 'Rolls Royce') {
          savedCars14.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Maybach'){
      image.src = 'https://www.wyborkierowcow.pl/wp-content/uploads/2021/05/maybach-klasy-s-cennik-sylwetka2.jpg';
      maybach.style.display = 'block';
    }
    else if(car.name !== 'Maybach'){
        maybach.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Maybach'){
        let maybach2 = document.createElement('div');
        savedCars15.style.display = 'block';
        savedCars15.innerHTML += `<img class="maybach2">`;
        let maybach3 = document.querySelector('.maybach2');
        maybach3.src = 'https://www.wyborkierowcow.pl/wp-content/uploads/2021/05/maybach-klasy-s-cennik-sylwetka2.jpg';
        maybach3.style.width = '440px';
        maybach3.style.height = '300px';
        maybach3.style.margin = '-5em';
        maybach3.style.resize = 'both';
        }
        else if (car.name !== 'Maybach') {
          savedCars15.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Koenigsegg'){
      image.src = 'https://i0.wp.com/4kolkainietylko.pl/wp-content/uploads/2021/11/koenigsegg-gemera.jpg?fit=1500%2C844';
      koenigsegg.style.display = 'block';
    }
    else if(car.name !== 'Koenigsegg'){
        koenigsegg.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Koenigsegg'){
        let koenigsegg2 = document.createElement('div');
        savedCars16.style.display = 'block';
        savedCars16.innerHTML += `<img class="koenigsegg2">`;
        let koenigsegg3 = document.querySelector('.koenigsegg2');
        koenigsegg3.src = 'https://i0.wp.com/4kolkainietylko.pl/wp-content/uploads/2021/11/koenigsegg-gemera.jpg?fit=1500%2C844';
        koenigsegg3.style.width = '440px';
        koenigsegg3.style.height = '300px';
        koenigsegg3.style.margin = '-5em';
        koenigsegg3.style.resize = 'both';
        }
        else if (car.name !== 'Koenigsegg') {
          savedCars16.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Pagani'){
      image.src = 'https://i.gremicdn.pl/image/free/e8c6fbbe464048b27a66065afdc56b3c/?t=resize:fill:1200:716,enlarge:1';
      pagani.style.display = 'block';
    }
    else if(car.name !== 'Pagani'){
        pagani.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Pagani'){
        let pagani2 = document.createElement('div');
        savedCars17.style.display = 'block';
        savedCars17.innerHTML += `<img class="pagani2">`;
        let pagani3 = document.querySelector('.pagani2');
        pagani3.src = 'https://i.gremicdn.pl/image/free/e8c6fbbe464048b27a66065afdc56b3c/?t=resize:fill:1200:716,enlarge:1';
        pagani3.style.width = '440px';
        pagani3.style.height = '300px';
        pagani3.style.margin = '-5em';
        pagani3.style.resize = 'both';
        }
        else if (car.name !== 'Pagani') {
          savedCars17.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});

    if (car.name === 'Bentley'){
      image.src = 'https://i.wpimg.pl/730x0/m.autokult.pl/bentley-unsorted-1-1-d3e9560c247.jpg';
      bentley.style.display = 'block';
    }
    else if(car.name !== 'Bentley'){
        bentley.style.display = 'none';
    }

    save.addEventListener('click', (e) => {
      if(car.name === 'Bentley'){
        let bentley2 = document.createElement('div');
        savedCars18.style.display = 'block';
        savedCars18.innerHTML += `<img class="bentley2">`;
        let bentley3 = document.querySelector('.bentley2');
        bentley3.src = 'https://i.wpimg.pl/730x0/m.autokult.pl/bentley-unsorted-1-1-d3e9560c247.jpg';
        bentley3.style.width = '440px';
        bentley3.style.height = '300px';
        bentley3.style.margin = '-5em';
        bentley3.style.resize = 'both'
        }
        else if (car.name !== 'Bentley') {
          savedCars18.style.display = 'none';
          save.removeEventListener('click', (e) => {
        })};
      },{once: true});
  
    if(e.target.matches('#submit') === true) {
      meme.style.display = 'none';
      buy.style.display = 'none';
      save.disabled = false;
     
      console.log(e.target.matches('#submit'))
      
    }

    if(e.target.matches('#buy') === true) {
      meme.style.display = 'block';
      buy.style.display = 'block';
      console.log(e.target.matches('#buy'))
      console.log(e)
      
    }
    add.disabled = false;
    //buying is available // meme is available
    function  createLi() {
      meme.style.display = 'block';
      buy.style.display = 'block';
    }
    add.addEventListener('click', (e) => {
      createLi();
      },{once: true});
      
       /* if (car.name === 'BMW'){
          let bmw2 = document.createElement('div');
          saved.innerHTML += `<div class="bmw2"> <img src="//carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2020-BMW-M8-Coupe-Blue-1001x565.jpg"> </div>`;
          let li = document.createElement('li');
          savedCars.appendChild(bmw2);
        let to = localStorage.setItem('car', JSON.stringify(car));
        
        li.innerHTML = to;
        
        */

})

let log = document.querySelector('#username');
let pass = document.querySelector('#pwd');
let login = document.querySelector('#login');
  login.addEventListener('click', (e) => { 
      if(log.value === 'admin' && pass.value === 'admin') {
        alert('Logged in');
      }
      else {
        alert('Invalid login or password');
      }
  })