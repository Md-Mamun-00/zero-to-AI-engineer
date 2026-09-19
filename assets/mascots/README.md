# Mascot → Achievement Mapping

Cleanly cut from the 5×3 sprite sheet (one mascot per file, no bleed from neighboring cells).

| File | Pose | Where to use it |
|---|---|---|
| `01_excited_welcome.png` | Wide-eyed, surprised, sparkle lines | First-visit welcome screen / "new lesson unlocked" toast |
| `02_reading_book.png` | Reading a book with the Python logo | Default mascot inside a lesson modal, next to the topics list |
| `03_graduation_phase_complete.png` | Graduation cap, winking, sparkles | Phase-complete celebration — shown when all weeks in a phase are checked off (best fit: Phase 11, "Get Hired") |
| `04_on_laptop_shipping.png` | Typing on a laptop with the Python logo | Next to the "Ship by Sunday" task banner in each lesson |
| `05_heart_eyes_path_complete.png` | Happy, floating hearts | Full path complete — the "you finished all 24 weeks" screen |
| `06_question_mark_locked.png` | Confused, question mark overhead | Locked-node tooltip / empty state ("complete the previous week to unlock") |
| `07_lightbulb_tip.png` | Lightbulb over head, "aha" look | Next to the pitfall/tip callout cards |
| `08_cheering_week_complete.png` | Cheering, arm raised | Confirmation animation when a week is marked complete |
| `09_sweating_writing_notes.png` | Sweating, writing with a pencil | Header for the harder phases (Fine-tuning, Evals & Production) or a general "in progress" badge |
| `10_sleepy_locked_streak.png` | Sleepy, nightcap, zzz | Locked node icon (🔒 replacement), or a "streak at risk / no activity today" nudge |
| `11_on_fire_streak.png` | On fire | Streak counter icon — replaces the 🔥 emoji next to the streak count |
| `12_sunglasses_cool_capstone.png` | Sunglasses, cool pose | Capstone/Week 24 completion badge, or a "6 projects pinned" milestone |
| `13_hatching_egg_week1.png` | Hatching from an egg | Week 1 / Day-0 setup screen — "just getting started" |
| `14_speech_bubble_resource_tip.png` | Speech bubble with Python logo | Resource-link cards, or a floating tip bubble explaining a term |
| `15_waving_header_logo.png` | Friendly, alert pose | Top-bar logo (replaces the 🚀 emoji) or a "welcome back" toast |

## Suggested priority (highest impact first)
1. `15_waving_header_logo.png` → top bar logo
2. `11_on_fire_streak.png` → streak counter icon
3. `03_graduation_phase_complete.png` → phase-complete modal
4. `08_cheering_week_complete.png` → week-complete confirmation
5. `06_question_mark_locked.png` → locked node state

## Notes
- Cropped along the sheet's own grid lines (detected from the image, not a fixed fraction), so each file contains exactly one character with transparent background — no neighboring artwork.
- Source sheet is RGBA with a transparent background, so these keep transparency; they'll drop cleanly onto any background color in the app.
