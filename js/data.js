const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Василий',
  'Анастасия',
];

const DESCRIPTIONS = [
  'Отель у озера',
  'Указатель на пляж',
  'Морской берег',
  'Девушка в купальнике',
  'Веселый суп',
  'Черный Ламборджини',
  'Клубничный десерт',
  'Виноградный сок',
  'Самолет над пляжем',
  'Летняя обувь на полке',
  'Дорога к пляжу',
  'Крутой AUDI',
  'Что-то вкусное',
  'Суши с котом',
  'Домашние угги',
  'Самолет в полете',
  'Выступление хора с оркестром',
  'Ретро автомобиль',
  'Тапочки с подсветкой',
  'Площадь с пальмами',
  'Салатик',
  'Морской закат',
  'Краб на камне',
  'Выступление одобрено',
  'Сафари после дождя',
]

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_COUNT = 25;

const LikesCount = {
  min: 15,
  max: 200,
}

const CommentsCount = {
  min: 1,
  max: 5,
}

const RandomInterval = {
  min: 1,
  max: 300,
}

const AvatarCount = {
  min: 1,
  max: 6,
}

export {NAMES, DESCRIPTIONS, MESSAGES, PHOTOS_COUNT, LikesCount, CommentsCount, RandomInterval, AvatarCount}
