
# Hello World program in Python
import pandas as pd
import numpy as np

df2 = df = pd.DataFrame.from_records({'A': ['a','1','c'], 'B': ['b','2','3']})
a = df2['A'] == 'a'
b = df2['A'] == '1'
print(df2)
print(df2[a | b])
