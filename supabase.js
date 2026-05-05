// ── CITY & LIGHT — Data Config ──
// Connexion Supabase réelle + données embarquées en fallback

const SUPA_URL = 'https://pyukliuxknbsodsxdbpx.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5dWtsaXV4a25ic29kc3hkYnB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NzcxNjAsImV4cCI6MjA5MDQ1MzE2MH0.vOlkPzdru8CL45b0zCauiCj8W_29W6dRXLXKCAtWmWU';

const SUPA_HEADERS = {
  'apikey': SUPA_KEY,
  'Authorization': 'Bearer ' + SUPA_KEY,
  'Content-Type': 'application/json'
};

// ── ICÔNES PAR CATÉGORIE (pour les boutiques Niveau 2) ──
const CAT_ICONS = {
  'Art & Galleries / Art & Galeries':                         '🖼️',
  'Art & Galeries':                                           '🖼️',
  'Galerie d\'Art':                                           '🖼️',
  'Beauty, Perfume & Cosmetics / Beauté, Parfums & Cosmétique': '💄',
  'Beauté':                                                   '💄',
  'Parfumerie':                                               '🌸',
  'Bookstores & Culture / Librairies & Culture':              '📚',
  'Librairie':                                                '📚',
  'Concept Stores':                                           '✨',
  'Design & Home Decor / Design & Habitat':                   '🏡',
  'Design':                                                   '🏡',
  'Fashion & Haute Couture / Mode & Haute Couture':           '👗',
  'Mode':                                                     '👗',
  'Haute Couture':                                            '👗',
  'Gastronomy & Fine Foods / Gastronomie & Épicerie Fine':    '🍾',
  'Épicerie Fine':                                            '🍾',
  'Gastronomie':                                              '🍾',
  'Luxury, Leather Goods & Jewelry / Luxe, Maroquinerie & Bijoux': '💎',
  'Maroquinerie':                                             '👜',
  'Bijouterie Fine':                                          '💍',
  'Bijoux Vintage':                                           '💍',
  'Horlogerie & Bijoux':                                      '⌚',
  'Vintage, Second Hand & Collection / Vintage, Seconde Main & Collection': '🪞',
  'Mode Vintage':                                             '🪞',
  'Dépôt-vente Luxe':                                         '🪞',
  'Grands Magasins':                                          '🏬',
};

function getCatIcon(cat) {
  if (!cat) return '🏪';
  for (const key of Object.keys(CAT_ICONS)) {
    if (cat.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(cat.toLowerCase())) {
      return CAT_ICONS[key];
    }
  }
  return '🏪';
}

