const calcInput = document.querySelector(".calculate__input");
const calcMultiplier = document.querySelector(".calculate__multiplier");
const calcButton = document.querySelector(".calculate__button");
const cardBox = document.querySelector(".cardBox");
const addThicknessButton = document.querySelector(".add-wall-thickness-button");
clickEnterForCalculate(calcInput);
changeMuliplier(calcMultiplier);

const BOX_70 = 70;
const BOX_70_NO = 70 + 0.000000001;
const BOX_74 = 74;
const BOX_80 = 80;

calcButton.addEventListener("click", function () {
    const inputContainers = document.querySelectorAll(".input-container-cardBox");
    const cardItems = [];

    inputContainers.forEach((inputContainer) => {
        const calcInput = inputContainer.querySelector(".calculate__input");
        const calcInputValue = parseInt(calcInput.value);
        const multiplier = parseInt(inputContainer.querySelector(".calculate__multiplier").value);

        let currentCardItems = [];

        if (calcInputValue >= 70 && calcInputValue <= 460) {
            if (calcInputValue >= 70) {
                currentCardItems.push(
                    createCard(
                        BOX_70_NO,
                        roundValue(
                            calcInputValue - BOX_70_NO,
                            multiplier,
                            BOX_70_NO,
                            calcInputValue
                        ),
                        calcInputValue - BOX_70_NO,
                        multiplier
                    ),
                    createCard(
                        BOX_70,
                        roundValue(calcInputValue - BOX_70, multiplier, BOX_70, calcInputValue),
                        calcInputValue - BOX_70,
                        multiplier
                    ),
                    createCard(
                        BOX_74,
                        roundValue(calcInputValue - BOX_74, multiplier, BOX_74, calcInputValue),
                        calcInputValue - BOX_74,
                        multiplier
                    )
                );

                if (
                    (calcInputValue >= 81 && calcInputValue <= 90) ||
                    (calcInputValue >= 115 && calcInputValue <= 140) ||
                    (calcInputValue >= 171 && calcInputValue <= 180) ||
                    (calcInputValue >= 221 && calcInputValue <= 230) ||
                    (calcInputValue >= 271 && calcInputValue <= 280) ||
                    (calcInputValue >= 321 && calcInputValue <= 330) ||
                    (calcInputValue >= 371 && calcInputValue <= 380) ||
                    (calcInputValue >= 421 && calcInputValue <= 430)
                ) {
                    currentCardItems.push(
                        createCard(
                            BOX_80,
                            roundValue(calcInputValue - BOX_80, multiplier, BOX_80, calcInputValue),
                            calcInputValue - BOX_80,
                            multiplier
                        )
                    );
                }
            } else {
                currentCardItems.push(
                    createCard(
                        BOX_70,
                        roundValue(calcInputValue - BOX_70, multiplier, BOX_70, calcInputValue),
                        calcInputValue - BOX_70,
                        multiplier
                    ),
                    createCard(
                        BOX_74,
                        roundValue(calcInputValue - BOX_74, multiplier, BOX_74, calcInputValue),
                        calcInputValue - BOX_74,
                        multiplier
                    )
                );
            }
        } else if (calcInputValue > 460 && calcInputValue <= 470) {
            currentCardItems.push(
                createCard(
                    BOX_70,
                    roundValue(calcInputValue - BOX_70, multiplier, BOX_70, calcInputValue),
                    calcInputValue - BOX_70,
                    multiplier
                ),
                createCard(
                    BOX_74,
                    roundValue(calcInputValue - BOX_74, multiplier, BOX_74, calcInputValue),
                    calcInputValue - BOX_74,
                    multiplier
                )
            );
        } else if (calcInputValue >= 471 && calcInputValue <= 480) {
            currentCardItems.push(
                createCard(
                    BOX_80,
                    roundValue(calcInputValue - BOX_80, multiplier, BOX_80, calcInputValue),
                    calcInputValue - BOX_80,
                    multiplier
                )
            );
        } else {
            if (calcInputValue) {
                currentCardItems.push(createErrorCard());
            }
            let dobor100 = document.querySelectorAll(".sum__dobor-value-100").forEach((dobor) => {
                dobor.innerHTML = `100мм: 0`;
            });
            let dobor150 = document.querySelectorAll(".sum__dobor-value-150").forEach((dobor) => {
                dobor.innerHTML = `150мм: 0`;
            });
            let dobor200 = document.querySelectorAll(".sum__dobor-value-200").forEach((dobor) => {
                dobor.innerHTML = `200мм: 0`;
            });
        }
        cardItems.push(currentCardItems);
    });
    renderCards(cardItems);
});

