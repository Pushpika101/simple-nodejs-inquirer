export const cardGen = (name, city, sclass, subject) => {
    let sub =''

    subject?.forEach(element => {
        sub += `<p>${element}</p>`
    });
    return`
<div class="card">
            <h1 class = "name">${name}</h1>
            <div class ="info">
                <p>class is : ${sclass}</p>
                <p>class is : ${city}</p>
            </div>
            <h3 class = "sub">
                ${sub}
            </h3>
        </div>`}