# FrontEndWebTechnologies

week1:
Casus: 
Create and store a random DNA sequence (use function(s) from the Math library) with a length taken from a constant. This sequence should further be translatable to protein by having a start and stop codon and its length should be divisible by three (requested length can be rounded down to achieve this). Format the string using a set maximum width and display in the reserved space (<p id="sequence">...</p>). Calculate basic statistics of the generated sequence and display in the reserved space (<p id="sequence">...</p>). These statistics should at least include a per-residue occurrence and/or percentage, G/C-percentage and translated protein sequence length.

week2:
Casus
Re-use the previous assignment (or extend the given solution) but this time add an input field for asking a sequence length used for creating the random sequence. Add a 'Generate' button that creates and displays this sequence. Next, use another web form to ask for one or more restriction enzymes by their name that is executed by clicking a 'Search' button. Without a generated sequence, this 'Search' button should be inactive. Once a sequence has been generated, enable the 'Search' button and - once pressed - (i) retrieve the enzyme cutting site(s) from an external API, (ii) find matches in the sequence and (iii) report on the number and position(s) of matches found.

week3:
Casus
The API that we are going to use for this assignment might be located on a home PC in a remote area in South America, available through an early release of Starlink. We cannot always expect it to respond within a reasonable time or respond at all, so, to not have our users endlessly wait or present them with unreadable errors, we will perform very rigorous 'monitoring' of a request and keep our users up-to-date.

Using the previous assignment, we will have to rewrite (part of) the code that performs a fetch to point to a new API (see below). The sequence-generation and reporting on cutting site can stay untouched.

week4:
Casus
Part 1 - Back end
We will create our own API that provides access to a data set of restriction enzymes, essentially rebuilding the API that we used in the first two assignments. Based on a data set containing known restriction enzymes in text format, create a REST API using the Node.js Fastify library. This API reads and parses the data set from disk and exposes an endpoint where a request can be made for a single restriction enzyme, returning itâ€™s available data (synonyms and cutting site(s)).

Added functionality compared to the previously accessed API is a second endpoint that accepts an oligonucleotide (with a maximum length of 50 nucleotides) that reports on all cutting sites for all the restriction enzymes within the data set. The returned JSON should consist of a data structure including the input oligonucleotide, all found sites and the respective enzymes operating on this sequence.

