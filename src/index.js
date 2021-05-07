// @here

// Hey everyone! The Javascript train never stops!  :steam_locomotive: :railway_track: Today we're headed towards adding behaviour to our apps with events! :saxophone: :open_hands: So we've got another nice'n'easy (surely someone's famous last words) exercise for you!

// But before, grab some lunch :stuffed_flatbread: , take a break, and see you in the afternoon!

// Today's exercise: Dog owner's App

// Repo: boolean-uk-js-dog-owner-app

// Description
// In this exercise, we're going to create an app to show off our furry friends. 
// This will also let us practice events and forms! This is a combo that you will find all the time out there

// Instructions
// - Use this template as a starting point (it won't work properly on Codesandbox, you have to download it to your laptop) => https://codesandbox.io/s/proud-dog-owners-app-template-g30wz?from-embed
// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// Tips
// - Take advantage of scope in JS to have access to the data you need
// - Remember you can add event listeners to any element on the page

// Challenge
// You might have noticed there's a plus button at the beginning of the top row. Add the behaviour to it. When clicked, it should replace the main card with a form to add a new dog to the list. 
// You'll find a template for the form on the HTML page. Once the form is submitted, add the new dog to the beginning of the list, right next to the plus button.

console.log(data);
// We create individual components here

// This is the ul element
let dogList = document.querySelector(".dogs-list")

// This is the main dog section element
let container = document.querySelector(".main__dog-section")

function dogProperties (dog) {
    let listEl = document.createElement("li")
    listEl.setAttribute("class", "dogs-list__button")
    listEl.innerText = dog.name
    dogList.append(listEl)

    listEl.addEventListener("click", function () {
        container.innerText = ""
        let cardTitle = document.createElement("h2")
        cardTitle.innerText = dog.name
        dogPic = document.createElement(`img`)
        let dogBio = document.createElement(`div`)
        let dogBehaviourToggle = document.createElement(`div`)
        container.append(cardTitle, dogPic, dogBio, dogBehaviourToggle)

        dogBio.setAttribute("class", "main__dog-section__desc")
        dogBehaviourToggle.setAttribute("class", "main__dog-section__btn")

        dogPic.setAttribute("src", dog.image)
        dogPic.setAttribute("alt", "")

        // bio section elements
        let bioTitle = document.createElement(`h3`)
        let bioContent = document.createElement(`p`)
        bioTitle.innerText = `${dog.name}'s Bio`
        bioContent.innerText = dog.bio
        dogBio.append(bioTitle, bioContent)

        // behaviour elements
        let buttonInfo = document.createElement("p")
        let behaviour = document.createElement("em")
        let toggle = document.createElement("button")
        behaviour.innerText = `Is ${dog.name} naughty?`
        buttonInfo.append(behaviour, !dog.isGoodDog ? " yes" : " no")
        toggle.innerText = dog.isGoodDog ? "Have they been a  bad doggie?" : "Has doggie redeemed itself?"
        toggle.addEventListener("click", function () {
            buttonInfo.innerText = ""
            toggle.innerText = ""
            dog.isGoodDog = !dog.isGoodDog
            buttonInfo.append(behaviour, !dog.isGoodDog ? " yes" : " no")
            toggle.innerText = dog.isGoodDog ? "Have they been a  bad doggie?" : "Has doggie redeemed itself?"
        })
        
        dogBehaviourToggle.append(buttonInfo, toggle)
        
    })
}

function pushInfo (dogs) {
    for (const dog of dogs) {
        dogProperties(dog)
    }
}

pushInfo(data)



