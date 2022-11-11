import { NAMES, DESCRIPTIONS, MESSAGES, PHOTOS_COUNT, LikesCount, CommentsCount, RandomInterval, AvatarCount } from './data.js';

const getRandomNum = (min, max) => {
  min = Math.abs(min);
  max = Math.abs(max);
  if (min >= max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const checkLength = (string, maxLength) => {
  return string.length <= maxLength;
};

const getRandomArrayElement = (array) => {
  return array[getRandomNum(0, array.length - 1)];
}

const createComment = () => {
  const comments = [];
  for (let i = 0; i < getRandomNum(CommentsCount.min, CommentsCount.max); i++) {
    comments.push({
      id: getRandomNum(RandomInterval.min, RandomInterval.max),
      avatar: `img/avatar-${getRandomNum(AvatarCount.min, AvatarCount.max)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    })
  }
  return comments;
}

const photos = [];
const createDescription = () => {
  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[i - 1],
      likes: getRandomNum(LikesCount.min, LikesCount.max),
      comments: createComment(),
    });
  }
  return photos;
}

createDescription();

export {photos}
