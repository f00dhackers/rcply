# rcply
This is the food{hacks} hellofresh API challenge repository for @f00dhackers

# Run the project
```bash
git clone https://github.com/f00dhackers/rcply
npm install
```

Make sure the Android Emulator is running...
```
react-native run-android
```

# Contributing

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
