

export const render = (arr) => {
    const list = document.querySelector('.shortcuts__list')
    list.innerHTML = ''

    arr.forEach(item => {
        const li = document.createElement('li')
        const link = document.createElement('a')
        const logo = document.createElement('img')
        const descriptionContainer = document.createElement('div')
        const descriptionText = document.createElement('p')

        li.classList.add('list__item')
        logo.classList.add('list__img')
        descriptionContainer.classList.add('description__container')        

        logo.src = item.img
        logo.alt = item.name
        link.href = item.link
        link.target = "_blank"
        descriptionText.innerText = item.description

        link.append(logo)

        descriptionContainer.append(descriptionText)
        li.append(link, descriptionContainer)
        list.appendChild(li)
    });

    
}

