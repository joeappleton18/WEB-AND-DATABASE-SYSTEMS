#!/bin/bash 
set -e
echo "Building PDFs..."


# Loop through all directories
for f in week*;  do
    if [[ -d $f ]]; then
	# echo "Listing Dierectory $f"
	cd $f
	for i in *.md; do
	    echo "Building PDF for $i"
	    echo "running command: pandoc $i -o "${i%.*}.pdf" --from markdown --template "template.tex" --filter pandoc-latex-environment  --listing" 
	    pandoc $i -o "${i%.*}.pdf" --from markdown --template "../template.tex" --listing
	done
	cd ..
    fi
done