export const jskUser = [
  {
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://placekitten.com/200/300',
    isOnline: false,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    avatar: 'https://placekitten.com/200/300',
    isOnline: false,
  },
]

export const hrUser = [
  {
    firstName: 'John',
    lastName: 'Doe (Hr)',
    avatar: 'https://placekitten.com/200/300',
    isOnline: false,
    idEmp: 0,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe (Hr)',
    avatar: 'https://placekitten.com/200/300',
    isOnline: false,
    idEmp: 0,
  },
]

export const position = [
  {
    positionName: 'Software Engineer',
    idEmp: 0,
  },
  {
    positionName: 'Frontend Developer',
    idEmp: 0,
  },
]

export const chat = [
  {
    idJsk: 1,
    idHr: 1,
    idEmp: 0,
    idPosition: 1,
    isFavorite: false,
    isDeleted: false,
    isHidden: false,
  },
  {
    idJsk: 1,
    idHr: 1,
    idEmp: 0,
    idPosition: 2,
    isFavorite: false,
    isDeleted: false,
    isHidden: false,
  },
]

export const message = [
  {
    chatId: 1,
    content: 'Hello',
    userType: 'hr',
    idUser: 1,
  },
  {
    chatId: 1,
    content: 'How are you?',
    userType: 'hr',
    idUser: 1,
  },
  {
    chatId: 1,
    content: 'I am fine',
    userType: 'jsk',
    idUser: 1,
  },
  {
    chatId: 1,
    content: 'How about you?',
    userType: 'jsk',
    idUser: 1,
  },
  {
    chatId: 1,
    content: 'I am fine too',
    userType: 'hr',
    idUser: 1,
  },

  {
    chatId: 2,
    content: 'Hello',
    userType: 'hr',
    idUser: 2,
  },
  {
    chatId: 2,
    content: 'How are you?',
    userType: 'hr',
    idUser: 2,
  },
  {
    chatId: 2,
    content: 'I am fine',
    userType: 'jsk',
    idUser: 2,
  },
  {
    chatId: 2,
    content: 'How about you?',
    userType: 'jsk',
    idUser: 2,
  },
  {
    chatId: 2,
    content: 'I am fine too',
    userType: 'hr',
    idUser: 2,
  },
]

export default { jskUser, hrUser, position, chat, message }