const removeSVG = `
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
					<g id="mdi:trash-outline">
						<path id="Vector" d="M5.14286 20.7778C5.14286 21.3671 5.38367 21.9324 5.81233 22.3491C6.24098 
						22.7659 6.82236 23 7.42857 23H16.5714C17.1776 23 17.759 22.7659 18.1877 22.3491C18.6163 21.9324 
						18.8571 21.3671 18.8571 20.7778V7.44444H5.14286V20.7778ZM7.42857 9.66667H16.5714V20.7778H7.42857V9.66667ZM16 
						4.11111L14.8571 3H9.14286L8 4.11111H4V6.33333H20V4.11111H16Z" 
						fill="#EC5959"/>
					</g>
				</svg>                                        
			`;

const resetSVG = `
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
					<g id="material-symbols:refresh">
						<path id="Vector" d="M12 20.5C14.2333 20.5 16.125 19.725 17.675 18.175C19.225 16.625 20 
						14.7333 20 12.5C20 10.2667 19.225 8.375 17.675 6.825C16.125 5.275 14.2333 4.5 12 4.5C10.85 
						4.5 9.75 4.73733 8.7 5.212C7.65 5.68667 6.75 6.366 6 7.25V4.5H4V11.5H11V9.5H6.8C7.33333 8.56667 
						8.06267 7.83333 8.988 7.3C9.91333 6.76667 10.9173 6.5 12 6.5C13.6667 6.5 15.0833 7.08333 16.25 
						8.25C17.4167 9.41667 18 10.8333 18 12.5C18 14.1667 17.4167 15.5833 16.25 16.75C15.0833 17.9167 
						13.6667 18.5 12 18.5C10.7167 18.5 9.55833 18.1333 8.525 17.4C7.49167 16.6667 6.76667 15.7 6.35 
						14.5H4.25C4.71667 16.2667 5.66667 17.7083 7.1 18.825C8.53333 19.9417 10.1667 20.5 12 20.5Z" 
						fill="#4A4A4A"/>
					</g>
				</svg>
            `;

let inputContainerCardBoxCount = 0;
addThicknessButton.addEventListener("click", function () {
    const container = document.querySelector(".container");
    const addButton = document.querySelector(".add-wall-thickness-button");

    const inputContainerCardBox = document.createElement("div");
    inputContainerCardBox.className = "input-container-cardBox";
    inputContainerCardBox.id = "input-container-cardBox-" + inputContainerCardBoxCount;

    const inputContainer = document.createElement("div");
    inputContainer.className = "input-container";

    // const errorText = document.createElement("div");
    // errorText.className = "error__text";
    // errorText.textContent = "Введите число от 0 до 480";
    // inputContainer.appendChild(errorText);

    const calcInput = document.createElement("input");
    calcInput.className = "calculate__input";
    calcInput.type = "number";
    calcInput.placeholder = "Ввести";

    const calcMultiplier = document.createElement("select");
    calcMultiplier.className = "calculate__multiplier";
    const multipliers = [1, 2, 3, 4, 5];
    multipliers.forEach(function (multiplier) {
        const option = document.createElement("option");
        option.value = multiplier;
        option.textContent = multiplier;
        calcMultiplier.appendChild(option);
    });

    const iconsContainer = document.createElement("div");
    iconsContainer.className = "input-container__icons";

    const clearButton = document.createElement("button");
    clearButton.className = "clear-button";
    clearButton.innerHTML = resetSVG;
    clearButton.addEventListener("click", function () {
        clearInputAndCardBox(inputContainerCardBox);
        calcMultiplier.value = 1;
        calcButton.click();
    });

    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.innerHTML = removeSVG;
    removeButton.addEventListener("click", function () {
        inputContainerCardBox.remove();
        inputContainerCardBoxCount--;
        calcButton.click();
        if (inputContainerCardBoxCount <= 5) {
            container.appendChild(addThicknessButton);
            container.insertBefore(addThicknessButton, calcButton);
        }
    });

    const cardBox = document.createElement("div");
    cardBox.className = "cardBox";

    inputContainer.appendChild(calcInput);
    inputContainer.appendChild(calcMultiplier);
    inputContainer.appendChild(iconsContainer);
    iconsContainer.appendChild(clearButton);
    iconsContainer.appendChild(removeButton);
    inputContainerCardBox.appendChild(inputContainer);
    inputContainerCardBox.appendChild(cardBox);

    const sumContainer = document.querySelector(".sumContainer");

    container.insertBefore(inputContainerCardBox, addThicknessButton);
    container.insertBefore(inputContainerCardBox, sumContainer);

    clickEnterForCalculate(calcInput);
    changeMuliplier(calcMultiplier);

    inputContainerCardBoxCount++;
    if (inputContainerCardBoxCount > 5) {
        container.removeChild(addThicknessButton);
    }
});