// ── DONNÉES EMBARQUÉES (City & Light — Niveau 1) ──
const DB = [
  {
    "id": "guerlain-paris",
    "name": "Guerlain Paris",
    "badge": "Parfumerie · Paris 8e",
    "city": "Paris", "country": "France", "region": "europe",
    "address": "68 avenue des Champs-Élysées, 75008 Paris",
    "phone": "+33 1 45 62 52 57",
    "website": "https://www.guerlain.com",
    "hours": "Lun–Sam 10h–20h",
    "category": "Parfumerie",
    "desc_fr": "La maison Guerlain, fondée en 1828, incarne l'excellence de la parfumerie française depuis près de deux siècles.",
    "lat": 48.8698, "lon": 2.3078,
    "main_photo": "https://static.wixstatic.com/media/631e74_6212fb2a514d42c5b9222ee482cc1f5b~mv2.jpg",
    "photos": ["https://static.wixstatic.com/media/631e74_6212fb2a514d42c5b9222ee482cc1f5b~mv2.jpg","https://static.wixstatic.com/media/631e74_32a928b33ec54d69b974b527c112bf4f~mv2.jpg","https://static.wixstatic.com/media/631e74_eabeb9c3f1cb49dcadde1daa89cfbf41~mv2.jpg"], "status": "published"
  },
  {
    "id": "louis-vuitton-paris",
    "name": "Louis Vuitton Paris",
    "badge": "Maroquinerie · Paris",
    "city": "Paris", "country": "France", "region": "europe",
    "address": "101 avenue des Champs-Élysées, 75008 Paris",
    "phone": "", "website": "https://www.louisvuitton.com",
    "hours": "Lun–Dim 10h–20h",
    "category": "Maroquinerie",
    "desc_fr": "Le flagship Louis Vuitton des Champs-Élysées est l'une des boutiques les plus visitées au monde.",
    "lat": 48.8736, "lon": 2.3006,
    "main_photo": "https://static.wixstatic.com/media/631e74_a0f529f3d56f4d108261bd78b2f214dd~mv2.jpg",
    "photos": ["https://static.wixstatic.com/media/631e74_a0f529f3d56f4d108261bd78b2f214dd~mv2.jpg","https://static.wixstatic.com/media/631e74_8a980a3a4a8447b39def90866389fbf8~mv2.jpg","https://static.wixstatic.com/media/631e74_f902031d07dd46008a8efd971fb531e3~mv2.jpg"], "status": "published"
  },
  {
    "id": "dior-paris",
    "name": "Dior Paris",
    "badge": "Haute Couture · Paris 8e",
    "city": "Paris", "country": "France", "region": "europe",
    "address": "30 avenue Montaigne, 75008 Paris",
    "phone": "", "website": "https://www.dior.com",
    "hours": "Lun–Sam 10h–19h",
    "category": "Haute Couture",
    "desc_fr": "La maison Dior, fondée en 1946, a établi son adresse mythique au 30 avenue Montaigne.",
    "lat": 48.8656, "lon": 2.3017,
    "main_photo": "https://static.wixstatic.com/media/631e74_78f9d28f6f59492d84e0c98cc1b637a6~mv2.jpg",
    "photos": ["https://static.wixstatic.com/media/631e74_78f9d28f6f59492d84e0c98cc1b637a6~mv2.jpg","https://static.wixstatic.com/media/631e74_08faadd3ff124c14971eb6a5a00c661a~mv2.jpg","https://static.wixstatic.com/media/631e74_e95bbbc433dc4125944c30bd3aff9f84~mv2.jpg"], "status": "published"
  },
  {
    "id": "paxton-whitfield",
    "name": "Paxton & Whitfield",
    "badge": "Fromagerie · Londres",
    "city": "Londres", "country": "UK", "region": "europe",
    "address": "93 Jermyn St, London SW1Y 6JE",
    "phone": "+44 20 7930 0259", "website": "https://www.paxtonandwhitfield.co.uk",
    "hours": "Lun–Sam 9h30–18h",
    "category": "Fromagerie Fine",
    "desc_fr": "Fondée en 1797, Paxton & Whitfield est la plus ancienne fromagerie fine de Londres.",
    "lat": 51.5074, "lon": -0.1376,
    "main_photo": "https://static.wixstatic.com/media/631e74_1cd1d0d4339e499ca5170614889ff684~mv2.jpg",
    "photos": ["https://static.wixstatic.com/media/631e74_1cd1d0d4339e499ca5170614889ff684~mv2.jpg","https://static.wixstatic.com/media/631e74_3268a181c0b2416997d41ea48ada7191~mv2.jpg","https://static.wixstatic.com/media/631e74_1aa2620ae17a4962a7ff6dc066f7c878~mv2.jpg"], "status": "published"
  },
  {
    "id": "floris-89",
    "name": "Floris 89",
    "badge": "Parfumerie · Londres",
    "city": "Londres", "country": "UK", "region": "europe",
    "address": "89 Jermyn St, London SW1Y 6JH",
    "phone": "+44 20 7930 2885", "website": "https://www.florislondon.com",
    "hours": "Lun–Sam 9h30–18h",
    "category": "Parfumerie",
    "desc_fr": "Floris est la plus ancienne parfumerie de Londres, fondée en 1730.",
    "lat": 51.5068, "lon": -0.1386,
    "main_photo": "https://static.wixstatic.com/media/631e74_3bd5447b449845dca7702622a119d194~mv2.jpg",
    "photos": ["https://static.wixstatic.com/media/631e74_3bd5447b449845dca7702622a119d194~mv2.jpg","https://static.wixstatic.com/media/631e74_faf0113a8fb947558acb7eb5e4e0648c~mv2.webp","https://static.wixstatic.com/media/631e74_363ee41bd50d4847828d761e1b77a100~mv2.webp"], "status": "published"
  },
  {
    "id": "valextra",
    "name": "Valextra Milan",
    "badge": "Maroquinerie · Milan",
    "city": "Milan", "country": "Italie", "region": "europe",
    "address": "Via Manzoni 3, 20121 Milano",
    "phone": "", "website": "https://www.valextra.com",
    "hours": "Lun–Sam 10h–19h",
    "category": "Maroquinerie",
    "desc_fr": "Valextra est la maison milanaise de maroquinerie d'exception, fondée en 1937.",
    "lat": 45.4722, "lon": 9.1896,
    "main_photo": "https://static.wixstatic.com/media/631e74_7e9297adf6dc4fe6ba75c075831b0d35~mv2.jpg",
    "photos": ["https://static.wixstatic.com/media/631e74_7e9297adf6dc4fe6ba75c075831b0d35~mv2.jpg","https://static.wixstatic.com/media/631e74_6efc4c348bdf4276946271f2c01d4a8e~mv2.jpg","https://static.wixstatic.com/media/631e74_806012d7af054ac7b82088b684817f8c~mv2.jpg"], "status": "published"
  },
  {
    "id": "nuir-vintage",
    "name": "Nuir Vintage",
    "badge": "Mode Vintage · Tokyo",
    "city": "Tokyo", "country": "Japon", "region": "asie",
    "address": "Shibuya, Tokyo",
    "phone": "", "website": "",  "hours": "",
    "category": "Mode Vintage",
    "desc_fr": "Nuir Vintage est l'une des boutiques vintage les plus sélectives de Shibuya.",
    "lat": 35.6595, "lon": 139.7004,
    "main_photo": "https://static.wixstatic.com/media/631e74_a9b1f6a31d5749f8aeaf04e4dda68f17~mv2.jpg",
    "photos": ["https://static.wixstatic.com/media/631e74_a9b1f6a31d5749f8aeaf04e4dda68f17~mv2.jpg","https://static.wixstatic.com/media/631e74_38ef2b97fedb40cd812baaeede399f9f~mv2.jpg","https://static.wixstatic.com/media/631e74_3b53347e7cbc46aaa92a0f185f4ca83d~mv2.jpg"], "status": "published"
  },
  {
    "id": "33-rue-majorelle",
    "name": "33 rue Majorelle",
    "badge": "Art & Design · Marrakech",
    "city": "Marrakech", "country": "Maroc", "region": "afrique",
    "address": "33 rue Majorelle, Guéliz, Marrakech",
    "phone": "", "website": "", "hours": "Lun–Dim 9h–19h",
    "category": "Art & Design",
    "desc_fr": "33 rue Majorelle est une galerie boutique au cœur de Marrakech.",
    "lat": 31.6372, "lon": -7.9904,
    "main_photo": "https://static.wixstatic.com/media/631e74_41840788dbe2482a933a2425de61b37a~mv2.jpg",
    "photos": ["https://static.wixstatic.com/media/631e74_41840788dbe2482a933a2425de61b37a~mv2.jpg","https://static.wixstatic.com/media/631e74_f5a99ed37da0451d85705f9169700752~mv2.jpg","https://static.wixstatic.com/media/631e74_51e67917f4404f0f93a67d664369e67a~mv2.jpg"], "status": "published"
  },
  {
    "id": "galerie-neel",
    "name": "Galerie Neel",
    "badge": "Art · Cannes",
    "city": "Cannes", "country": "France", "region": "europe",
    "address": "3 Rue du Commandant Vidal, 06400 Cannes",
    "phone": "", "website": "https://www.galerieneel.com",
    "hours": "Mar–Sam 10h–19h",
    "category": "Galerie d'Art",
    "desc_fr": "La Galerie Neel, entreprise familiale d'artistes ouverte depuis 1992.",
    "lat": 43.5516, "lon": 7.0174,
    "main_photo": "https://static.wixstatic.com/media/631e74_f69fec4671d1491492b52b19d854f3e6~mv2.webp",
    "photos": ["https://static.wixstatic.com/media/631e74_f69fec4671d1491492b52b19d854f3e6~mv2.webp","https://static.wixstatic.com/media/631e74_13f51f377ed1428e849f15ccf5d5baf8~mv2.jpg","https://static.wixstatic.com/media/631e74_6d1471bc5a5e4b5eba6261629ffe3e4a~mv2.jpg"], "status": "published"
  },
  {
    "id": "cedric-grolet",
    "name": "Cedric Grolet - Airelles",
    "badge": "Pâtisserie · Saint-Tropez",
    "city": "Saint-Tropez", "country": "France", "region": "europe",
    "address": "Hôtel Airelles, Saint-Tropez 83990",
    "phone": "", "website": "", "hours": "Saisonnier",
    "category": "Pâtisserie",
    "desc_fr": "Le chef pâtissier Cédric Grolet, sacré meilleur chef pâtissier du monde.",
    "lat": 43.2727, "lon": 6.6407,
    "main_photo": "https://static.wixstatic.com/media/631e74_290ce4d1515e49949d072119daaae50b~mv2.jpg",
    "photos": ["https://static.wixstatic.com/media/631e74_290ce4d1515e49949d072119daaae50b~mv2.jpg","https://static.wixstatic.com/media/631e74_15b94620e8134b39a565e09fa0c6e54e~mv2.jpg","https://static.wixstatic.com/media/631e74_13feb73cc5a545078913225f15ab4d91~mv2.jpg"], "status": "published"
  },
  {
    "id": "casa-bloom",
    "name": "Casa Bloom Barcelona",
    "badge": "Mode · Barcelone",
    "city": "Barcelone", "country": "Espagne", "region": "europe",
    "address": "Barcelone, Espagne",
    "phone": "", "website": "", "hours": "",
    "category": "Mode",
    "desc_fr": "Casa Bloom est une boutique de mode indépendante au cœur de Barcelone.",
    "lat": 41.3851, "lon": 2.1734,
    "main_photo": "https://static.wixstatic.com/media/631e74_e7b3c56d6fc34d2ead175276b613ec9a~mv2.jpg",
    "photos": ["https://static.wixstatic.com/media/631e74_e7b3c56d6fc34d2ead175276b613ec9a~mv2.jpg","https://static.wixstatic.com/media/631e74_05bb9719b59543f49a60c6468583070b~mv2.jpg","https://static.wixstatic.com/media/631e74_9dd3e8b0e77440c4bc052c01dd9a6d0f~mv2.jpg"], "status": "published"
  }
];

