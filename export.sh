echo "Beginning export..."

next build

next export

git add -f out && git commit -m "Pushing ./out subtree"

git subtree push --prefix out origin build