function clickEnterForCalculate(calcInput) {
    calcInput.addEventListener("keydown", function (event) {
        if (event.target.classList.contains("calculate__input") && event.keyCode === 13) {
            // Обработка нажатия Enter в поле ввода
            event.preventDefault();
            calcButton.click();
        }
    });
}

function checkCardError(cardBox, inputContainer) {
    const cardError = cardBox.querySelector(".card__error");
    if (cardError) {
        inputContainer.classList.add("error");
    } else {
        inputContainer.classList.remove("error");
    }
}

function checkCardBox(cardBox, inputContainerCardBox) {
    const card = cardBox.querySelector(".card");
    if (card) {
        inputContainerCardBox.classList.add("not-empty");
    } else {
        inputContainerCardBox.classList.remove("not-empty");
    }
}

function changeMuliplier(calcMultiplier) {
    calcMultiplier.addEventListener("change", function () {
        calcButton.click();
    });
}

function clearInputAndCardBox(inputContainerCardBox) {
    const calcInput = inputContainerCardBox.querySelector(".calculate__input");
    const cardBox = inputContainerCardBox.querySelector(".cardBox");

    calcInput.value = "";
    cardBox.innerHTML = "";

    calcButton.click();
}

function firstInputClearButton() {
    const clearFirstButton = document.querySelector(".clear-button");
    clearFirstButton.addEventListener("click", function () {
        const inputContainerCardBox = document.querySelector(".input-container-cardBox");
        clearInputAndCardBox(inputContainerCardBox);
        calcMultiplier.value = 1;

        calcButton.click();
    });
}
firstInputClearButton();

function createCard(boxValue, doborValue, value, multiplier) {
    let boxType = boxValue === BOX_70_NO ? "нетелескоп" : "телескоп";
    let roundedValue = Math.round(value);

    if (roundedValue < 0) {
        roundedValue = 0;
    }

    return `
                   	<div class="card">
                   		<div class="korob">Короб: <div class="card__box-value">${boxValue.toFixed()} ${boxType}</div></div>
                   		<div>Количество доборов: <div class="card__dobor-value">${doborValue}</div></div>
                   		<div>Добор: ${roundedValue.toFixed()}</div>
                   	</div>
                `;
}

function createErrorCard() {
    return `
                   	<div class="card__error">
                   		<div class="card__error-text">Введите число от 70 до 480</div>
                   	</div>
                `;
}

