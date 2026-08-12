# For You · Our Little Story

A small vintage brown love letter, built as a static site and ready to ship to
GitHub Pages. Just drop in your photos and it's yours.

## File tree

```
our-story/
├── index.html         # the whole site
├── css/
│   └── style.css      # vintage brown theme
├── js/
│   └── main.js        # tiny interactions (scroll reveal, captions, music)
├── photos/            # 👉 drop your 6 Centaurus photos here
│   ├── centaurus-1.jpg
│   ├── centaurus-2.jpg
│   ├── centaurus-3.jpg
│   ├── centaurus-4.jpg
│   ├── centaurus-5.jpg
│   └── centaurus-6.jpg
├── assets/            # optional: song.mp3 for the music toggle
└── README.md
```

## 1. Add your photos

Put the 6 Centaurus pictures into the `photos/` folder with these exact names
(so the site picks them up automatically):

```
photos/centaurus-1.jpg
photos/centaurus-2.jpg
photos/centaurus-3.jpg
photos/centaurus-4.jpg
photos/centaurus-5.jpg
photos/centaurus-6.jpg
```

Tip: any web-friendly format works — `.jpg`, `.jpeg`, `.png`, `.webp`. If you
use a different extension, just update the `src` in `index.html` (search for
`centaurus-`).

Want to add the hero portrait? Drop it in as `photos/hero.jpg`.

## 2. Personalise the words

Open `index.html` and replace these placeholders anywhere they appear:

- `[her name]` — your girlfriend's name
- `[your name]` — your name
- `2024` (in the footer) — the year you started

Each of these is marked with a `data-name` / `data-since` attribute, so you
can also do a quick Find & Replace.

The 6 photo captions live in the `data-caption` attribute of each
`.polaroid` figure — feel free to rewrite them in your own voice.

## 3. (Optional) Add a song

Drop an `mp3` into `assets/` named `song.mp3` and the little ♪ button in the
top-right will play it. If the file is missing, the button just shakes
politely.

## 4. Deploy to GitHub Pages

In your terminal:

```bash
# from inside the our-story folder
git init
git add .
git commit -m "first commit · for you"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Then on GitHub:

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, choose **Deploy from a branch**
3. Pick `main` and `/ (root)` → **Save**
4. Wait ~30 seconds. Your site will be live at:
   `https://<your-username>.github.io/<your-repo>/`

That's it. The URL is shareable, the page is yours forever, and she gets a
little vintage corner of the internet with your name on it. 💌
