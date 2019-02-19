
# LZ78 Compression 

This picture is created with this little script - and google.com - 
you can test it yourselve - download this repo and open index.html
![Google network load save](https://user-images.githubusercontent.com/46779214/53012258-c0e17e00-3442-11e9-987f-f5bf12fd0d7b.PNG?raw=true "Demonstration network load saving")


This Project was written to check the benefits of a dictionary compression
by a map. 

Also a gzip compression is used - in both cases with and without external compression
this could save up network load by 2-50% where the amount does depend on the repeats of the same word. 

Workflow: 
Create Webpage by Backend -> compress with LZ78 -> gzip content -> 
send content -> unzip content -> uncompress content.. -> show page  


The library is a minimal implementation of a smart Dictionary -
Some hint: any kind of change ( adding some content ) must be read by 
a system which evolve the Library - this lib must be delivered to the customer 
by some smart logic.

I've tested the compression by taking google/news page - it can be shown 
that the page can save 10-20% load when a dictionary is used to recompress the data. ( With GZIP and LZ78 )

But on the other hand the size of a dictionary can increase over time to an unwieldy size.  

So it's nice if there is data which is not probably change a lot - like .js Files 
you should consider this method to reduce the network-load. 