const DB_IDX = {};
DB.forEach(b => { DB_IDX[b.id] = b; });

// ── FONCTIONS SUPABASE ──

async function supaFetch(endpoint, params = {}) {
  const url = new URL(SUPA_URL + '/rest/v1/' + endpoint);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), { headers: SUPA_HEADERS });
  if (!res.ok) throw new Error('Supabase error: ' + res.status);
  return res.json();
}

// Normalise une boutique Supabase vers le format interne
function normalise(b) {
  return {
    ...b,
    photos:     b.photos     || (b.main_photo ? [b.main_photo] : []),
    desc:       b.desc_fr    || b.desc_en || '',
    address:    b.address    || '',
    lat:        b.lat        || b.latitude  || null,
    lon:        b.lon        || b.longitude || null,
    hours:      b.hours      || b.openingHours || '',
    icon:       getCatIcon(b.category),
    isListed:   b.status === 'listed',
    isPublished: b.status === 'published',
  };
}

// Toutes les boutiques publiées (Niveau 1)
async function loadBoutiques() {
  try {
    const data = await supaFetch('boutiques', {
      select: '*',
      status: 'eq.published',
      order:  'name.asc',
      limit:  '500'
    });
    return data.map(normalise);
  } catch(e) {
    console.warn('Supabase indispo, fallback local:', e);
    return DB.filter(b => b.status === 'published').map(normalise);
  }
}

