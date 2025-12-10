// dashboard-widget.js
// A lightweight Web Component that fetches user data from JSONPlaceholder

class DashboardWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.state = {
      userId: this.getAttribute('user-id') || '1',
      theme: this.getAttribute('theme') || 'light',
      data: null,
    };
  }

  static get observedAttributes() {
    return ['user-id', 'theme'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (name === 'user-id') this.state.userId = newValue;
    if (name === 'theme') this.state.theme = newValue;
    this.render();
  }

  connectedCallback() {
    this.render();
    this.loadData();
  }

  disconnectedCallback() {
    // place for cleanup if needed
  }

  async loadData() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/' + this.state.userId);
      if (!res.ok) throw new Error('Network response was not ok');
      this.state.data = await res.json();
      this.render();
      this.dispatchEvent(new CustomEvent('data-loaded', {
        detail: { userId: this.state.userId, data: this.state.data },
        bubbles: true,
        composed: true,
      }));
    } catch (err) {
      console.error('dashboard-widget loadData error:', err);
      this.state.data = { error: String(err) };
      this.render();
    }
  }

  render() {
    const themeBg = this.state.theme === 'dark' ? '#222' : '#fff';
    const themeColor = this.state.theme === 'dark' ? '#fff' : '#222';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; font-family: system-ui, -apple-system, Roboto, 'Segoe UI', sans-serif; }
        .dashboard { padding:16px; border-radius:8px; background:${themeBg}; color:${themeColor}; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
        .title { font-size:1.1rem; margin-bottom:8px; font-weight:600 }
        .meta { font-size:0.9rem; color: ${this.state.theme === 'dark' ? '#ddd' : '#555'}; margin-bottom:12px }
        .data { font-size:0.9rem; background: ${this.state.theme === 'dark' ? '#333' : '#f8f8f8'}; padding:8px; border-radius:6px }
        button { margin-top:12px; padding:8px 12px; border-radius:6px; border:none; cursor:pointer; background:#1976d2; color:#fff }
      </style>
      <div class="dashboard">
        <div class="title">Dashboard Widget</div>
        <div class="meta">User ID: <strong>${this.state.userId}</strong> — Theme: <strong>${this.state.theme}</strong></div>
        <div id="data" class="data">${this.state.data ? this.formatData(this.state.data) : 'Loading...'}</div>
        <button id="refresh">Refresh</button>
      </div>
    `;

    const btn = this.shadowRoot.getElementById('refresh');
    if (btn) {
      btn.onclick = () => this.loadData();
    }
  }

  formatData(data) {
    if (!data) return '';
    if (data.error) return `Error: ${data.error}`;
    // show a small summary
    const name = data.name || data.username || '';
    const email = data.email || '';
    const city = data.address && data.address.city ? data.address.city : '';
    return `Name: ${name}\nEmail: ${email}\nCity: ${city}`.replace(/\n/g, '<br/>');
  }
}

customElements.define('dashboard-widget', DashboardWidget);
