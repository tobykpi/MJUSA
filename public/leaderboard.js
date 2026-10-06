(() => {
  const root = document.querySelector('#leaderboard');
  if (!root || root.dataset.initialized) return;
  root.dataset.initialized = 'true';
  const testMode = ['localhost','127.0.0.1'].includes(location.hostname);
  const api = testMode ? 'https://mjusa-voting-api.tobyev9.workers.dev' : 'https://mjusa-voting-live.tobyev9.workers.dev';
  const status = root.querySelector('[data-leaderboard-status]'), button = root.querySelector('button'), table = root.querySelector('table');
  let busy = false, active = true;
  async function refresh() {
    if (busy || !active) return;
    busy = true; button.disabled = true;
    try {
      const response = await fetch(api+'/api/leaderboard',{cache:'no-store',signal:AbortSignal.timeout(10000)});
      if (!response.ok) throw new Error();
      const data = await response.json();
      if (data.testMode !== testMode || !Array.isArray(data.entries) || !data.entries.every(e => typeof e.name === 'string' && Number.isSafeInteger(e.votes) && e.votes >= 0 && (e.rank === null || Number.isSafeInteger(e.rank)))) throw new Error();
      if (!active) return;
      const rows = data.entries.map(entry => {const tr=document.createElement('tr');for (const value of [entry.rank === null ? '—' : entry.rank,entry.name,entry.votes.toLocaleString()]) {const td=document.createElement('td');td.textContent=String(value);tr.append(td);}return tr;});
      table.querySelector('tbody').replaceChildren(...rows); table.hidden=false;
      status.textContent=(testMode ? 'Test results · ' : '')+(data.totalVotes === 0 ? 'No confirmed votes yet. ' : data.totalVotes.toLocaleString()+' confirmed votes. ')+ 'Updated '+new Date(data.updatedAt).toLocaleTimeString()+'. Equal vote totals share a rank.';
    } catch { if (active) status.textContent = table.hidden ? 'Results are temporarily unavailable. Please try again shortly.' : 'Unable to refresh. Showing the last confirmed results.'; }
    finally {busy=false;button.disabled=false;}
  }
  button.addEventListener('click',refresh);
  const timer=setInterval(() => {if (!document.hidden) refresh();},30000);
  window.addEventListener('leaderboard-cleanup',() => {active=false;clearInterval(timer);button.removeEventListener('click',refresh);delete root.dataset.initialized;},{once:true});
  refresh();
})();
