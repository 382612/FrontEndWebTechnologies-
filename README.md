# FrontEndWebTechnologies

week1:
Casus: 
Create and store a random DNA sequence (use function(s) from the Math library) with a length taken from a constant. This sequence should further be translatable to protein by having a start and stop codon and its length should be divisible by three (requested length can be rounded down to achieve this). Format the string using a set maximum width and display in the reserved space (<p id="sequence">...</p>). Calculate basic statistics of the generated sequence and display in the reserved space (<p id="sequence">...</p>). These statistics should at least include a per-residue occurrence and/or percentage, G/C-percentage and translated protein sequence length.

week2:
Casus
Re-use the previous assignment (or extend the given solution) but this time add an input field for asking a sequence length used for creating the random sequence. Add a 'Generate' button that creates and displays this sequence. Next, use another web form to ask for one or more restriction enzymes by their name that is executed by clicking a 'Search' button. Without a generated sequence, this 'Search' button should be inactive. Once a sequence has been generated, enable the 'Search' button and - once pressed - (i) retrieve the enzyme cutting site(s) from an external API, (ii) find matches in the sequence and (iii) report on the number and position(s) of matches found.