(() => {
  const root = document.querySelector('#vote');
  if (!root) return;
  const button = root.querySelector('.vote-checkout');
  const note = root.querySelector('.voting-note');
  const badge = root.querySelector('.voting-status');
  const local = ['localhost', '127.0.0.1'].includes(location.hostname);
  const publicSite = ['mjusanationals.com', 'www.mjusanationals.com'].includes(location.hostname);
  const api = local ? 'https://mjusa-voting-api.tobyev9.workers.dev' : publicSite ? 'https://mjusa-voting-live.tobyev9.workers.dev' : '';
  const testMode = local;
  let ready = false, busy = false, requestId = crypto.randomUUID();
  const selected = () => root.querySelector('input[name="contestant"]:checked');
  const votePackage = () => root.querySelector('input[name="vote-package"]:checked');
  function update() {
    button.disabled = !ready || busy || !selected();
    button.textContent = busy ? 'Opening Stripe…' : ready ? 'Continue to Stripe' : 'Payments unavailable';
  }
  root.addEventListener('change', event => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) return;
    requestId = crypto.randomUUID();
    if (input.name === 'contestant') {
      root.querySelectorAll('.contestant-card').forEach(card => card.classList.toggle('selected', card.contains(input)));
      root.querySelector('#vote-name').textContent = input.dataset.name;
      root.querySelector('#vote-detail').textContent = input.dataset.detail;
      root.querySelector('#vote-detail').hidden = false;
    } else if (input.name === 'vote-package') {
      root.querySelectorAll('.vote-package').forEach(card => card.classList.toggle('selected', card.contains(input)));
      root.querySelector('#vote-count').textContent = `${input.value} ${input.value === '1' ? 'vote' : 'votes'}`;
      root.querySelector('#vote-total').textContent = `$${input.dataset.price}.00`;
    }
    update();
  });
  button.addEventListener('click', async () => {
    if (!ready || busy || !selected()) return;
    const payload = { contestantId: selected().value, votes: Number(votePackage().value), requestId };
    busy = true; update();
    root.querySelectorAll('fieldset').forEach(fieldset => { fieldset.disabled = true; });
    try {
      const response = await fetch(`${api}/api/payments/checkout`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload), signal:AbortSignal.timeout(25000) });
      const data = await response.json();
      if (!response.ok) { if (response.status === 409) requestId = crypto.randomUUID(); throw new Error(data.error); }
      const checkout = new URL(data.url);
      if (checkout.protocol !== 'https:' || checkout.hostname !== 'checkout.stripe.com') throw new Error('Checkout is unavailable.');
      location.assign(checkout.href);
    } catch (error) {
      note.textContent = `${error.message || 'Checkout could not start.'} Your selection is saved; please try again.`;
      busy = false;
      root.querySelectorAll('fieldset').forEach(fieldset => { fieldset.disabled = false; });
      update();
    }
  });
  async function checkPayment() {
    const query = new URLSearchParams(location.search);
    if (query.has('payment')) {
      const confirmation = document.createElement('div');
      confirmation.className = 'payment-confirmation';
      confirmation.setAttribute('role', 'status');
      confirmation.tabIndex = -1;
      root.prepend(confirmation);
      const sync = () => { confirmation.textContent = note.textContent; };
      new MutationObserver(sync).observe(note, {childList:true, subtree:true, characterData:true});
      sync();
      confirmation.focus({preventScroll:true});
      requestAnimationFrame(() => root.scrollIntoView({behavior:'instant', block:'start'}));
    }
    if (query.get('payment') === 'cancelled') { note.textContent = 'Checkout was cancelled. No votes were added by returning to this page.'; return; }
    if (query.get('payment') !== 'success') return;
    note.textContent = 'Confirming your payment. Votes will appear after payment is verified.';
    for (let attempt = 0; attempt < 10; attempt++) {
      try {
        const response = await fetch(`${api}/api/payments/status?session_id=${encodeURIComponent(query.get('session_id') || '')}`, { signal:AbortSignal.timeout(5000) });
        const data = await response.json();
        if (response.ok && data.status === 'paid') { note.textContent = testMode ? `Test payment confirmed. ${data.votes} test ${data.votes === 1 ? 'vote has' : 'votes have'} been recorded. No real money was charged.` : `Payment confirmed. ${data.votes} ${data.votes === 1 ? 'vote has' : 'votes have'} been recorded. Thank you for voting!`; return; }
      } catch { /* Leave a pending message, never imply success from the URL alone. */ }
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    note.textContent = 'Payment confirmation is still pending. Please do not pay again; refresh this page shortly to check.';
  }
  async function initialize() {
    note.setAttribute('role', 'status');
    try {
      if (!api) throw new Error('Payment host not configured');
      const response = await fetch(`${api}/api/payments/config`, { signal:AbortSignal.timeout(5000) });
      const data = await response.json();
      ready = response.ok && data.ready === true && data.testMode === testMode;
      badge.textContent = ready ? (testMode ? 'Test mode · No real charges' : 'Voting is open') : 'Payment setup in progress';
      note.textContent = ready ? (testMode ? 'Test checkout only. Votes count after Stripe confirms payment.' : 'Secure checkout with Stripe. Votes count after payment is confirmed.') : 'Payments are not available yet. Please check back soon.';
    } catch { badge.textContent = 'Payment setup in progress'; note.textContent = 'Payments are not available yet. Please check back soon.'; }
    update();
    if (api) await checkPayment();
  }
  initialize();
})();
