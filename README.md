# WDI PROJECT 1
My First Project From My Web Development Immersive Course At General Assembly consisted of me understanding the basics of JavaScript and implementing that within a simple app.
The app allowed me to experiment from utilising Vanilla JavaScript to using jQuery through DOM manipulation.

---

# The Application
This was done via using OOP( Obeject Oriented Programming)
I created the game board in JavaScript only including base tags within my index.html.

---

<img width="1099" alt="screen shot 2017-03-12 at 03 14 28" src="https://cloud.githubusercontent.com/assets/23128874/23828697/157743d2-06d2-11e7-9814-62a638c4a675.png">

---

The game object was created in my app.js in a with a 6x5 grid sytem with matching ids so they could be identified when clicked upon and this was bound to the document.

---

<img width="1089" alt="screen shot 2017-03-12 at 03 26 30" src="https://cloud.githubusercontent.com/assets/23128874/23828759/e02ede4a-06d3-11e7-876c-10725e666e9a.png">

<img width="1093" alt="screen shot 2017-03-12 at 03 23 57" src="https://cloud.githubusercontent.com/assets/23128874/23828748/63fc6f72-06d3-11e7-83bc-eb89a0ff0562.png">

---

Event listeners were associated on each card so that various functions would be executed depending on whether allocated cards were paired or not.

---

<img width="1085" alt="screen shot 2017-03-12 at 03 33 16" src="https://cloud.githubusercontent.com/assets/23128874/23828780/ab9b973a-06d4-11e7-80d0-b7d7d7d78c7c.png">

---

The logic below toggles the card class on/off when you've clicked a card as to make sure that when images match, they cannot be clicked again. This was enabled as to prevent constant clicking on two identical ids to increment the score to 15 which would not have been intended.

---

<img width="1088" alt="screen shot 2017-03-12 at 03 37 31" src="https://cloud.githubusercontent.com/assets/23128874/23828804/4570d73a-06d5-11e7-8bb8-3a0d0f333846.png">

---

After this was created I derived the game logic in order for the score to increment by 1 aswell as utilising embed HTML 5 audio to play a sound upon success of a matched/unmatched pair. I made it so that when you reached a score of 15 you'd see a message on your screen stating that you've correctly found all the matchin pairs. 

---

<img width="1091" alt="screen shot 2017-03-12 at 03 41 25" src="https://cloud.githubusercontent.com/assets/23128874/23828818/d8298158-06d5-11e7-8c1c-228fd84e42e9.png">

---

The final piece of the puzzle was to create a reset/randomise function that would alter the location of the ids on the game board making sure the two games are never the same. I created an extra html tag which was referenced to the function enabled with action. 

---

<img width="1094" alt="screen shot 2017-03-12 at 03 44 37" src="https://cloud.githubusercontent.com/assets/23128874/23828830/42a0453a-06d6-11e7-8e6e-9d55b6471a5d.png">

<img width="1089" alt="screen shot 2017-03-12 at 03 45 38" src="https://cloud.githubusercontent.com/assets/23128874/23828833/6dc09530-06d6-11e7-835d-e5c4d1584f1a.png">

---

Through utilisation of all the steps above and individual styling touches through css, an introductory game had been created. Below is the end product of my first JavaScript experience:

<img width="1280" alt="screen shot 2017-03-12 at 03 55 23" src="https://cloud.githubusercontent.com/assets/23128874/23828870/c5d44c98-06d7-11e7-801a-561f615a7317.png">

---

The app can be viewed on heroku with the linked provided:  
https://mighty-dawn-82536.herokuapp.com/

---

# Further implementations for the future.
As with any piece of code further functionality/styling is always part of its core. As such, additional features I would like to include further down the line are:  

* Randomising the sequence once a successful match is made.
* Use of a timer to get to a certain score before time expires.
* Addition of extra levels with an increasing board size.
* Make it so two players can compete side by side alongside a timer.
* Matching triples/quadruples instead of just pairs and basing the score on the time taken to match those as opposed to a set increment of 1.
* Have users upload their own background/images to customize the game to their liking.


  
	























