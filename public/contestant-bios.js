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
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'bio-button';
  button.innerHTML = 'Read bio <span aria-hidden="true">↗</span>';
  button.setAttribute('aria-label', 'Read Tèylyn Prater Fulliere’s biography');
  button.setAttribute('aria-haspopup', 'dialog');
  button.setAttribute('aria-controls', 'teylyn-bio');
  profile.append(button);
  const dialog = document.createElement('dialog');
  dialog.id = 'teylyn-bio'; dialog.className = 'bio-dialog';
  dialog.setAttribute('aria-labelledby', 'teylyn-bio-title');
  dialog.innerHTML = `<button type="button" class="bio-close" aria-label="Close biography" autofocus>×</button><div class="bio-layout"><img class="bio-portrait" src="./public/media/teylyn-prater-fulliere.png" alt="Tèylyn wearing her crown and Little Miss Juneteenth Florida sash" width="494" height="640"><div class="bio-content"><p class="kicker">Little Miss Florida USA</p><h2 id="teylyn-bio-title">Tèylyn Prater Fulliere</h2><div class="bio-story"></div></div></div>`;
  const paragraphs = [
    'Tèylyn Prater Fulliere is a proud native of Tallahassee, Florida, born on October 29, 2016, at Tallahassee Memorial Hospital to her mother, Evelyn Prater. She is the younger sister of Tèyana Prater Davis, and her name was lovingly created by combining her sister’s and her mother’s names. She was later baptized at True Light Ministries, where her foundation of faith began.',
    'A dedicated student at Capital Preparatory School, Tèylyn consistently earns A’s and B’s while exploring her creative passions. She enjoys drawing, singing, doing hair, crocheting, and makeup, but her greatest loves are dancing and gymnastics. Her gymnastics journey began at age two at Trousdell Gymnastics Center, and she later joined the Dance Fusion Organization, where she continues developing as a performer.',
    'Naturally curious and eager to learn, Tèylyn has recently become interested in face painting and sewing. With a strong love for cosmetology, she dreams of entering the entertainment industry so she can help others shine with confidence. Known for her compassion, bright spirit, and kind heart, she actively seeks ways to uplift people in need, especially the homeless community.'
  ];
  for (const text of paragraphs) { const p = document.createElement('p'); p.textContent = text; dialog.querySelector('.bio-story').append(p); }
  document.body.append(dialog);
  button.addEventListener('click', () => { dialog.showModal(); document.documentElement.classList.add('bio-open'); });
  dialog.querySelector('.bio-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { document.documentElement.classList.remove('bio-open'); button.focus({preventScroll:true}); });
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
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'bio-button';
  button.innerHTML = 'Read bio <span aria-hidden="true">↗</span>';
  button.setAttribute('aria-label', 'Read Syerra Elyse Lilliana Thigpen’s biography');
  button.setAttribute('aria-haspopup', 'dialog');
  button.setAttribute('aria-controls', 'syerra-bio');
  profile.append(button);
  const dialog = document.createElement('dialog');
  dialog.id = 'syerra-bio'; dialog.className = 'bio-dialog';
  dialog.setAttribute('aria-labelledby', 'syerra-bio-title');
  dialog.innerHTML = `<button type="button" class="bio-close" aria-label="Close biography" autofocus>×</button><div class="bio-layout"><img class="bio-portrait" src="./public/media/syerra-thigpen.png" alt="Syerra wearing her crown and Junior Miss Juneteenth Florida sash" width="494" height="640"><div class="bio-content"><p class="kicker">Jr Miss Florida USA</p><h2 id="syerra-bio-title">Syerra Elyse Lilliana Thigpen</h2><div class="bio-story"></div></div></div>`;
  const paragraphs = [
  "Miss Syerra Elyse Lilliana Thigpen, age 11, is the youngest of six children born to proud parents Vincent and Syretta Thigpen. Born and raised in Tampa, Florida, she entered the world on November 3, 2014, destined to shine. She is a member of Revealing Truth Church in Wesley Chapel, where her faith continues to strengthen her character and confidence.",
  "Creative and full of joy, Syerra loves dancing, singing with her best friend, writing songs, shopping, using her imagination, and spending time with her family. A dedicated student, she is in the 6th grade, a member of the YMCA Volleyball Team, a Cadette Girl Scout, and a former dancer with New Tampa Dance Theater. She was also recently inducted into the Destiny Promise Youth Group of the National Council of Negro Women Tampa Metropolitan Section.",
  "Syerra earned 2nd Runner-Up in Little Miss Juneteenth Tampa Bay 2022–2023 and was crowned Junior Miss Juneteenth Florida USA 2026. She also received the Ida B. Wells Literary Award and the Dr. Oprah Winfrey Black Wall Street Award.",
  "This year, she has grown in confidence, bravery, and self-love, embracing her uniqueness, her skin, and her hair. She dreams of becoming a schoolteacher, a famous dancer or singer, opening a dance studio, and one day having a beautiful family. Guided by her favorite scripture, “I can do all things through Christ who strengthens me,” Syerra steps forward as a young leader, artist, and role model."
];
  for (const text of paragraphs) { const p = document.createElement('p'); p.textContent = text; dialog.querySelector('.bio-story').append(p); }
  document.body.append(dialog);
  button.addEventListener('click', () => { dialog.showModal(); document.documentElement.classList.add('bio-open'); });
  dialog.querySelector('.bio-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { document.documentElement.classList.remove('bio-open'); button.focus({preventScroll:true}); });
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
const button = document.createElement('button');
  button.type = 'button'; button.className = 'bio-button';
  button.innerHTML = 'Read bio <span aria-hidden="true">↗</span>';
  button.setAttribute('aria-label', 'Read Chirley Jasmen Bogere’s biography');
  button.setAttribute('aria-haspopup', 'dialog');
  button.setAttribute('aria-controls', 'jasmen-bio');
  profile.append(button);
  const dialog = document.createElement('dialog');
  dialog.id = 'jasmen-bio'; dialog.className = 'bio-dialog';
  dialog.setAttribute('aria-labelledby', 'jasmen-bio-title');
  dialog.innerHTML = `<button type="button" class="bio-close" aria-label="Close biography" autofocus>×</button><div class="bio-layout"><img class="bio-portrait" src="./public/media/jasmen-bogere.png" alt="Chirley Jasmen Bogere wearing her crown and Miss Juneteenth Florida sash" width="912" height="1181"><div class="bio-content"><p class="kicker">Miss Juneteenth Florida USA</p><h2 id="jasmen-bio-title">Chirley Jasmen Bogere</h2><div class="bio-story"></div></div></div>`;
  const paragraphs = [
  "Chirley Jasmen Bogere is a vibrant 16-year-old born on April 1, 2010, in Kampala, Uganda. She moved to Perry, Florida, at age four and has grown into a confident young woman with a heart for service, a strong faith, and a passion for inspiring others. Jasmen is the daughter of Charles Bogere and Tekecia Bogere and the youngest of four children.",
  "Jasmen is a junior at Taylor County High School, where she proudly maintains a 4.0 GPA. She is also dual enrolled at North Florida Community College. After high school, she plans to attend Florida A&M University and earn a master’s degree in nursing as she prepares for her future career as a Certified Registered Nurse Anesthetist.",
  "Beyond the classroom, Jasmen shines at her job and as a varsity cheerleader, flag football player, former soccer player, praise dancer, singer, speaker, and participant in church skits and programs. Her faith is guided by Psalms 37:5: “Commit your way to the LORD; trust in him and he will do this.” She credits the church with helping her discover praise dancing and overcome her fear of public speaking.",
  "Purpose driven and full of determination, Jasmen dreams of one day bringing her birth mother and two brothers from Uganda to the United States. As Miss Juneteenth Florida USA, she uses her voice to stand against bullying and encourage young people to choose kindness, confidence, and courage. She enjoys helping others, baking, cosmetology, traveling, and spending time with family. Jasmen wishes the best of luck to all contestants."
];
  for (const text of paragraphs) { const p = document.createElement('p'); p.textContent = text; dialog.querySelector('.bio-story').append(p); }
  document.body.append(dialog);
  button.addEventListener('click', () => { dialog.showModal(); document.documentElement.classList.add('bio-open'); });
  dialog.querySelector('.bio-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { document.documentElement.classList.remove('bio-open'); button.focus({preventScroll:true}); });
})();

(() => {
  const input = document.querySelector('#vote input[value="de-miss"]');
  if (!input) return;
  const card = input.closest('.contestant-card');
  const profile = document.createElement('div');
  profile.className = 'contestant-profile';
  card.before(profile); profile.append(card);
const button = document.createElement('button');
  button.type = 'button'; button.className = 'bio-button';
  button.innerHTML = 'Read bio <span aria-hidden="true">↗</span>';
  button.setAttribute('aria-label', 'Read Lihlo Flower Hollins’s biography');
  button.setAttribute('aria-haspopup', 'dialog');
  button.setAttribute('aria-controls', 'lihlo-bio');
  profile.append(button);
  const dialog = document.createElement('dialog');
  dialog.id = 'lihlo-bio'; dialog.className = 'bio-dialog';
  dialog.setAttribute('aria-labelledby', 'lihlo-bio-title');
  dialog.innerHTML = `<button type="button" class="bio-close" aria-label="Close biography" autofocus>×</button><div class="bio-layout bio-layout-text"><div class="bio-content"><p class="kicker">Miss Juneteenth Delaware USA</p><h2 id="lihlo-bio-title">Lihlo Flower Hollins</h2><div class="bio-story"></div></div></div>`;
  const paragraphs = [
  "Lihlo Flower Hollins is her ancestors dream, her elders wisdom and a leader amongst her generation. This 16 year old award winning artist and community advocate was born in Philadelphia and has been residing in Delaware since 2015, implementing her purpose of heart in the arts wherever she goes.",
  "Lihlo is a homeschool student that takes the initiative to infuse her academic studies with learning about her roots and African American culture. She has an extraordinary girth for learning. Beholding a bloodline coded with creatives and self-starters, she strives to carry on her legacy.",
  "As an Artist, singer, photographer, videographer, model, dancer, writer, filmmaker and social journalist, Lihlo Hollins works endlessly cultivating her platform “Youth development in the Arts”. A lot of her service is with “The Cause Production Crew”, tackling issues such as depression, suicide and the importance of self care through youth content creation.",
  "Her goal is to attend an HBCU in the future to be an Arts educator. Contributing at libraries, community centers and neighborhood events"
];
  for (const text of paragraphs) { const p = document.createElement('p'); p.textContent = text; dialog.querySelector('.bio-story').append(p); }
  document.body.append(dialog);
  button.addEventListener('click', () => { dialog.showModal(); document.documentElement.classList.add('bio-open'); });
  dialog.querySelector('.bio-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { document.documentElement.classList.remove('bio-open'); button.focus({preventScroll:true}); });
})();

