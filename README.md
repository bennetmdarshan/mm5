# The Last Waltz — The Angel Princess Files

An original illustrated murder mystery for **Tania, Angel Princess**, with love from Ben. This is the complete visual edition: the same Bellweather Hotel story and solution, rebuilt as an interactive photographic investigation kit.

**Estimated first play: 5–10 minutes.** There is no countdown and no penalty for taking your time. Reading every optional interview and using every deduction tool can take longer.

## Put the whole game on GitHub Pages

1. Extract `Angel-Princess-Mystery-GitHub.zip` on your computer.
2. Create a GitHub repository, or open the one you already made for the first edition.
3. Upload the **contents** of the extracted folder to the repository root. Keep `index.html`, `styles.css`, `app.js`, and `data.js` beside each other. Upload the **entire `assets` folder** too. Do not upload only the HTML, and do not upload the ZIP as the website.
4. Your repository should contain:

   ```text
   index.html
   styles.css
   app.js
   data.js
   .nojekyll
   README.md
   START-HERE.txt
   ARTWORK.md
   tests/
     verify.mjs
   assets/
     favicon.svg
     hero.webp
     mara.webp
     theo.webp
     iris.webp
     hugo.webp
     dance.webp
     ribbon.webp
     ink.webp
     porter.webp
     witness.webp
     medical.webp
     ledger.webp
     library.webp
     ballroom.webp
     gallery.webp
     conservatory.webp
     watch.webp
     sunset.webp
   ```

