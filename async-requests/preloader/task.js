const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
  xhr.onload = function() {
    if(xhr.readyState === xhr.DONE) {
        if(xhr.status >= 400) {
            setTimeout(() => {
                return alert('Ошибка загрузки данных о курсе валют');
            }, 1000)
        }

        if(xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const valutes = response.response.Valute;
            console.log(valutes)
            for (const valute in valutes) {
              const value = Number(valutes[valute].Value).toFixed(2);
              const item = createHTML(valute, value);
              items.appendChild(item);
            }
            imgLoader.classList.remove('loader_active');
        }
    };
};
xhr.send();
function createHTML(valute, value) {
    const item = document.createElement('div');
    item.classList.add('item');

    item.innerHTML += `
        <div class="item__code">${valute}</div>
        <div class="item__value">${value}</div>
        <div class="item__currency">руб.</div>
    `
    return item;
}