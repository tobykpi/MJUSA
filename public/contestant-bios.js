(() => {
  const input = document.querySelector('#vote input[value="fl-little"]');
  if (!input) return;
  const card = input.closest('.contestant-card');
  const profile = document.createElement('div');
  profile.className = 'contestant-profile';
  card.before(profile); profile.append(card);
  const photo = document.createElement('img');
  photo.src = './public/media/teylyn-prater-fulliere.png';
  photo.alt = 'Tèylyn Prater Fulliere, Little Miss Florida USA';
  photo.className = 'contestant-portrait'; photo.loading = 'lazy';
  photo.width = 494; photo.height = 640;
  card.querySelector('.contestant-identity').before(photo);
})();

(() => {
  const input = document.querySelector('#vote input[value="fl-junior"]');
  if (!input) return;
  const card = input.closest('.contestant-card');
  const profile = document.createElement('div');
  profile.className = 'contestant-profile';
  card.before(profile); profile.append(card);
  const photo = document.createElement('img');
  photo.src = './public/media/syerra-thigpen.png';
  photo.alt = 'Syerra Elyse Lilliana Thigpen, Jr Miss Florida USA';
  photo.className = 'contestant-portrait'; photo.loading = 'lazy';
  photo.width = 494; photo.height = 640;
  card.querySelector('.contestant-identity').before(photo);
})();

(() => {
  const input = document.querySelector('#vote input[value="fl-miss"]');
  if (!input) return;
  const card = input.closest('.contestant-card');
  const profile = document.createElement('div');
  profile.className = 'contestant-profile';
  card.before(profile); profile.append(card);
  const photo = document.createElement('img');
  photo.src = './public/media/jasmen-bogere.png';
  photo.alt = 'Chirley Jasmen Bogere, Miss Juneteenth Florida USA';
  photo.className = 'contestant-portrait'; photo.loading = 'lazy';
  photo.width = 912; photo.height = 1181;
  card.querySelector('.contestant-identity').before(photo);
})();

(() => {
  const input = document.querySelector('#vote input[value="de-miss"]');
  if (!input) return;
  const card = input.closest('.contestant-card');
  const profile = document.createElement('div');
  profile.className = 'contestant-profile';
  card.before(profile); profile.append(card);
  const photo = document.createElement('img');
  photo.src = './public/media/lihlo-flower-hollins.jpg';
  photo.alt = 'Lihlo Flower Hollins, Miss Juneteenth Delaware USA';
  photo.className = 'contestant-portrait'; photo.loading = 'lazy';
  photo.width = 1080; photo.height = 1587;
  card.querySelector('.contestant-identity').before(photo);
})();

(() => {
  const input = document.querySelector('#vote input[value="il-junior"]');
  if (!input) return;
  const card = input.closest('.contestant-card');
  const profile = document.createElement('div');
  profile.className = 'contestant-profile';
  card.before(profile); profile.append(card);
  const photo = document.createElement('img');
  photo.src = './public/media/emoni-taylor.png';
  photo.alt = 'Emoni Taylor, Jr. Miss Illinois';
  photo.className = 'contestant-portrait'; photo.loading = 'lazy';
  photo.width = 1545; photo.height = 2000;
  card.querySelector('.contestant-identity').before(photo);
})();
