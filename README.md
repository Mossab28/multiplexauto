# Multiplex Auto - Site Vitrine

Site web moderne et futuriste pour **Perfect' Car / Multiplex Auto**, spécialiste en vitres teintées à Troyes.

## 🚀 Caractéristiques

- ✨ Design moderne et futuriste avec thème noir/rouge
- 📱 Entièrement responsive (mobile, tablette, desktop)
- 🎨 Animations fluides et effets visuels
- 🚗 3 catégories de véhicules (Citadine, Berline, Sportive)
- 💬 Section témoignages clients
- 📸 Galerie de réalisations
- 📞 Formulaire de contact
- 🔗 Liens Instagram et réseaux sociaux

## 🛠️ Technologies

- **React 18** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **TailwindCSS** - Framework CSS utility-first
- **Lucide React** - Icônes modernes
- **Framer Motion** - Animations

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 🚀 Déploiement Git + Hostinger

Ce projet est un site **React/Vite statique**. Le plus simple est :

1. versionner le code sur GitHub
2. générer le build avec `npm run build`
3. envoyer le contenu du dossier `dist/` sur Hostinger

### Workflow conseillé

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL_DU_REPO>
git push -u origin main
```

Puis pour publier :

```bash
npm install
npm run build
```

Ensuite, uploadez le contenu de `dist/` dans `public_html/` sur Hostinger.

### Important pour Hostinger

- Le `base` Vite est configuré par défaut sur `/`, ce qui convient à un domaine direct.
- Si vous publiez un jour dans un sous-dossier, utilisez par exemple :

```bash
VITE_BASE_PATH=/multiplexauto/ npm run build
```

## 📍 Informations

**Perfect' Car - Multiplex Auto**
- 📱 Téléphone: 06 63 20 78 08
- 📍 Adresse: 2 rue Archimède, 10600 La Chapelle Saint-Luc
- 🌐 Site: vitreteintees.fr
- 📸 Instagram: @perfect_car_troyes (5006 followers)

## 🎨 Personnalisation

Les images utilisent actuellement des placeholders. Pour les remplacer:
1. Ajoutez vos images dans le dossier `public/images/`
2. Remplacez les URLs dans les composants concernés

## 📄 Structure du Projet

```
multiplex_auto/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation
│   │   ├── Hero.jsx         # Section héro
│   │   ├── About.jsx        # À propos
│   │   ├── Services.jsx     # Services (3 catégories)
│   │   ├── Gallery.jsx      # Galerie photos
│   │   ├── Testimonials.jsx # Témoignages
│   │   ├── Contact.jsx      # Contact & formulaire
│   │   └── Footer.jsx       # Pied de page
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles globaux
├── index.html
├── package.json
└── README.md
```

## 🎯 Sections du Site

1. **Hero** - Section d'accueil avec CTA
2. **À Propos** - Présentation de l'entreprise
3. **Services** - 3 catégories de véhicules avec tarifs
4. **Galerie** - Photos de réalisations
5. **Témoignages** - Avis clients avec carrousel
6. **Contact** - Formulaire et informations

## 🌟 Fonctionnalités

- Navigation smooth scroll
- Menu mobile responsive
- Carrousel de témoignages
- Galerie avec lightbox
- Formulaire de contact
- Animations au scroll
- Effets de survol
- Design glassmorphism

---

Créé avec ❤️ pour Perfect' Car Troyes
