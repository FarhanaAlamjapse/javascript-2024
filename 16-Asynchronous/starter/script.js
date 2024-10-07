'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*
//ajax call
const getCountry = function (country) {
  const btn = document.querySelector('.btn-country');
  const countriesContainer = document.querySelector('.countries');

  ///////////////////////////////////////

  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  //console.log(this.responseText);undefined here

  request.addEventListener('load', function () {
    //console.log(this.responseText); now got the data
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
  `;
    //insert this into our page
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountry('portugal');
getCountry('bangladesh');

//callback hell
const renderCountry = function (data, className = '') {
  const btn = document.querySelector('.btn-country');
  const countriesContainer = document.querySelector('.countries');

  const html = `
          <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>
    `;
  //insert this into our page
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  //ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  //console.log(this.responseText);undefined here

  request.addEventListener('load', function () {
    //console.log(this.responseText); now got the data
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country 1
    renderCountry(data);

    //Get neighbor country (2)
    const [neighbor] = data.borders; //taking the first el form arr
    console.log(neighbor); //code of country
    if (!neighbor) return;

    //ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbor('usa');

//callback hell
setTimeout(() => {
  console.log('1 sec passed');
  setTimeout(() => {
    console.log('2 sec passed');
    setTimeout(() => {
      console.log('3 sec passed');
      setTimeout(() => {
        console.log('4 sec passed');
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

//promises and fetch API

//now using fetch
const renderCountry = function (data, className = '') {
  const btn = document.querySelector('.btn-country');
  const countriesContainer = document.querySelector('.countries');

  const html = `
            <article class="country ${className}">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
              </div>
            </article>
      `;
  //insert this into our page
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };
// getCountryData('portugal');

//two ajax call
const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforebegin', message);
  // countriesContainer.style.opacity = 1;
};
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);

      const neighbor = data[0].borders?.[0];

      if (!neighbor) throw new Error('No neighbor found');

      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err} :-`);
      renderError(`something went wrong ${err.message}.try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('bangladesh');
});
getCountryData('singapore');

//building and simple promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject(new Error('you lose'));
    }
  }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err)); //consumed promises these res,err are resolve and reject

//promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 sec passed');
    return wait(2);
  })
  .then(() => {
    console.log('3 sec passed');
    return wait(3);
  })
  .then(() => console.log('4 sec passed'));

//very easy fulffiled or rejected promise
Promise.resolve('abc').then(x => console.log(x)); //return immediately resolve is static of promise constructor
Promise.reject('abc').catch(x => console.error(x));

//promisifying the geoLocation API
//a callback API to
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );

//promise based API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    //same
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then(res => console.log(res));

const wait2 = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('img 1 loaded');
    return wait2(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 2 loaded');
    return wait2(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));*/

//consuming promises with async/await
//try catch
const getPosition = function () {
  //Geolocation
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('location not found');
    const dataGeo = await resGeo.json();
    console.log(dataGeo.country);

    //country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('country not found');
    console.log(res);
    const data = await res.json();

    return `you are in${dataGeo.city},${dataGeo.country}`;
  } catch (err) {
    console.error(err.message);
    throw err; //rethrow
  }
};
console.log('1:start');

// //mix of async then promise
// whereAmI()
//   .then(city => console.log(`2:${city}`))
//   .catch(err => console.log(`2:${err.message}`))
//   .finally(() => console.log('3:finish'));

//same with async and IIFE
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2:${city}`);
  } catch (err) {
    console.log(`2:${err.message}`);
  }
  console.log('3:finish');
})();