function roundValue(value, multiplier, boxValue, calcInputValue) {
    let doborMultiplier = 2.5;
    let doborHalfMultiplier = 1.25;
    let dobor100 = 100;
    let dobor150 = 150;
    let dobor200 = 200;

    if (multiplier > 1) {
        doborHalfMultiplier = multiplier + 1;
        doborMultiplier *= multiplier;
    } else {
        doborHalfMultiplier = 1.25;
    }

    if (value < 0) {
        return 0;
    } else if (value === dobor100 || value === dobor150 || value === dobor200) {
        return value + "х" + doborMultiplier;
    } else if (boxValue !== parseInt(calcInputValue)) {
        if (value > dobor100 / 2 && value <= dobor150) {
            if (value > dobor100 && value < dobor150) {
                return dobor150 + " мм" + " x " + doborMultiplier;
            } else {
                return value <= dobor150 / 2
                    ? dobor150 + " мм" + " x " + doborHalfMultiplier
                    : dobor100 + " мм" + " x " + doborMultiplier;
            }
        } else if (value > dobor150 / 2 && value <= dobor200) {
            return value <= dobor200 / 2
                ? dobor150 + " мм" + " x " + doborMultiplier
                : dobor200 + " мм" + " x " + doborMultiplier;
        } else if (value <= dobor100) {
            return value <= dobor100 / 2
                ? dobor100 + " мм" + " x " + doborHalfMultiplier
                : dobor150 + " мм" + " x " + doborMultiplier;
        } else if (value > dobor200) {
            return value <= dobor200 + dobor100 / 2
                ? `${dobor100} мм x ${doborMultiplier} + ${dobor150} мм x ${doborMultiplier}`
                : value <= dobor200 + dobor100
                ? `${dobor150} мм x ${doborMultiplier * 2}`
                : value <= dobor200 + dobor150
                ? `${dobor200} мм x ${doborMultiplier} + ${dobor150} мм x ${doborMultiplier}`
                : `${dobor200} мм x ${doborMultiplier * 2}`;
        }
    }

    return value;
}

function renderCards(cardItems) {
    const cardBoxes = document.querySelectorAll(".cardBox");
    cardBoxes.forEach(function (cardBox, index) {
        cardBox.innerHTML = cardItems[index].join("");
    });

    calcSumOfDobor("70 нетелескоп", ".sum-card-1");
    calcSumOfDobor("70 телескоп", ".sum-card-2");
    calcSumOfDobor("74 телескоп", ".sum-card-3");
    calcSumOfDobor("80 телескоп", ".sum-card-4");

    showCards("70 нетелескоп");
    showCards("70 телескоп");
    showCards("74 телескоп");
    showCards("80 телескоп");

    const inputContainerCardBoxes = document.querySelectorAll(".input-container-cardBox");
    inputContainerCardBoxes.forEach((inputContainercardBox) => {
        const inputContainer = inputContainercardBox.querySelector(".input-container");
        const cardBox = inputContainercardBox.querySelector(".cardBox");
        checkCardError(cardBox, inputContainer);
        checkCardBox(cardBox, inputContainercardBox);
    });
}

function showCards(boxName) {
    const boxNamePattern = "Короб: " + boxName;
    const cards = Array.from(document.querySelectorAll(".card")).filter((e) =>
        new RegExp(boxNamePattern, "i").test(e.textContent)
    );

    const cardsSum = Array.from(document.querySelectorAll(".sum-card")).filter((e) =>
        new RegExp(boxNamePattern, "i").test(e.textContent)
    );

    let hasDifferentCard = false;

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardText = card.querySelector(".korob");

        if (cardText.innerText !== boxName) {
            hasDifferentCard = true;
            break;
        }
    }
    const sumContainer = document.querySelector(".sumContainer");
    for (let j = 0; j < cardsSum.length; j++) {
        const cardSum = cardsSum[j];

        if (hasDifferentCard) {
            cardSum.style.display = "block";
            sumContainer.classList.add("visible");
        } else {
            cardSum.style.display = "none";
            sumContainer.classList.remove("visible");
        }
    }

    // console.log(cards)
}

