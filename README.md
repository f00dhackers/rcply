# ABOUT RCPLY

![Rcply Logo](https://raw.githubusercontent.com/f00dhackers/rcply/master/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png)

People who try to adopt a special lifestyle often face the challenge of lacking creativity while cooking. Whether low carb, vegetarian, or dairy free * you are used to grab your limited set of products which are "allowed". So after a while you just get rid of cooking same meals all the time. This is where RCPLY can help you. Just add the items you already have at home, find the recipe you like and start cooking now. Or browse through delicious and healthy recipes and cook later by ordering missing ingredients directly in the app.

## Ingredients
* Hellofresh API
* React Native
* Font Awesome
* Club Mate & Beer
* Human @f00dhackers

## Equipment
* Balsamq Mock Ups
* Adobe Photoshop
* EMACS/VIM
* Android SDK
* Google Emulator
* Android device

## Directions
1. Do some notes and paper prototyping
2. Create fancy mock ups and forget about the time restriction
2. Try to figure about how to get the API token
3. Struggle setting up Java and the Android simulator
4. Search for hours how to implement the scrollable navigation with React Native
5. Eat, smoke, drink and eat
7. Recognize that the API doesn't work the way you expected
6. Hack until 7am with pizza as a midnight snack
7. Prepare a short demo and rock the keynote

## Features of Rcply
* Search for recipes by ingredients
* Add ingredients which are currenntly available in your household
* Via typing, scanning of receipts and products
* Order the missing products for your favourite recipes directly via the app
* Like and save your favourite recipes

## Current Status
* Search by 1 ingredient
* Mock-uped views and screens


### Footnote
We love to share recipes with the community. And with more people interested in healthy lifestyle we would be able to provide amazing solutions for advertsisers. With the native ad inventory inside the feed it is possible to target the right audience in a very personal way. But also cooperating with publishing houses will increase monetization and trust of the customer.

Hacked with :yellow_heart: in the Rainmaking Loft.

## contribute to rcply
This is the food{hacks} hellofresh API challenge repository for @f00dhackers

## Run the project
```bash
git clone https://github.com/f00dhackers/rcply
npm install
```

#### API Authentication
```
cp config.js.example config.js
```
Replace fields with the correct values.

Make sure the Android Emulator is running...
```
react-native run-android
```

## Git workflow

Work on local feature branch...

```bash
git checkout dev
git checkout -b FEAT-BRANCH
```

Commit local FEAT-BRANCH changes...

```bash
git checkout dev
git merge --no-ff FEAT-BRANCH
git push origin dev
```

Check updated `dev` branch is working with all contributor's changes...
If working...

```bash
git checkout staging
git merge --no-ff dev
git push origin staging
```

Do usability testing on `staging`...
If working...

```bash
git checkout master
git merge --no-ff staging
git push origin master
```

Rejoice
