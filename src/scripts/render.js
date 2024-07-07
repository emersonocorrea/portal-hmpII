

export const render = (arr) => {
    const list = document.querySelector('.shortcuts__list')
    list.innerHTML = ''

    arr.forEach(item => {
        const li = document.createElement('li')
        const link = document.createElement('a')
        const logo = document.createElement('img')

        li.classList.add('list__item')
        logo.classList.add('list__img')        

        logo.src = item.img
        logo.alt = item.name
        link.href = item.link
        link.target = "_blank"

        link.append(logo)

        li.append(link)
        list.appendChild(li)
    });

    
}