5. Under the repository's **Settings → Pages**, use **Deploy from a branch**, select **main**, select **/(root)**, and save. If your repository already has a Pages workflow, retain that workflow and publish these static files through it.
6. Wait for GitHub to finish the deployment, then open the Pages URL GitHub provides. For a normal project repository, it follows the pattern `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
7. Open the link on the phone before sharing it with Tania. You should see the hotel photograph, four photographic suspect dossiers, and photographs on the evidence board.

**No installation, build command, package manager, server code, API key, or external account is needed to play.** All paths are relative, so GitHub Pages subdirectories work. To test on a computer without hosting, extract everything and open `index.html` in a current browser. Browser storage and downloads may behave differently when opening local files; the hosted Pages link is the intended way to share the game.

If you are replacing the old version, overwrite the old `index.html` and add all the new files and images. Once the deployment finishes, refresh the page. A hard refresh can help if the browser still displays the old text-only edition.

## What she can interact with

### The case kit

- A cinematic photograph of the Bellweather Hotel, layered with an original paper case-file invitation.
- A photograph of the library crime scene, a concise incident report, and the case's exact rules.
- Four photographed suspect dossiers. Each opens a character profile with two interview questions and a personal suspicion marker.

### Seven photographic evidence files

Each file has a photograph, a glowing inspection point, an optional magnifier, a readable document, and a verified deduction. An equivalent text button is available for every image hotspot.

1. **The dance card:** examine the programme and conductor's record.
2. **A ribbon of silk:** inspect the ribbon and its property observation.
3. **Ink among orchids:** examine the fountain pen and unfinished dedication.
4. **The porter's log:** open the register and read the two location exclusions.
5. **A familiar face:** compare a photograph with the witness identification.
6. **The doctor's report:** inspect the candlestick and forensic findings.
7. **The torn ledger:** inspect the accounts, then physically unfold Julian's note.

Use **Pin clue & next file** to archive the verified deduction and continue. Filing a clue also pins it to the notebook. The **unfiled only** switch helps locate anything missed. Filed evidence can always be reopened.

### Two ways to deduce

- **Room board:** tap a photographic room, then place one guest and one item using picture choices. Tap a selected choice again to remove it. Placing a guest or item moves any conflicting positive assignments in the same grid.
- **Classic logic grids:** people × rooms, people × items, and rooms × items. Tap a cell to cycle **blank → × → ✓ → blank**. A check crosses out the other cells in its row and column. The three grids are separate scratchpads; the room board reflects the people × rooms and rooms × items grids.
- **Undo last change** reverses a grid or room-board move. Clearing deduction work leaves notes and filed evidence intact.
- A checklist lets her tick off deductions she has used. Four hints progress from a small nudge to a clearly labelled culprit reveal. Revealed hints can be reread.

### Her notebook

Freeform notes save as she types. Filed clues appear as pinned paper notes, with controls to reopen or unpin them. **Save a copy** downloads a plain-text notebook containing the pinned clues and personal notes.

### The final reveal

After all seven clues have been filed, the accusation sheet uses picture choices for the person, room and weapon, plus a motive. It does not require a completed grid. Wrong accusations give feedback and permit another try.

Solving the case opens a photographic resolution and an optional step-by-step explanation. The last envelope contains a sunset card, hearts, and this exact message:

> You are beautiful than all the sunsets I'll get to spend watching with you

The wording is preserved exactly as requested. The letter is signed **With all my love, Ben**. The heart button can replay the floating hearts.

## Designed for a phone

- Responsive portrait layout, including 360–412 CSS-pixel Android phone widths common on Poco devices.
- Persistent bottom navigation, large picture choices, at least 44px-tall action buttons, and 48px grid cells on phones.
- No hover-only interactions and no drag gesture required. All photographic interactions have buttons.
- Native modal dialogs, keyboard controls, labelled images, visible focus states and readable text records.
- Reduced-motion preferences disable pulsing, moving hearts and transition animations.
- Optional gentle sound effects start only when the player explicitly enables them.
- Eighteen local WebP photographs total approximately **2.14 MB**. No image APIs, external fonts, analytics or remote libraries are loaded while playing.

The layout was checked in a narrow browser viewport; this is not a claim of testing on a physical Poco handset. Browser toolbar height, zoom settings and private browsing can affect appearance and storage.

## Saving and replay

Progress, notes, notebook pins, hints, accusation choices, room placements and the opened letter are stored on **this browser, device and origin**. They are not sent to a server and do not sync between phones. Clearing browser site data removes them; private browsing may remove them when the session closes. A warning appears if saving is unavailable.

The illustrated edition uses its own save key and does not delete the first edition's stored notes. **Start a fresh case** resets only this edition after a confirmation. Test your deployment, then use this control if you want the same browser to start fresh for Tania. Her phone will start independently.

## Personalise it

- `data.js`: story text, suspect profiles, evidence records, hints, room and item names, and `loveMessage`.
- `styles.css`: colours, typography, paper effects, layouts, animation and mobile rules.
- `app.js`: inspection, magnification, notebook, deductions, saving, final card and sounds.
- `index.html`: page structure, invitation and navigation.
- `assets/`: the complete image set. Replace an image with the same filename and dimensions/aspect ratio if you want to change its appearance.
- `ARTWORK.md`: the full image prompt set and generation notes.

Images give atmosphere and show physical evidence; the verified HTML records carry the precise puzzle facts. Clock hands, architectural details and decorative handwriting are not additional clues. Interviews add character background and are not hidden logic tests.

Changing clue logic can invalidate the puzzle. The supplied seven-file case has exactly one complete assignment of people, rooms and items. As with any browser puzzle, the source contains the solution; this is a personal gift, not a secure examination.

## Validation

For an optional local source/asset and unique-solution check, use a computer with Node.js:

```sh
node tests/verify.mjs
```

This command is for editing the game; players do not need Node.js. Browser checks covered the complete evidence sequence, the folded note, image magnification, photo interviews, room placements and their grid reflection, undo, hints, note persistence after refresh, wrong and correct accusations, the end envelope and the exact final card message. Narrow-layout checks showed no horizontal page overflow at a 375px content width.

The characters, setting, writing, interface and generated photographs are original to this game. No Murdle code or reference-product artwork is bundled.
