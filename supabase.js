// ── CITY & LIGHT — Supabase Config ──
const SUPA_URL = 'https://pyukliuxknbsodsxdbpx.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5dWtsaXV4a25ic29kc3hkYnB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NzcxNjAsImV4cCI6MjA5MDQ1MzE2MH0.vOlkPzdru8CL45b0zCauiCj8W_29W6dRXLXKCAtWmWU';

// Fonction utilitaire pour appeler Supabase REST
async function supaFetch(table, params = '') {
  const r = await fetch(`${SUPA_URL}/rest/v1/${table}${params}`, {
    headers: {
      'apikey': SUPA_KEY,
      'Authorization': `Bearer ${SUPA_KEY}`,
      'Content-Type': 'application/json',
    }
  });
  if (!r.ok) throw new Error(`Supabase ${r.status}: ${await r.text()}`);
  return r.json();
}

// Charger TOUTES les boutiques
async function loadBoutiques() {
  return supaFetch('boutiques', '?select=*&status=eq.published&order=city');
}

// Charger une boutique par ID
async function loadBoutique(id) {
  const data = await supaFetch('boutiques', `?id=eq.${id}&select=*`);
  return data[0] || null;
}

// Charger boutiques par ville
async function loadBoutiquesByCity(city) {
  return supaFetch('boutiques', `?city=eq.${encodeURIComponent(city)}&select=*&order=name`);
}

// Charger boutiques par région
async function loadBoutiquesByRegion(region) {
  return supaFetch('boutiques', `?region=eq.${region}&select=*&order=city`);
}