// Une boutique par ID
async function loadBoutique(id) {
  // Chercher d'abord dans le DB local
  if (DB_IDX[id]) return normalise(DB_IDX[id]);
  try {
    const data = await supaFetch('boutiques', { select: '*', id: 'eq.' + id });
    return data[0] ? normalise(data[0]) : null;
  } catch(e) {
    return null;
  }
}

// Boutiques par ville (Niveau 1 + Niveau 2)
async function loadBoutiquesByCity(city) {
  try {
    const data = await supaFetch('boutiques', {
      select: '*',
      city:   'eq.' + city,
      order:  'status.desc,name.asc',
      limit:  '500'
    });
    // Boutiques locales City & Light (priorité absolue — avec photos)
    const localPublished = DB.filter(b => b.city === city && b.status === 'published');
    const localIds = new Set(localPublished.map(b => b.id));

    // Boutiques Supabase — exclure celles déjà dans le local published
    const supaFiltered = data.filter(b => !localIds.has(b.id));

    // Ordre : City & Light en premier, puis les répertoriées Supabase
    const merged = [
      ...localPublished.map(normalise),
      ...supaFiltered.map(normalise)
    ];
    return merged;
  } catch(e) {
    console.warn('Supabase indispo, fallback local:', e);
    return DB.filter(b => b.city === city).map(normalise);
  }
}

