import pandas as pd
import pdfquery

pdf = pdfquery.PDFQuery('play.pdf')
pdf.load()
print(pdf)

#convert the pdf to XML
pdf.tree.write('customers.xml', pretty_print = True)
pdf