const parts = [
  "Hanif Kureishi's short story \"My Son the Fanatic\" deals with the conflict between a western oriented Punjabi father and his son who is turning into a Muslim fundamentalist.",
  "Ever since Parvez immigrated to England 20 years ago, he's been trying hard to achieve his ultimate goal of Ali successfully integrating into British society and living a good life there.",
  "Ali used to be a straight A student, excelling at everything, right on path to fulfill his father's dream.",
  "But his behavior has begun to change, he seems to be throwing his old life, and everything his dad worked so hard for, out the window.",
  "Parvez's friends figure he must be taking drugs and selling his possessions to fund that, and soon, he begins looking for evidence.",
  "However, he couldn't really find any evidence to support this theory.",
  "This didn't stop him from continuing to look for more clues. One day, he noticed Ali getting up early to pray.",
  "Parvez managed to get his son to reluctantly go out with his father and it was then that he really got to know Ali's new self. It was as if he transformed into a completely different person, judging his father for his actions which are forbidden in Islam.",
  "Ali opens up about his new view of the world, stating that Western civilization is to be brought down by the supposedly persecuted Muslims in the holy Jihad and that the Law of Islam shall rule the world.",
  "This comes as a total shock to Parvez, who hasn't been religious since he was a boy. He feels like he lost his son and the life he's worked so hard for.",
  "He then tries to talk to him and win him back, he's even willing to pray and pick up some other Islamic habits if that made his son happy. He tries to explain his worldview to Ali, but that didn't achieve anything at all and Ali keeps rebuking his arguments.",
  "Feeling lost and out of options, he finally lost his temper and went into Ali's room to beat him up. Ali does not retaliate and merely asks: \"So who's the fanatic now?\""
]

var hasBeenEvaled = false

let arr = [], i = 0
while(arr.length < 12) {
  let r = Math.floor(Math.random() * 12)
  if(arr.indexOf(r) === -1) arr.push(r)
}
while(i < 12) {
  document.getElementById(`el-${i + 1}`).innerText = parts[arr[i]]
  i++
}

function down(element) {
  setTimeout(() => {
    sibling = element.nextElementSibling

    t1 = element.innerText
    t2 = sibling.innerText

    element.innerText = t2
    sibling.innerText = t1
    
    if(hasBeenEvaled) eval()
  }, 200)
}

function up(element) {
  setTimeout(() => {
    sibling = element.previousElementSibling

    t1 = element.innerText
    t2 = sibling.innerText

    element.innerText = t2
    sibling.innerText = t1
    
    
    if(hasBeenEvaled) eval()
  }, 200)
}

function eval() {
  hasBeenEvaled = true
  let j = 0
  while(j < 12) {
    if(document.getElementById(`el-${j + 1}`).innerText == parts[j]) {
      document.getElementById(`el-${j + 1}`).classList.add("correct")
      document.getElementById(`el-${j + 1}`).classList.remove("wrong")
    } else {
      document.getElementById(`el-${j + 1}`).classList.add("wrong")
      document.getElementById(`el-${j + 1}`).classList.remove("correct")
    }
    j++
  }
}