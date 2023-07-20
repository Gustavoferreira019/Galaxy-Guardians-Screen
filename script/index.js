const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0;
const images = document.getElementById('images')
const menu = document.getElementById('menu')
const navigation = document.getElementById('navigation')
function changeStatusButtons(){
  const prev = document.getElementById('button_previous')
  const atFirst = activeMember === 0
  prev.disabled = atFirst
  const next = document.getElementById('button_next')
  const atLast= activeMember === members.length-1
  next.disabled = atLast
}
const memberName = document.getElementById('member__name')

function changeMember(memberId){
  activeMember= memberId;
  const member= members[activeMember]
  console.log(member, activeMember)

  images.style.transform = `translateY(${-100*activeMember}vh)`
  memberName.classList = member.id;
  changeName(member.name)

  changeStatusButtons()
}

function navigationMember (direction){
  changeMember(activeMember + direction)
}

function changeMenu(){
  menu.classList.toggle('active')
  navigation.classList.toggle('active')
}

function setMember(memberId){
  changeMember(memberId);
  changeMenu();
}