// Boutiques par région
async function loadBoutiquesByRegion(region) {
  try {
    const data = await supaFetch('boutiques', {
      select: '*',
      region: 'eq.' + region,
      status: 'eq.published',
      order:  'name.asc',
      limit:  '200'
    });
    return data.map(normalise);
  } catch(e) {
    return DB.filter(b => b.region === region).map(normalise);
  }
}

// ── ADMIN — Fonctions de mise à jour ──

async function updateBoutique(id, fields) {
  const res = await fetch(SUPA_URL + '/rest/v1/boutiques?id=eq.' + id, {
    method:  'PATCH',
    headers: { ...SUPA_HEADERS, 'Prefer': 'return=representation' },
    body:    JSON.stringify(fields)
  });
  if (!res.ok) throw new Error('Update failed: ' + await res.text());
  return (await res.json())[0];
}

async function deleteBoutique(id) {
  const res = await fetch(SUPA_URL + '/rest/v1/boutiques?id=eq.' + id, {
    method:  'DELETE',
    headers: SUPA_HEADERS
  });
  if (!res.ok) throw new Error('Delete failed');
  return true;
}

async function loadAllBoutiquesAdmin(page = 0, pageSize = 50, filters = {}) {
  const params = {
    select: '*',
    order:  'city.asc,name.asc',
    limit:  String(pageSize),
    offset: String(page * pageSize)
  };
  if (filters.city)   params.city     = 'eq.' + filters.city;
  if (filters.status) params.status   = 'eq.' + filters.status;
  if (filters.cat)    params.category = 'ilike.*' + filters.cat + '*';
  try {
    const data = await supaFetch('boutiques', params);
    return data.map(normalise);
  } catch(e) {
    console.error('Admin load error:', e);
    return [];
  }
}