function calcSumOfDobor(boxName, card, cardBox) {
    let sumContainer = document.querySelector(".sumContainer");

    let link = document.querySelectorAll(".card");
    if (link.length !== 0) {
        let boxNamePattern = "Короб: " + boxName;

        link = Array.from(link).filter((e) => new RegExp(boxNamePattern, "i").test(e.textContent));

        // console.log(link);
        let cardDoborArray = [];
        let mainArray = [];
        let cardDoborSplit;
        for (let i = 0; i < link.length; i++) {
            // console.log(link[i]);
            // let cardDoborArray = [];
            let cardDobor = link[i].querySelector(".card__dobor-value").innerText;
            cardDoborSplit = cardDobor.split(" ");
            cardDoborSplit = cardDoborSplit.map((value) =>
                parseFloat(value.replace(/[^0-9.]/g, ""))
            );
            cardDoborSplit = cardDoborSplit.filter((value) => !isNaN(value));
            cardDoborArray.push(cardDoborSplit);
        }
        mainArray.push(cardDoborArray);
        // console.log(cardDoborSplit)
        // console.log(mainArray)

        // console.log(cardDoborArray);
        // console.log(mainArray);
        let mainElArray = [];
        let dobor100 = [];
        let dobor150 = [];
        let dobor200 = [];
        let sumOfDobor100;
        let sumOfDobor150;
        let sumOfDobor200;
        for (let k = 0; k < mainArray.length; k++) {
            let mainEl = mainArray[k];
            for (let l = 0; l < mainEl.length; l++) {
                let mainE = mainEl[l];
                if (mainE[0] == 100) {
                    dobor100.push(mainE[1]);
                    if (mainE[2] == 150) {
                        dobor150.push(mainE[3]);
                    }
                } else if (mainE[0] == 150) {
                    dobor150.push(mainE[1]);
                } else if (mainE[0] == 200) {
                    dobor200.push(mainE[1]);
                    if (mainE[2] == 150) {
                        dobor150.push(mainE[3]);
                    }
                }
                mainElArray.push(mainE[1]);
                sumOfDobor100 = dobor100.reduce((acc, number) => acc + number, 0);
                sumOfDobor150 = dobor150.reduce((acc, number) => acc + number, 0);
                sumOfDobor200 = dobor200.reduce((acc, number) => acc + number, 0);
            }

            // sumArray100 =
            //     Math.ceil(sumOfDobor100) !== 0 ? `100мм: ${Math.ceil(sumOfDobor100)}` : "";
            // sumArray150 =
            //     Math.ceil(sumOfDobor150) !== 0 ? `150мм: ${Math.ceil(sumOfDobor150)}` : "";
            // sumArray200 =
            //     Math.ceil(sumOfDobor200) !== 0 ? `200мм: ${Math.ceil(sumOfDobor200)}` : "";

            sumArray100 = `100мм: ${Math.ceil(sumOfDobor100)}`;
            sumArray150 = `150мм: ${Math.ceil(sumOfDobor150)}`;
            sumArray200 = `200мм: ${Math.ceil(sumOfDobor200)}`;

            let sumCard = sumContainer.querySelector(card);

            if (
                sumOfDobor100 !== undefined ||
                sumOfDobor150 !== undefined ||
                sumOfDobor200 !== undefined
            ) {
                let sum100 = (sumCard.querySelector(".sum__dobor-value-100").innerHTML =
                    sumArray100);
                let sum150 = (sumCard.querySelector(".sum__dobor-value-150").innerHTML =
                    sumArray150);
                let sum200 = (sumCard.querySelector(".sum__dobor-value-200").innerHTML =
                    sumArray200);
            } else if (sumOfDobor100 == 0 || sumOfDobor100 == undefined) {
                sum100 = sumCard.querySelector(".sum__dobor-value-100").innerHTML = `100мм: 0`;
                // ).innerHTML = ` `;
            } else if (sumOfDobor150 == 0 || sumOfDobor150 == undefined) {
                sum150 = sumCard.querySelector(".sum__dobor-value-150").innerHTML = `150мм: 0`;
                // ).innerHTML = ` `;
            } else if (sumOfDobor200 == 0 || sumOfDobor200 == undefined) {
                sum200 = sumCard.querySelector(".sum__dobor-value-200").innerHTML = `200мм: 0`;
                // ).innerHTML = ` `;
            } else {
                return 0;
            }
        }
    } else {
        return;
    }
}
