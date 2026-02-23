# Guide d'intégration des images Instagram

## 📥 Téléchargement des images

Vous devez télécharger manuellement les images depuis Instagram : https://www.instagram.com/perfect_car_troyes/

### Outils recommandés pour télécharger :
- **SnapInsta** : https://snapinsta.app/
- **SaveFrom** : https://en.savefrom.net/download-from-instagram
- **Instaloader** (ligne de commande) : `pip install instaloader`

## 📁 Structure des dossiers créés

```
public/
├── images/
│   ├── gallery/       # Photos de réalisations (galerie)
│   ├── services/      # Photos pour les 3 catégories de véhicules
│   └── hero/          # Photo de fond pour la section héro
```

## 🎯 Images à télécharger

### 1. **Galerie** (6-9 images)
Placez dans : `public/images/gallery/`
- Nommez : `gallery-1.jpg`, `gallery-2.jpg`, etc.
- Choisissez vos meilleures réalisations de vitres teintées
- Format recommandé : JPG, 1200x800px minimum

### 2. **Services** (3 images)
Placez dans : `public/images/services/`
- `citadine.jpg` - Photo d'une citadine avec vitres teintées
- `berline.jpg` - Photo d'une berline avec vitres teintées  
- `sportive.jpg` - Photo d'une voiture sportive avec vitres teintées

### 3. **Hero** (1 image)
Placez dans : `public/images/hero/`
- `hero-bg.jpg` - Belle photo de voiture pour le fond de la page d'accueil
- Format recommandé : JPG, 1920x1080px minimum

## ✅ Une fois les images téléchargées

Dites-moi quand vous avez placé les images dans les dossiers, et je mettrai à jour le code pour les utiliser à la place des placeholders actuels.

## 📝 Checklist

- [ ] Télécharger 6-9 photos pour la galerie
- [ ] Télécharger 3 photos pour les services (citadine, berline, sportive)
- [ ] Télécharger 1 photo pour le hero
- [ ] Placer les images dans les bons dossiers
- [ ] Informer pour la mise à jour du code
