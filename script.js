const appElement = document.querySelector('.app');

let htmlString = '';

for (let index = 0; index < GET_COLUMNS_RESPONSE.length; index++) {

    const colmnId = GET_COLUMNS_RESPONSE[index].id;
    const currentColumnCards = getCardsByColumnId(colmnId);
    let allCardsForColumnHtml = '';

    currentColumnCards.forEach(function (x) {
        let userName = GET_USERS_RESPONSE.find(function(user) {
            return user.id == x.userId;
    });
        allCardsForColumnHtml += getCard(x.title, x.description, userName.name);
    });


    htmlString += `<div class="col">
                        <div class="col__header">${GET_COLUMNS_RESPONSE[index].name}</div>
                        <div class="col_content">${allCardsForColumnHtml}</div>
                    </div>`;
}

appElement.innerHTML = htmlString;

function getCardsByColumnId(id) {
    return GET_CARDS_RESPONSE.filter(function (card) {
        return card.columnId === id;
    })
}

function getCard(title, description, userName) {
    return `<div class="card">
                <div class="card__inform">
                    <div class="card__title">${title}</div>
                    <div class="card__description">${description}</div>
                </div>
                <div class="card__user">
                    <div class="card__user-name">${userName}</div>
                </div>
            </div>`;
}


