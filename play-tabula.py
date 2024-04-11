import tabula

# Read pdf into a list of DataFrame
dfs = tabula.read_pdf("Diodes Incorporated_REACH235Declaration_June2023_1Nov2023 (1).pdf", pages='all')

print(dfs)