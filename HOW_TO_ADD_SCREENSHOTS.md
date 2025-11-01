# How to Add Screenshots to Your Project Pages

## 📱 Where to Place Your Screenshots

Replace the icon placeholders with your actual screenshots!

### Current Structure (What You See Now)

In your project HTML files (`project-flexup.html` and `project-motionai.html`), you currently have:

```html
<div class="phone-screen">
    <i class="fas fa-home"></i>  <!-- This is a placeholder icon -->
</div>
```

### What You Need to Do

**Replace this:**
```html
<div class="phone-screen">
    <i class="fas fa-home"></i>
</div>
```

**With this:**
```html
<div class="phone-screen">
    <img src="screenshots/flexup-01.jpg" alt="Welcome Screen">
</div>
```

## 📁 File Organization

Create a `screenshots` folder in your portfolio directory:

```
Portfolio/
├── index.html
├── styles.css
├── script.js
├── pic.jpg
├── screenshots/              ← Create this folder
│   ├── flexup/
│   │   ├── flexup-01.jpg
│   │   ├── flexup-02.jpg
│   │   ├── flexup-03.jpg
│   │   ├── flexup-04.jpg
│   │   ├── flexup-05.jpg
│   │   └── flexup-06.jpg
│   └── motionai/
│       ├── motionai-01.jpg
│       ├── motionai-02.jpg
│       ├── motionai-03.jpg
│       ├── motionai-04.jpg
│       ├── motionai-05.jpg
│       └── motionai-06.jpg
├── project-flexup.html
└── project-motionai.html
```

## 🖼️ Screenshot Locations in HTML

### FlexUp Fitness App (`project-flexup.html`)

Replace icons on these lines:

1. **Line 94**: `<i class="fas fa-home"></i>` → Welcome & Onboarding
2. **Line 114**: `<i class="fas fa-dumbbell"></i>` → Custom Workouts
3. **Line 134**: `<i class="fas fa-robot"></i>` → AI Chatbot
4. **Line 154**: `<i class="fas fa-utensils"></i>` → Meal Planning
5. **Line 174**: `<i class="fas fa-chart-line"></i>` → Progress Analytics
6. **Line 194**: `<i class="fas fa-trophy"></i>` → Achievements

### Motion AI (`project-motionai.html`)

Replace icons on these lines:

1. **Line 94**: `<i class="fas fa-magic"></i>` → Home & Prompt Input
2. **Line 114**: `<i class="fas fa-image"></i>` → Image + Prompt Mode
3. **Line 134**: `<i class="fas fa-clock"></i>` → Generation Progress
4. **Line 154**: `<i class="fas fa-play-circle"></i>` → Video Gallery
5. **Line 174**: `<i class="fas fa-star"></i>` → Premium Subscriptions
6. **Line 194**: `<i class="fas fa-coins"></i>` → Credit System

## 💡 Example Update

### Before:
```html
<div class="phone-screen">
    <i class="fas fa-home"></i>
</div>
```

### After:
```html
<div class="phone-screen">
    <img src="screenshots/flexup/flexup-01.jpg" alt="Welcome Screen">
</div>
```

## 🎨 Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 750x1500px (2:1 ratio for phone mockups)
- **Optimization**: Compress images to reduce file size
- **File Naming**: Use descriptive names like `flexup-01-onboarding.jpg`

## 🔧 CSS Already Handles It!

The CSS is already set up to properly display images:
- Images will fill the phone screen
- Will maintain aspect ratio with `object-fit: cover`
- Will have rounded corners to match the phone frame
- Will work with the parallax/overlay effects

## ✅ Quick Checklist

- [ ] Create `screenshots` folder
- [ ] Add FlexUp screenshots (6 images)
- [ ] Add Motion AI screenshots (6 images)
- [ ] Replace all icon placeholders with `<img>` tags
- [ ] Test in browser
- [ ] Verify images look good on mobile too

## 🚀 Tips

1. **Screenshot Quality**: Use high-quality screenshots from actual devices
2. **Consistency**: Keep similar aspect ratios for all screenshots
3. **File Size**: Compress images (use tools like TinyPNG or Squoosh)
4. **Alt Text**: Always add descriptive alt text for accessibility
5. **Testing**: View on different screen sizes to ensure proper display

That's it! Your portfolio will look professional with real screenshots! 🎉

