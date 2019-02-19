
# LZ78 Compression 


This Project was written to check the benefits of a dictionary compression
by a map. 

The library is a minimal implementation of a smart Dictionary -
Some hint: any kind of change ( adding some content ) must be read by 
a system which evolve the Library - this lib must be delivered to the customer 
by some smart logic.

I've tested the compression by taking google/news page - it can be shown 
that the page can save 10-20% load when a dictionary is used to recompress the data. 

But on the other hand the size of a dictionary can increase over time 
very large.

So it's nice if there is data which is not probably change a lot - like .js Files 
you should consider this method to reduce the load. 



